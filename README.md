
<a href="https://github.com/nocturneio"><img src="https://i.imgur.com/cVSsETP.png" align="left" height="174" width="174"/></a>

## react-dpe-generator
**Generate DPE and GES easily in React.**


<br>


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/clementdlc)

___


Simple React implementation of `dpeges` indicators.
DPE : Diagnostic de performance énergétique (Energy Performance Diagnostic)
GES : Gaz à effet de serre (Greenhouse Gas Emissions)
# Getting started
## Import the components
```javascript
import { DPE, GES } from './react-dpeges'
```
## Use them with numerical values
```javascript
<DPE value={200} />
<GES value={200} />
```
## Use them with labels
```javascript
<DPE value={'A'} />       // possible standard values are: 'A', 'B', 'C', 'D', 'E', 'F'
<GES value={'A'} />       // same
```
## All options
Option name   | Description                                                     | Required | Default value
------------- | --------------------------------------------------------------- | -------- | -------------
value         | The DPE or GES actual value, can be an integer or just a letter | No       | 200
width         | The width of the generated SVG image                            | No       | 250
height        | The height of the generated SVG image                           | No       | 200
shadow        | Add shadow to the image                                         | No       | false
lang          | The language to use (currently supported: 'fr' and 'en')        | No       | 'fr'
## This work is released under the MIT License, see LICENSE file for more details.
