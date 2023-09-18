const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		index: "./src/index.js",
		dropdown: "./src/dropdown.js",
		"image-slider": "./src/image-slider.js",
	},
	devServer: {
		static: "./dist",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "img/[name]",
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	optimization: {
		runtimeChunk: "single",
	},
};
