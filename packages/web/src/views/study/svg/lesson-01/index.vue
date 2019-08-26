<template>
  <div class="page">
    <div style="width: 200px;height: 200px;outline:1px solid #333;margin: 50px auto;">

    <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">


        <title>cat</title>
        <desc>i love cat</desc>

        <circle cx="70" cy="95" r="50" style="stroke:black;fill:none;"></circle>
        <circle cx="55" cy="80" r="5" style="stroke:black;fill:#339933;"></circle>
        <circle cx="85" cy="80" r="5" style="stroke:black;fill:#339933;"></circle>
        <g id="whiskers">
            <line x1="75" y1="95" x2="135" y2="85" style="stroke: black;"></line>  <!--x1y1  x2y2 两点确定一条直线-->
            <line x1="75" y1="95" x2="135" y2="105" style="stroke: black;"></line>
        </g>
        <use xlink:href="#whiskers" transform="scale(-1 1) translate(-140 0)"></use>
        <!--ear 一系列的点，连起来的形状-->
        <polyline points="108 62,90 10,70 45,50 10,32 62" style="stroke: blue;fill:none;"></polyline>
        <!--mouth-->
        <polyline points="35 110,45 120,95 120,105 110" style="stroke: black;fill:none;"></polyline>

        <!--移动到坐标（75 90）绘制一条到坐标（65 90）的直线 以X为半径5 Y半径为10 绘制一个椭圆 回到坐标（75 90）-->
        <path d="M 75 90 L 65 90 A 5 10 0 0 0 75 90" style="stroke: black;fill:#ffcccc;"></path>

        <text x="20" y="190" style="font-family: sans-serif;font-size: 14pt;stroke:none;fill:green;">the little cat</text>

    </svg>

</div>
<div style="width: 600px;height: 300px;outline:1px solid #333;margin: 50px auto;">
   
    <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="154" cy="154" rx="150" ry="120" style="fill:#999999"></ellipse>
        <ellipse cx="152" cy="152" rx="150" ry="120" style="fill:#cceeff"></ellipse>

       <image xlink:href="./assets/1.jpg" x="72" y="92" width="160" height="120" />
    </svg>

</div>

<svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" stroke="#333">
    <g fill="none" fill-rule="evenodd" stroke-width="2">
        <circle cx="28" cy="28" r="11.9452">
            <animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate>
            <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate>
        </circle>
        <circle cx="28" cy="28" r="19.4844">
            <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate>
            <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate>
        </circle>
    </g>
</svg>

<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" stroke="none">
    <rect x="0" y="0" width="20" height="20" style="stroke: black;fill:green;fill-opacity: .25;">
        <animate attributeName="width" attributeType="XML" from="20" to="200" begin="0s" dur="8s" fill="freeze" />
        <animate attributeName="height" attributeType="XML" from="20" to="150" begin="0s" dur="8s" fill="freeze" />
        <animate attributeName="fill-opacity" attributeType="CSS" from=".25" to="1" begin="0s" dur="3s" fill="freeze" />
        <animate attributeName="fill-opacity" attributeType="CSS" from="1" to=".25" begin="3s" dur="3s" fill="freeze" />
    </rect>
</svg>


<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" >
    <circle cx="60" cy="60" r="30" style="fill:#f9f;stroke: gray;">
        <animate id="c1" attributeName="r" attributeType="XML" begin="0s" dur="4s" from="30" to="10" fill="freeze" repeatCount="3"/>
    </circle>

    <circle cx="160" cy="60" r="10" style="fill:#9f9;stroke: gray;">
        <animate attributeName="r" attributeType="XML" begin="c1.end" dur="4s" from="10" to="30" fill="freeze" />
    </circle>

    <circle cx="220" cy="60" r="30" style="fill:#9f9;stroke: gray;">
        <animate attributeName="r" attributeType="XML" begin="c1.begin+1.25s" dur="4s" from="30" to="10" fill="freeze" />
    </circle>

    <circle cx="220" cy="160" r="30" style="fill:#9f9;stroke: gray;">
        <animate attributeName="r" attributeType="XML" begin="c1.repeat(1)" dur="4s" from="30" to="10" fill="freeze" />
    </circle>
</svg>

<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" >
   <polygon points="30 30 70 30 90 70 10 70" style="fill:#fcc;stroke: black;">
       <animate id="animation" attributeName="points" attributeType="XML" to="50 30 70 50 50 90 30 50" begin="0s" dur="2s" fill="freeze" />
   </polygon>

    <path d="M15 50 Q 40 15,50 50,65 32,100 40" style="fill:none;stroke: black;" transform="translate(0,50)">
        <animate attributeName="d" attributeType="XML" to="M50 15 Q 15 40,50 50,32 65,40 100" begin="0s" dur="4s" fill="freeze" />

    </path>
</svg>

<svg width="300" height="200" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" >
    <title>动画叠加</title>
    <g transform="translate(100,60)">
        <rect x="-10" y="-10" width="20" height="20" style="fill:#ff9;stroke: black;stroke-width: 1">
            <animateTransform attributeType="XML" attributeName="transform" type="scale" from="1" to="4 2"
                              additive="" begin="0s" dur="4s" fill="freeze" />
            <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="0" to="45"
            additive="sum" begin="0s" dur="4s" fill="freeze"
            />
        </rect>
    </g>
</svg>

<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" >
    <title>路径运动</title>
    <rect x="0" y="0" width="30" height="30" style="fill: #ccc;"><animateMotion form="0,0" to="60,30" dur="4s" fill="freeze" /></rect>
    <circle cx="30" cy="30" r="15" style="fill:#cfc;stroke: green;"><animateMotion form="0,0" to="60,30" dur="4s" fill="freeze" /></circle>

    <!--要移动的三角形路径-->
    <path id="cubicCurve" d="M50,125 C 100,25 150,225,200,125" stroke="blue" fill="none"></path>

    <path d="M-10,-3 L10,-3 L0,-25z" style="fill: #fff;stroke: red;">
        <!-- <animateMotion path="M50,125 C 100,25 150,225,200,125" dur="6s" rotate="auto" fill="freeze"/>-->

        <animateMotion dur="6s" rotate="auto" keyPoints="0;.2;.8;1" keyTimes="0;.33;.66;1" calcMode="linear" fill="freeze">
            <mpath xlink:href="#cubicCurve"></mpath>
        </animateMotion>
    </path>
</svg>
  </div>
</template>

<script>
export default {
  name: 'svg-lesson-01'
}
</script>
