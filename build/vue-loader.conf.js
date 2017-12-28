'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap


module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  postcss: [ // 이 리스트에 추가하면 됩니다.
    require('postcss-import')({}),
    require('postcss-nested')(),
    require('postcss-cssnext')({
      warnForDuplicates: false,
      features: {
          customProperties: {
            // variables: require('../src/variables/custom-properties.json')
          },
          customMedia: {
            // extensions: require('../src/variables/custom-media.json'),
            appendExtensions: true
          }
      }
    })
  ],
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting, 
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
