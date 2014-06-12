# find-css-class

> Find a class inside a css/html/php/ctp file, or more css/html/php/ctp files inside a directory

https://www.npmjs.org/package/find-css-class

## Install

```sh
$ npm install --save find-css-class
```


## Usage

```js
var info = require('find-css-class');

find(find_class, folder, function (err, finded) {
	console.log(finded);
});
```

## CLI

```sh
$ npm install --global find-css-class
```

  Usage

  ```
  $ find-css-class <class-to-find> <folder-name-or-css-file>
  ```
  
  Example
  
  ```
  $ find-css-class clear css/style.css
  ```

It will prints:

```
found in css/style.css 2 match of clear
```

## OPTIONS
You can specify in the second argument or the css file, or an html file, or a php file, or a ctp file, or a directory, the package can search recursively all css/html/php/ctp files inside the directory and search the class name inside that files.

So you can write this to search inside a directory:

```
$ find-css-class clear public
```

In this case the package search inside the directory all css, html, php and ctp file inside it and print result like this:

```
found in css/style.css 2 match of clear
found in css/directory/other.css 1 match of clear
found in index.html 1 match of clear
found in test.php 3 match of clear
found in test.ctp 2 match of clear
```

If you would like to have an help you can write into your console

  ```
  $ find-css-class -h
  ```

It will prints

```
npm package to find css class into files or directory

Usage
  $ find-css-class <css-class-to-find> <folder-or-file-to-search>

Example
  $ find-css-class clear css/style.css
```

If you would like to see the version of the package you can write into your console

```
  $ find-css-class -v
  ```

  It will prints

  ```
  0.1.4
  ```

## License

The MIT License (MIT)

Copyright (c) 2014 Alessandro Minoccheri

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.