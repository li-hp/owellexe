$(function () {

    ziyemiandatainit(ziyemiandata);
    ziyemiandataswitch(ziyemiandata);
    buttonaddinit();
    weathercontainshow();

    setTimeout(function(){
        weatherinit();
    },5000) 
   


    //计时器

    let datatime = "8:00"

    setInterval(function () {
        getCurDate();
    }, 100);
    function getCurDate() {
        var d = new Date();
        var week;
        switch (d.getDay()) {
            case 1: week = "星期一"; break;
            case 2: week = "星期二"; break;
            case 3: week = "星期三"; break;
            case 4: week = "星期四"; break;
            case 5: week = "星期五"; break;
            case 6: week = "星期六"; break;
            default: week = "星期天";
        }
        var years = d.getFullYear();
        var month = add_zero(d.getMonth() + 1);
        var days = add_zero(d.getDate());
        var hours = add_zero(d.getHours());
        var minutes = add_zero(d.getMinutes());
        var seconds = add_zero(d.getSeconds());
        var ndate = years + "  年 " + month + " 月 " + days + " 日 " + hours + ":" + minutes + ":" + seconds + " " + week;
        datatime = hours + ":" + minutes;

        document.getElementById("divT").innerText = ndate;
    }

    function add_zero(temp) {
        if (temp < 10) return "0" + temp;
        else return temp;



    }







    function myBrowser() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1;
        if (isOpera) {
            return "Opera"
        }; //判断是否Opera浏览器
        if (userAgent.indexOf("Firefox") > -1) {
            return "FF";
        } //判断是否Firefox浏览器
        if (userAgent.indexOf("Chrome") > -1) {
            return "Chrome";
        }
        if (userAgent.indexOf("Safari") > -1) {
            return "Safari";
        } //判断是否Safari浏览器
        if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
            return "IE";
        }; //判断是否IE浏览器
    }


    mb = myBrowser();
    if (mb == "FF") {
        $('.boxall').css("height", "41rem");
        $('.boxallright').css("height", "41rem");
        $('.henbox').css("height", "5.1rem");
    }
    screen();

    function screen() {
        if (window.screen.height == "1080") {

            $('.boxall').css("height", "41rem");
            $('.boxallright').css("height", "41rem");
            $('.henbox').css("height", "5.1rem");

        }
        else {

        }
    }


















    //  子页面切换函数
    var s = 0;

    var lastdata = 0;

   
     
        

  


    //     setInterval(function(){document.querySelector('.nav-lin'+s).click();
    //     if(s++==8)  s=0;
    // },60000);

    function weatherinit(){   //天气时间和现实一致
        let weaherdata=""
      
        cloudRender.SuperAPI('SetEnvTime', datatime);//时间雨现实一致
        console.log("当前时间："+datatime);
        getweathersync();

    









    }




  
    

















    function ziyemiandatainit(data) {
        /////子页面初始化，隐藏除首页意外的子页面

     
        var zymdata = data;
        setTimeout(function () {
            var str1 = '.maincontain_';
            $(str1.concat(zymdata[0])).css("display", "block");  //首页
            $(str1.concat(zymdata[1]) + 2).css("display", "none");

            for (var i = 1; i < zymdata.length; i++) {
                $(str1.concat(zymdata[i])).css("display", "none");
            }
        }, 800);


    }










    // 子页面切换函数，只需要补充let.js中的ziyemiandata数组即可
    function ziyemiandataswitch(data) {

        ////子页面切换函数，在切换时刷新图表
        var echartinit = [echartinit0, echartinit1, echartinit2, echartinit3, echartinit4, echartinit5, echartinit6, echartinit7, echartinit8]
     

        var zymdata = data;
        var str1 = '.maincontain_';

        for (let i = 0; i < zymdata.length; i++) {

            let data123 = zymdata[i];
            document.querySelector('.nav-lin' + i).addEventListener('click', function () {

                echartinit[i]();

              

                $(str1 + zymdata[lastdata]).css("display", "none");
                if (lastdata == 1) {
                    $(str1 + zymdata[lastdata] + "2").css("display", "none");
                }

                $('.nav-lin' + lastdata).css("background-color", "#ba1c1c00");
                $(str1 + data123).css("display", "block");
                if (i != 0) {

                    $('.nav-lin' + i).css("background-color", "#158fd587");

                }

                lastdata = i;



            })
        }
    }

    function weathercontainshow() {

        document.querySelector('.mod-header-weather').addEventListener('click', function () {         ///显示天气控件

        
            //取消事件冒泡  
            event.stopPropagation();
            //按钮的toggle,如果div是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。  
            $('#divTop').toggle('slow');


            //点击空白处隐藏弹出层，下面为滑动消失效果和淡出消失效果。



        }); 

        $(document).click(function (event) {                             // 隐藏天气控件
            var _con = $('#divTop');   // 设置目标区域  
            if (!_con.is(event.target) && _con.has(event.target).length === 0) { // Mark 1
                //$('#divTop').slideUp('slow');   //滑动消失
                $('#divTop').hide(1000);          //淡出消失
            }
        });

        

        $('#istimesync').click(function () {         ///时间同步按钮

        
        

            if(($('#istimesync').is(':checked'))){
                cloudRender.SuperAPI('SetEnvTime', datatime);//时间雨现实一致
                setInterval(() => {
                    cloudRender.SuperAPI('SetEnvTime', datatime);//时间雨现实一致

                    
                }, 3600000);
                $(".timeimg").unbind("click");
               
            } 
            else{
                $('.timeimg').click(function () {    
                cloudRender.SuperAPI('SetEnvTime',$(this).attr("sid") )
            }); 
            }



        }); 

        $('#isweathersync').click(function () {         ///天气同步按钮

        
        

            if(($('#isweathersync').is(':checked'))){
                getweathersync();
                 $(".weatherimg").unbind("click");
              
                
                setInterval(() => {
                    getweathersync();

                    
                }, 3600000);
               
            } 
            else{
                 $('.weatherimg').click(function () {         ///天气图标的控制效果

        
        

                    cloudRender.SuperAPI('SetEnvWeather',$(this).attr("sid") )
        
        
        
                }); 
            }



        }); 




       



    }





    function buttonaddinit() {
        //////空调按钮初始化，提供空调按钮的温度调节功能
        var kongtiao = [25, 25, 25, 25];



        var data = ["227", "230", "233", "236"];


        var str2 = ".temp";


        for (var i = 0; i < data.length; i++) {
            let str3 = str2.concat(data[i]);

            //    alert(kongtiaodata)



            $(str2.concat(data[i])).html(kongtiao[i]);


            document.querySelector('#add' + data[i]).addEventListener('click', function () {
                // if('.kongtiaokaiguan'.concat([i])==1)
                {
                    //   kongtiao[i]=kongtiao[i]+1;
                    let kongtiaodata = document.querySelector(str3).innerHTML;
                    if (kongtiaodata < 30) kongtiaodata++;


                    $(str3).html(kongtiaodata);

                    // $('.temp'.concat(data[i])).text()+1;
                }

            })

            document.querySelector('#reduce' + data[i]).addEventListener('click', function () {
                // if('.kongtiaokaiguan'.concat([i])==1)
                {
                    //   kongtiao[i]=kongtiao[i]+1;
                    let kongtiaodata = document.querySelector(str3).innerHTML;
                    if (kongtiaodata > 18) kongtiaodata--;

                    $(str3).html(kongtiaodata);

                    // $('.temp'.concat(data[i])).text()+1;
                }

            })



        }


    }

    function getweathersync(){
        $.ajax({
            url: 'https://api.help.bj.cn/apis/weather/?id=101280101',
            type:'get',
            success: function (data) {
           let  weatherdata=data.weather;
             if(weatherdata=="晴") {
                cloudRender.SuperAPI('SetEnvWeather','0');
                $("#weather").toggleClass("sunny",true);
                $("#weather").toggleClass("rainy",false);
                $("#weather").toggleClass("cloudy",false);
                


             }
             else if (weatherdata=="多云"||weatherdata=="阴"){
                $("#weather").toggleClass("sunny",false);
                $("#weather").toggleClass("rainy",false);
                $("#weather").toggleClass("cloudy",true);

                cloudRender.SuperAPI('SetEnvWeather','1');

             }
             else{
                cloudRender.SuperAPI('SetEnvWeather','2');
                $("#weather").toggleClass("sunny",false);
                $("#weather").toggleClass("rainy",true);
                $("#weather").toggleClass("cloudy",false);

             }
             console.log("已设置天气为"+weatherdata)

            // let  sdata=data.data[0].weatheren;
            },
            error : function() {
                console.warn("异常！");
            }
        })
    }








})















import { echartinit0 } from "./charts/show.js";
import { echartinit1 } from "./charts/kongqi.js";
import { echartinit2 } from "./charts/shuizhi.js";
import { echartinit3 } from "./charts/guangqiang.js";
import { echartinit4 } from "./charts/shushi.js";
import { echartinit5 } from "./charts/yingyang.js";
import { echartinit6 } from "./charts/jianshen.js";
import { echartinit7 } from "./charts/kangyi.js";
import { echartinit8 } from "./charts/renyuan.js";
import { cloudRender } from "./51js/51vr.js";




















