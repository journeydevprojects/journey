# Journey

## About

Journey is an app that allows users to experience a “Story” where the user will walk through several “Story Points” and
for each Story Point make a “Decision” which leads to another Story Point. There are many applications of this, but the
first known use case is “an empathy-based learning tool that houses Trauma Informed Care cases regarding vulnerable
populations.” The implementation of the app, however, should remain flexible enough to handle other use cases.

## Local Development

[Node.js](https://nodejs.org/en/download) and [Docker](https://docs.docker.com/get-docker/) must be installed on your
device. Once Docker is installed make sure it is running.

Once docker is installed you can run a local persistent postgres db using

```shell
docker-compose up -d
```

Once node is installed you can install app dependencies using npm

```shell
npm install
```

With the DB and dependencies setup, you can run the required database migrations for the app by running

```shell
npm run migrate
```

Next copy [.env.example](.env.example) to a new file `.env.local`

```shell
cp .env.example .env.local
```

And then replace the variables with the appropriate values in `.env.local`.

Finally, you can run the app locally on http://localhost:3000 by running

```shell
npm run dev
```

If you visit the `/editor` path within the app you should be forced to log in with your Google Account. Once logged in
you can view the Editor portion of the app. All routes NOT under `/editor` will be the public facing app.

## Production environment

This GitHub Repo is linked directly to a Vercel Project where the app is deployed by Vercel. This is nice because Vercel
handles all the hosting and CI/CD requirements, we just need to merge into main to deploy.

Sometimes we might need to visit the Vercel Dashboard to view logs for the app (server side logs anyways), troubleshoot
deployment issues, or update environment variables.

The app should be live at https://journey-seven.vercel.app/.