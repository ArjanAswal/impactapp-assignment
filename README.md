# Node Assignment

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The documentation for Node Assignment app for Impact App.

## Video Walkthrough

- Watch the video walkthrough of the assignment [here](https://www.loom.com/share/aa458534594e46058448b43784e98794).

## Quick Start

(OPTIONAL) Create a `.env` file with the following properties:

- POSTGRES_USER: The username of the postgres user.

- POSTGRES_HOST: The connection endpoint of the postgres database.

- POSTGRES_DATABASE: The name of the postgres database.

- POSTGRES_PASSWORD: The password of the postgres database.

- POSTGRES_PORT: The exposed port of the postgres database.

- PORT: Sets the HTTP port number of the express app.

- NODE_ENV: Sets the environment of the express app.

Then run the following command:

```bash
docker-compose up -d
npm run prod
```

The api will get exposed at `localhost:80`.

## Testing workflow

The testing command will the run the test suite and will attempt to do the following:

1. Create students by uploading a csv file.

2. Get the passed students.

3. Get the failes students.

4. Get the result of a specific student.

To run tests, run the following command:

```bash
docker-compose up -d
npm run testDB
npm test
```

## Project Structure

| Name                | Description                                             |
| ------------------- | ------------------------------------------------------- |
| **src/**            | Source files                                            |
| **src/controllers** | The controllers of the express app                      |
| **src/models**      | Postgres models                                         |
| **src/routes/**     | Express REST API routers                                |
| **src/utils**       | Reusable utilises and library source code like a logger |
| **tests/**          | Test suites are placed here                             |

## Postman Documentation

Postman Documentation and API Playground is hosted [here](https://documenter.getpostman.com/view/18809944/UyxkmmRZ).
