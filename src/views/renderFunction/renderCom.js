export let renderCom1 = {
    data() {
        return {
            that: this
        }
    },
    props: {
        level: {
            type: Number,
            default: null,
            required: true
        },
        title: {
            type: String,
            default: null
        }
    },
    render: function(createElement) {
        return createElement(
            'h' + this.level,   // HTML标签
            [                   // 子节点
                createElement(
                    'a',
                    {
                        domProps: {
                            href: '#' + this.title
                        }
                    },
                    this.$slots.default         // 子组件--slot的部分
                )
            ]
        )
    },
    // template: `
    //     <h1>
    //         <a href="#title">
    //             <slot></slot>
    //         </a>
    //     </h1>
    // `
}

// 改写之前
export let myCom = {
    template: `
        <div 
            id="element"
            :class="{ show: show }"
            @click="handleClick"
        >
        文本内容
        </div>
    `,
    data() {
        return {
            show: true
        }
    },
    methods: {
        handleClick: function() {
            console.log('clicked!!!');
        }
    }
}

export let myComRender = {
    // 这里不能改写成箭头函数，改写之后，this不是指向改vue实例，获取不到对应数据
    render: function(createElement) {
        return createElement(
            'div',  // 第一个参数：HTML标签或组件或一个函数
            {       // 第二个参数，属性的数据对象，可选
                class: {    // 动态class
                    'show': this.show
                },
                attrs: {    // 普通HTML特性
                    id: 'element'
                },
                on: {       // 绑定点击事件
                    click: this.handleClick
                }
            },
            '文本内容'  // 子节点，可选
        )
    },
    data() {
        return {
            show: true
        }
    },
    methods: {
        handleClick() {
            console.log('click!!!!')
        }
    }
}

// 实现v-if
export let renderCom2 = {
    render: function(createElement) {
        if (this.show) {
            return createElement('p', 'show的值为true')
        } else {
            return createElement('p', 'show的值为false')
        }
    },
    props: {
        show: {
            type: Boolean,
            default: false
        }
    }
}

// 实现 v-model
// v-model 就是 prop： value 和 event：input组合使用的一个语法糖
export let renderCom3 = {
    render: function(createElement) {
        let _this = this;
        return createElement(
            'div',
            [
                createElement(
                    'input',
                    {
                        class: {
                            'input-class': true
                        },
                        style: {
                            'margin-top': '10px'
                        },
                        domProps: {     // dom属性
                            value: this.value   // input的value属性
                        },
                        on: {
                            input: function(event) {
                                _this.value = event.target.value;
                            }
                        }
                    }
                ),
                createElement('p', 'value: ' + this.value)  // 子节点p,显示value
            ],
        )
    },
    data() {
        return {
            value: ''
        }
    }
}

// 事件修饰符
export let renderCom4 = {
    render: function(createElement) {
        let _this = this;
        let listNode;
        // 渲染聊天内容列表
        if (this.list.length) {
            listNode = createElement('ul', this.list.map( item => {
                return createElement('li',
                    {
                        style: {
                            height: '32px',
                            lineHeight: '32px',
                            listType: 'none'
                        }
                    },
                    item
                );
            }));
        } else {
            listNode = createElement('p',
            {
                style: {
                    height: '32px',
                    lineHeight: '32px'
                }
            },
            '暂无聊天内容');
        }

        return createElement('div', [
            listNode,
            createElement('input', {
                attrs: {
                    placeholder: '输入内容，按下回车键发送'
                },
                style: {
                    width: '200px',
                    height: '32px',
                    lineHeight: '32px',
                    border: '1px solid #d3d3d3',
                    borderRadius: '4px'
                },
                on: {
                    keyup: function(event) {
                        if (event.keyCode != 13) return;
                        _this.list.push(event.target.value);
                        event.target.value = '';
                    }
                }
            })
        ])
    },
    data() {
        return {
            value: '',
            list: []
        }
    }
}

// slot
export let renderCom5 = {
    render: function(createElement) {
        if (this.$slots.default === undefined) {
            return createElement('div', '没有使用slot时显示的文本');
        } else {
            return createElement('div', this.$slots.default);
        }
    }
}