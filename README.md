# 🍞 Literal Toast
[![npm](https://img.shields.io/npm/v/literal-toast.svg?maxAge=2592000)](https://www.npmjs.com/package/literal-toast) ![literal-toast](https://img.shields.io/npm/l/literal-toast.svg?maxAge=2592000)  [![Build Status](https://travis-ci.org/ticky/literal-toast.svg?branch=master)](https://travis-ci.org/ticky/literal-toast) [![codecov](https://codecov.io/gh/ticky/literal-toast/branch/master/graph/badge.svg)](https://codecov.io/gh/ticky/literal-toast)

Helper for making template literal tags; combines template literal values so you don't have to

## Wait, what ⁉️

[Tagged template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals) are a feature of ES6/ES2015 which allows processing of template literals (template strings).

This is a little helper for zipping the literals and substitutions so your tag can operate on or return the final value of the template string without reimplementing this logic itself.

## Usage

Spread the literals and substitutions from the template literal onto `literalToast`;

```javascript
import literalToast from 'literal-toast';

function lineReverse(literals, ...substitutions) {
  return literalToast(literals, ...substitutions)
    .split('\n')
    .reverse()
    .join('\n');
}

lineReverse`but it demonstrates what this does pretty simply.
This is a weird example,`;

// Returns:
// "This is a weird example,
//  but it demonstrates what this does pretty simply."

```

The above example shows both the literals and substitutions for clarity, but if you don't use either parameter yourself, you can write it like this instead;

```javascript
function myTag(...literalValues) {
  return literalToast(...literalValues) // your logic here
}
```
