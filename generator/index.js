//注入或是修改项目中文件
// rootOptions  是整个的preset
module.exports = (api, options, rootOptions) => {
  // 修改 package.json
  // 安装一些基础库
  // api.extendPackage : 负责给初始化项目中的 package.json 添加额外依赖并安装；
  api.extendPackage({
    dependencies: {
      "axios": "^0.18.0"
    }
  })

    // 安装 vuex
    if (options.vueRouter) {
      console.log('vueRouter')
      api.extendPackage({
        dependencies: {
          "vue-router": "^3.0.3"
        }
      });
     api.render('./template/router');

    }
  // 安装 vuex
  if (options.vuex) {
    console.log('vuex')
    api.extendPackage({
      dependencies: {
        vuex: '^3.0.1'
      }
    });

    api.render('./template/vuex');
  }
  if (options.layoutType === 'rem') {
    api.extendPackage({
      dependencies: {
        "postcss-px2rem": "^0.3.0",
      },
      postcss: {
        plugins: {
          'postcss-px2rem': {
            remUnit: 50 
          }
        }
      }
    })
    api.render('./template/rem');
  }
  if (options.layoutType === 'vw') {
    api.extendPackage({
      dependencies: {
        "cssnano": "^4.1.4",
        "cssnano-preset-advanced": "^4.0.2",
        "postcss-aspect-ratio-mini": "0.0.2",
        "postcss-import": "^12.0.0",
        "postcss-px-to-viewport": "0.0.3",
        "postcss-url": "^8.0.0",
        "postcss-write-svg": "^3.0.1"
      },
      postcss: {
        plugins: {
          'postcss-write-svg': {
            utf8: false
          },
          cssnano: {
            preset: 'advanced',
            autoprefixer: false,
            'postcss-zindex': false
          },
          'postcss-px-to-viewport': {
            viewportWidth: 375,
            viewportHeight: 667,
            unitPrecision: 5,
            viewportUnit: 'vw',
            selectorBlackList: [
              '.ignore',
              '.hairlines'
            ],
            minPixelValue: 1,
            mediaQuery: false
          }
        }
      }
    })
    // require('./vw')(api, options)
  }
  // // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('./template/default')
  api.injectImports(api.entryFile, `import './reset.css'`)

}