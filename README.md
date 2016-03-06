# gulp-phplint
Node Utils

## Installation

Install `cd-utils` as a development dependency to your project (plugin should be installed for each project)

```shell
npm install --save-dev cd-utils
```


## Usage

After you have installed plugin, you can access like any standard node module

```javascript
var utils = require('cd-utils');

## API

#### phplint path

Type: `String`

Path to `php` binary
- If not supplied, the default php path will be used

#### options.debug
Type:    `Boolean`
Default: `false`

Debug mode enabled (enables --debug switch as well)

#### options.clear
	Type:    `Boolean`
Default: `false`

Clear console before executing command

#### options.dryRun
	Type:    `Boolean`
Default: `false`

Executes dry run (doesn't actually execute tests, just echo command that would be executed)

#### options.notify
	Type:    `Boolean`
Default: `true`

Conditionally display notification (both console and growl where applicable)

#### options.statusLine
	Type:    `Boolean`
Default: `true`

Displays status lines as follows

	- green for passing files
	- red for failing files
	- yellow for execution which have `debug` property enabled (will also display red, green status)

#### skipPassedFiles
	Type:    `Boolean`
Default: `false`

Suppress reporting files which dont have syntax errors (passed files)


## Credits

cd-utils written by Mike Erickson

E-Mail: [codedungeon@gmail.com](mailto:codedungeon@gmail.com)

Twitter: [@codedungeon](http://twitter.com/codedungeon)

Website: [codedungeon.org](http://codedungeon.org)

