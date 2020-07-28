





let tiaozhuan_show = document.querySelector('.nav-lin0');    
    tiaozhuan_show.addEventListener('click', function() {
    
        cloudRender.SuperAPI('RemoveAllPOI');
        cloudRender.SuperAPI('specialChannel', objData0); 

        freshairData.state = '1';
        aircleanerData.state = '1';



        cloudRender.SuperAPI('specialChannel', aircleanerData);
        cloudRender.SuperAPI('specialChannel', freshairData);
    })

let tiaozhuan_kongqi = document.querySelector('.nav-lin1');     //跳转到空气页面，显示空气大类poi点
tiaozhuan_kongqi.addEventListener('click', function() {
    cloudRender.SuperAPI('RemoveAllPOI');



  
    cloudRender.SuperAPI('AddPOI', airpoiData_kongtiao);
    cloudRender.SuperAPI('AddPOI', airpoiData_fresh);
    cloudRender.SuperAPI('AddPOI', airpoiData_kongqi_zh);
    cloudRender.SuperAPI('AddPOI', airpoiData_kongqi_wx);
    cloudRender.SuperAPI('AddPOI', airpoiData_kongqi_pxs);
    cloudRender.SuperAPI('AddPOI', airpoiData_paifeng);
   
    



     cloudRender.SuperAPI('specialChannel', objData5); 



   
})
let tiaozhuan_shui = document.querySelector('.nav-lin2');    
tiaozhuan_shui.addEventListener('click', function() {
    
    cloudRender.SuperAPI('RemoveAllPOI');
  


  
    cloudRender.SuperAPI('AddPOI', shuipoiData_shui );
    cloudRender.SuperAPI('AddPOI', shuipoiData_shui2 );
    cloudRender.SuperAPI('AddPOI', shuipoiData_shui3 );
    cloudRender.SuperAPI('AddPOI', shuipoiData_shui4 );
    cloudRender.SuperAPI('AddPOI', shuipoiData_water );
    cloudRender.SuperAPI('AddPOI', shuipoiData_water2 );
    cloudRender.SuperAPI('AddPOI', shuipoiData_water3 );
      cloudRender.SuperAPI('specialChannel', objData2);

    // alert("已完成");

    freshairData.state = '0';
    aircleanerData.state = '0';
    cloudRender.SuperAPI('specialChannel', aircleanerData);
    cloudRender.SuperAPI('specialChannel', freshairData);
   
})


let tiaozhuan_guangqiang = document.querySelector('.nav-lin3');    
tiaozhuan_guangqiang.addEventListener('click', function() {
    
    cloudRender.SuperAPI('RemoveAllPOI');
  
   
    cloudRender.SuperAPI('AddPOI', ligpoiData_curtain);
    cloudRender.SuperAPI('AddPOI', ligpoiData_kaiguan);
    cloudRender.SuperAPI('AddPOI', ligpoiData_kaiguan1);
    cloudRender.SuperAPI('AddPOI', ligpoiData_kaiguan2);
    
    cloudRender.SuperAPI('AddPOI', ligpoiData_kaiguan4);
    cloudRender.SuperAPI('AddPOI', ligpoiData_kaiguan5);
    cloudRender.SuperAPI('AddPOI', ligpoiData_mod);
    // cloudRender.SuperAPI('AddPOI', ligpoiData_guanggan);

     cloudRender.SuperAPI('specialChannel', objData1);


     freshairData.state = '0';
     aircleanerData.state = '0';
     cloudRender.SuperAPI('specialChannel', aircleanerData);
     cloudRender.SuperAPI('specialChannel', freshairData);
})

let tiaozhuan_shushi = document.querySelector('.nav-lin4');     
tiaozhuan_shushi.addEventListener('click', function() {
    
    cloudRender.SuperAPI('RemoveAllPOI');
   
    cloudRender.SuperAPI('AddPOI', shushipoiData_body);
    cloudRender.SuperAPI('AddPOI', shushipoiData_light);
    cloudRender.SuperAPI('AddPOI', shushipoiData_noise);
    cloudRender.SuperAPI('AddPOI', shushipoiData_air);
    cloudRender.SuperAPI('AddPOI', shushipoiData_broad);

 cloudRender.SuperAPI('specialChannel', objData2);


 freshairData.state = '0';
 aircleanerData.state = '0';
 cloudRender.SuperAPI('specialChannel', aircleanerData);
 cloudRender.SuperAPI('specialChannel', freshairData);
    // alert("已完成");
})

let tiaozhuan_yingyang = document.querySelector('.nav-lin5');    
tiaozhuan_yingyang.addEventListener('click', function() {
    
cloudRender.SuperAPI('RemoveAllPOI');
    
   cloudRender.SuperAPI('specialChannel', objData4);
  

   
    cloudRender.SuperAPI('AddPOI', yingyangpoiData_weibolu);
    cloudRender.SuperAPI('AddPOI', yingyangpoiData_yingyang);
    cloudRender.SuperAPI('AddPOI', yingyangpoiData_bingxiang);


    freshairData.state = '0';
    aircleanerData.state = '0';
    cloudRender.SuperAPI('specialChannel', aircleanerData);
    cloudRender.SuperAPI('specialChannel', freshairData);

  
    // alert("已完成"); 
    
})

let tiaozhuan_jianshen = document.querySelector('.nav-lin6');    
tiaozhuan_jianshen.addEventListener('click', function() {
    
    cloudRender.SuperAPI('RemoveAllPOI');
  cloudRender.SuperAPI('specialChannel', objData2);
    cloudRender.SuperAPI('AddPOI', jianshenpoiData_jianshenfang );
    cloudRender.SuperAPI('AddPOI', jianshenpoiData_huodongshi);
    cloudRender.SuperAPI('AddPOI', jianshenpoiData_paiming1);
    cloudRender.SuperAPI('AddPOI', jianshenpoiData_paiming2);


    freshairData.state = '0';
    aircleanerData.state = '0';
    cloudRender.SuperAPI('specialChannel', aircleanerData);
    cloudRender.SuperAPI('specialChannel', freshairData);
  
    // alert("已完成");
})




let tiaozhuan_fangyi= document.querySelector('.nav-lin7');  
tiaozhuan_fangyi.addEventListener('click', function() {
    
    cloudRender.SuperAPI('RemoveAllPOI');
   
    cloudRender.SuperAPI('AddPOI',  kangyipoiData_tiwen);
    cloudRender.SuperAPI('AddPOI',  kangyipoiData_tiwen2);
    cloudRender.SuperAPI('AddPOI',  kangyipoiData_wuzi1);
    cloudRender.SuperAPI('AddPOI',  kangyipoiData_wuzi2);
    cloudRender.SuperAPI('AddPOI',  kangyipoidata_xiaodu);
    cloudRender.SuperAPI('AddPOI', ligpoiData_kaiguan3);
  
  
  cloudRender.SuperAPI('specialChannel', objData1);


  freshairData.state = '0';
  aircleanerData.state = '0';
  cloudRender.SuperAPI('specialChannel', aircleanerData);
  cloudRender.SuperAPI('specialChannel', freshairData);
    // alert("已完成");
})


let tiaozhuan_renyuan= document.querySelector('.nav-lin8');  
tiaozhuan_renyuan.addEventListener('click', function() {
    
    cloudRender.SuperAPI('RemoveAllPOI');
  
  cloudRender.SuperAPI('AddPOI', zonghepoiData_dian );
    
 
  
  
    cloudRender.SuperAPI('AddPOI', zonghepoiData_camera );
    cloudRender.SuperAPI('AddPOI', zonghepoiData_entrance);
    cloudRender.SuperAPI('AddPOI', zonghepoiData_meetingRoom);
    cloudRender.SuperAPI('AddPOI', zonghepoiData_kaoqin);
    cloudRender.SuperAPI('AddPOI', zonghepoiData_zhanli );
    

  cloudRender.SuperAPI('specialChannel', objData3);


  freshairData.state = '0';
  aircleanerData.state = '0';
  cloudRender.SuperAPI('specialChannel', aircleanerData);
  cloudRender.SuperAPI('specialChannel', freshairData);
    // alert("已完成");
})






document.querySelector('.showclick1').addEventListener('click',function()
{ 
  

  

    if(objData.id==0)
    {
     objData.id=1;}
     else
     {
     objData.id=0;
    }
     cloudRender.SuperAPI('specialChannel', objData);
   
   
   
  
    // cloudRender.SuperAPI('specialChannel',lightData);
    // cloudRender.SuperAPI('AddPath', Pathdata);
    // cloudRender.SuperAPI('AddMigrationMap', migrationmapdata);
    // cloudRender.SuperAPI('ShowMigrationMap', 'migrationmap_id');
  
  
    // cloudRender.SuperAPI('ShowPath', 'path_id');

})


document.querySelector('.showclick2').addEventListener('click',function()
{ 
 
  

      if(objData.id==0)
   {
    objData.id=6;

  
        lightData.state = '1';

cloudRender.SuperAPI('specialChannel',lightData);

}
    else if (objData.id==6)
    {
    objData.id=7;
   }
   else if (objData.id==7)
   {
   objData.id=8;
  }
  else{
      objData.id=0;
  }  
   cloudRender.SuperAPI('specialChannel',doorData);
    cloudRender.SuperAPI('specialChannel', objData);
    //   cloudRender.SuperAPI('SetCameraRotate', '100', '1');
    // cloudRender.SuperAPI('specialChannel',lightData);
    // cloudRender.SuperAPI('AddPath', Pathdata);
    // cloudRender.SuperAPI('AddMigrationMap', migrationmapdata);
    // cloudRender.SuperAPI('ShowMigrationMap', 'migrationmap_id');
  
  
    // cloudRender.SuperAPI('ShowPath', 'path_id');

})
document.querySelector('.showclick3').addEventListener('click',function()

{
  
   if (objData.id!=0)
   {
       objData.id=0;
       cloudRender.SuperAPI('specialChannel', objData);
   }
if(yuanjingcarame.state==0)
{
     cloudRender.SuperAPI('SetCameraInfo', yuanjingcarame);      // 远景
     yuanjingcarame.state=1;
     objData.id=1;
    // cloudRender.SuperAPI('SetCameraRotate', '100', '1');
}
else{
    objData.id=0;
    yuanjingcarame.state=0;
    cloudRender.SuperAPI('specialChannel', objData);

}
})


document.querySelector('.showclick5').addEventListener('click',function()
{ 
 
  

                if(curtainsData .state==0)
            {
                curtainsData .state=1;}
            else if(curtainsData .state==1)
                {
                    curtainsData .state=2;
            }
            else{
                curtainsData .state=0;
            }
            cloudRender.SuperAPI('specialChannel',curtainsData );

   

})




document.querySelector('.showclick4').addEventListener('click',function()
{ 
 
    

    if ( lightData.state == '1' ) {
        lightData.state = '0';
        }
    else {
        lightData.state = '1';}    

cloudRender.SuperAPI('specialChannel',lightData);

 
   

})

// document.querySelector('.showclick6').addEventListener('click',function()
// { 
//     if(objData.id==0)
//     {
//      objData.id=1;}
  
//      cloudRender.SuperAPI('specialChannel', objData);
  
//     if(airConditionerData.state==0)
//     {
//         airConditionerData.state=1;
//     }
   
//     else{
//         airConditionerData.state=0;
//     }
//     cloudRender.SuperAPI('specialChannel',airConditionerData);
  


   

// })
// document.querySelector('.showclick7').addEventListener('click',function()
// { 
//     if(objData.id!=1)
//     {
//      objData.id=1; 
//      cloudRender.SuperAPI('specialChannel', objData);

//      setTimeout(function(){
//      if(mapData .state==0)
//     {
//         mapData .state=1;}
   
//     else{
//         mapData .state=0;
//     }
//     cloudRender.SuperAPI('specialChannel',mapData );
// },1500); 
//     }
  
    
//   else{
//     if(mapData .state==0)
//     {
//         mapData .state=1;}
   
//     else{
//         mapData .state=0;
//     }
//     cloudRender.SuperAPI('specialChannel',mapData );

//   }
   

// })

document.querySelector('.warning').addEventListener('click',function()
{
//  cloudRender.SuperAPI('AddHeatMap', airHeatData);
//     cloudRender.SuperAPI('AddCircularRange', circularRangedata);
 
//     cloudRender.SuperAPI('AddPath', Pathdata);
//     cloudRender.SuperAPI('AddRange', rangedata);
//     cloudRender.SuperAPI('AddMigrationMap', migrationmapdata);
if(objData.id==0)
{
 objData.id=1;}

 cloudRender.SuperAPI('specialChannel', objData);

 if (effectdata.state==0){
    cloudRender.SuperAPI('AddEffect', effectdata);
    effectdata.state=1;
}
else
{
cloudRender.SuperAPI('RemoveEffect', 'effect_id');
effectdata.state=0;

}


   

})
import {cloudRender}  from "./51vr.js";





