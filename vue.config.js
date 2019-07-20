/* eslint-disable import/no-extraneous-dependencies */
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: 'dist',
  lintOnSave: true,
  chainWebpack: config => {
    // 路径简写
    config.resolve.alias
      .set('Images', resolve('src/assets/images'))
      .set('Components', resolve('src/components'))
      .set('Plugins', resolve('src/plugins'))

    // 解决 moment 语言包打包体积过大
    config
      .plugin('ContextReplacementPlugin')
      .use(new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/))
  },
  productionSourceMap: false,
  css: {
    sourceMap: false,
    loaderOptions: {
      // 配置 px 自动转 rem
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      },
      // 配置 scss 全局变量
      sass: {
        data: '@import "@/assets/style/variables.scss";'
      }
    }
  }
}
