let path = require('path')
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
          'style-loader','css-loader','less-loader'
        ]
      }
    ]
  },
  node:{
    fs: 'empty'
  }
}