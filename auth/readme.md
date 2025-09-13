no need but for info:

```
npm install express@4 @types/express@4 typescript ts-node-dev
```

```
tsx --init
```

build image properly with bhushanrai/service-name

before starting ingress enginx, go to kubernetes.github.io/ingress-nginx/deploy, and run the mendatory command for cluster

kubernetes engress uses self signed certificate, and chrome doesn't allow self signed certificate, so to avoid this for chrome just type `thisisunsafe`

## Validation

So multiple services inside mcroservices can have different response structure, and as react application will use it unfiedly we need to provide tight validation, which provides common response structure.

### Difficulty in error handling

- We must have a consistently structured response from all servers, no matter what went wrong
- A billion things can go wrong, not just validation of inputs to a request handler. Each of these need to be handled consistently, using next() function in express middleware.

# Fundamental Authentication Strategies

We are going with the approach, whether we will teach every service about authentication mechanism independently to preserve microservice architecture. Auth service will authenticate and and provide token so that other microservice will get that token to validate user without any dependency.

### Problem with this approach

- If we have mechanism of banning user or making user inactive by some reason so auth service will store this in variable like `isBanned` to `true` , but other service will not able to access this info directly so still other service will consider this perticular token valid and let it use the application badly even after banned.

### Solution for the problem

- So we will provide expiration time to the token that after 15 min or whatever window that this token will expire, so now after expiration of token service has to make call to auth service again, so when it will relogin then service will able to know about that this user is banned.
- But still there is some window of 15 min so during that time that user can do anything, so even 1 min will be sufficient to disrupt the application, so as a solution for this `we will emit one event from auth service when any user get banned and other service will listen to this event and store the banned user for that same expiration window as we provided to token and listener service will have short lived memory cache like redis which will store this info for provided duration` because we have to handle it for that provided window only.

# Cookies vs JWT's

- JWT and Cookies are not same at all they are completely different

## Cookie

- So when we make request with payload, server will send `set-cookie` option with values to store so when we will pass to browser it will store this cookie , and on every follow ups request it will pass the same stored `cookie` to server for anything.

## JWT's

- So when we pass the payload to server there we have `JWT creation algorithm` which will convert payload to enceryption version usins secret, and now we can get payload in various ways,
- first one is using `Authorization header` we will pass JWT using it.
- Second is using sending `token property` inside request body only.
- We can utilize cookie way also with combination of jwt (which is best)

## in short

- Cookie is nothing but a transport mechanism, although it is used for authentication/ authorization but it's not primary for it, primaryly it is transport mechanism. Browser managed it.
- JWT's is used for authentication/ authorization, stores any data we want , we have to managed it manually.
