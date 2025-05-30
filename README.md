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

## Nasa class

Nasa **class** content handles all the requests and the responses to the three main Rijks museum REST APIs.

### Constructor

In order to initialize Nasa **client**:

```js
const nasa = new Nasa(NASA_API_KEY)
```

Constructor parameters

| Parameter | Type   | Required | Default |
| --------- | ------ | :------: | ------- |
| apiKey    | string |   Yes    |         |

### Types

Nasa client inculdes the following types:

#### Result<T>

Discriminated uniion with the following structure:

```ts
type Result<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };
```

### Methods

Nasa client includes the following three methods:

#### apodDate

*Description*

This asynchronous **method** handles `GET /planetary/apod` REST API, in order to return the *astronomical picture of the day* for selected day (current day by default).

*Prototype*

```ts
async apodDate(date: Date = new Date()): Promise<Result<Apod>> 
```
*Types*

```ts
type Apod = {
  copyright: string;
  date: string;
  explanation: string;
  media_type: MediaType;
  service_version: string;
  title: string;
  url: string;
  hdurl: string;
};

type MediaType = 'image' | 'video';
```

*Sample code*

```ts
const date = new Date(2023, 2, 28);
const apod: Result<Apod> = await nasa.apodDate(date);
```

#### apodDates

*Description*

This asynchronous **method** handles `GET /planetary/apod` REST API, in order to return the *astronomical pictures of the day* for selected date range.

*Prototype*

```ts
async apodDates(from: Date = new Date(), to: Date = new Date()): Promise<Result<Apod[]>> 
```

*Sample code*

```ts
const from = new Date(2023, 2, 21);
const to = new Date(2023, 2, 8);
const apods: Result<Apod[]> = await nasa.apodDates(from, to);
```

#### apodRandom

*Description*

This asynchronous **method** handles `GET /planetary/apod` REST API, in order to return *n* random *astronomical pictures of the day* (10 pictures by default).

*Prototype*

```ts
async apodRandom(n:number = 10): Promise<Result<Apod[]>> 
```

*Sample code*

```ts
const apods: Result<Apod[]> = await nasa.apodRandom(10);
```

#### neoFeed

*Description*

This asynchronous **method** handles `GET /neo/rest/v1/feed` REST API, in order to return the *near Earth objects* for selected dates range.

*Prototype*

```ts
async neoFeed(from: Date, to: Date): Promise<Result<NeoResponse>> 
```

*Sample code*

```ts
const from = new Date(2023, 2, 21);
const to = new Date(2023, 2, 8);
const neos: Result<NeoResponse> = await nasa.neoFeed(from, to);
```

#### neoLookup

*Description*

This asynchronous **method** handles `GET /neo/rest/v1/neo/:id` REST API, in order to return the *near Earth objects* for selected asteroid ID, including its orbital data.

*Prototype*

```ts
async neolookup(asteroidId:number): Promise<Result<Neo & Link>> 
```

*Sample code*

```ts
const asteroidId = 3542519
const neo: Result<Neo & Link> = await nasa.neoLookup(asteroidId);
```


#### donkiCme

*Description*

This asynchronous **method** handles `GET /DONKI/CME` REST API, in order to return the *coronal mass ejection (CME)* for selected dates range.

*Prototype*

```ts
async donkiCme(from: Date, to: Date): Promise<Result<CoronalMassEjection[]>> 
```

Method parameters

| Parameter | Type | Required | Default        |
| --------- | ---- | :------: | -------------- |
| from      | Date |    No    | 30 days before |
| to        | Date |    No    | today          |


*Sample code*

```ts
const from = new Date(2023, 2, 21);
const to = new Date(2023, 2, 8);
const cme: Result<CoronalMassEjection[]> = await nasa.donkiCme(from, to);
```

#### donkiCmeAnalysis

*Description*

This asynchronous **method** handles `GET /DONKI/CMEAnalysis` REST API, in order to return the *coronal mass ejection (CME) analysis* for selected dates range.

*Prototype*

```ts
async donkiCme(from: Date, to: Date, mostAccurateOnly: boolean, completeEntryOnly: boolean, speed:number ): Promise<Result<CoronalMassEjectionAnalysis[]>> 
```

Method parameters

| Parameter         | Type    | Required | Default        |
| ----------------- | ------- | :------: | -------------- |
| from              | Date    |    No    | 30 days before |
| to                | Date    |    No    | today          |
| mostAccurateOnly  | boolean |    No    | true           |
| completeEntryOnly | boolean |    No    | true           |
| speed             | number  |    No    | 0              |


*Sample code*

```ts
const from = new Date(2023, 2, 21);
const to = new Date(2023, 2, 8);
const cmeAnalysis: Result<CoronalMassEjectionAnalysis>[] = await nasa.donkiCmeAnalysis(from, to);
```

#### donkiGst

*Description*

This asynchronous **method** handles `GET /DONKI/GST` REST API, in order to return the *Geomagnetic Storm (GST)* for selected dates range.

*Prototype*

```ts
async donkiGst(from: Date, to: Date ): Promise<Result<GeomagneticStorm[]>> 
```

Method parameters

| Parameter | Type | Required | Default        |
| --------- | ---- | :------: | -------------- |
| from      | Date |    No    | 30 days before |
| to        | Date |    No    | today          |


*Sample code*

```ts
const from = new Date(2023, 2, 21);
const to = new Date(2023, 2, 8);
const gst: Result<GeomagneticStorm[]> = await nasa.donkiCme(from, to);
```

#### donkiIps

*Description*

This asynchronous **method** handles `GET /DONKI/IPS` REST API, in order to return the *Interplanetary Shock (IPS)* for selected dates range.

*Prototype*

```ts
async donkiIps(from: Date, to: Date ): Promise<Result<InterplanetaryShock[]>> 
```

Method parameters

| Parameter | Type | Required | Default        |
| --------- | ---- | :------: | -------------- |
| from      | Date |    No    | 30 days before |
| to        | Date |    No    | today          |


*Sample code*

```ts
const from = new Date(2023, 2, 21);
const to = new Date(2023, 2, 8);
const ips: Result<InterplanetaryShock[]> = await nasa.donkiIps(from, to);
```

#### donkiFlr

*Description*

This asynchronous **method** handles `GET /DONKI/FLR` REST API, in order to return the *Solar Flare (FLR)* for selected dates range.

*Prototype*

```ts
async donkiFlr(from: Date, to: Date ): Promise<Result<SolarFlare[]>> 
```

Method parameters

| Parameter | Type | Required | Default        |
| --------- | ---- | :------: | -------------- |
| from      | Date |    No    | 30 days before |
| to        | Date |    No    | today          |


*Sample code*

```ts
const from = new Date(2023, 2, 21);
const to = new Date(2023, 2, 8);
const ips: Result<SolarFlare[]> = await nasa.donkiIps(from, to);
```

#### donkiSep

*Description*

This asynchronous **method** handles `GET /DONKI/SEP` REST API, in order to return the *Solar Energetic Particle (SEP)* for selected dates range.

*Prototype*

```ts
async donkiSep(from: Date, to: Date ): Promise<Result<SolarEnergeticParticle[]>> 
```

Method parameters

| Parameter | Type | Required | Default        |
| --------- | ---- | :------: | -------------- |
| from      | Date |    No    | 30 days before |
| to        | Date |    No    | today          |


*Sample code*

```ts
const from = new Date(2023, 2, 21);
const to = new Date(2023, 2, 8);
const sep: Result<SolarEnergeticParticle[]> = await nasa.donkiSep(from, to);
```

#### donkiMpc

*Description*

This asynchronous **method** handles `GET /DONKI/MPC` REST API, in order to return the *Magnetopause Crossing (MPC)* for selected dates range.

*Prototype*

```ts
async donkiMpc(from: Date, to: Date ): Promise<Result<MagnetopauseCrossing[]>> 
```

Method parameters

| Parameter | Type | Required | Default        |
| --------- | ---- | :------: | -------------- |
| from      | Date |    No    | 30 days before |
| to        | Date |    No    | today          |


*Sample code*

```ts
const from = new Date(2023, 2, 21);
const to = new Date(2023, 2, 8);
const sep: Result<MagnetopauseCrossing[]> = await nasa.donkiMpc(from, to);
```

#### donkiRbe

*Description*

This asynchronous **method** handles `GET /DONKI/RBE` REST API, in order to return the *Radiation Belt Enhancement (RBE)* for selected dates range.

*Prototype*

```ts
async donkiRbe(from: Date, to: Date ): Promise<Result<RadiationBeltEnhancement[]>> 
```

Method parameters

| Parameter | Type | Required | Default        |
| --------- | ---- | :------: | -------------- |
| from      | Date |    No    | 30 days before |
| to        | Date |    No    | today          |


*Sample code*

```ts
const from = new Date(2023, 2, 21);
const to = new Date(2023, 2, 8);
const sep: Result<RadiationBeltEnhancement> = await nasa.donkiRbe(from, to);
```

#### donkiHss

*Description*

This asynchronous **method** handles `GET /DONKI/HSS` REST API, in order to return the *Hight Speed Stream (HSS)* for selected dates range.

*Prototype*

```ts
async donkiRbe(from: Date, to: Date ): Promise<Result<HightSpeedStream[]>> 
```

Method parameters

| Parameter | Type | Required | Default        |
| --------- | ---- | :------: | -------------- |
| from      | Date |    No    | 30 days before |
| to        | Date |    No    | today          |


*Sample code*

```ts
const from = new Date(2023, 2, 21);
const to = new Date(2023, 2, 8);
const sep: Result<HightSpeedStream[]> = await nasa.donkiHss(from, to);
```

#### donkiWsa

*Description*

This asynchronous **method** handles `GET /DONKI/WSAEnlilSimulations` REST API, in order to return the *WSA+EnlilSimulation* for selected dates range.

*Prototype*

```ts
async donkiWsa(from: Date, to: Date ): Promise<Result<WsaEnlilSimulation[]>> 
```

Method parameters

| Parameter | Type | Required | Default        |
| --------- | ---- | :------: | -------------- |
| from      | Date |    No    | 30 days before |
| to        | Date |    No    | today          |


*Sample code*

```ts
const from = new Date(2023, 2, 21);
const to = new Date(2023, 2, 8);
const sep: Result<WsaEnlilSimulation[]> = await nasa.donkiWsa(from, to);
```


#### donkiNotifications

*Description*

This asynchronous **method** handles `GET /DONKI/notifications` REST API, in order to return the *Notifications* for selected dates range.

*Prototype*

```ts
async donkiNotifications(from: Date, to: Date ): Promise<Result<Notification[]>> 
```

Method parameters

| Parameter | Type             | Required | Default        |
| --------- | ---------------- | :------: | -------------- |
| from      | Date             |    No    | 30 days before |
| to        | Date             |    No    | today          |
| type      | NotificationType |    no    | all            |



*Sample code*

```ts
const from = new Date(2023, 2, 21);
const to = new Date(2023, 2, 8);
const sep: Result<Notification[]> = await nasa.donkiNotifications(from, to);
```


---

## Authors

* **Mario Lazzari** - *Initial work*

## Links

* Demo [app](https://www.mariolazzari.it/hobbies/sci/nasa)
* My personal [site](https://mariolazzari.it)
* My [github](https://github.com/mariolazzari) profile
* Nasa API [documentation](https://api.nasa.gov/)