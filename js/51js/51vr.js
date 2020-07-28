"use strict";


const params = new URLSearchParams(location.search);
 var cloudRender = new cloudRenderer('player', 1);
// 云渲染url 前端获取  仅限用于测试
function createXmlHttpRequest() {
    if(window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    } else if(window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
}

function fetchPixelStreaming(token) {
    let xhr = createXmlHttpRequest();
    xhr.open('GET', _url + renderPath, true);
    xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    xhr.onload = function() {
        if(xhr.status == 200) {
            let jsData = JSON.parse(xhr.responseText);
            console.log('SuperAPI_StartRenderCloud_Url: ', jsData.url);
            sessionStorage.setItem('cloudurl', jsData.url);
            if(jsData.error) {
                alert('访问人数过多, 请稍后访问www.51hitech.com')
            } else {
                // document.querySelector('body');
                cloudRender.SuperAPI('StartRenderCloud', sessionStorage.getItem('cloudurl'));
            }
        }
    }
    xhr.send();
}

function SuperAPI_StartRenderCloud_GetUrl() {
    let xhr = createXmlHttpRequest();
    let authurl = _url + 'autoLogin';
    xhr.open('POST', authurl, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if(xhr.status == 200) {
            let jsData = JSON.parse(xhr.responseText);
            console.log('token: ', jsData);
            if(jsData.error) {
                alert('请联系51VR, 申请专用体验线路www.51hitech.com')
            } else {
                fetchPixelStreaming(jsData.token);
            }
        }
    }
    xhr.send(`username=${staticUserName}&pwd=${staticPwd}`);
}

// 测试地址 联系51VR获得可用地址

let staticUserName = 'guest';
let staticPwd = '123456';



SuperAPI_StartRenderCloud_GetUrl();

// var cloudBtn = document.getElementById('player1');

// var cloudRender = new cloudRenderer('player', 0);
// cloudRender.SuperAPI('StartRenderCloud', sessionStorage.getItem('cloudurl'));

// window.addEventListener("resize",function(){
//     cloudBtn.resize();
// });

// 事件注册

let bootlampstate="off";
let mysprayerstate="off";
let synthesisstate="off";
let sterilizestate="off";
let chuangmingstate="off";
function myHandleResponseFunction(data) {
    let jsonObject = JSON.parse(data);
    // console.log('receive: ' + data);

    switch(jsonObject.func_name) {
        case 'beginPlay':
            console.log('beginPlay');
            break;

        case 'APIAlready':
            console.log('APIAlready 云服务连接成功 3D世界加载完成');
            setTimeout(() => document.querySelector('.nav-list').classList.add('show'), 2e3);
            break;

        case 'OnPOIClick':
            let OnPOIClick_id = jsonObject.args.id;
            console.log('OnPOIClick id = ' + OnPOIClick_id);
            // 返回一个点击POI的ID值
            switch(OnPOIClick_id) {
          
        ///////////////////////////////////////空气子页面 poi点击事件//////////////////////////////////////////////////////
                case 'air_freshAir':
                    if ( freshairData.state == '1' && aircleanerData.state == '1') {
                        freshairData.state = '0';
                        aircleanerData.state = '0';
                        }
                    else {
                        freshairData.state = '1';
                        aircleanerData.state = '1';}
                    cloudRender.SuperAPI('specialChannel', freshairData);
                       
                    break;
                case 'air_paifeng':
                      if ( freshairData.state == '1' && aircleanerData.state == '1') {
                            freshairData.state = '0';
                            aircleanerData.state = '0';
                            }
                        else {
                            freshairData.state = '1';
                            aircleanerData.state = '1';}
                    cloudRender.SuperAPI('specialChannel', aircleanerData);
                      
                    break;
                case 'air_kongtiao':
                   
                      if ( airConditionerData.state == '1' ) {
                            airConditionerData.state = '0';
                            }
                        else {
                            airConditionerData.state = '1';}
                    cloudRender.SuperAPI('specialChannel', airConditionerData); 
                   
                      

                          
                    
                    break;

                case 'air_kongqi_wx':
                  if(rangedata_wx.state=='0'){
                    cloudRender.SuperAPI('RemoveAllRange')
                    cloudRender.SuperAPI('AddRange', rangedata_wx);
                    kqdata=wxykqdata;
                    kqquyu="无线院";
                
                        airco2data=airco2datawx
                        airvocdata=airvocdatawx
                        airtemdata=airtemdatawx
                        airhumdata=airhumdatawx
                        airhumdataday=airhumdatadaywx

                        airpm25data=airpm25datawx
                        airchohdata=airchohdatawx
                    echartinit1();
                    rangedata_wx.state='1';
                }
                  else{
                    cloudRender.SuperAPI('RemoveAllRange')
                    rangedata_wx.state='0';
                  }


                        
                    
                    break;
                case 'air_kongqi_zh':
                    if(rangedata_zh.state=='0'){
                        cloudRender.SuperAPI('RemoveAllRange')
                        cloudRender.SuperAPI('AddRange', rangedata_zh);
                        kqdata=zhykqdata;
                        kqquyu="综合院";
                        airco2data=airco2datazh
                        airvocdata=airvocdatazh
                        airtemdata=airtemdatazh
                        airhumdata=airhumdatazh
                        airhumdataday=airhumdatadayzh

                        airpm25data=airpm25datazh
                        airchohdata=airchohdatazh
                        echartinit1();
                        rangedata_zh.state='1';
                    }
                    else{
                        cloudRender.SuperAPI('RemoveAllRange')
                        rangedata_zh.state='0';
                    }
      
                        
                     break;
                case 'air_kongqi_pxs':
                if(rangedata_pxs.state=='0'){
                    cloudRender.SuperAPI('RemoveAllRange')
                    cloudRender.SuperAPI('AddRange', rangedata_pxs);
                    rangedata_pxs.state='1';
                }
                else{
                    cloudRender.SuperAPI('RemoveAllRange')
                    rangedata_pxs.state='0';
                }


                        
                    
                    break;




              case 'light_mod':
                  
                if ( lightmod.state == '1' ) {
                    lightmod.state = '0';
                    }
                else {
                    lightmod.state = '1';}
                        cloudRender.SuperAPI('specialChannel',lightmod);

             break;
             case 'light_kaiguan':
                 
             
                            if ( lightData.state == '1' ) {
                                        lightData.state = '0';
                                        }
                                    else {
                                        lightData.state = '1';}    

                    cloudRender.SuperAPI('specialChannel',lightData);

                
                 break;

            case 'light_kaiguan1':   //照明灯
                            ////区域灯光
               if ( lightData1.state == '1' ) {
                                lightData1.state = '0';
                                }
                            else {
                                lightData1.state = '1';}


                            if (user=="admin"){
                $.ajax({
                    url:'http://'+severurl+'/owell/control/lamps/synthesis?id=1&status='+synthesisstate,
                    type:'get',
                    success: function (data) {
                        console.log(data);
                    },
                    error : function() {
                        console.log("异常！");
                    }
                }
                )}
                if (synthesisstate=="on"){
                    synthesisstate="off";
                }
                else{
                    synthesisstate="on";
                }

                                    cloudRender.SuperAPI('specialChannel',lightData1);

           
                break;


            case 'light_kaiguan2':  //展台灯
             
             if (user=="admin"){
                    $.ajax({
                        url:'http://'+severurl+'/owell/control/lamps/boothlamp?id=1&status='+bootlampstate,
                        type:'get',
                        success: function (data) {
                            console.log(data);
                        },
                        error : function() {
                            console.log("异常！");
                        }
                    }
                )}
                if (bootlampstate=="on"){
                    bootlampstate="off";
                }
                else {
                    bootlampstate="on";
                }
                // if ( lightData.state == '1' ) {
                //     lightData.state = '0';
                //     }
                // else {
                //     lightData.state = '2';}

                // cloudRender.SuperAPI('specialChannel',lightData);

               
                break;
            case 'light_kaiguan3':   //紫外灯
            if (user=="admin"){
                $.ajax({
                    url:'http://'+severurl+'/owell/control/lamps/sterilize?id=1&status='+sterilizestate,
                    type:'get',
                    success: function (data) {
                        console.log(data);
                    },
                    error : function() {
                        console.log("异常！");
                    }
                }
            )}
            if (sterilizestate=="on"){
                sterilizestate="off";
            }
            else {
                sterilizestate="on";
            }

                    
                        break;
                case 'light_kaiguan4':   //wx
                  
                if ( lightData2.state == '1' ) {
                                lightData2.state = '0';
                                }
                            else {
                                lightData2.state = '1';}

                            cloudRender.SuperAPI('specialChannel',lightData2);

                    
                        break;

                case 'light_kaiguan5':   //会议室
            
                if ( lightData4.state == '1' ) {
                                lightData4.state = '0';
                                }
                            else {
                                lightData4.state = '1';}

                            cloudRender.SuperAPI('specialChannel',lightData4);

                    
                        break;

                case 'light_curtain':
                        

                            if ( curtainsData.state == '2' ) {
                                curtainsData.state = '0';
                                }
                            else {
                                curtainsData.state = '2';} 
                                cloudRender.SuperAPI('specialChannel', curtainsData);
                    
                         
                        
                          $.ajax({
                              url:'http://'+severurl+'/owell/control/curtain?id=all&status=fun_'+chuangmingstate,
                              type:'get',
                              success: function (data) {
                                  console.log(data);
                              },
                              error : function() {
                                  console.log("异常！");
                              }
                          }
                      )
                      if (chuangmingstate=="off")
                      chuangmingstate="on";
                      else
                      chuangmingstate="on";

            }
            break;
            

            case 'kangyi_xiaodu':
                        

              
                $.ajax({
                    url: 'http://'+severurl+'/owell/control/sprayer/mysprayer?id=3&status='+mysprayerstate,
                    type:'get',
                    success: function (data) {
                        console.log(data);
                    },
                    error : function() {
                        console.log("异常！");
                    }
                })
                if (mysprayerstate=="on")
                mysprayerstate="off";
                else
                mysprayerstate="on";
           


                  break;

            


        case 'OnPOIMouseOverlap':
                let OnPOIMouseOverlap_id = jsonObject.args.id;
                console.log('OnPOIMouseOverlap_id = ' + OnPOIMouseOverlap_id);
                // 返回一个滑过POI的ID值
                break;
    
        // case 'OnCameraInfo':
        //     let OnCameraInfo_coord = jsonObject.args.coord;
        //     console.log('OnCameraInfo_coord = ' + OnCameraInfo_coord);
        //     // 返回当前镜头经纬度信息
        //     break;

        case 'OnPOIScreenRage':
            let OnPOIScreenRageLeftUp = jsonObject.args.LeftUp;
            console.log('OnPOIScreenRageLeftUp = ' + OnPOIScreenRageLeftUp);
            //查询一个POI点左上顶点基于3D世界视口区域的左上角距离比值
            break;

        case 'OnPOIFocusStart':
            let OnPOIFocusStart_id = jsonObject.args.id;
            console.log('OnPOIFocusStart_id = ' + OnPOIFocusStart_id);
            // 场景FOCUS至POI点镜头动作开始时返回信息
            break;

        case 'OnPOIFocusEnd':
            let OnPOIFocusEnd_id = jsonObject.args.id;
            console.log('OnPOIFocusEnd_id = ' + OnPOIFocusEnd_id);
            // 场景FOCUS至POI点镜头动作结束时返回信息
            break;
    }
}

cloudRender.SuperAPI('RegisterCloudResponse', myHandleResponseFunction);












import {echartinit0} from "../charts/show.js";
import {echartinit1} from "../charts/kongqi.js";
// import {echartinit2} from "../charts/shuizhi.js";
// import { echartinit3 } from "../charts/guangqiang.js";
// import { echartinit4 } from "../charts/shushi.js";
// import { echartinit5 } from "../charts/yingyang.js";
// import { echartinit6 } from "../charts/jianshen.js";
// import { echartinit7 } from "../charts/kangyi.js";
// import { echartinit8 } from "../charts/renyuan.js";
export {cloudRender};

