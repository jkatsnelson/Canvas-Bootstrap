# Canvas
> Starter theme for [Cabin](http://cabinjs.com)

[![Dependency Status](https://gemnasium.com/CabinJS/Canvas.png)](https://gemnasium.com/CabinJS/Canvas) [![Travis Status](https://travis-ci.org/CabinJS/Canvas.png?branch=master)](https://travis-ci.org/CabinJS/Canvas)

[![Canvas](http://i.imgur.com/nLkDQ08.png)](http://cabinjs.github.io/Canvas/)

## Using Canvas

To use Canvas, go to the [GitHub page](http://cabinjs.github.io/Canvas/).

## Contributing to Canvas

### Theme Philosopy

Canvas is a starter theme meant to be built on top of. It provides a basic usage of grunt-pages and project scaffold for people who want to build custom static sites using Cabin.

#### Updating Icons

Canvas uses the [IcoMoon App](http://icomoon.io/app/) to generate icon fonts. To alter the icons, go to [this](http://icomoon.io/app/) url, and click `Import Icons` in the top left and upload the `src/styles/selection.json` file.

After updating the icons simply download them and replace the `fonts` folder inside the `src/styles` folder, replace the `src/styles/selection.json` with the new `selection.json` and replace the contents of `src/styles/_icon.scss` with `style.css`.

#### Tests

Canvas uses Travis CI to make sure the theme installs correctly using the Cabin version listed in the package.json's dependencies, and that the html output is the same for both the Jade and EJS template engines. To run the tests, run `grunt test` in your terminal.

If the installation test fails, try installing the theme manually with the `--local` flag. If the template engine output test fails, read the [testing engine output](#testing-engine-output) section below.

### Template Engine Support

Canvas supports both the Jade and EJS template engines. As such, when contributing to Canvas, make sure to make template changes in both engines. We have a grunt task, `engineDiff` which will build a site using both engines and print any differences the engine's html output.

#### Testing engine output

The best workflow is to work on your preferred template engine and then make the other one match by running `engineDiff`. The `engineDiff` task diffs the engine output, and then watches the template files for changes to re-compare, so you can just edit templates and keep comparing until the html output diff is empty.

## License

(The MIT License)

Copyright (c) 2013 Colin Wren

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
