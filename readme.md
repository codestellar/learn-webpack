# Webpack notes

- Webpack is a static module module bundler that is used for bundling static assets primarily for JavaScript and can be used to bundle images, css, html by providing corresponding loader
- Install Webpack
````
npm i -D webpack-cli
````
- Create a file webpack.config.js
- You need to understand some extreme basic stuff
    - **entry** - It can be one or more files where webpack will look for the **dependency graph** for building the buildle.
    - **output** - where the result bundle should be dropped and what should be the filename. In our case, we have kept it to expose as library and ensure to make it available globally.
    - **rules** - Rules tell webpack how to work for example using css-loader, style-loader (for css and styling), expose-loader (to mention exposed methods)
        - The test property identifies which file or files should be transformed.
        - The use property indicates which loader should be used to do the transforming.
    - **mode** - It can be Development or Production
- notice that the function is exposed using export in index.js. This is important to attach it to the library and the same is mentioned in the expose-loader rule in webpack.config.js

## Plugins in Webpack
- Webpack plugin allow adding functionality to webpack complilation process
- We have used plugins:
    - HTMLWebPackPlugin to generate the index.html based on the given template and add all the bundled assets in that
    - CleanWebPackPlugin to clean dist before building new
    - ProgressPlugin to handle how progress should be showcased.
