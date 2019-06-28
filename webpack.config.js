const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');


module.exports = [
	{
		mode: 'development',
		entry: './src/js/index.js',
		output: {
			filename: 'index.js',
			path:  path.resolve(__dirname + '/dist/js')
		}
	},
	{
		mode: 'development',
		entry: './src/css/style.scss',
		module: {
	      rules: [
	        {test: /\.scss$/, use: [
							{
								loader: 'file-loader',
								options: {
									name: 'css/style.css',
								}
							},
              {loader: 'extract-loader'},
	            {loader: 'css-loader'},
	            {loader: 'sass-loader'}
	          ]}
	      ]
		},
		plugins: [
			new CopyPlugin([
				{ from: path.resolve(__dirname + '/src/img'), to: path.resolve(__dirname + '/dist/img') }
			]),
		],
	}
];
