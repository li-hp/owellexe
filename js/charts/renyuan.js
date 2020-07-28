
    $(function () {
        echartinit8();


   setTimeout(function(){
    echartinit8();
},5000); 
    




   setInterval(function(){
    echartinit8();
 

},60000); 
    

    
    })



    function echartinit8(){
        rr111();
        rr222();
        rr333();
        rr444();
        // rr666();
        // rr777();
        // rr888();

    }

    function rr111() {

        var myChart = echarts.init(document.getElementById('rr111'));
    
        var randome81 = airhumdata;

        let option = {
             tooltip: {
             trigger: 'axis',
             axisPointer: {
                 lineStyle: {
                     color: '#00B2EE'
                     }
                 }
             },
     
             legend: {
             top:'0%',
                 data:['湿度指标'],
                         textStyle: {
                             color: "#fff",
                             fontSize:'24',
                             fontWeight: 'bold',
                 }
             },
     
             grid: {
                 left: '8%',
                 top: '8%',
                 right: '8%',
                 bottom: '7%',
                 containLabel: true
             },
     
             xAxis: [{
                 // name:"分钟前",
                 nameLocation:'center',
                 nameGap:40,
                 nameTextStyle:{
                     color: "#fff",
                     fontSize:'24',
                     fontWeight: 'bold',
                 },
                 type: 'category',
                 data: timeweek,
                 axisLine: {
                     show: true,
                  lineStyle: {
                         color: "rgba(255,255,255,.1)",
                         width: 1,
                         type: "solid"
                     },
                 },
                 axisTick: {
                     show: false,
                 },
                 axisLabel:  {
                         interval: 0,
                        // rotate:50,
                         show: true,
                         splitNumber: 15,
                         textStyle: {
                             color: "#fff",
                             fontSize:'24',
                             fontWeight: 'bold',
                         },
                     },
             }],
     
             yAxis: [{
                 name:"湿度:%",
                 nameTextStyle:{
                     color: "#fff",
                     fontSize:'24',
                     fontWeight: 'bold',
                 },
                 type: 'value',
                 axisTick: {show: false},
                 min:0,
                 max:90,
                 axisLine: {
                     lineStyle: {
                         color: 'rgba(255,255,255,.1)'
                     }
                 },
             axisLabel:  {
                     textStyle: {
                         color: "#fff",
                         fontSize:'24',
                         fontWeight: 'bold',
                     },
                 },
                 splitArea:{
                     show:false,
                     interval:(15-25),
                 },
                 splitNumber: 5,
                 splitLine: {
                     interval:2,
                     lineStyle: {
                         color: 'rgba(255,255,255,.1)',
                     }
                 },
             }],
     
             series: [{
                     name: '湿度指标',
                     type: 'line',
                     smooth: true,
                     symbol: 'circle',
                     showAllSymbol: true,
                     // symbol: 'image://./static/images/guang-circle.png',
                     symbolSize: 20,
                     lineStyle: {
                         normal: {
                             // color: "#53fdfe", // 线条颜色
                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                 offset: 0,
                                 color: '#0080FF'
                             }, {
                                 offset: 1,
                                 color: '#00FFFF'
                             }]),
                             barBorderRadius: 12,
                             width:10
                         },
     
                         borderColor: '#f0f',
                     },
                     itemStyle: {
                         normal: {
                             color: '#00FFFF',
                             borderColor: 'rgba(221, 220, 107, .1)',
                             borderWidth: 30
                         }
                     },
                     data: randome81,
                     markLine:{
                         silent: false,
                         symbol: 'none',
                         label: {
                             show:true,
                             position:'end', // 'start\middle\end'
                             formatter: '{b}',
                             color: "#fff",
                             fontSize:'24',
                             fontWeight: 'bold',
                         },
                         data: [{
                             name: '低',
                             yAxis: 40
                         }, {
                             name: '高',
                             yAxis: 70
                         }],
                         lineStyle:{
                             color:'#8E8E8E',
                         },
                     },
             }]
         };
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }






    function rr222() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('rr222'));
   
    let option = {
        // backgroundColor: "#05224d",
      
        grid: {
            top: '8%',
            left: '5%',
            right: '5%',
            bottom: '8%',
            containLabel: true,
        },
        legend: {
            itemGap: 50,
            show:false,
            data: ['变化趋势' ,'每日数据'],
            textStyle: {
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
        },
        xAxis: [{
            type: 'category',
            boundaryGap: true,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#f9f9f9'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                    margin: 15,
                },
            },
            axisTick: {
                show: false,
            },
            data: timeday
        }],
        yAxis: [{
            name:'办公人数(人)',
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            min: 0,
            max: 240,
            splitNumber: 7,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#0a3256'
                }
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                margin: 20,
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
    
                },
            },
            axisTick: {
                show: true,
            },
        }],
        series: [
            {
            name: '每日数据',
            type: 'bar',
            barWidth: '30px',
            tooltip: {
                show: false
            },
             label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                }
            },
            markLine: {
                silent: false,
                symbol: 'none',
                label: {
                    show:true,
                    position:'end', // 'start\middle\end'
                    formatter: '{b}',
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                data: [
                   
                 {
                    name: '超标',
                    yAxis: 2000,
                    lineStyle:{
                        color:'#FF4500',
                        width:2
                    }
                }],
    
               
            },
        
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = ['#0ec1ff', '#10cdff', '#12daff', '#15ebff', '#17f8ff', '#1cfffb', '#1dfff1'];
                        return colorList[params.dataIndex];
                    },
                    barBorderRadius: [30, 30, 0, 0],
                    shadowBlur: 4,
                }
            },
            data: bangongrenshu
        }]
    };
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    


    function rr333() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('rr333'));
   
   let option = {
        // backgroundColor: "#05224d",
      
        grid: {
            top: '8%',
            left: '5%',
            right: '5%',
            bottom: '8%',
            containLabel: true,
        },
        legend: {
            itemGap: 50,
            show:false,
            data: ['变化趋势' ,'每日数据'],
            textStyle: {
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
        },
        xAxis: [{
            type: 'category',
            boundaryGap: true,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#f9f9f9'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                    margin: 15,
                },
            },
            axisTick: {
                show: false,
            },
            data: timeweek
        }],
        yAxis: [{
            name:'请假人数(人)',
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            min: 0,
            max: 20,
            splitNumber: 7,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#0a3256'
                }
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                margin: 20,
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
    
                },
            },
            axisTick: {
                show: true,
            },
        }],
        series: [
            {
            name: '每日数据',
            type: 'bar',
            barWidth: '30px',
            tooltip: {
                show: false
            },
             label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                }
            },
            markLine: {
                silent: false,
                symbol: 'none',
                label: {
                    show:true,
                    position:'end', // 'start\middle\end'
                    formatter: '{b}',
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                data: [
                   
                 {
                    name: '超标',
                    yAxis: 2000,
                    lineStyle:{
                        color:'#FF4500',
                        width:2
                    }
                }],
    
               
            },
        
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = ['#0ec1ff', '#10cdff', '#12daff', '#15ebff', '#17f8ff', '#1cfffb', '#1dfff1'];
                        return colorList[params.dataIndex];
                    },
                    barBorderRadius: [30, 30, 0, 0],
                    shadowBlur: 4,
                }
            },
            data: qingjiarenshu
        }]
    };
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function rr444() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('rr444'));
   
   let option = {
        // backgroundColor: "#05224d",
      
        grid: {
            top: '8%',
            left: '5%',
            right: '5%',
            bottom: '8%',
            containLabel: true,
        },
        legend: {
            itemGap: 50,
            show:false,
            data: ['变化趋势' ,'每日数据'],
            textStyle: {
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
        },
        xAxis: [{
            type: 'category',
            boundaryGap: true,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#f9f9f9'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                    margin: 15,
                },
            },
            axisTick: {
                show: false,
            },
            data: timeweek
        }],
        yAxis: [{
            name:'来访人数(人)',
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            min: 0,
            max: 20,
            splitNumber: 7,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#0a3256'
                }
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                margin: 20,
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
    
                },
            },
            axisTick: {
                show: true,
            },
        }],
        series: [
            {
            name: '每日数据',
            type: 'bar',
            barWidth: '30px',
            tooltip: {
                show: false
            },
             label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                }
            },
            markLine: {
                silent: false,
                symbol: 'none',
                label: {
                    show:true,
                    position:'end', // 'start\middle\end'
                    formatter: '{b}',
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                data: [
                   
                 {
                    name: '超标',
                    yAxis: 2000,
                    lineStyle:{
                        color:'#FF4500',
                        width:2
                    }
                }],
    
               
            },
        
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = ['#0ec1ff', '#10cdff', '#12daff', '#15ebff', '#17f8ff', '#1cfffb', '#1dfff1'];
                        return colorList[params.dataIndex];
                    },
                    barBorderRadius: [30, 30, 0, 0],
                    shadowBlur: 4,
                }
            },
            data: laifangrenshu
        }]
    };
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    




    function rr666() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('rr666'));
   
    let option = {
        // backgroundColor: "#05224d",
      
        grid: {
            top: '8%',
            left: '5%',
            right: '5%',
            bottom: '8%',
            containLabel: true,
        },
        legend: {
            itemGap: 50,
            show:false,
            data: ['变化趋势' ,'每日数据'],
            textStyle: {
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
        },
        xAxis: [{
            type: 'category',
            boundaryGap: true,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#f9f9f9'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                    margin: 15,
                },
            },
            axisTick: {
                show: false,
            },
            data: timeday
        }],
        yAxis: [{
            name:'会议人数(人)',
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            min: 0,
            max: 240,
            splitNumber: 7,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#0a3256'
                }
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                margin: 20,
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
    
                },
            },
            axisTick: {
                show: true,
            },
        }],
        series: [
            {
            name: '每日数据',
            type: 'bar',
            barWidth: '30px',
            tooltip: {
                show: false
            },
             label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                }
            },
            markLine: {
                silent: false,
                symbol: 'none',
                label: {
                    show:true,
                    position:'end', // 'start\middle\end'
                    formatter: '{b}',
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                data: [
                   
                 {
                    name: '超标',
                    yAxis: 2000,
                    lineStyle:{
                        color:'#FF4500',
                        width:2
                    }
                }],
    
               
            },
        
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = ['#0ec1ff', '#10cdff', '#12daff', '#15ebff', '#17f8ff', '#1cfffb', '#1dfff1'];
                        return colorList[params.dataIndex];
                    },
                    barBorderRadius: [30, 30, 0, 0],
                    shadowBlur: 4,
                }
            },
            data: bangongrenshu
        }]
    };
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function rr777() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('rr777'));
   
   let option = {
        // backgroundColor: "#05224d",
      
        grid: {
            top: '8%',
            left: '5%',
            right: '5%',
            bottom: '8%',
            containLabel: true,
        },
        legend: {
            itemGap: 50,
            show:false,
            data: ['变化趋势' ,'每日数据'],
            textStyle: {
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
        },
        xAxis: [{
            type: 'category',
            boundaryGap: true,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#f9f9f9'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                    margin: 15,
                },
            },
            axisTick: {
                show: false,
            },
            data: timeweek
        }],
        yAxis: [{
            name:'站立办公(人)',
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            min: 0,
            max: 20,
            splitNumber: 7,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#0a3256'
                }
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                margin: 20,
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
    
                },
            },
            axisTick: {
                show: true,
            },
        }],
        series: [
            {
            name: '每日数据',
            type: 'bar',
            barWidth: '30px',
            tooltip: {
                show: false
            },
             label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                }
            },
            markLine: {
                silent: false,
                symbol: 'none',
                label: {
                    show:true,
                    position:'end', // 'start\middle\end'
                    formatter: '{b}',
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                data: [
                   
                 {
                    name: '超标',
                    yAxis: 2000,
                    lineStyle:{
                        color:'#FF4500',
                        width:2
                    }
                }],
    
               
            },
        
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = ['#0ec1ff', '#10cdff', '#12daff', '#15ebff', '#17f8ff', '#1cfffb', '#1dfff1'];
                        return colorList[params.dataIndex];
                    },
                    barBorderRadius: [30, 30, 0, 0],
                    shadowBlur: 4,
                }
            },
            data: laifangrenshu
        }]
    };
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    
    function rr888() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('rr888'));
   
    let option = {
        // backgroundColor: "#05224d",
      
        grid: {
            top: '8%',
            left: '5%',
            right: '5%',
            bottom: '8%',
            containLabel: true,
        },
        legend: {
            itemGap: 50,
            show:false,
            data: ['变化趋势' ,'每日数据'],
            textStyle: {
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
        },
        xAxis: [{
            type: 'category',
            boundaryGap: true,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#f9f9f9'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                    margin: 15,
                },
            },
            axisTick: {
                show: false,
            },
            data: timeweek
        }],
        yAxis: [{
            name:'开窗数',
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            min: 0,
            max: 20,
            splitNumber: 7,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#0a3256'
                }
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                margin: 20,
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
    
                },
            },
            axisTick: {
                show: true,
            },
        }],
        series: [
            {
            name: '每日数据',
            type: 'bar',
            barWidth: '30px',
            tooltip: {
                show: false
            },
             label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                }
            },
            markLine: {
                silent: false,
                symbol: 'none',
                label: {
                    show:true,
                    position:'end', // 'start\middle\end'
                    formatter: '{b}',
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                data: [
                   
                 {
                    name: '超标',
                    yAxis: 2000,
                    lineStyle:{
                        color:'#FF4500',
                        width:2
                    }
                }],
    
               
            },
        
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = ['#0ec1ff', '#10cdff', '#12daff', '#15ebff', '#17f8ff', '#1cfffb', '#1dfff1'];
                        return colorList[params.dataIndex];
                    },
                    barBorderRadius: [30, 30, 0, 0],
                    shadowBlur: 4,
                }
            },
            data: laifangrenshu
        }]
    };
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    

    
    
  
    
    //生成从minNum到maxNum的随机数
    function randomNum(minNum,maxNum){
        switch(arguments.length){
            case 1:
                return parseInt(Math.random()*minNum+1,10);
            break;
            case 2:
                return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
            break;
                default:
                    return 0;
                break;
        }
    }
    export{echartinit8};
    