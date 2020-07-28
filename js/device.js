//新增功能，喷头开关，方法分别为ptUp(),ptDown()
//         窗帘状态主要有四种方法   clOn()窗帘打开，clOff()窗帘关闭    clUp()窗帘向上转  clDown（）窗帘向下转


//喷头打开
function ptUp() {


    var url="http://localhost:9080/owell/pt/up";   //下面的实例代码都用此访问接口url

    $.ajax({
    
         url:url,

         type:"GET",
    
         dataType:'json',
    
         success: function(data){
           
            //     (请求成功之后的前端处理代码)
    
           }
    
    }); 
   

    // var url="https://cn-api.coolkit.cc:8080/api/user/device/status";   //下面的实例代码都用此访问接口url

    // $.ajax({
    
    //      url:url,

    //      type:'POST',
    
    //      dataType:'json',
         
    //      headers:{
    //         Authorization:"Bearer 590bd28ad69cc0df5ba1d06a4bac6726e8071f3f",
        
    //      },

    //      data:{
                
    //            "deviceid":"1000d8ca38",
    //           "params": {
    //           "switch": "on"
    //           },
    //           "appid":"eEk44UiFKs48Mw5UFb6X4nVOB60kw4oz",
    //             "ts":370944345,
    //             "version":8,
    //            "nonce":"asbsedwq"
    //           },

    //      success: function(data){
    //       if(data.code ===200){
    //           console.log("pentou up")
    //       }   
         
    //         //     (请求成功之后的前端处理代码)
    
    //        }
    
    // });

    // 参数;1.连接服务器的地址 2.成功时函数 3，失败时函数
    // 1. 创建xmlhttprequest对象
    // var xmlHttp = null;
    // if(window.XMLHttpRequest){
    //     xmlHttp = new XMLHttpRequest();//ie6及以下不兼容，针对主流浏览器
    // }else{                             // 针对ie5, ie6
    //     xmlHttp = new ActiveXObject("Microsoft,XMLHTTP");
    // }
    // //2. 连接服务器
    // var url="http://localhost:9080/owell/pt/up"
    // xmlHttp.open('GET',url,true);  //xmlhttp.open(method,url,async)
    // // method 包含 get 和 post两种方法 url主要是文件或资源的路径，async参数为true(代表异步)或者false（代表同步）
    // //3.向服务器端发送请求
    // xmlHttp.send();
    // //4.接受服务器的返回
    // xmlHttp.onreadystatechange = function(){
    //     if(xmlHttp.readyState == 4){   // 判断交互是否成功
    //         if(xmlHttp.status == 200){      //获取服务器返回的数据  获取纯文本数据
    //             //alert('成功：'+xmlHttp.responseText);
    //             fnSucc(xmlHttp.responseText);
    //         }else{
    //             //alert('失败');
    //             if(fnFaild){
    //                 fnFaild();
    //             }
    //         }
    //     }
    // }
    //     console.log("喷头打开")
}
// 喷头关闭
function ptDown() {
    var url="http://localhost:9080/owell/pt/down";   //下面的实例代码都用此访问接口url

    $.ajax({
    
         url:url,

         type:"GET",
    
         dataType:'json',
    
         success: function(data){
           
            //     (请求成功之后的前端处理代码)
    
           }
    
    }); 
   



    // jQuery.support.cors = true;
    // var url="https://cn-api.coolkit.cc:8080/api/user/device/status";   //下面的实例代码都用此访问接口url

    // $.ajax({
    
    //      url:url,

    //      type:'POST',
    
    //      dataType:'json',
         
    //      headers:{
    //         Authorization:"Bearer 590bd28ad69cc0df5ba1d06a4bac6726e8071f3f",
    //         ContentType:"application/json"	
    //      },

    //      data:{
                
    //            "deviceid":"1000d8ca38",
    //           "params": {
    //           "switch": "off"
    //           },
    //           "appid":"eEk44UiFKs48Mw5UFb6X4nVOB60kw4oz",
    //             "ts":370944345,
    //             "version":8,
    //            "nonce":"asbsedwq"
    //           },

    //      success: function(data){
    //       if(data.code ===200){
    //           console.log("pentou down")
    //       }   
         
    //         //     (请求成功之后的前端处理代码)
    
    //        }
    
    // });

   
   
    // var xmlHttp = null;
    // if(window.XMLHttpRequest){
    //     xmlHttp = new XMLHttpRequest();//ie6及以下不兼容，针对主流浏览器
    // }else{                             // 针对ie5, ie6
    //     xmlHttp = new ActiveXObject("Microsoft,XMLHTTP");
    // }
    // //2. 连接服务器
    // var url="http://localhost:9080/owell/pt/down"
    // xmlHttp.open('GET',url,true);  //xmlhttp.open(method,url,async)
    // // method 包含 get 和 post两种方法 url主要是文件或资源的路径，async参数为true(代表异步)或者false（代表同步）
    // //3.向服务器端发送请求
    // xmlHttp.send();
    // //4.接受服务器的返回
    // xmlHttp.onreadystatechange = function(){
    //     if(xmlHttp.readyState == 4){   // 判断交互是否成功
    //         if(xmlHttp.status == 200){      //获取服务器返回的数据  获取纯文本数据
    //             //alert('成功：'+xmlHttp.responseText);
    //             fnSucc(xmlHttp.responseText);
    //         }else{
    //             //alert('失败');
    //             if(fnFaild){
    //                 fnFaild();
    //             }
    //         }
    //     }
    // }
    // console.log("喷头关闭")
}

//窗帘开口

function clOn() {
    var url="http://localhost:9080/owell/cl/on";   //下面的实例代码都用此访问接口url

    $.ajax({
    
         url:url,

         type:"GET",
    
         dataType:'json',
    
         success: function(data){
           
            //     (请求成功之后的前端处理代码)
    
           }
    
    }); 
   
   
   
   
   
   
    // var xmlHttp = null;
    // if(window.XMLHttpRequest){
    //     xmlHttp = new XMLHttpRequest();//ie6及以下不兼容，针对主流浏览器
    // }else{                             // 针对ie5, ie6
    //     xmlHttp = new ActiveXObject("Microsoft,XMLHTTP");
    // }
    // //2. 连接服务器
    // var url="http://localhost:9080/owell/cl/on"
    // xmlHttp.open('GET',url,true);  //xmlhttp.open(method,url,async)
    // // method 包含 get 和 post两种方法 url主要是文件或资源的路径，async参数为true(代表异步)或者false（代表同步）
    // //3.向服务器端发送请求
    // xmlHttp.send();
    // //4.接受服务器的返回
    // xmlHttp.onreadystatechange = function(){
    //     if(xmlHttp.readyState == 4){   // 判断交互是否成功
    //         if(xmlHttp.status == 200){      //获取服务器返回的数据  获取纯文本数据
    //             //alert('成功：'+xmlHttp.responseText);
    //             fnSucc(xmlHttp.responseText);
    //         }else{
    //             //alert('失败');
    //             if(fnFaild){
    //                 fnFaild();
    //             }
    //         }
    //     }
    // }
    // console.log("窗帘打开")
}

//窗帘关闭
function clOff() {
    var url="http://localhost:9080/owell/cl/off";   //下面的实例代码都用此访问接口url

    $.ajax({
    
         url:url,

         type:"GET",
    
         dataType:'json',
    
         success: function(data){
           
            //     (请求成功之后的前端处理代码)
    
           }
    
    }); 
   
   
   
   
   
   
   
   
   
   
   
    // var xmlHttp = null;
    // if(window.XMLHttpRequest){
    //     xmlHttp = new XMLHttpRequest();//ie6及以下不兼容，针对主流浏览器
    // }else{                             // 针对ie5, ie6
    //     xmlHttp = new ActiveXObject("Microsoft,XMLHTTP");
    // }
    // //2. 连接服务器
    // var url="http://localhost:9080/owell/cl/off"
    // xmlHttp.open('GET',url,true);  //xmlhttp.open(method,url,async)
    // // method 包含 get 和 post两种方法 url主要是文件或资源的路径，async参数为true(代表异步)或者false（代表同步）
    // //3.向服务器端发送请求
    // xmlHttp.send();
    // //4.接受服务器的返回
    // xmlHttp.onreadystatechange = function(){
    //     if(xmlHttp.readyState == 4){   // 判断交互是否成功
    //         if(xmlHttp.status == 200){      //获取服务器返回的数据  获取纯文本数据
    //             //alert('成功：'+xmlHttp.responseText);
    //             fnSucc(xmlHttp.responseText);
    //         }else{
    //             //alert('失败');
    //             if(fnFaild){
    //                 fnFaild();
    //             }
    //         }
    //     }
    // }
    // console.log("窗帘关闭")
}

//窗帘向上转动
function clUp() {
    var url="http://localhost:9080/owell/cl/up";   //下面的实例代码都用此访问接口url

    $.ajax({
    
         url:url,

         type:"GET",
    
         dataType:'json',
    
         success: function(data){
           
            //     (请求成功之后的前端处理代码)
    
           }
    
    }); 
   






    // var xmlHttp = null;
    // if(window.XMLHttpRequest){
    //     xmlHttp = new XMLHttpRequest();//ie6及以下不兼容，针对主流浏览器
    // }else{                             // 针对ie5, ie6
    //     xmlHttp = new ActiveXObject("Microsoft,XMLHTTP");
    // }
    // //2. 连接服务器
    // var url="http://localhost:9080/owell/cl/up"
    // xmlHttp.open('GET',url,true);  //xmlhttp.open(method,url,async)
    // // method 包含 get 和 post两种方法 url主要是文件或资源的路径，async参数为true(代表异步)或者false（代表同步）
    // //3.向服务器端发送请求
    // xmlHttp.send();
    // //4.接受服务器的返回
    // xmlHttp.onreadystatechange = function(){
    //     if(xmlHttp.readyState == 4){   // 判断交互是否成功
    //         if(xmlHttp.status == 200){      //获取服务器返回的数据  获取纯文本数据
    //             //alert('成功：'+xmlHttp.responseText);
    //             fnSucc(xmlHttp.responseText);
    //         }else{
    //             //alert('失败');
    //             if(fnFaild){
    //                 fnFaild();
    //             }
    //         }
    //     }
    // }
    // console.log("窗帘向上")
}

//窗帘向下转动
function clDown() {
    var url="http://localhost:9080/owell/cl/down";   //下面的实例代码都用此访问接口url

    $.ajax({
    
         url:url,

         type:"GET",
    
         dataType:'json',
    
         success: function(data){
           
            //     (请求成功之后的前端处理代码)
    
           }
    
    }); 
   
  
  
    // var xmlHttp = null;
    // if(window.XMLHttpRequest){
    //     xmlHttp = new XMLHttpRequest();//ie6及以下不兼容，针对主流浏览器
    // }else{                             // 针对ie5, ie6
    //     xmlHttp = new ActiveXObject("Microsoft,XMLHTTP");
    // }
    // //2. 连接服务器
    // var url="http://localhost:9080/owell/cl/down"
    // xmlHttp.open('GET',url,true);  //xmlhttp.open(method,url,async)
    // // method 包含 get 和 post两种方法 url主要是文件或资源的路径，async参数为true(代表异步)或者false（代表同步）
    // //3.向服务器端发送请求
    // xmlHttp.send();
    // //4.接受服务器的返回
    // xmlHttp.onreadystatechange = function(){
    //     if(xmlHttp.readyState == 4){   // 判断交互是否成功
    //         if(xmlHttp.status == 200){      //获取服务器返回的数据  获取纯文本数据
    //             //alert('成功：'+xmlHttp.responseText);
    //             fnSucc(xmlHttp.responseText);
    //         }else{
    //             //alert('失败');
    //             if(fnFaild){
    //                 fnFaild();
    //             }
    //         }
    //     }
    // }
    // console.log("窗帘向下")
}