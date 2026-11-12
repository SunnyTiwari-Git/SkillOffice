# Manifest templates

Replace every `<placeholder>`. Values such as replica counts and resource sizes are starting points; measure and adjust.

## Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: <app>
  namespace: <namespace>
  labels:
    app.kubernetes.io/name: <app>
    app.kubernetes.io/version: "<version>"
    app.kubernetes.io/part-of: <system>
    app.kubernetes.io/managed-by: <helm-or-kustomize>
spec:
  replicas: 3
  selector:
    matchLabels:
      app.kubernetes.io/name: <app>
  template:
    metadata:
      labels:
        app.kubernetes.io/name: <app>
        app.kubernetes.io/version: "<version>"
    spec:
      serviceAccountName: <app>
      automountServiceAccountToken: false
      securityContext:
        runAsNonRoot: true
        seccompProfile:
          type: RuntimeDefault
      containers:
        - name: <app>
          image: <registry>/<image>:<tag-or-digest>
          ports:
            - name: http
              containerPort: <port>
          resources:
            requests:
              cpu: "250m"
              memory: "256Mi"
            limits:
              memory: "512Mi"
          readinessProbe:
            httpGet:
              path: <readiness-path>
              port: http
            periodSeconds: 5
          livenessProbe:
            httpGet:
              path: <liveness-path>
              port: http
            initialDelaySeconds: 15
            periodSeconds: 10
          securityContext:
            allowPrivilegeEscalation: false
            readOnlyRootFilesystem: true
            capabilities:
              drop: ["ALL"]
          envFrom:
            - configMapRef:
                name: <app>-config
            - secretRef:
                name: <app>-secrets   # created by your secrets tooling, not committed here
```

CPU limits can cause throttling; many teams set CPU requests and memory limits only. Decide per workload.

## Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: <app>
  namespace: <namespace>
spec:
  type: ClusterIP            # LoadBalancer or an Ingress only when it must be reachable from outside
  selector:
    app.kubernetes.io/name: <app>
  ports:
    - name: http
      port: 80
      targetPort: http
```

## PodDisruptionBudget

```yaml
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: <app>
  namespace: <namespace>
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app.kubernetes.io/name: <app>
```

## ConfigMap

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: <app>-config
  namespace: <namespace>
data:
  LOG_LEVEL: "info"
  FEATURE_X_ENABLED: "false"
```

## Helm chart layout

```
<chart>/
  Chart.yaml          # chart version and appVersion, semantic versioning
  values.yaml         # every value documented with a comment
  templates/
    _helpers.tpl      # names and labels in one place
    deployment.yaml
    service.yaml
    NOTES.txt
```

Check rendering with `helm template <release> ./<chart> --debug` and `helm lint ./<chart>`.

## Troubleshooting without changing anything

| Symptom | Read-only checks |
| --- | --- |
| Pods not starting | `kubectl describe pod <pod>`, `kubectl get events --sort-by=.lastTimestamp` |
| Image not pulled | Image name and tag exist; pull secret referenced; registry reachable |
| Service has no endpoints | `kubectl get endpoints <service>`; selector matches pod labels |
| Config not loaded | Names and namespace match; `kubectl get configmap <name> -o yaml` (configmaps only, never secrets) |
