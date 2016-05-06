# string-polyfill
String polyfill methods for ECMAScript 6 specification & other usefull string manipulation


### Implements

- String.capitalise - Capitalise first letter of first word (all words) in input string
- [String.repeat](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) - Repeat input string specified number of times


### Install

```
npm install @cubitworx/string-polyfill
```


### Usage

```
// String.capitalise
console.log( 'this is a test string'.capitalise() ); // This is a test string
console.log( 'this is a test string'.capitalise(true) ); // This Is A Test String
console.log( 'this-is-a-test-string'.capitalise(true,'-') ); // This-Is-A-Test-String

// String.repeat
console.log( 'x'.repeat(3) ); // xxx
```


## Copyright and license

Code and documentation copyright 2016 Charles Louw. Code released under [the MIT license](https://github.com/cubitworx/cw-string-polyfill.git/LICENSE).
