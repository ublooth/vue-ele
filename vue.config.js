// vue.config.js

console.log('process.env.NODE_ENV', process.env.NODE_ENV)
module.exports = {
  devServer: {
    // 代理设置
    proxy: {
      '/v1': {
      target: 'http://localhost:8000',
      changeOrigin: true,
      ws: true,
      }
    }
  }
}
console.log("url",module.exports.devServer.proxy)