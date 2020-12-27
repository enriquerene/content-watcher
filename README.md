# Content Watcher
A Content Watcher is an object that contains some value. All time value changes a callback is triggered. Useful to link proccess and services via callback.

## Table of Contents
- [Support](#support)
- [Installation](#installation)
	+ [NPM](#npm)
	+ [Git](#git)
	+ [Zip](#zip)
- [Usage](#usage)
	+ [Callback](#callback)
	+ [Custom Initial Content](custom-initial-content)
- [Plan](#plan)
- [Contribute](#contribute)
- [Author](#author)

## <a name="support"></a> Support
If you need some help or found bug you can [open an issue](/issues/new/choose).

## <a name="installation"></a> Installation
There are some installation ways. You can choose the best way for you.

### <a name="npm"></a> NPM (recommended)
This way requires [NodeJS](https://nodejs.org/) installed:
```bash
$ npm install content-watcher
```
or using [Yarn](https://yarnpkg.com/)
```bash
$ yarn add content-watcher
```

### <a name="git"></a> Git
Clone the repo into your project:
```bash
$ git clone https://github.com/enriquerene/content-watcher.git
```

### <a name="zip"></a> Zip
Dowload the package and uncpack it into your project:
[Dowload ZIP](https://github.com/enriquerene/content-watcher/archive/main.zip)

## <a name="usage"></a> Usage
Here we cover how to properly use Content Watcher library. The `ContentWatcher` instance requires a function as first argument and optionally can receive a second argument used as custom inital content. The default content is `null`. Let's see some examples:

### <a name="callback"></a> Callback
Set a callback and implement the class:
```javascript
import ContentWatcher from 'content-watcher';

const updateCallback = (_v) => { console.log(_v) };
const contWat = new ContentWatcher(updateCallback);

console.log(contWat.content); // null
contWat.content = 'final content'; // console logs 'final content'
```

### <a name="custom-initial-content"></a> Custom Initial Content
It accepts a second argument used as custom initial value:
```javascript
import ContentWatcher from 'content-watcher';

const updateCallback = (_v) => { console.log(_v) };
const contWat = new ContentWatcher(updateCallback,  'initial content');

console.log(contWat.content); // 'initial content'
contWat.content = 'final content'; // console logs 'final content'
```

## <a name="plan"></a> Plan
Some features what are expected for future versions:
- support for custom handler for different content types;
- official [TypeScript](https://www.typescriptlang.org/) version;
Feel free to suggest features for futures versions, just [open an issue](/issues/new/choose).

## <a name="contribute"></a> Contribute
If you have something good to share in this project, you are welcome. Just do a [pull request](/pulls) with your code.

## <a name="author"></a> Author
You can find more projects from ContentWatcher's author. Learn more about in (https://enriquerene.com.br)[https://enriquerene.com.br].

