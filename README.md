# Temperature Dockerized Web API
Web API app that can make temperatures conversions with a query.

## Set Up

1. Clone the repository

2. Install Node.JS >= v14

3. Install dependencies
```bash
$ npm install
```

4. Run app
```bash
$ npm start
```

## Docker
To build docker image:
```bash
$ docker build -t <name> .
```

To run docker image:
```bash
$ docker run -p <exposed_port>:<app_port> -e PORT="<app_port>" <name>
```

Download my docker image using the following command:
```bash
$ docker pull weabreu16/temp-web-api
```

