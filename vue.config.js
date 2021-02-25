module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/assets/scss/_variables.scss";
                `
            }
        }
    },
    configureWebpack: {
        devServer: {
            watchOptions: {
                ignored: /\.#|node_modules|~$/,
            }
        }
    }
}
