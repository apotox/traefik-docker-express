## docker + traefik example

- backend: a simple express api
- app: react app requests api version from backend

## before start (localy)
- add these custom dns mapping to your /etc/hosts
```bash
127.0.0.1 app.localhost
127.0.0.1 api.localhost
```

## to start containers run
```
docker-compose up -d
```

## traefik dashboard localhost:8080
