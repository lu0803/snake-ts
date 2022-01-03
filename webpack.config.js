const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
    // 不使用箭头函数
    environment: {
      arrowFunction: false,
      const: false
    }
    
  },
  module: {
    rules: [
      {
        // 要处理的文件
        test: /\.ts$/,
        // 要使用的loader， 运行顺序：从下往上，从右往左
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: 'babel-loader',
            // 设置babel
            options: {
              // 设置定义的环境
              presets: [
                [
                  // 指定环境插件
                  '@babel/preset-env',
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      'chrome': 33,
                      'ie': 11
                    },
                    // 指定corejs的版本
                    'corejs': 3,
                    // 使用corejs的方式
                    'useBuiltIns': 'usage' // usage 按需加载
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        // 要排除的文件
        exclude: /node_modules/
      },
      // 设置css文件
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 引入postcss
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template: './index.html'})
  ],
  //用来设置引用模块
  resolve: {
    extensions: ['.js', '.ts'] //就是以.ts和.js为后缀名文件
  },
  mode: 'development'
}