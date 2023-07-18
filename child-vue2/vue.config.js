const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package');
module.exports = defineConfig({
  devServer: {
    port: 8002,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  transpileDependencies: true,
  lintOnSave:false,
  css: {
    extract: false,
    sourceMap: true, // 开启 CSS source maps?
    loaderOptions:{
      less:{
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    output: {
      // library: `${name}-[name]`,
      library: `childVue2`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      // jsonpFunction: `webpackJsonp_${name}`,
    },
  },

})
