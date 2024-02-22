---
sidebar_position: 0
---

# Intro

KubeSkoop is a network diagnostics and monitoring suite for Kubernetes, supporting multiple CNI network plugins and cloud providers.

It automatically construct network traffic graph of Pod in the Kubernetes cluster,
monitoring and analysis of the kernel's critical path by eBPF, to resolve most of Kubernetes cluster network problems.
Significantly simplifies the difficulty of diagnosing Kubernetes networking issues.

![overview](/img/kubeskoop_features.png)

## Key Features

### One-Shot Diagnose

* Diagnose in-cluster traffic between Pod,Service,Node and Ingress/Egress Traffic.
* Cover whole linux network stack: Socket,Bridge,Veth,Netfilter,sysctls…
* Support IAAS network probe for cloud providers.

### In-Depth Kernel Monitor

* eBPF seamless kernel monitor
* CO-RE scripts on series kernel by BTF
* export metrics to standard Prometheus metric API

### Network Anomaly Event

* support dozens of anomy scenes recognition
* export anomy event to Grafana Loki

## Contributing

Feel free to open issues and pull requests. Any feedback is much appreciated!

## Contact

* DingTalk Group ID(26720020148)

## License

Most source code in KubeSkoop which running on userspace are licensed under the [Apache License, Version 2.0](https://raw.githubusercontent.com/alibaba/kubeskoop/main/LICENSE.md).
The BPF code in `/bpf` directory are licensed under the [GPL v2.0](https://raw.githubusercontent.com/alibaba/kubeskoop/main/bpf/COPYING) to compact with Linux kernel helper functions.
