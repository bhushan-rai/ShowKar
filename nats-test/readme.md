after running all of the container we need to provide port forwarding to expose nats

```
kubectl port-forward [nats pod name] [port on local machine]:[port that we want to access]

//ex
kubectl port-forward [nats pod name] 4222:4222

```

after running nats locally on any terminal window, we will be able to restart it quickly using `rs` command , it will quickly restart it.

# for monitoring

port forwarding :

```
kubectl port-forward [pod-name] 8222:8222
```

go to browser : `localhot:8222/streaming`
you will get everything
