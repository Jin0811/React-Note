const { createProxyMiddleware } = require("http-proxy-middleware")
module.exports = function (app) {
  app.use(
    "/api1", // 遇见/api1前缀的请求，就会触发该代理配置
    createProxyMiddleware({
      target: "http://localhost:5000", // 请求转发给谁
      // changeOrigin 控制服务器收到的相应头中host值，默认为false，一般我们会设置为true
      // 为true时，host值为5000
      // 为false时，host值为3000
      changeOrigin: true,
      pathRewrite: { "^/api1": "" }, // 路径重写
    })
  );

  app.use(
    "/api2",
    createProxyMiddleware({
      target: "http://localhost:5001",
      changeOrigin: true,
      pathRewrite: { "^/api2": "" },
    })
  );
}