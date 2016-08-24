/**
 * Created by hyb on 16/8/23.
 */
var path = require('path');

module.exports = {
    entry: {
        main:path.resolve(__dirname,'./app/main.js'),
        list:path.resolve(__dirname,'./app/list.js')
    },
    output: {
        path: __dirname + '/assets/js/',
        publicPath: "/assets/js/",
        filename: '[name].bundle.js'
    },
    module: {
        //加载器配置
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.less/, loader: 'less-loader'},
            {test: /\.jsx?$/, loader: 'jsx-loader?harmony'},
            {test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    plugins: [
        //提供全局的变量，在模块中使用无需用require引入
        //new webpack.ProvidePlugin({
        //    jQuery: "jquery",
        //    $: "jquery"
        //}),
        //将公共代码抽离出来合并为一个文件
       // new CommonsChunkPlugin('common.js')
        ////js文件的压缩
        //new uglifyJsPlugin({
        //    compress: {
        //        warnings: false
        //    }
        //})
    ]

};


