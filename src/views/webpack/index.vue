<template>
    <div class="webpack-frame">
        <!-- 
            在webpack的世界里，一张图片、一个css、甚至一个字体，都成为模块。
            webpack里导入css文件：
                import 'src/styles/index.css'
                require('src/styles/index/css')
            webpack主要使用场景是SPA，SPA通常是由一个HTML文件和一堆按需加载的js组成
            归根到底，webpack就是一个.js文件

            *****  入口（entry）、出口（output）、加载器（loaders）、插件（plugins）  ****

         -->
        
        <!-- 
            ES6：import / export    导入导出模块，一个模块就是一个js文件
         -->
        
        <!-- 
            1、新建文件夹demo
            2、npm init
            3、npm install webpack --save-dev
                --save-dev 开发依赖
            4、npm install webpack-dev-server --save-dev
                启动一个服务器、热更新、接口代理
            5、webpack.config.js文件--配置文件
                let config = {

                }

                module.exports = config; // 相当于 export default config
            6、启动webpack-dev-server服务的脚本,packages.json文件
                "dev": "webpack-dev-server --open --config webpack.config.js"
                --config 指向读取配置文件的路径
                --open 执行命令是自动在浏览器打开页面，默认地址 127.0.0.1:8080
                "webpack-dev-server --host 172.172.172.1 --port 8888 --open --config webpack.config.js"

            7、配置中必选的两项：入口(Entry) 出口(Output)
                let config = {
                    entry: {
                        main: './main'
                    },
                    output: {
                        path: path.join(__dirname, './dist'),   // 存放打包后文件的输出目录
                        publicPath: '/dist/',                   // 指定资源文件引用的目录，也可以填写CDN路径
                        filename: 'main.js'                     // 指定输出文件的名称
                    }
                    // 打包后的文件会存储在demo/dist/main.js文件中
                }
            
            8、对各种后缀的文件进行处理---loaders
                let config = {
                    // ...
                    module: {
                        rules: [    // 指定一系列的loaders，每一个loaders都必须包含test和use两个选项
                            {
                                test: /\.css$/,     // 要编译的文件后缀
                                use: [              // 可以是数组也可以是字符串，如果是数组，编译顺序就是从后往前
                                    'style-loader',
                                    'css-loader'
                                ]
                            }
                        ]
                    }
                }
            
            9、插件，功能强大且可以定制
                let ExtractTextPlugin = required('extract-text-webpack-plugin');    // 提取css文件
                let config = {
                    // ...
                    module: {
                        rules: [
                            {
                                test: /\.css$/,
                                use: ExtractTextPlugin.extract({
                                    use: 'caa-loader',
                                    fallback: 'style-loader'
                                })
                            }
                        ]
                    },
                    plugins: [
                        // 重命名提取后的css文件
                        new ExtractTextPlugin('main.css')
                    ]
                }
         -->

        <!-- 
            1、vue单文件的使用
                vue-loader
                vue-style-loader
                vue-template-compiler
                vue-hot-repoad-api
                // ES6转换
                babel
                babel-loader
                babel-core
                babel-plugin-transform-runtime
                babel-preset-es2015
                babel-runtime
            
            2、加载vue文件时，同时会对<template> <script> <style>处理，所以有 options: {}选项
                rules: [
                    {
                        test: /\.vue$/,
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                css: ExtractTextPlugin.extract({
                                    use: 'css-loader',
                                    fallback: 'vue-style-loader'
                                })
                            }
                        }
                    }
                ]
            
            3、babel
                .babelrc文件：依赖此文件来编译ES6代码
                {
                    "presets": ["es2015"],
                    "plugins": ["transform-runtime"],
                    "comments": false
                }
            
            4、图片文字
                url-loader
                file-loader
            
            5、打包会用到的依赖
                webpack-merge       // 合并两个webpack配置文件
                html-webpack-plugin // 生成HTML文件
         -->
    </div>
</template>

<script>
export default {
    name: 'webpack',
    components: {},
    filters: {},
    mixins: [],
    model: {},
    props: {},
    data() {
        return {}
    },
    computed:{},
    watch: {},
    created() {
        console.log('webpack  ---  created');
    },
    mounted() {
        console.log('webpack  ---   mounted');
    },
    updated() {},
    activated() {},
    deactiveated() {},
    beforeDestroy() {},
    destroyed() {},
    methods: {}
}
</script>

<style scoped lang="scss">
</style>
