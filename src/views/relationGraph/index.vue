<template>
    <div>
        <div style="height: 400px; width: 500px; border: 1px solid #ff0000">
            <RelationGraph ref="seeksRelationGraph" :options="graphOptions" :on-node-click="onNodeClick" :on-line-click="onLineClick" />
        </div>

        <div id="echart" style="width: 600px; height: 400px;"></div>
    </div>
</template>

<script>
import RelationGraph from 'relation-graph'
export default {
    name: 'relationGraph',
    components: {
        RelationGraph
    },
    filters: {},
    mixins: [],
    model: {},
    props: {},
    data() {
        return {
            graphOptions: {
                "layouts": [
                    {
                        "label": "中心",
                        "layoutName": "tree",
                        "layoutClassName": "seeks-layout-center",
                        "defaultJunctionPoint": "border",
                        "defaultNodeShape": 0,
                        "defaultLineShape": 1,
                        'centerOffset_x': 0,
                        'centerOffset_y': -120,
                        "distance_coefficient": 1
                    }
                ],
                "allowShowMiniNameFilter": false,
                "allowShowMiniToolBar": false,
                "defaultNodeShape": 1,
                "defaultLineShape": 1,
                "defaultNodeWidth": "80",
                "defaultNodeHeight": "32",
                "defaultNodeBorderWidth": 0,
                "defaultJunctionPoint": "tb",
                "defaultShowLineLabel": false,
                "disableDragNode": true,
                "disableZoom": true,
                "disableDefaultClickEffect": true,
            },
            graph_json_data: {
                rootId: 'a',
                nodes: [
                    { id: 'a', text: 'A', color: '#5cb87a', disableDefaultClickEffect: true, opacity: 0 },
                    { id: 'b', text: 'B', color: '#e6a23c', disableDefaultClickEffect: true },
                    { id: 'c', text: 'C', color: '#f56c6c', disableDefaultClickEffect: true },
                    { id: 'd', text: 'D', color: '#8896b3', disableDefaultClickEffect: true }
                ],
                links: [
                    { from: 'a', to: 'b', text: '关系1', isHide: true },
                    { from: 'b', to: 'c', text: '关系2' },
                    { from: 'c', to: 'd', text: '关系3' }
                ],
            }
        }
    },
    computed:{},
    watch: {},
    created() {},
    mounted() {
        // this.showSeeksGraph();
    },
    updated() {},
    activated() {},
    deactiveated() {},
    beforeDestroy() {},
    destroyed() {},
    methods: {
        showSeeksGraph() {
            console.log(this.graph_json_data);
            // 以上数据中的node和link可以参考"Node节点"和"Link关系"中的参数进行配置 
            this.$refs.seeksRelationGraph.setJsonData(this.graph_json_data, (seeksRGGraph) => {
                // Called when the relation-graph is completed 
            })
        },
        onNodeClick(nodeObject, $event) {
            console.log('onNodeClick:', nodeObject)
        },
        onLineClick(lineObject, $event) {
            console.log('onLineClick:', lineObject)
        },
    }
}
</script>

<style scoped lang="scss">
.rel-map-canvas {
    width: 500px;
}
</style>
