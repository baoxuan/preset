module.exports = [{
    name: 'vueRouter',
    type: 'confirm',
    message: '是否需要使用vue-router?',
    default: false
  },
  {
    name: 'vuex',
    type: 'confirm',
    message: '是否需要vuex?',
    default: false
  }, {
    name: 'layoutType',
    type: 'list',
    message: '使用哪种布局方式?',
    choices: ['vw', 'rem', 'none'],
    default: 0
  }
]