/**
 * Created by Administrator on 2017/10/26 0026.
 */
    var Slideicon = function (element,options) {
        this.element = element;
        this.options = {
            cover:options.cover,
            index:options.index,
            callback:options.callback
        };
        this.init();
    };
    Slideicon.prototype.init = function () {
        var _this = this;
    
        this.element.on('click','li',function(){
            $(this).nextAll().removeClass('active');
            $(this).prevAll().removeClass('active');
            var width = $(this).width();

            var left = ($(this).index())*width*1.32;
            if (left>140&&left<150){
                 left=left/1.32;
             }
            //  alert(left);
         
            _this.options.cover.attr("style","left:"+left+"px");
            $(this).addClass("active");
            var params = $(this).attr('type');
            _this.options.callback(params)
        });
    };
    new Slideicon($("#list"),{
        index:0,
        cover:$("#bg"),
        callback:function (data) {

            $.ajax({
                url:'http://'+severurl+'/owell/control/curtain?id=all&status=fun_angle_'+data*30,
                type:'get',
                success: function (data) {
                    console.log(data);
                },
                error : function() {
                    console.log("异常！");
                }
            }
        )
        }
    });
    new Slideicon($("#hourlist"),{
        index:0,
        cover:$("#thirdbg"),
        callback:function (data) {
            if (data==2)
            datas='off';
            if (data==1)
            datas='on';
            $.ajax({
                url:'http://'+severurl+'/owell/control/curtain?id=all&status=fun_'+datas,
                type:'get',
                success: function (data) {
                    console.log(data);
                },
                error : function() {
                    console.log("异常！");
                }
            }
        )
        }
    });
