# Nasa Open API client
___

This package is a TypeScript based wrapper around the public NASA REST APIs.

**Prerequisites**

In order to use this package, you need an api key: You can read more on how to obtain the API key on [this page](https://api.nasa.gov).

This package requires [NodeJS](https://nodejs.org) (version 18 or later) and a node package manager (Npm, Yarn, Pnpm or Bun). 

To make sure you have them available on your machine, try running the following command.

```sh
$ npm -v && node -v
v10.1.0
v18.18.0
```
___

## Gettting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

___

## Installation

**BEFORE YOU INSTALL**: please read the prerequisites.

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/mariolazzari/nasa-api.git
$ cd nasa
```

To install and set up the library, run:

```sh
npm install @mariolazzari/nasa-api
```
___

## Usage

**Import package**
```js
import { Nasa } from "@mariolazzari/nasa-api"
```

**Watch mode**
```sh
npm test
```

**Unit testing**
```sh
npm test
```

**Bulding new version**
```sh
npm build
```

This task will create a distribution version of the project inside your local dist/ folder
___

## Rijks class

Rijks **class** content handles all the requests and the responses to the three main Rijks museum REST APIs.

### Constructor

In order to initialize Nasa **client**:

```js
const nasa = new Nasa(NASA_API_KEY)
```

Constructor parameters

| Parameter | Type   | Required | Default |
| --------- | ------ | :------: | ------- |
| apiKey    | string |   Yes    |         |

### Methods

Nasa client includes the following three methods:

#### apodDate

#### apodDates

#### apodRandom

