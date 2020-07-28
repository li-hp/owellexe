//////////////////用来写按钮的点击事件 







function kqyemiancheck(data){

  if (data==1)
            {
                $('.maincontain_kongqi2').css("display","none");
             
             
                   $('.maincontain_kongqi').css("display","block");
            }
            if (data==2){
            $('.maincontain_kongqi').css("display","none");
        
             
            $('.maincontain_kongqi2').css("display","block");
                

            }
}







// function kqcontrol1(data){
//             if (data==1)
//             {
//                 alert(1)
//             }
//             if (data==2)
//             {
                

//             }
//             if (data==3)
//             {

//             }
// }



// function kqcontrol2(data){
//     if (data==1)
//     {

//     }
//     if (data==2)
//     {
        

//     }
//     if (data==3)
//     {

//     }
// }

// function kqcontrol3(data){
//     if (data==1)
//     {

//     }
//     if (data==2)
//     {
        

//     }
//     if (data==3)
//     {

//     }
// }

function kqcontrol230(data){
    if (data==1)
    {
        $.ajax({
            url: 'http://'+severurl+'/owell/control/humidifier?id=3&status=on',
            type:'get',
            success: function (data) {
                console.log(data);
            },
            error : function() {
                console.log("异常！");
            }
        })
    }
    if (data==2)
    {
        $.ajax({
            url: 'http://'+severurl+'/owell/control/humidifier?id=3&status=off',
            type:'get',
            success: function (data) {
                console.log(data);
            },
            error : function() {
                console.log("异常！");
            }
        })
    }
 
}


function szbutton(data){
    if (data==1)
    {
        if (1){
                                    
            $.ajax({
            url: 'http://122.112.234.240:9007/monitor/devices/real/59370014/all/0',
            type:'get',
            success: function (data) {
                alert(data.data[0].PH);
            },
            error : function() {
                console.log("异常！");
            }
        })
            }
        
    }
    if (data==2)
    {
        
    alert(1)
    }
    if (data==3)
    {

    }
    if (data==4)
    {

    }
}




function gqcontrol1(data){
    if (data==1)
    {
user="guest"
    }

    if (data==3)
    {
user="admin"
    }
}

function gqcontrol2(data){
    if (data==1)
    {
       
        if (user=="admin"){
                                    
            $.ajax({
            url: 'http://'+severurl+'/owell/control/lamps/synthesis?id=1&status=off',
            type:'get',
            success: function (data) {
                console.log(data);
            },
            error : function() {
                console.log("异常！");
            }
        })
            }

       
        
        

    }
    if (data==2)
    {
        if (user=="admin"){
                                    
            $.ajax({
            url: 'http://'+severurl+'/owell/control/lamps/synthesis?id=1&status=on',
            type:'get',
            success: function (data) {
                console.log(data);
            },
            error : function() {
                console.log("异常！");
            }
        })
            }

    }
   
    
}

function gqcontrol3(data){
    if (data==1)
    {

    }
    if (data==2)
    {
        

    }
  
}
function sscontrol1(data){
    if (data==1)
    {

    }
    if (data==2)
    {
        

    }
    if (data==3)
    {

    }
}



function sscontrol2(data){
    if (data==1)
    {

    }
    if (data==2)
    {
        

    }
    if (data==3)
    {

    }
}

function jscontrol2(data){
    if (data==1)
    {

    }
    if (data==2)
    {
        

    }
    if (data==3)
    {

    }
}

function jscontrol3(data){
    if (data==1)
    {

    }
    if (data==2)
    {
        

    }
    if (data==3)
    {

    }
}












