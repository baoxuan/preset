//注入或是修改项目中文件
// rootOptions  是整个的preset
module.exports = (api, options, rootOptions) => {
  // 修改 package.json
  // 安装一些基础库
  // api.extendPackage({
  //   dependencies: {
  //     "axios": "^0.18.0"
  //   }
  // })
  if (options.foo) {
    console.log('foo')
    // require('./rem')(api, options)
  }
  if (options.layoutType === 'rem') {
    console.log('rem')
    // require('./rem')(api, options)
  }
  if (options.layoutType === 'vw') {
    console.log('vw')
    // require('./vw')(api, options)
  }
  // // 复制并用 ejs 渲染 `./template` 内所有的文件
  // api.render('./template')
  // api.injectImports(api.entryFile, `import './reset.css'`)

}