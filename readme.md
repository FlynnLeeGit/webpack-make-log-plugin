# Simple log before every compilation


install

```shell
yarn add webpack-make-log-plugin
# or
npm install webpack-make-log-plugin
```

```js
const MakeLogPlugin = require('webpack-make-log-plugin')

// webpack.config.js
{
  plugins:[
    new MakeLogPlugin({
      message:'this is PROJECT web'
    })
  ]


}


```