const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    https: false,
    // hotOnly: false, // 如果运行报错 注释这一行
    proxy: {
      '/api': {
        target: 'https://lianghj.top:8888/api/private/v1/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: { // 全局引入css样式
    loaderOptions: {
      sass: {
        additionalData: `
          @import '@/styles/variables.scss';
          @import '@/styles/mixin.scss';
        `
      }
    }
  }
})
