<template>
    <div class="canvas-arc">
        <h1 class="title"> canvas.arc方法</h1>
        <h2 class="title">arc() 方法创建弧/曲线（用于创建圆或部分圆）。</h2>
        <ul>
            <li class="title">提示：如需通过 arc() 来创建圆，请把起始角设置为 0，结束角设置为 2*Math.PI。</li>
            <li class="title"> 提示：请使用 stroke() 或 fill() 方法在画布上绘制实际的弧。</li>
        </ul>
        <canvas id="myCanvas" width="500" height="500" style="background-color:black;"></canvas>
    </div>
</template>

<script lang="ts" setup>
import { onBeforeMount,onMounted,nextTick } from 'vue';
onMounted(()=>{
    nextTick(()=>{
        renderArc()
    })
})
const renderArc = () => {
    // 1.获取canvas，绘制画布
    const canvasDOM = document.getElementById("myCanvas");
    const canvas = canvasDOM.getContext("2d");
    console.log(canvasDOM.getContext("2d"))


    // 设置线条样式
    canvas.lineWidth="3";
    canvas.strokeStyle = "white";

    // 2. 绘制线条
    canvas.beginPath();
    canvas.arc(250,250,50,0,2*Math.PI)
    canvas.closePath();
    canvas.stroke();
}
</script>

<style lang="less" scoped>
    .canvas-arc {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .title {
            margin-bottom: 0px;
        }
    }
</style>