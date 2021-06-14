<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterStridedBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Create an [iterator][mdn-iterator-protocol] which steps according to a provided callback function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/iter-strided-by
```

</section>

<section class="usage">

## Usage

```javascript
var iterStridedBy = require( '@stdlib/iter-strided-by' );
```

#### iterStridedBy( iterator, fcn\[, offset\[, eager]]\[, thisArg] )

Returns an [iterator][mdn-iterator-protocol] which steps according to a provided callback function.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

function stride( v, i ) {
    return (i % 10) + 1;
}

var arr = array2iterator( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
var it = iterStridedBy( arr, stride );
// returns <Object>

var r = it.next().value;
// returns 1

r = it.next().value;
// returns 2

r = it.next().value;
// returns 4

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

The callback function is provided four arguments:

-   **value**: iterated value
-   **i**: source iteration index (zero-based)
-   **n**: iteration index (zero-based)
-   **curr**: current stride

To set the callback execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

function stride( v, i ) {
    this.count += 1;
    return (i % 10) + 1;
}

var ctx = {
    'count': 0
};

var arr = array2iterator( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
var it = iterStridedBy( arr, stride, ctx );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 4

v = it.next().value;
// returns 8

var count = ctx.count;
// returns 4
```

To skip the first `N` values of a provided [`iterator`][mdn-iterator-protocol], provide an `offset` argument.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

function stride( v, i ) {
    return (i % 10) + 1;
}

var arr = array2iterator( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
var it = iterStridedBy( arr, stride, 1 );
// returns <Object>

var r = it.next().value;
// returns 2

r = it.next().value;
// returns 4

r = it.next().value;
// returns 8

// ...
```

By default, the returned [iterator][mdn-iterator-protocol] defers consuming the first `N` input [`iterator`][mdn-iterator-protocol] values until the first value of the returned [iterator][mdn-iterator-protocol] is consumed. To eagerly advance the input [`iterator`][mdn-iterator-protocol], set the `eager` argument to `true`.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

function stride() {
    return 1;
}

var arr = array2iterator( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
var it = iterStridedBy( arr, stride, 4, true );
// returns <Object>

var r = it.next().value;
// returns 5

r = it.next().value;
// returns 6

r = it.next().value;
// returns 7

// ...
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A callback function **must** return a **positive integer** value.
-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-iter-randu' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var iterStridedBy = require( '@stdlib/iter-strided-by' );

// Create a seeded iterator for generating pseudorandom numbers:
var rand = randu({
    'seed': 1234,
    'iter': 10
});

// Create a PRNG for generating pseudorandom integers on the interval [1,10]:
var randi = discreteUniform( 1, 10, {
    'seed': 4321
});

// Create an iterator which randomly selects input iterator values:
var it = iterStridedBy( rand, randi );

// Perform manual iteration...
var r;
while ( true ) {
    r = it.next();
    if ( r.done ) {
        break;
    }
    console.log( r.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-strided-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-strided-by

[test-image]: https://github.com/stdlib-js/iter-strided-by/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/iter-strided-by/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-strided-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-strided-by?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-strided-by
[dependencies-url]: https://david-dm.org/stdlib-js/iter-strided-by/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-strided-by/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->
