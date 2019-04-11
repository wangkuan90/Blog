let path = require('path');
let StylelintPlugin = require('stylelint-webpack-plugin');

const resolve = dir => path.join(__dirname, dir);

module.exports = {
    baseUrl: './',
    productionSourceMap: false,
    css: {
        extract: false
    },
    configureWebpack: {
        resolve: {
            alias: {
                'api': resolve('./src/api'),
                'const': resolve('./src/utils/const'),
                'lemon': '@souche-ui/lemon'
            }
        },
        module: {
            rules: [
                {
                    test: /\.(css|less)$/,
                    use: [
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: [
                                    './node_modules/@souche-ui/lemon/less/global.less'
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new StylelintPlugin({
                context: 'src',
                files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}']
            })
        ]
    }
};
