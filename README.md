# Realtime Chat with Apollo React

## Overview

- This is simple example using React, Graphql & Apollo.

## Team size

- 1 Developer

## Target

- Build server by apollo server & Client using react & apollo-client.
- App can chat realtime.

## Tech stack

- React latest version
- Graphql + Apollo
- SCSS
- Eslint & Prettier. Uses Airbnb JavaScript Style Guide

## Requirements

- Fetch list messages
- CRUD for message
- Allow anon user

## How to run

- Clone repository:

### Start server:

- At the directory root, run:

  ```bash
  cd server
  ```

- Install dependencies:

  ```bash
  npm i
  ```

- Run:

  ```bash
  npm start

- Server will start at `localhost:4001` (ws: `ws:localhost/4001/graphql`)

### Start client:

- At the directory root, run:

  ```bash
  cd client
  ```

- Install dependencies:

  ```bash
  npm install
  ```

- Run:

  ```bash
  npm start
  ```

- Client will start at `localhost:3000`;

## Folder Structure

```bash
.
├── README.md
├── client
│   ├── jest.config.js
│   ├── package.json
│   ├── public
│   ├── README.md
│   ├── src
│   │   ├── components
│   │   ├── config
│   │   ├── constants
│   │   ├── graphQL
│   │   ├── helpers
│   │   ├── theme
│   │   └── types
│   ├── tsconfig.jest.json
│   ├── tsconfig.json
│   └── webpack.config.js
└── server
    ├── package.json
    ├── src
    │   ├── config
    │   ├── data
    │   ├── helpers
    │   ├── index.ts
    │   ├── pubsub
    │   ├── resolvers
    │   ├── schema
    │   └── types
    └── tsconfig.json
```
