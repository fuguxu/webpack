let path = require('path')
let FileList = require('./plugins/fileList.js')
let InlineSourcePlugin = require('./plugins/inlineSourcePlugin.js')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  mode:'development',
  entry:'./src/index.js',
  output:{
    filename:'index.js',
    path:path.resolve(__dirname,'dist')
  },
  resolveLoader:{
    // roots:path.resolve(__dirname,'loaders'),
    modules: ['loaders','node_modules'],
    // alias:{
    //   'img-loader': path.resolve(__dirname,'loaders/img-loader.js'),
    //   'url-loader': path.resolve(__dirname,'loaders/url-loader.js'),
    // }
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename:'index.css'
    }),
    new InlineSourcePlugin({ // 可以把外链资源变成内联标签
      match:/\.css|\.js$/
    }),
    new FileList({
      fileName:'list.md'
    }),
  ],
  module:{
    rules:[
      {
        test:/\.jpg$/,
        use:[
          {
            loader:'url-loader',
            options:{
              name:'image/[hash].[ext]',
              limit:1
            }
          }
        ]
      },
      {
        test:/\.less$/,
        use:[
          MiniCssExtractPlugin.loader,'css-loader','less-loader'
        ]
      }
    ]
  },
  node:{
    fs: 'empty'
  }
}