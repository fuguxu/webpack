let path = require('path')
let FileList = require('./plugins/fileList.js')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  mode:'production',
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
    new FileList({
      fileName:'list.md'
    }),
    new MiniCssExtractPlugin({
      fileName:'css/[name].css'
    })
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
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  node:{
    fs: 'empty'
  }
}