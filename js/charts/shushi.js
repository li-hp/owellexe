$(function(){
    echartinit4();

          
setTimeout(function(){

    echartinit4();
 

},5000); 
setInterval(function(){

   echartinit4();
 

},60000); 
    



})
function echartinit4(){
    ss111();
    ss222();
     ss333();  
  ss444();
    ss666();


   
   
    ss777();

}



function ss111() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('ss111'));

    var data=shushidata;

    var voicedata=data[0].value;
    if (voicedata<60) data[0].name="舒适";
    else  data[0].name="不适";

    
    var airdata=data[1].value;
    if (airdata<600) data[1].name="舒适";
    else  data[1].name="不适";

        
    var humdata=data[2].value;
    if (humdata>40&&humdata<60) data[2].name="舒适";
    else  data[2].name="一般";

    var temdata=data[3].value;
    if (temdata>23&&temdata<26) data[3].name="舒适";
    else  data[3].name="一般";





















var titleArr= [], seriesArr=[];
let colors=[['#7bbfd4'],['#6bdde2', '#ffdcc3'],['#fd6f97', '#fed4e0'],['#ffc257', '#ffedcc'], ['#a181fc', '#e3d9fe']]
let leibie=['噪声','照明','湿度','温度']
data.forEach(function(item, index){
        titleArr.push(
            {
                text:leibie[index]+'  '+ item.name,
                left: index%2*30 + 51 +'%',
                top:parseInt(index/2)*50+35+'%',
               
              
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '35',
                    // fontWeight: 400,
                    color: colors[index][0],
                    textAlign: 'center',
                },
            }        
        );
        seriesArr.push(
            {
                name: item.name,
                type: 'pie',
                clockWise: false,
                radius: [90, 90],
                itemStyle:  {
                    normal: {
                        color: colors[index][0],
                        shadowColor: colors[index][0],
                        shadowBlur: 0,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                    }
                },
                hoverAnimation: false,
                center: [index%2*30 + 58 +'%', parseInt(index/2)*50+30+'%'],
                data: [{
                    value: item.value,
                    name:item.name,
                    label: {
                        normal: {
                            rich: {
                                a: {
                                    color:  colors[index][0],
                                    align: 'center',
                                    fontSize: 70,
                                    fontWeight: 400,
                                    fontFamily: "Helvetica", 
                                },
                                b: {
                                    color: colors[index][0],
                                    align: 'center',
                                    fontFamily: "Helvetica", 
                                    fontSize: 30
                                },
                                c: {
                                  fontSize: 50,
                                  fontFamily: "Helvetica", 
                                  fontWeight: "bold"
                                }
                            },
                            formatter: function(params){
                                params.fuhao=['db','lx','%','℃']
                           
                               
                                return "{a|"+params.value+"}"+" {c|"+params.fuhao[index]+"}"+"\n\n{b|"+"}";
                            },
                            position: 'center',
                            show: true, 
                            textStyle: {
                                fontSize: '14',
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        }
                    },
                }, {
                   value:100,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: '#071925',
                            borderWidth:0,
                            borderColor: '#073A66'
                        }
                    
                    }
                }]
            }    
        )
    });
            
let option = {
    // backgroundColor: "#fff",
    grid: {
        top: '8%',
        left: '5%',
        right: '5%',
        bottom: '8%',
        containLabel: true,
    },
    title:titleArr,
    series: seriesArr,
    tooltip:{
        show:false
    }


   



















    
}


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}



function ss222() {
    var myChart = echarts.init(document.getElementById('ss222'));

    var randome81 = [10,20,15,30,60,40,50,55]

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
            data:['噪声'],
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
            }
        },

        grid: {
            left: '8%',
            top: '10%',
            right: '5%',
            bottom: '8%',
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
            data: timeday,
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
            name:"噪声（dB）",
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            axisTick: {show: false},
            min:0,
            max:80,
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
                name: '噪声指标',
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
                            color: '#FFEC8B'
                        }, {
                            offset: 1,
                            color: '#FFFF00'
                        }]),
                        barBorderRadius: 12,
                        width:10
                    },

                    borderColor: '#f0f',
                },
                itemStyle: {
                    normal: {
                        color: '#EEAD0E',
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
                        name: '晚上',
                        yAxis: 50
                    }, {
                        name: '白天',
                        yAxis: 60
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

function ss333() {
    var myChart = echarts.init(document.getElementById('ss333'));

    var randome81 = airtemdata;

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
            data:['办公区1'],
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
            }
        },

        grid: {
            left: '8%',
            top: '10%',
            right: '5%',
            bottom: '8%',
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
            data: timeday,
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
            name:"温度（℃）",
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            axisTick: {show: false},
            min:0,
            max:30,
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
                name: '温度指标',
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
                            color: '#FFEC8B'
                        }, {
                            offset: 1,
                            color: '#FFFF00'
                        }]),
                        barBorderRadius: 12,
                        width:10
                    },

                    borderColor: '#f0f',
                },
                itemStyle: {
                    normal: {
                        color: '#EEAD0E',
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
                        name: '高',
                        yAxis: 26
                    }, {
                        name: '低',
                        yAxis: 23
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

function ss444() {

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('ss444'));
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
            data: timeday,
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

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}



function ss666() {
    var myChart = echarts.init(document.getElementById('ss666'));

    var randome81 =airtemdata;

  let  option = {
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
            data:['办公区1'],
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
            }
        },

        grid: {
            left: '8%',
            top: '10%',
            right: '5%',
            bottom: '8%',
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
            name:"温度（℃）",
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            axisTick: {show: false},
            min:0,
            max:30,
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
                name: '温度指标',
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
                            color: '#FFEC8B'
                        }, {
                            offset: 1,
                            color: '#FFFF00'
                        }]),
                        barBorderRadius: 12,
                        width:10
                    },

                    borderColor: '#f0f',
                },
                itemStyle: {
                    normal: {
                        color: '#EEAD0E',
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
                        name: '高',
                        yAxis: 26
                    }, {
                        name: '低',
                        yAxis: 23
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




 
function ss777() {

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('ss777'));
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





export{echartinit4};