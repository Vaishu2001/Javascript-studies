const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CleanPlugin=require('clean-webpack-plugin');
const path = require('path');//import path from node js path package
module.exports={
mode:'production',
entry :'./src/app.js',
output :{
    filename :'app.js',//bundled file 
    path:path.resolve(__dirname,'assets','scripts'),//dirname is the current path file
    publicPath:'assets/scripts'
},
devtool:'cheap-source-map',
//devServer:{
    //contentBase:'./'
//}
plugins:[new CleanWebpackPlugin.CleanWebpackPlugin()]
};