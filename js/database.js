$(function () {
    





// setInterval(function(){
//     getdata();
// },300000); 


// getdata();

// // getdata();








// function getdata(){
// getkqdata_d();
// getkqdata_h();
// getaxis();}



setTimeout(function(){
init();
},500); 
    
setTimeout(function(){
    init();
    },6000); 
    
setInterval(function(){
    init();
    },360000); 







        function init()
        {
         


//         //         timeday=xtimeday[1];
//         //         timeweek=xtimeday[0];
//         //         kqdata=[kqdatabase[0][0],kqdatabase[0][4],kqdatabase[0][6],kqdatabase[0][5],kqdatabase[0][1],kqdatabase[0][2]]//空气数据  温度，湿度，甲醛 voc pm2.5 co2
//         //         alert(weekkqdatabase[0])
//         //         airco2data=[weekkqdatabase[0][2],weekkqdatabase[1][2],weekkqdatabase[2][2],weekkqdatabase[3][2],weekkqdatabase[4][2],weekkqdatabase[5][2],weekkqdatabase[6][2]]
//         //         airvocdata=[weekkqdatabase[0][6],weekkqdatabase[1][6],weekkqdatabase[2][6],weekkqdatabase[3][6],weekkqdatabase[4][6],weekkqdatabase[5][6],weekkqdatabase[6][6]] ///voc  7天
//         //         airtemdata=[weekkqdatabase[0][0],weekkqdatabase[1][0],weekkqdatabase[2][0],weekkqdatabase[3][0],weekkqdatabase[4][0],weekkqdatabase[5][0],weekkqdatabase[6][0]] ///voc  7天
//         //         airpm25data=[weekkqdatabase[0][1],weekkqdatabase[1][1],weekkqdatabase[2][1],weekkqdatabase[3][1],weekkqdatabase[4][1],weekkqdatabase[5][1],weekkqdatabase[6][1]] ///voc  7天
            
            
$.ajax({
    url: 'http://122.112.234.240:9007/monitor/devices/real/59511583/all/0',
    type:'get',
    success: function (data) {
    let  sdata=data.data[0];
      zhykqdata=[sdata.TEMP,sdata.HUMI,sdata.CH2O,sdata.VOC,sdata.PM25,sdata.CO2];
      kqdata=zhykqdata;
    },
    error : function() {
        console.log("异常！");
    }
})


//空气数据  温度，湿度，甲醛 voc pm2.5 co2


$.ajax({
    url: 'http://122.112.234.240:9007/monitor/devices/real/59370014/all/0',
    type:'get',
    success: function (data) {
     let sdata=data.data[0];
      waterdata=[3,sdata.PH,2,0.4] // 浑浊度，PH,电导率，余氯
    //   alert(waterdata);
     
    },
    error : function() {
        console.log("异常！");
    }
})
            
         
        }

        
    
        























// function getkqdata_h() {
//             $.ajax({
//             url:'/lanju_inside_h',
//             type:'get',
//             success: function (data) {
//             console.log("day.................................");
//                     //是否可以使用php写出来
//                 console.log(data);
//             kqdatabase=data;

//             kqdata=[kqdatabase[0][0],kqdatabase[0][4],kqdatabase[0][6],kqdatabase[0][5],kqdatabase[0][1],parseInt(kqdatabase[0][2])]//空气数据  温度，湿度，甲醛 voc pm2.5 co2



//             },
//             error : function() {
//                 alert("异常！");
//             }
//             }
//             )

// }

// function getkqdata_d() {
//     $.ajax({
//     url:'/lanju_inside_d',
//     type:'get',
//     success: function (data) {
//     console.log("week.....................................");
//             //是否可以使用php写出来
//         console.log(data);
//     weekkqdatabase=data;
  
   

        
//     airco2data=[weekkqdatabase[0][2],weekkqdatabase[1][2],weekkqdatabase[2][2],weekkqdatabase[3][2],weekkqdatabase[4][2],weekkqdatabase[5][2],weekkqdatabase[6][2]]
//                 airvocdata=[weekkqdatabase[0][6],weekkqdatabase[1][6],weekkqdatabase[2][6],weekkqdatabase[3][6],weekkqdatabase[4][6],weekkqdatabase[5][6],weekkqdatabase[6][6]] ///voc  7天
//                 airtemdata=[weekkqdatabase[0][0],weekkqdatabase[1][0],weekkqdatabase[2][0],weekkqdatabase[3][0],weekkqdatabase[4][0],weekkqdatabase[5][0],weekkqdatabase[6][0]] ///voc  7天
//                 airpm25data=[weekkqdatabase[0][1],weekkqdatabase[1][1],weekkqdatabase[2][1],weekkqdatabase[3][1],weekkqdatabase[4][1],weekkqdatabase[5][1],weekkqdatabase[6][1]] ///voc  7天
            


//     },
//     error : function() {
//         alert("异常！");
//     }
//     }
//     )

// }

// function getaxis() {
//             $.ajax({
//             url:'/axis',
//             type:'get',
//             success: function (data) {
//                 console.log(data);
//                 console.log("axis.....................-");
//                 xtimeday=data;
//                 timeday=xtimeday[1];
//                 timeweek=xtimeday[0];
//             },
//             error : function() {
//                 alert("异常！");
//             }
//             })
// }














//     function delOne(str, data){

//         var index = data.indexOf(str);
//         data.splice(index,1);
//         return data;
//         }








 







})