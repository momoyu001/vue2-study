<template>
    <!-- form表单和v-model -->
    <div>
        <!-- 
            checkbox
         -->
        <div class="area-title">checkbox</div>
        <input type="checkbox" v-model="checked" value="html" id="html">
        <label for="html">html</label>
        <input type="checkbox" v-model="checked" value="css" id="css">
        <label for="css">css</label>
        <div>{{ '选中的值：' + checked }}</div>

        <!-- 
            radio
         -->
        <div class="area-title parting-line">radio</div>
        <input type="radio" v-model="radio" value="vue" id="vue">
        <label for="vue">vue</label>
        <input type="radio" v-model="radio" value="react" id="react">
        <label for="react">react</label>
        <div>{{ '选中的值：' + radio }}</div>

        <!-- 
            select:
            如果有value属性，v-model会有限匹配value的值，如果没有会直接匹配option的text
         -->
        <div class="area-title parting-line">select</div>
        <select v-model="selected" > 
            <option>html </option> 
            <option value="js"> JavaScrpt</option>
            <option>css</option> 
        </select> 
        <p>选择的项是：{{ selected }}</p>

        <select style="margin-top: 20px" v-model="selectedMultiple" multiple> 
            <option>html1</option> 
            <option value="js1"> JavaScrpt1</option>
            <option>css1</option> 
        </select> 
        <p>选择的项是：{{ selectedMultiple }}</p>

        <!-- 
            修饰符：
                .lazy：v-model默认是在input事件中同步输入框的数据，使用.lazy可以转变为在change事件中同步
         -->
        <div class="area-title parting-line">修饰符：.lazy</div>
        <div>
            <input class="input" type="text" v-model="inputVlaue" />
        </div>
        <p>输入框的值-实时更新：{{ inputVlaue }}</p>
        <div>
            <input class="input" type="text" v-model.lazy="inputVlaueLazy">
        </div>
        <p>输入框的值-非实时更新：{{ inputVlaueLazy }}</p>

        <!-- 
            修饰符：
                .number：将输入转换为Number类型
         -->
        <div class="area-title parting-line">修饰符：.number</div>
        <div>
            <input class="input" type="text" v-model.number="inputVlaueNumber" />
        </div>
        <p>输入框的值-number：{{ inputVlaueNumber }}</p>
        <p>输入的值类型 typeof {{ typeof(inputVlaueNumber) }}</p>

        <!-- 
            修饰符：
                .trim：自动过滤输入的首尾空格
         -->
        <div class="area-title parting-line">修饰符：.trim</div>
        <div>
            <input class="input" type="text" v-model="inputVlaueNotTrim" />
        </div>
        <p>输入框的值-不处理：{{ inputVlaueNotTrim }}</p>
        <div>
            <input class="input" type="text" v-model.trim="inputVlaueTrim" />
        </div>
        <p>输入框的值-trim后：{{ inputVlaueTrim }}</p>
    </div>
</template>

<script>
export default {
    name: 'formModel',
    data() {
        return {
            checked: [],
            radio: '',
            selected: '',
            selectedMultiple: ['html1', 'js1'],
            inputVlaue: null,
            inputVlaueLazy: null,
            inputVlaueNumber: null,
            inputVlaueNotTrim: null,
            inputVlaueTrim: null,
        }
    }
}
</script>


<style scoped>
.area-title {
    font-size: 20px;
    font-weight: 500;
    color: #173dea;
    width: 300px;
    height: 32px;
    line-height: 32px;
    border-bottom: 1px solid #ff0000;
}

.parting-line {
    margin-top: 20px;
}

.input {
    border: 1px solid #000;
}
</style>