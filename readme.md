# array recursive adder using TypeScript 

> array recursive adder using TypeScript. 

## Install

```sh

npm install @leonetti/array-recursive-adder

```

## Usage

```js

import {recursiveAdder} from '@leonetti/array-recursive-adder';

const nested = [1,["x"],{test:"entry"},[[3,[6,[[8]]]]]],[[7,[5,6,7]]];
recursiveAdder(nested);// sum of all number in nested array.


```
