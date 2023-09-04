<p align="center">

 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/New_Logo_JNE.png/1200px-New_Logo_JNE.png" alt="JNE Logo" width=100>

  <h3 align="center">Resi-JNE</h3>

  <p align="center">
    An module for tracking JNE Indonesia shipment
    <br>
    <a href="https://github.com/neo2701/resi-jne/issues/new?template=bug.md">Report bug</a>
    ·
    <a href="https://github.com/neo2701/resi-jne/issues/new?template=feature.md&labels=feature">Request feature</a>
  </p>
</p>


## Table of contents
- [Quick start](#quick-start)
- [Example Response](#example-response)
- [License](#license)

# Quick Start
## Installation 

You may install the NPM package `resi-jne`
```shell
$ npm i resi-jne
```

## Usage

NodeJS
```js
import { cekResi } from 'resi-jne';
let res = await cekResi('YOUR_AWB');
```

## Example Response
```json
{
  "status": 200,
  "data": {
    "awb": "14084623001*****",
    "service": "REG",
    "origin": "KAB. SLEMAN",
    "destination": "CIPAYUNG ,JAKARTA TI",
    "estimation": "3 Days",
    "pod_date": "02 SEP 2023  19:27",
    "shipper": {
      "name": "AKSORO *****",
      "city": "KAB. SLEMAN"
    },
    "receiver": {
      "name": "ANNA RO*****",
      "city": "CIPAYUNG ,JAKARTA TI"
    },
    "shipment": {
      "date": "30-08-2023 17:26",
      "koli": "1",
      "weight": "1 Kg",
      "good_desc": "ALL PRODUCT (DEALMAKER)"
    },
    "received_by": {
      "name": "PAL ****",
      "title": "(KELUARGA/SAUDARA)"
    },
    "history": [
      {
        "status": "SHIPMENT RECEIVED BY JNE COUNTER OFFICER AT [BANTUL,KAB.BANTUL]",
        "date": "30-08-2023 17:26"
      },
      {
        "status": "PICKED UP BY COURIER [BANTUL,KAB.BANTUL]",
        "date": "30-08-2023 20:30"
      },
      {
        "status": "PROCESSED AT SORTING CENTER [JOG, CABANG BANTUL]",
        "date": "30-08-2023 22:57"
      },
      {
        "status": "RECEIVED AT ORIGIN GATEWAY  [YOGYAKARTA]",
        "date": "30-08-2023 23:01"
      },
      {
        "status": "RECEIVED AT ORIGIN GATEWAY  [YOGYAKARTA]",
        "date": "31-08-2023 00:09"
      },
      {
        "status": "RECEIVED AT WAREHOUSE [JAKARTA, HUB RAWAGELAM (DESP)]",
        "date": "31-08-2023 20:15"
      },
      {
        "status": "SHIPMENT FORWARDED FROM TRANSIT CITY TO DESTINATION CITY [JAKARTA, HUB RAWAGELAM (DESP)]",
        "date": "01-09-2023 09:27"
      },
      {
        "status": "RECEIVED AT INBOUND STATION [JAKARTA, HUB RAWAGELAM (DESP)]",
        "date": "01-09-2023 10:35"
      },
      {
        "status": "SHIPMENT  PROBLEM",
        "date": "01-09-2023 15:07"
      },
      {
        "status": "DELIVERED TO [PAL **** | 02-09-2023 19:27 | CIPAYUNG ,JAKARTA TIMUR ]",
        "date": "02-09-2023 19:27"
      }
    ],
    "currentStatus": {
      "status": "DELIVERED TO [PAL **** | 02-09-2023 19:27 | CIPAYUNG ,JAKARTA TIMUR ]",
      "date": "02-09-2023 19:27"
    }
  }
}
```

# License
This software is licensed under the MIT © [Neo2701](https://github.com/neo2701)


