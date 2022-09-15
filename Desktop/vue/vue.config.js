const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})



// const autoprefixer = require('autoprefixer')  // 这个依赖不用安装
// const pxtorem = require('postcss-pxtorem')
 
module.exports = {
  outputDir:'dist',//npm  run build 打包输出的目录
  assetsDir:'assets',//静态资源目录
  lintOnSave:false,//是否开启eslint规范
  devServer:{
    open:true,//是否自动弹出浏览器页面
    host: "localhost",//启动时使用的ip或域名   localhost
    port: '8080',
    https:false,//是否使用https协议
  //  hotOnly:false,//是否开启热更新
    // 设置代理
    proxy:{
      '/api':{
        target:"http://120.53.31.103:84/api/app/",//转发目标地址
        changeOrigin:true,//开启跨域
        pathRewrite:{//重写路径
          '^/api':''
        }
      }
    }
  },
  // css: {
  //   loaderOptions: {
      // postcss: {
      //   plugins: [
      //     autoprefixer({
      //       overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
      //     }),
      //     pxtorem({
      //       rootValue: 37.5,  // 根字体大小，如果设计图是750的话 记得除2
      //       unitPrecision: 3,
            // propList: ['*'], // 作用在哪些属性上 我这里用的是通配符
            // selectorBlackList: ['vant-'], // 将哪些html元素排除在外，我这里添加了一个vant的
            // replace: true,
            // mediaQuery: false,
            // minPixelValue: 2,
            // exclude: /node_modules/i
      //     })
      //   ]
      // }
  //   }
  // }
}
