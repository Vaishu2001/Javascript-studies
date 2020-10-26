// eslint-disable-next-line no-undef
const path = require('path');//import path from node js path package
const CleanPlugin=require('clean-webpack-plugin');
module.exports={
mode:'development',
entry :'./src/app.js',
output :{
    filename :'app.js',//bundled file 
    path:path.resolve(__dirname,'assets','scripts'),//dirname is the current path file
    publicPath:'assets/scripts'
},
devtool:'cheap-module-eval-source-map',
//devServer:{
    //contentBase:'./'
//}
plugins:[new CleanPlugin.CleanWebpackPlugin()]

};