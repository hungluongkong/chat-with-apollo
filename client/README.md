# Practice three

## Overview

- This document provides the requirements, technical stack and estimate detail features for Practice three: Blog manage with React, Graphql & Apollo.
- More detail: [doc](https://docs.google.com/document/d/1kdnOo7s8YXo_vRpNwgzmvMFHvQi7yqlFHwNldFjgXTo/edit?usp=sharing)
- Wiki: [here](https://gitlab.asoft-python.com/g-hungluong/react-training/-/wikis/React-with-Apollo-&-GraphQL)

## Timeline

- 9 working days (08/27/2020 - 09/09/2020)

## Team size

- 1 Developer

## Target

- Blogs manage with Refer UI: https://codeburst.io/ using open api https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex

## Tech stack

- React latest version
- Graphql + Apollo
- SCSS
- Eslint & Prettier. Uses Airbnb JavaScript Style Guide
- Jest + Enzyme

## Requirements

- Sign in
- Fetch list posts
- CRUD for post
- CRUD for comment
- Update user's profile
- Search on post by everything related to post (title, description)

## How to run

- Clone repository:
  ```
  git@gitlab.asoft-python.com:g-hungluong/react-training.git
  ```
- At the directory root, run:
  ```
  cd client
  ```
- Install dependencies:
  ```
  npm install
  ```
- Run:
  ```
  npm start
  ```

## Folder Structure

```
├── .eslintrc.json
├── .gitignore
├── package.json
├── public
├── README.md
├── src
    ├─── components
    ├─── config
    ├─── constants
    ├─── graphQL
    ├─── helpers
    ├─── media
    ├─── pages
    ├─── route
    ├─── theme
    └─── types
├── .storybook
├── tsconfig.json
└── webpack.config.js
```
