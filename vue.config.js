const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias.set("@", resolve("src"));
    },

    publicPath: '/web',
    // 配置跨域
    devServer: {
        port: 8011,
        https: false,
        open: true,
        proxy: {
            "/api": {
                target: 'http://localhost:3000',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },

    outputDir: process.env.outputDir,
}