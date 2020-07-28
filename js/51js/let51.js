

 user='adin';


effectdata = {
        "id": "effect_id",   //场景特效id
        "coord_type": "1",  //坐标类型(0: 经纬度gis, 1: cad坐标)
        "type": "fire",     //场景特效类型(类型: shield, fire, arrow, alarm, circle, pyramid, marker_cube, marker_pyramid, maker_site, tool_wrench, weather_tornado)
        "cad_mapkey": "default",   //用于CAD约定基准点的Key, 项目中约定
        "scale": "3.0",    //特效直径(米)
        "coord": "305595,-131779",     //坐标位置
        "coord_z": "5.0",   //高度(米)
        "rotate": "0.0" ,  //特效绕纵向旋转角度(0-360)
        "state":"0"
    }

//     circularRangedata ={
//         "object_id": "circularrange_id",  //区域id
//         "coord_type": "1",  //坐标类型(0: 经纬度gis, 1: cad坐标)
//         "style_type": "wave",      //区域外观类型(类型: wave, loop_line, loop_link, loop_dashed, loop_silk, flash)
//         "cad_mapkey": "default",   //用于CAD约定基准点的Key, 项目中约定
//         "color": "red",  //区域颜色(HEX颜色值)
//         "width": "3.0",    //区域底边宽度(米)
//         "rangehight": "30",     //区域围栏高度(米)
//         "fillarea":"none",     //是否填充区域底部(类型: none, solid, block, dot)
//         "center": "106764,-132198",   //圆心坐标
//         "coord_z": "5.0",  //区域围栏高度(米)
//         "radius": "10"     //半径(米)
//     }
 rangedata_wx = {
    "id": "wx",    //区域id
    "coord_type": "1",
    "type": "loop_silk",
    //区域外观类型(1: 默认样式, 2: 流光围栏样式)
    "cad_mapkey": "default", 
    "color": "yellow",
    //区域颜色(HEXA颜色值, 或 green, red, yellow, blue, gray)
    "width": "5",    //区域底边宽度(米)
    "range_hight":"10",  //区域围栏高度 (米)
    "fill_area":"solid",  //是否填充区域底部
    "state":"0",
    "points": [ 
        {
            "coord":  "281882.6875,-140963.3125",
            "coord_z": "1"   
        },
        {
            "coord": "306845.5,-142268.40625",
            "coord_z": "1"
        },
        {
            "coord": "307611.6875,-133985.34375",
            "coord_z": "1"
        },
        {
            "coord": "302622.125,-133630.296875",
            "coord_z": "1"
        },
       {
            "coord": "302709.375,-132773.078125",
            "coord_z": "1"
        },
       {
             "coord": "282412.125,-131663.5625",
            "coord_z": "1"
        },
      
    ]}

rangedata_zh = {
    "id": "zh",    //区域id
    "coord_type": "1",
    "type": "loop_silk",
    //区域外观类型(1: 默认样式, 2: 流光围栏样式)
    "cad_mapkey": "default", 
    "color": "yellow",
    //区域颜色(HEXA颜色值, 或 green, red, yellow, blue, gray)
    "width": "10",    //区域底边宽度(米)
    "range_hight":"0",  //区域围栏高度 (米)
    "fill_area":"solid",  //是否填充区域底部
    "state":"0",
    "points": [ 
        {
            "coord": "271738.84375,-107668.9375",
            "coord_z": "1"
            },
            {
            "coord": "269608.78125,-136739.75",
            "coord_z": "1"
            },
            {
            "coord": "277990.53125,-137186.203125",
            "coord_z": "1"
            },
            {
            "coord": "277956.25,-140220.59375",
            "coord_z": "1"
            },
            {
            "coord": "281612.21875,-140951.890625",
            "coord_z": "1"
            },
            {
            "coord": "282150.96875,-131752.4375",
            "coord_z": "1"
            },
            {
            "coord": "278293.03125,-131543.78125",
            "coord_z": "1"
            },
            {
            "coord": "278355.84375,-129483.820313",
            "coord_z": "1"
            },
            {
            "coord": "277740.96875,-129452.210938",
            "coord_z": "1"
            },
            {
            "coord": "278267.84375,-120140.726563",
            "coord_z": "1"
            },
            {
            "coord": "283832.03125,-120504.921875",
            "coord_z": "1"
            },
            {
            "coord": "284370.75,-110233.789063",
            "coord_z": "1"
            },
            {
            "coord": "278435.9375,-109956.4375",
            "coord_z": "1"
            },
            {
            "coord": "278532.4375,-107754.664063",
            "coord_z": "1"
            }
        
    ]}



rangedata_pxs = {
    "id": "pxs",    //区域id
    "coord_type": "1",
    "type": "loop_silk",
    //区域外观类型(1: 默认样式, 2: 流光围栏样式)
    "cad_mapkey": "default", 
    "color": "yellow",
    //区域颜色(HEXA颜色值, 或 green, red, yellow, blue, gray)
    "width": "5",    //区域底边宽度(米)
    "range_hight":"0",  //区域围栏高度 (米)
    "fill_area":"solid",  //是否填充区域底部
    "state":"0",
    "points": [ 
        {
            "coord": "284561.96875,-111664.671875",
            "coord_z": "1"
            },
            {
            "coord": "284194.625,-118401.578125",
            "coord_z": "1"
            },
            {
            "coord": "290601.90625,-118769.125",
            "coord_z": "1"
            },
            {
            "coord": "290951.5625,-111985.679688",
            "coord_z": "1"
            }
        
    ]}



      
 




objData0 = {
          "actionname": "changeScene",  //关键字
          "id": "0" //0外部,1,俯视,2,室内漫游
    }

objData1 = {
        "actionname": "changeScene",  //关键字
        "id": "1" //0外部,1,俯视,2,室内漫游
}
objData2 = {
        "actionname": "changeScene",  //关键字
        "id": "2" //0外部,1,俯视,2,室内漫游
}
objData3 = {
        "actionname": "changeScene",  //关键字
        "id": "3" //0外部,1,俯视,2,室内漫游
}
objData4 = {
        "actionname": "changeScene",  //关键字
        "id": "4" //0外部,1,俯视,2,室内漫游
}
objData5 = {
            "actionname": "changeScene",  //关键字
            "id": "5" //0外部,1,俯视,2,室内漫游
    }



objData6 = {
         "actionname": "changeScene",  //关键字
         "id": "6" //0外部,1,俯视,2,室内漫游
    }
objData7 = {
         "actionname": "changeScene",  //关键字
         "id": "7" //0外部,1,俯视,2,室内漫游
    }
objData8 = {
         "actionname": "changeScene",  //关键字
         "id": "8" //0外部,1,俯视,2,室内漫游
    }

objData = {
       "actionname": "changeScene",  //关键字
       "id": "0" //0外部,1,俯视,2,室内漫游
 }














 let yuanjingcarame = {
    "coord_type": "1",
     "cad_mapkey": "default",
     "center_coord": "289626.75,-125919.578125",
     "arm_distance": "799.999695",
     "arm_distance_max": "800.0",
     "arm_distance_min": "20.0",
     "pitch": "35.682465",
     "pitch_max": "89.0",
     "pitch_min": "5.0",
     "yaw": "208.531677",
     "left_top_coord": "1908914.5,-5355211.5",
     "right_top_coord": "-4907294.0,-1583515.25",
     "left_bottom_coord": "902637.25,22791.242188",
     "right_bottom_coord": "107517.84375,468174.0625",
     "state":"0"
 }

























// --------------------------空气----------------------------------- //

// 空气控制模块
mapData = {
    "actionname": "showHideHeatMap",//关键字
    "state": "1",  //显隐状态 0隐,1显
    }

freshairData ={
    "actionname": "showHideFreshAir",//关键字
    "id": "freshAir1",  //id
    "state": "1",  //显隐状态 0隐,1显
    "all": "true"  //是否控制全部 true,false
    }

aircleanerData = {
    "actionname": "showHideAirCleaner",//关键字
        "id": "airCleaner1",  //id
        "state": "1",  //显隐状态 0隐,1显
        "all": "true"  //是否控制全部 true,false
    }

airConditionerData = {
        "actionname": "airConditionerControl",//关键字
        "id": "0",  //id
        "state": "1",  //显隐状态 0隐,1显
        "all": "true"  //是否控制全部 true,false
        }

airHeatData = {
    "object_id": "item_heatmap_1",       //区域热力图id
    "coord_type": "1",      //区域热力图中坐标类型(0: 经纬度gis, 1: cad 坐标, 2: UE4WorldPostion)
    "heatmap_type": "1",    //区域热力图样式类型(1: 经典类型(红绿热力图))
    "leftupper_coord": "281852,-120342",     //区域热力图范围左上坐标(坐标类型需与heatmap_type相同)
    "lowerright_coord": "296764,-132198",    //区域热力图范围右下坐标(坐标类型需与heatmap_type相同)
    "coord_z": '0',       //区域热力图Z轴值(项目约定)
    "brush_diameter": "100.0",       //区域热力点笔刷直径(米, 单个热力点覆盖直径)
    "heatpoint_minvalue": "5.00",   //区域热力点取值范围最小值(此热力图中数值范围的最小值, 例如人流密度最小1(绿色接近透明), 最大1000(最红), 线性计算)
    "heatpoint_maxvalue": "500.0"   //区域热力点取值范围最大值
}
doorData = {
    "actionname": "doorControl",//关键字
    "id": "1",  //id
    "state": "1",  //开关状态 0关,1开
    "all": "true"  //是否控制全部 true,false
}


// 空气POI点
airpoiData_kongtiao = {
    "id" : "air_kongtiao",   //POI点的ID
    "label": "空调系统", //POI提示文本
    "object_floor": "3",//用于建筑楼层, 1 一层 (非必填)
    "type": "airConditioner",//图标的类别 (图标的样式, 需双方沟通约定)//此项目中. 约定为：①cameraLine; ②buildingLine; ③portLine;
    "coord_type": "1",  //(0: 经纬度gis, 1: cad坐标                                                                              )
    "coord" : "300077,-137743",//POI点的坐标(坐标类型需与该POI点的object_type相同)
    "coord_z": '0',//单位米, 坐标为GIS时决定POI图标高度; CAD时无效, 不用填
    "always_show_label":"true",//true 显示提示文本(默认), false 不显示提示文本
    "show_label_range":"30, 500",//此POI点显示title的镜头距离范围(单位米, 范围最小、最大距离; 在此范围内显示, 超出范围隐藏title, 注: showtitle属性为true时生效)
    "monitormouseoverlap":"ture"//此POI是否允许监听鼠标划过事件
    }
 airpoiData_kongqi_zh= {
    "id" : "air_kongqi_zh", 
    "label": "空气盒子-综合院",
    "object_floor": "3",
    "type": "pm25",
    "coord_type": "1",                                            
    "coord" : "273456,-134323",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
    "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    
    }
airpoiData_kongqi_wx= {
    "id" : "air_kongqi_wx", 
    "label": "空气盒子—无线院",
    "object_floor": "3",
    "type": "temperature",
    "coord_type": "1",                                            
    "coord" : "294145,-140071",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
    "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
 airpoiData_fresh = {
    "id" : "air_freshAir", 
    "label": "新风管道",
    "object_floor": "3",
    "type": "freshAir",
    "coord_type": "1",                                            
    "coord" : "295595,-131779",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
    "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
airpoiData_paifeng = {
    "id" : "air_paifeng", 
    "label": "排风管道",
    "object_floor": "3",
    "type": "airCleaner",
    "coord_type": "1",                                            
    "coord" : "300077,-126624",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
    "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
airpoiData_kongqi_pxs = {
    "id" : "air_kongqi_pxs", 
    "label": "空气盒子—培训室",
    "object_floor": "3",
    "type": "formaldehyde",
    "coord_type": "1",
    "coord" : "284555,-115757",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
    "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }







airpoiData = {
    "id" : "air_conditioner",   //POI点的ID
    "label": "空调系统", //POI提示文本
    "object_floor": "3",//用于建筑楼层, 1 一层 (非必填)
    "type": "airConditioner",//图标的类别 (图标的样式, 需双方沟通约定)//此项目中. 约定为：①cameraLine; ②buildingLine; ③portLine;
    "coord_type": "1",  //(0: 经纬度gis, 1: cad坐标                                                                              )
    "coord" : "290056.0975,-116522.8888",//POI点的坐标(坐标类型需与该POI点的object_type相同)
    "coord_z": '0',//单位米, 坐标为GIS时决定POI图标高度; CAD时无效, 不用填
    "always_show_label":"true",//true 显示提示文本(默认), false 不显示提示文本
    "show_label_range":"30, 500",//此POI点显示title的镜头距离范围(单位米, 范围最小、最大距离; 在此范围内显示, 超出范围隐藏title, 注: showtitle属性为true时生效)
    "monitormouseoverlap":"ture"//此POI是否允许监听鼠标划过事件
    }

airpoiData2 = {
    "id" : "air_pm25",
    "label": "PM2.5-大堂",
    "object_floor": "3",
    "type": "pm25",
    "coord_type": "1",
    "coord" : "280930.5555,-129875.3333",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
    "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }

airpoiData3 = {
    "id" : "air_tem",
    "label": "空气检测1-无线院",
    "object_floor": "3",
    "type": "temperature",
    "coord_type": "1",
    "coord" : "294145.5555,-134071.3333",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
    "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }

airpoiData4 = {
    "id" : "air_co2",
    "label": "二氧化碳-洽谈室1",
    "object_floor": "3",
    "type": "co2",
    "coord_type": "1",
    "coord" : "276176.3578,-138902. 4529",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
    "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }


airpoiData5 = {
    "id" : "air_formaldehyde",
    "label": "甲醛-培训室",
    "object_floor": "3",
    "type": "formaldehyde",
    "coord_type": "1",                                            
    "coord" : "288555,-115757",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
    "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }

airpoiData6 = {
    "id" : "air_freshAir",
    "label": "新风-茶水间",
    "object_floor": "3",
    "type": "freshAir",
    "coord_type": "1",
    "coord" : "297077,-123624",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
    "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }


// 光线


lightData ={
    "actionname": "LightControl",//关键字
    "id": "LightArea1",  //区域id：LightArea1-7
    "state": "1",  //开关状态 0关,1开
    "all": "true"  //是否控制全部 true,false
    }
    
lightData1 ={
    "actionname": "LightControl",//关键字
    "id": "LightArea1",  //区域id：LightArea1-7
    "state": "1",  //开关状态 0关,1开
    "all": "false"  //是否控制全部 true,false
    }
lightData2 ={
    "actionname": "LightControl",//关键字
    "id": "LightArea2",  //区域id：LightArea1-7
    "state": "1",  //开关状态 0关,1开
    "all": "false"  //是否控制全部 true,false
}

lightData3 ={
    "actionname": "LightControl",//关键字
    "id": "LightArea3",  //区域id：LightArea1-7
    "state": "1",  //开关状态 0关,1开
    "all": "false"  //是否控制全部 true,false
}

lightData4 ={
    "actionname": "LightControl",//关键字
    "id": "LightArea4",  //区域id：LightArea1-7
    "state": "1",  //开关状态 0关,1开
    "all": "false"  //是否控制全部 true,false
}

lightData5 ={
    "actionname": "LightControl",//关键字
    "id": "LightArea5",  //区域id：LightArea1-7
    "state": "1",  //开关状态 0关,1开
    "all": "false"  //是否控制全部 true,false
}

lightData6 ={
    "actionname": "LightControl",//关键字
    "id": "LightArea6",  //区域id：LightArea1-7
    "state": "1",  //开关状态 0关,1开
    "all": "false"  //是否控制全部 true,false
}

lightData7 ={
    "actionname": "LightControl",//关键字
    "id": "LightArea7",  //区域id：LightArea1-7
    "state": "1",  //开关状态 0关,1开
    "all": "false"  //是否控制全部 true,false
    }
                        

curtainsData = {
    "actionname": "curtainsControl",//关键字
    "id": "curtain9",  //窗帘id
    "state": "2",  //开关状态 0关,1半开,2全开
    "all": "true"  //是否控制全部 true,false
    }
lightmod={
        
    "actionname": "showHideLightMod",//关键字
    "id": "0",  //id
    "state": "1",  //显隐状态 0隐,1显
    "all": "true"  //是否控制全部 true,false
}





// 光POI点
ligpoiData_curtain = {
    "id" : "light_curtain",   //POI点的ID
    "label": "窗帘控制", //POI提示文本
    "object_floor": "3",//用于建筑楼层, 1 一层 (非必填)
    "type": "curtain",//图标的类别 (图标的样式, 需双方沟通约定)//此项目中. 约定为：①cameraLine; ②buildingLine; ③portLine;
    "coord_type": "1",  //(0: 经纬度gis, 1: cad坐标                                                                              )
    "coord" : "270987,-116254",//POI点的坐标(坐标类型需与该POI点的object_type相同)
    "coord_z": '0',//单位米, 坐标为GIS时决定POI图标高度; CAD时无效, 不用填
    "always_show_label":"true",//true 显示提示文本(默认), false 不显示提示文本
    "show_label_range":"30, 500",//此POI点显示title的镜头距离范围(单位米, 范围最小、最大距离; 在此范围内显示, 超出范围隐藏title, 注: showtitle属性为true时生效)
    "monitormouseoverlap":"ture"//此POI是否允许监听鼠标划过事件
    
    }
 ligpoiData_kaiguan = {
    "id" : "light_kaiguan", 
    "label": "总开关控制",
    "object_floor": "3",
    "type": "light",
    "coord_type": "1",                                            
    "coord" : "285176.3578,-128902. 4529",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
    "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
ligpoiData_kaiguan1 = {
    "id" : "light_kaiguan1", 
    "label": "综合院灯光",
    "object_floor": "3",
    "type": "light",
    "coord_type": "1",                                            
    "coord" : "270176.3578,-133902. 4529",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
    "monitormouseoverlap":"ture",
}
ligpoiData_kaiguan2 = {
    "id" : "light_kaiguan2", 
    "label": "展台灯",
    "object_floor": "3",
    "type": "light",
    "coord_type": "1",                                            
    "coord" : "276176.3578,-123902. 4529",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
    "monitormouseoverlap":"ture",
}
ligpoiData_kaiguan3 = {
    "id" : "light_kaiguan3", 
    "label": "紫外消毒灯",
    "object_floor": "3",
    "type": "light",
    "coord_type": "1",                                            
    "coord" : "276176.3578,-133902.4529",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
    "monitormouseoverlap":"ture",
}
                
ligpoiData_kaiguan4 = {
    "id" : "light_kaiguan4", 
    "label": "无线院灯光",
    "object_floor": "3",
    "type": "lightIntension",
    "coord_type": "1",
    "coord" : "294145.5555,-134071.3333",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
ligpoiData_kaiguan5 = {
    "id" : "light_kaiguan5", 
    "label": "会议室灯光",
    "object_floor": "3",
    "type": "lightFeel",
    "coord_type": "1",                                            
    "coord" : "307077,-123624",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true",             //是否自动遮挡排序
    "state":"2",
    }
ligpoiData_mod = {
    "id" : "light_mod", 
    "label": "灯光模型显隐",
    "object_floor": "3",
    "type": "lightIntension",
    "coord_type": "1",                                            
    "coord" : "288145.5555,-114071.3333",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }



    
    
// 舒适POI点
shushipoiData_body = {
    "id" : "shushi_body",   //POI点的ID
    "label": "体感舒适", //POI提示文本
    "object_floor": "3",//用于建筑楼层, 1 一层 (非必填)
    "type": "bodyFeel",//图标的类别 (图标的样式, 需双方沟通约定)//此项目中. 约定为：①cameraLine; ②buildingLine; ③portLine;
    "coord_type": "1",  //(0: 经纬度gis, 1: cad坐标                                                                              )
    "coord" : "276056.0975,-116522.8888",//POI点的坐标(坐标类型需与该POI点的object_type相同)
    "coord_z": '0',//单位米, 坐标为GIS时决定POI图标高度; CAD时无效, 不用填
    "always_show_label":"true",//true 显示提示文本(默认), false 不显示提示文本
    "show_label_range":"30, 500",//此POI点显示title的镜头距离范围(单位米, 范围最小、最大距离; 在此范围内显示, 超出范围隐藏title, 注: showtitle属性为true时生效)
    "monitormouseoverlap":"ture"//此POI是否允许监听鼠标划过事件
    }
 shushipoiData_light = {
    "id" : "shushi_light",
    "label": "光感舒适",
    "object_floor": "3",
    "type": "lightFeel",
    "coord_type": "1",                                            
    "coord" :"276176.3578,-133902.4529",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
shushipoiData_noise = {
    "id" : "shushi_noise",
    "label": "噪声检测",
    "object_floor": "3",
    "type": "noise",
    "coord_type": "1",
    "coord" : "294145.5555,-134071.3333",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
 shushipoiData_air = {
    "id" : "shushi_air",
    "label": "空气舒适",
    "object_floor": "3",
    "type": "airSoft",
    "coord_type": "1",
    "coord" : "297077,-123624",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
 shushipoiData_broad = {
    "id" : "shushi_broad",
    "label": "广播系统",
    "object_floor": "3",
    "type": "broadcast",
    "coord_type": "1",                                            
    "coord" : "277508.2191，- 137041.477",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }

    // 营养POI点

 yingyangpoiData_weibolu = {
    "id" : "yingyang_weibolu",
    "label": "微波炉",
    "object_floor": "3",
    "type": "microwave",
    "coord_type": "1",                                            
    "coord" : "298412,-129060",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
yingyangpoiData_yingyang = {
    "id" : "yingyang_yingyang", 
    "label": "午餐供应点",
    "object_floor": "3",
    "type": "nutrition",
    "coord_type": "1",                                            
    "coord" : "280176.3578,-124902. 4529",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
yingyangpoiData_bingxiang = {
    "id" : "yingyang_bingxiang",
    "label": "冰箱",
    "object_floor": "3",
    "type": "refrigerator",
    "coord_type": "1",                                            
    "coord" : "300412,-126060",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }

// 健身POI点
jianshenpoiData_jianshenfang = {
    "id" : "jianshenfang", 
    "label": "健身房",
    "object_floor": "3",
    "type": "gym",
    "coord_type": "1",                                            
    "coord" : "288145,-110071",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
jianshenpoiData_huodongshi= {
    "id" : "huodongshi", 
    "label": "活动室",
    "object_floor": "3",
    "type": "gym",
    "coord_type": "1",                                            
    "coord" :  "288145,-118071",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
jianshenpoiData_paiming1= {
    "id" : "paiming1", 
    "label": "步数排行-综合院",
    "object_floor": "3",
    "type": "step",
    "coord_type": "1",                                            
    "coord" : "279176.3578,-133902. 4529",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
jianshenpoiData_paiming2= {
    "id" : "paiming2", 
    "label": "步数排行-无线院",
    "object_floor": "3",
    "type": "step",
    "coord_type": "1",                                            
    "coord" :  "294145.5555,-134071.3333",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }


    /////防疫poi点
kangyipoiData_tiwen= {
    "id" : "kangyi_tiwen", 
    "label": "体温监测点",
    "object_floor": "3",
    "type": "temperature",
    "coord_type": "1",                                            
    "coord" : "279076,-131802",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
kangyipoiData_tiwen2= {
    "id" : "kangyi_tiwen2", 
    "label": "体温监测点",
    "object_floor": "3",
    "type": "temperature",
    "coord_type": "1",                                            
    "coord" : "294145,-132002",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
kangyipoiData_wuzi1= {
    "id" : "kangyi_wuzi1", 
    "label": "防疫物资领取点",
    "object_floor": "3",
    "type": "airSoft",
    "coord_type": "1",                                            
    "coord" : "273176.3578,-124102. 4529",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
kangyipoiData_wuzi2= {
    "id" : "kangyi_wuzi2", 
    "label": "防疫物资领取点",
    "object_floor": "3",
    "type": "airSoft",
    "coord_type": "1",                                            
    "coord" : "294145,-140071",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
kangyipoidata_xiaodu = {
    "id" : "kangyi_xiaodu", 
    "label": "消毒喷头",
    "object_floor": "3",
    "type": "voc",
    "coord_type": "1",                                            
    "coord" : "270176.3578,-133902. 4529",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }


// 水POI点
shuipoiData_shui = {
    "id" : "shui_shui", 
    "label": "水质检测仪",
    "object_floor": "3",
    "type": "waterCleaner",
    "coord_type": "1",                                            
    "coord" : "297412,-129060",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
shuipoiData_shui2 = {
    "id" : "shui_shui2", 
    "label": "饮水点",
    "object_floor": "3",
    "type": "waterCleaner",
    "coord_type": "1",                                            
    "coord" :"280056,-119522",//POI点的坐标(坐标类型需与该POI点的object_type相同)
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
shuipoiData_shui3 = {
    "id" : "shui_shui3", 
    "label": "饮水点",
    "object_floor": "3",
    "type": "waterCleaner",
    "coord_type": "1",                                            
    "coord" :"277456,-138323",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
shuipoiData_shui4 = {
    "id" : "shui_shui4", 
    "label": "饮水点",
    "object_floor": "3",
    "type": "waterCleaner",
    "coord_type": "1",                                            
    "coord" :"272456,-138323",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }




shuipoiData_water  = {
    "id" : "zonghe_water",
    "label": "用水量检测",
    "object_floor": "3",
    "type": "water",
    "coord_type": "1",                                            
    "coord" :"297178,-125049",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }

    shuipoiData_water2  = {
        "id" : "zonghe_water2", 
        "label": "洗手间",
        "object_floor": "3",
        "type": "water",
        "coord_type": "1",                                            
        "coord" : "301412,-133060",
        "coord_z": '0',
        "always_show_label":"true",
        "show_label_range":"30, 500",
       "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
        }
        
shuipoiData_water3  = {
    "id" : "zonghe_water3", 
    "label": "洗手间",
    "object_floor": "3",
    "type": "water",
    "coord_type": "1",                                            
    "coord" :"285056,-110522",//POI点的坐标(坐标类型需与该POI点的object_type相同)
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }





//综合  poi点

zonghepoiData_dian = {
    "id" : "zonghe_dian",   //POI点的ID
    "label": "区域电量", //POI提示文本
    "object_floor": "3",//用于建筑楼层, 1 一层 (非必填)
    "type": "electric",//图标的类别 (图标的样式, 需双方沟通约定)//此项目中. 约定为：①cameraLine; ②buildingLine; ③portLine;
    "coord_type": "1",  //(0: 经纬度gis, 1: cad坐标                                                                              )
    "coord" : "278757.9415，- 127984. 7246",//POI点的坐标(坐标类型需与该POI点的object_type相同)
    "coord_z": '0',//单位米, 坐标为GIS时决定POI图标高度; CAD时无效, 不用填
    "always_show_label":"true",//true 显示提示文本(默认), false 不显示提示文本
    "show_label_range":"30, 500",//此POI点显示title的镜头距离范围(单位米, 范围最小、最大距离; 在此范围内显示, 超出范围隐藏title, 注: showtitle属性为true时生效)
    "monitormouseoverlap":"ture"//此POI是否允许监听鼠标划过事件
    }




zonghepoiData_camera  = {
    "id" : "zonghe_camera",
    "label": "监控",
    "object_floor": "3",
    "type": "camera",
    "coord_type": "1",                                            
    "coord" :  "280176.3578,-124902. 4529",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }

zonghepoiData_entrance = {
    "id" : "zonghe_entrance",
    "label": "门禁",
    "object_floor": "3",
    "type": "entrance",
    "coord_type": "1",                                            
    "coord" :"294145,-132002",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }


zonghepoiData_meetingRoom= {
    "id" : "zonghe_meetingRoom",
    "label": "会议室",
    "object_floor": "3",
    "type": "meetingRoom",
    "coord_type": "1",                                            
    "coord" : "307077,-123624",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }

zonghepoiData_kaoqin = {
    "id" : "zonghe_checkingIn",
    "label": "考勤",
    "object_floor": "3",
    "type": "checkingIn",
    "coord_type": "1",                                            
    "coord" :"279076,-131802",
    "coord_z": '0',
    "always_show_label":"true",
    "show_label_range":"30, 500",
   "umg_type":"",                     //此POI所使用的UI模板类型(默认有两种: default为带线的默认POI UI样式, default_noline为不带线的POI UI样式, 项目中约定)
    "sort_order":"true"                //是否自动遮挡排序
    }
zonghepoiData_zhanli = {
    "id" : "zonghe_zhanli",   //POI点的ID
    "label": "站立办公统计", //POI提示文本
    "object_floor": "3",//用于建筑楼层, 1 一层 (非必填)
    "type": "bodyFeel",//图标的类别 (图标的样式, 需双方沟通约定)//此项目中. 约定为：①cameraLine; ②buildingLine; ③portLine;
    "coord_type": "1",  //(0: 经纬度gis, 1: cad坐标                                                                              )
    "coord" :  "276176.3578,-123902. 4529",
    "coord_z": '0',//单位米, 坐标为GIS时决定POI图标高度; CAD时无效, 不用填
    "always_show_label":"true",//true 显示提示文本(默认), false 不显示提示文本
    "show_label_range":"30, 500",//此POI点显示title的镜头距离范围(单位米, 范围最小、最大距离; 在此范围内显示, 超出范围隐藏title, 注: showtitle属性为true时生效)
    "monitormouseoverlap":"ture"//此POI是否允许监听鼠标划过事件
    }




