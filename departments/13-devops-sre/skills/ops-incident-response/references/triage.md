# Evidence-based triage

Narrow the fault domain with the smallest set of read-only, bounded checks. Stop as soon as the next safe action is clear.

## Order of questions

1. **Symptom:** which service or journey, which destination, since when, constant or intermittent, does anything else still work?
2. **What changed?** Deploys, configuration, feature flags, certificates, DNS, traffic, upstream providers.
3. **Local or broad?** One user, one region, or everyone?
4. **DNS:** does the name resolve, and to the expected address?
5. **Path:** is the destination reachable, with acceptable loss and latency?
6. **Service:** does the application respond, and where is the time spent?
7. **Dependencies:** database, cache, queue, third-party API status.

## Bounded diagnostics (read-only)

Run only with the responder's approval, with fixed counts and timeouts.

| Question | macOS or Linux | Windows (PowerShell) |
| --- | --- | --- |
| Name resolution | `dig +time=2 +tries=1 <host>` or `nslookup <host>` | `Resolve-DnsName <host>` |
| Resolver configuration | macOS `scutil --dns`; Linux `resolvectl status` | `Get-DnsClientServerAddress` |
| Reachability | `ping -c 5 <host>` | `Test-Connection <host> -Count 5` |
| Path | `traceroute -n -q 1 -m 20 <host>` | `tracert -d -h 20 <host>` |
| Port open | `nc -vz -w 5 <host> <port>` | `Test-NetConnection <host> -Port <port>` |
| HTTP timing | see below | `Measure-Command { Invoke-WebRequest <url> -TimeoutSec 15 }` |

HTTP phase timing for a safe read-only endpoint (quote the URL as one argument):

```bash
curl -sS -o /dev/null --connect-timeout 5 --max-time 15 \
  -w 'dns=%{time_namelookup} connect=%{time_connect} tls=%{time_appconnect} first_byte=%{time_starttransfer} total=%{time_total}\n' \
  '<https-url>'
```

Kubernetes read-only checks: `kubectl get pods -n <ns>`, `kubectl describe pod <pod> -n <ns>`, `kubectl get events -n <ns> --sort-by=.lastTimestamp`, `kubectl logs <pod> -n <ns> --since=15m`.

## Reading evidence correctly

- A failed ping can mean the network filters ICMP, not that the host is down.
- A successful ping does not prove the application works.
- Silent traceroute hops are common and are not proof of loss.
- Successful DNS resolution does not prove the address is reachable.
- Slow time to first byte often means slow server processing, not a slow network.

## Fault-domain result

Report one primary domain: local device or network, DNS, network path, load balancer or edge, application, dependency, or inconclusive. Give a confidence (low, medium, high) and the evidence behind it, then the single next safest check or mitigation.

## During diagnosis, do not

Change interface, DNS, VPN or firewall settings; restart services; flush caches; install tools; send writes to services; or run unbounded probes. Those are mitigation steps that need approval.
