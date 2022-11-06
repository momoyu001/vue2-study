<template>
    <div class="echart-frame">
        <div id="echart" style="width: 600px; height: 400px;"></div>
    </div>
</template>

<script>
export default {
    name: 'echart',
    components: {},
    filters: {},
    mixins: [],
    model: {},
    props: {},
    data() {
        return {
            echartInstance: null,
            links: [
                {
                    source: '节点1',
                    target: '节点2'
                }, {
                    source: '节点2',
                    target: '节点3'
                }, {
                    source: '节点3',
                    target: '节点4'
                }, {
                    source: '节点4',
                    target: '节点5'
                }
            ],
            data: [
                { id: '1', name: '节点1', level: '1', color: '#5cb87a' },
                { id: '2', name: '节点2', level: '2', color: '#e6a23c' },
                { id: '3', name: '节点3', level: '3', color: '#f56c6c' },
                { id: '4', name: '节点4', level: '4', color: '#8896b3' },
                { id: '5', name: '节点5', level: '5', color: '#ff0000' }
            ]
        }
    },
    computed:{},
    watch: {},
    created() {},
    mounted() {
        this.initEchart();
    },
    updated() {},
    activated() {},
    deactiveated() {},
    beforeDestroy() {},
    destroyed() {},
    methods: {
        // 初始化echart流程图
        initEchart() {
            this.echartInstance = this.$echarts.init(document.getElementById('echart'));
            let option = {
                title: {
                    text: ''
                },
                tooltip: {
                    show: false
                },
                nodeScaleRatio: 0,
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                series : [
                    {
                        type: 'graph',
                        layout: 'none',
                        symbol: "rectangle",
                        symbolSize: function() {
                            return [80, 32]
                        },
                        roam: false,
                        label: {
                            normal: {
                                show: true,
                            }
                        },
                        edgeSymbol: ['rect', 'arrow'],
                        edgeSymbolSize: [null, 8],
                        edgeLabel: {
                            normal: {
                                textStyle: {
                                    fontSize: 20
                                },
                            }
                        },
                        data: this.computedAxis(),
                        // links: [],
                        links: this.links,
                        lineStyle: {
                            normal: {
                                opacity: 0.9,
                                width: 1,
                                curveness: 0
                            }
                        },
                        color: ['#5cb87a', '#e6a23c', '#f56c6c', '#8896b3', '#ff0000']
                    }
                ]
            }

            this.echartInstance.setOption(option);

        },
        // 计算坐标
        computedAxis() {
            let data2 = [];
            this.data.map( item => {
                let dataItem = {
                    name: item.name,
                    x: 100,
                    y: Number(item.level) * 120,
                    color: item.color
                };

                data2.push(dataItem);
            })

            return data2;
        }
    }
}
</script>

<style scoped lang="scss">
</style>
