// v-input组件
export let vInput = {
    props: {
        value: {
            type: [String, Number],
            default: ''
        }
    },
    // data() {
    //     return {
    //         value: ''
    //     }
    // },
    render: function(createElement) {
        let _this = this;
        return createElement(
            'div',
            [
                createElement('span', {
                        style: {
                            marginRight: '35px'
                        }
                    },
                    '昵称'
                ),
                createElement(
                    'input',
                    {
                        attrs: {
                            type: 'text'
                        },
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
                                _this.$emit('input', event.target.value);
                            }
                        }
                    }
                ),
            ]
        )
    }
}

// textArea组件
export let vTextarea = {
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    // data() {
    //     return {
    //         value: ''
    //     }
    // },
    render: function(createElement) {
        let _this = this;

        return createElement('div', 
            {
                style: {
                    display: 'flex',
                    alignItems: 'center'
                }
            },
            [
                createElement('span', '留言内容'),
                createElement('textarea', {
                    attrs: {
                        placeholder: '请输入留言内容'
                    },
                    class: {
                        'textarea-class': true
                    },
                    style: {
                        marginTop: '20px',
                        marginLeft: '10px'
                    },
                    domProps: {
                        value: this.value
                    },
                    ref: 'message',
                    on: {
                        input: function(event) {
                            _this.value = event.target.value;
                            _this.$emit('input', event.target.value);
                        }
                    }
                })
            ]
        )
    },
    methods: {
        focus() {
            this.$refs.message.focus();
        }
    }
}

// 列表组件
export let list = {
    props: {
        list: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    render: function(createElement) {
        let _this = this;
        let list = [];
        console.log(this.list)
        this.list.forEach((msg, index) => {
            let node = createElement('div', {
                attrs: {
                    class: 'list-item'
                }
            }, [
                createElement('span', msg.name + ''),
                createElement('div', {
                    attrs: {
                        class: 'list-item'
                    }
                }, [
                    createElement('p', msg.message),
                    createElement('a', {
                        attrs: {
                            class: 'list-reply'
                        },
                        on: {
                            click: function() {
                                _this.handleReply(index)
                            }
                        }
                    }, '回复')
                ])
            ])

            list.push(node);
            console.log(list)
        });

        if (this.list.length) {
            console.log('不为空')
            return createElement('div', {
                    attrs: {
                        class: 'list'
                    },
                },
                list
            )
        } else {
            console.log('为空')
            return createElement('div', {
                attrs: {
                    class: 'list-nothing'
                }
            }, '留言列表为空')
        }
    },
    methods: {
        // 点击回复
        handleReply(index) {
            console.log('回复1')
            this.$emit('reply', index);
        }
    }
}