$(function(){

$(".main_left").on("click",".dropdown",function(){
    //alert(11);
    //通过判断按钮btn有没有active这个class名判断是否已经点击过
    var id=this.id;
    if($(this).hasClass("active")){//第二次点击
        //如果有了active，假设已经点击过了
        //执行你的代码
        //把active去掉
        $(this).children(".dropdown-menu").slideUp("slow");
        $(this).removeClass("active");
    }else{//第一次点击
        //没有active，假设还没有点击过
        //执行你的代码
        $(this).insertBefore($(this).siblings().first());
       $(this).children(".dropdown-menu").slideDown("slow");
        var id=this.id;
        //alert(id);
        var $this_menu=$(this).find(".dropdown-menu");//当前点击菜单下的ul
        $this_menu.html("");
        //判断点击的是哪个菜单
        if(id=="dropdown1"){//1我的工作室
            var wdgzs_list=[
                '<li class="dropdown-submenu" style="position:absolute;top: 0px"> <a tabindex="-1" href="javascript:;" ><i ><img src="images/swjbxx.png" alt="" ></i> 税务基本信息</a> <ul class="dropdown-menu"> <li><a tabindex="-1" href="https://www.hao123.com/" target="_blank">登记基础信息</a></li><li class="dropdown-submenu"> <a href="https://www.hao123.com/">纳税认定信息</a>  </li> <li class="dropdown-submenu"> <a href="javascript:;">财产登记信息</a>  </li></li> <li class="dropdown-submenu"> <a href="javascript:;">完税记录信息</a>  </li><hr >',
                '<li class="dropdown-submenu" style="position:absolute;top: 40px"> <a tabindex="-1" href="javascript:;" ><i ><img src="images/menu_1_sstxxx.png" alt="" ></i> 涉税提醒信息</a> <ul class="dropdown-menu"> <li><a tabindex="-1" href="https://www.hao123.com/" target="_blank">我的办税进度</a></li>  <li class="dropdown-submenu"> <a href="https://www.hao123.com/">风险疑点信息</a>  </li> <li class="dropdown-submenu"> <a href="javascript:;">违法记录信息</a>  </li></li> <li class="dropdown-submenu"> <a href="javascript:;">涉税信息订阅</a>  </li>',

            ]
            $this_menu.append(wdgzs_list);
            var lis=$this_menu.find("li");
            for(var i=0;i<=lis.length;i++){
               // lis.eq(i).fadeIn("slow");
                if(i%2==0){//偶数行

                    lis.eq(i).animate({
                        left:'60px',

                        opacity:'1'
                    },"slow");//,function(){$(this).hide().fadeIn("slow")}
                }else if(i%2!=0){//奇数行
                    lis.eq(i).animate({
                        left:'60px',
                        opacity:'1'
                    },"slow");
                }
            }


        }else if(id=="dropdown2"){//2纳税信息预审
            var wdgzs_list=[
                '<li class="" style="position:absolute;top: 0px"> <a tabindex="-1" href="#" target="_blank" ><i ><img src="images/menu_2_1.png" alt="" ></i> 办税厅排队情况</a></li>',
                '<li class="" style="position:absolute;top: 40px"> <a tabindex="-1" href="javascript:;" target="_blank"><i ><img src="images/menu_2_2.png" alt="" ></i> 网上预约办税</a></li>',
                '<li class="" style="position:absolute;top: 80px"> <a tabindex="-1" href="javascript:;" target="_blank"><i ><img src="images/menu_2_3.png" alt="" ></i> 预约办税身份认证服务</a></li>',
            ]
            $this_menu.append(wdgzs_list);
            var lis=$this_menu.find("li");
            for(var i=0;i<=lis.length;i++){
                // lis.eq(i).fadeIn("slow");
                if(i%2==0){//偶数行
                    lis.eq(i).animate({
                        left:'60px',

                        opacity:'1'
                    },"slow");//,function(){$(this).hide().fadeIn("slow")}
                }else if(i%2!=0){//奇数行
                    lis.eq(i).animate({
                        left:'60px',

                        opacity:'1'
                    },"slow");
                }
            }
        }else if(id=="dropdown3"){//3短信提醒管理
            var wdgzs_list=[
                '<li style="position:absolute;top: 0px"><a href="#"><i ><img src="images/menu_3_1_3_1.png" alt="" ></i> 增量房交易缴税预填单</a></li>',
                '<li style="position:absolute;top: 40px"><a href="javascript:;"><i ><img src="images/menu_3_1_3_2.png" alt="" ></i> 存量房交易缴税预填单</a></li>',
                '<li style="position:absolute;top: 80px"><a href="javascript:;"><i ><img src="images/menu_3_1_3_3.png" alt="" ></i> 增量房契税自助申报</a></li>',
                '<li style="position:absolute;top: 120px"><a href="javascript:;"><i ><img src="images/menu_3_1_3_4.png" alt="" ></i> 个人住房退税申请预填单</a></li>',
                '<li style="position:absolute;top: 160px"><a href="javascript:;"><i ><img src="images/menu_3_1_3_5.png" alt="" ></i> 涉税预填单离线填写</a></li>',
                '<li style="position:absolute;top: 200px"><a href="javascript:;"><i ><img src="images/menu_3_1_3_6.png" alt="" ></i> 涉税信息采集与上报</a></li>',
                '<li style="position:absolute;top: 240px"><a href="javascript:;"><i ><img src="images/menu_3_1_3_7.png" alt="" ></i> 三证合一信息补录</a></li>',
                '<li style="position:absolute;top: 280px"><a href="javascript:;"><i ><img src="images/menu_3_1_3_8.png" alt="" ></i> 登记信息更新录入</a></li>',
                '<li style="position:absolute;top: 320px"><a href="javascript:;"><i ><img src="images/menu_3_1_3_9.png" alt="" ></i> 个人印花税申报</a></li>',
                '<li style="position:absolute;top: 360px"><a href="javascript:;"><i ><img src="images/menu_3_1_3_10.png" alt="" ></i> 个体双定户税款划转功能</a></li>',
                '<li style="position:absolute;top: 400px"><a href="javascript:;"><i ><img src="images/menu_3_1_3_11.png" alt="" ></i> 零申报自助办理</a></li>',
                '<li style="position:absolute;top: 440px"><a href="javascript:;"><i ><img src="images/menu_3_1_3_12.png" alt="" ></i> 13清缴税费自助办理</a></li>',
                '<li style="position:absolute;top: 480px"><a href="javascript:;"><i ><img src="images/menu_3_1_3_13.png" alt="" ></i> 附征税费申报</a></li>',
                '<li style="position:absolute;top: 520px"><a href="javascript:;"><i ><img src="images/menu_3_1_3_14.png" alt="" ></i> 车船税减免退税预填单</a></li>',
                '<li style="position:absolute;top: 560px"><a href="javascript:;"><i ><img src="images/menu_3_1_3_15.png" alt="" ></i> 个人所得税12万申报</a></li>',
                '<li style="position:absolute;top: 600px"><a href="javascript:;"><i ><img src="images/menu_3_1_3_16.png" alt="" ></i> 三方协议签约确认</a></li>',
                '<li style="position:absolute;top: 640px"><a href="javascript:;"><i ><img src="images/menu_3_1_3_17.png" alt="" ></i> 合伙个人所得税A表申报</a></li>',
            ]
            $this_menu.append(wdgzs_list);
            var lis=$this_menu.find("li");
            for(var i=0;i<=lis.length;i++){
                setTimeout('',10000);
                // lis.eq(i).fadeIn("slow");
                if(i%2==0){//偶数行,
                    lis.eq(i).animate({
                        left:'60px',
                        opacity:'1'
                    },"slow");//,function(){$(this).hide().fadeIn("slow")}
                }else if(i%2!=0){//奇数行
                    lis.eq(i).animate({
                        left:'60px',
                        opacity:'1'
                    },"slow");
                }

            }
            $this_menu.attr("style","display:block;overflow-y: scroll");

        }else if(id=="dropdown4"){//平台管理
            var wdgzs_list=[
                '<li style="position:absolute;top: 0px"><a href="javascript:;"><i ><img src="images/menu_3_1_4_1.png" alt="" ></i>二维码办税导航</a></li>',
                '<li style="position:absolute;top: 35px"><a href="http://www.gxgs.gov.cn:8101/sszsk/szzsk/sousuo"><i ><img src="images/menu_3_1_4_2.png" alt="" ></i>税收法规知识库</a></li>',
                '<li style="position:absolute;top: 70px"><a href="javascript:;"><i ><img src="images/menu_3_1_4_3.png" alt="" ></i>办税日历</a></li>',
                '<li style="position:absolute;top: 105px"><a href="../col/index.html"><i ><img src="images/menu_3_1_4_4.png" alt="" ></i>办税地图</a></li>',
                '<li style="position:absolute;top: 140px"><a href="javascript:;"><i ><img src="images/menu_3_1_4_5.png" alt="" ></i>投诉与建议</a></li>',
                '<li style="position:absolute;top: 175px"><a href="javascript:;"><i ><img src="images/menu_3_1_4_6.png" alt="" ></i>培训报名</a></li>',
                '<li style="position:absolute;top: 210px"><a href="http://lib.taxation.cn:8080/"><i ><img src="images/menu_3_1_4_7.png" alt="" ></i>税务图书馆</a></li>',
                '<li style="position:absolute;top: 245px"><a href="http://www.chinatax.gov.cn/cjsfwwangluo/index.html"><i ><img src="images/menu_3_1_4_8.png" alt="" ></i>场景式办税</a></li>',
                '<li style="position:absolute;top: 280px"><a href="#" target="_blank"><i ><img src="images/menu_3_1_4_9.png" alt="" ></i>资料下载</a></li>',
            ]
            $this_menu.append(wdgzs_list);
            var lis=$this_menu.find("li");

            for(var i=0;i<=lis.length;i++){
                if(i%2==0){//偶数行
                    lis.eq(i).animate({
                        left:'60px',
                        opacity:'1'
                    },"slow");//,function(){$(this).hide().fadeIn("slow")}
                }else if(i%2!=0){//奇数行
                    lis.eq(i).animate({
                        left:'60px',
                        opacity:'1'
                    },"slow");
                }
            }
        }
        $(".dropdown-submenu li").on("click","a",function(){
            //window.location.href=this.href;
            window.open(this.href);
            return false;


        });
        $this_menu.find("li").on("click",function(event){
            event.stopPropagation();
        });
        $this_menu.find("li.dropdown-submenu").on("click",function(event){
            //event.stopPropagation();
            $(".dropdown-submenu .dropdown-menu").hide();
            $this_menu.find("li").animate({
                left:'0',
            });
            $(this).find(".dropdown-menu").show();

           // return false;
        });
        $("#dropdown3,#dropdown2,#dropdown4").find("li").append("<hr style='color: #CCCCCC;height: 1px;border-top:1px solid #CCCCCC;width:320px;margin: 0px;position: relative;right: 60px'>");
        $("#dropdown1").find("li").append("<hr style='color: #CCCCCC;height: 1px;border-top:1px solid #CCCCCC;width:300%;margin: 0px;position: relative;right: 60px'>");
        $(this).addClass("active");

    }
    return false;
});
});