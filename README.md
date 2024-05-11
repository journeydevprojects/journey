# Journey

## About

Journey is an app that allows users to experience a “Story” where the user will walk through several “Story Points” and
for each Story Point make a “Decision” which leads to another Story Point. There are many applications of this, but the
first known use case is “an empathy-based learning tool that houses Trauma Informed Care cases regarding vulnerable
populations.” The implementation of the app, however, should remain flexible enough to handle other use cases.

## Local Development

[Node.js](https://nodejs.org/en/download) and Docker must be installed.

Once docker is installed you can run a local persistent postgres db using

```shell
docker-compose up -d
```

Once node is installed you can install app dependencies using npm

```shell
npm install
```

Finally, you can run the app locally on http://localhost:3000 by running

```shell
npm run dev
```
