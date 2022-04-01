import waves from './waves.js'

// 指令对象
const directives = {
  waves
}

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    });
  }
}