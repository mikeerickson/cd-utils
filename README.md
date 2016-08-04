# cd-utils
Node Utils

## Installation

Install `cd-utils` as a development dependency to your project (plugin should be installed for each project)

```shell
npm install --D cd-utils
```


## Usage

After you have installed plugin, you can access like any standard node module

```javascript
var utils = require('cd-utils')();
```
**Note: When reuqiring `cd-utils` you must include the addition parens to execute internal function

## API

COMPLETE THIS SECTION (OUTLINE PARAMS AND PROPERTIES)

### Methods

#### notifyOptions(status, override)

- status   S
- override {}

#### failMessage(options)

#### passMessage(options)

#### notifyPassed(options)

#### notifyFailed(options)

#### error(msg, data)

#### info(msg, data)

#### success(msg, data)

#### warning(msg, data)

#### isWindows

#### mergeTemplate(msg, data)

#### timestamp

#### difference

#### params

#### param(key)

#### is_js instance

#### kind-of instance (as kindOf)

#### chalk instance

#### extend


## Credits

cd-utils written by Mike Erickson

E-Mail: [codedungeon@gmail.com](mailto:codedungeon@gmail.com)

Twitter: [@codedungeon](http://twitter.com/codedungeon)

Website: [codedungeon.org](http://codedungeon.org)
