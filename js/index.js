
$(function(){

    /*小轮播图*/
    var a=0;
   //点击左右按钮，图片进行切换效果
   $(".pzjk-sp1").click(function(){
     a--;
     // a=(a+3)%3;
     if(a<0){
      a=2;
     }
     $(".pzjk-ul1").animate({marginLeft:-105*a},"slow");
   });
   $(".pzjk-spp").click(function(){
     a++;
     // a=a%3;
     if(a>2){
      a=0;
     }
     $(".pzjk-ul1").animate({marginLeft:-105*a},"slow");
   });

  /*ul = $('.wrapper .top .imgs')
  var width = 500
  var num = 1
  start()
  // 鼠标放在下方原点上触发事件
  $('.buttom .move li').hover(function () {
      //清除ul所有动画队列
      ul.stop(true, true)
      //清楚定时器
      clearInterval(timer)
      //添加背景色
      $(this).addClass('bg').siblings().removeClass('bg')
      //图片移到相对应
      num = $(this).index()
      ul.animate({
          "right": width * num
      })
  }, function () {
      //开始轮播
      start()
  })
  //下一张
  $('.center .right').on('click', function () {
      ul.stop(true, true)
      clearInterval(timer)
      num++;
      if (num >= 5) {
          num = 1;
          ul.css({
              right: 0
          });
      }
      ul.animate({
          "right": width * num
      })
      color()
      start()
  })
  //下一张
  $('.center .left').on('click', function () {
      ul.stop(true, true)
      clearInterval(timer)
      num--;
      if (num <= -1) {
          num = 3;
          ul.css({
              right: 3000
          });
      }
      ul.animate({
          "right": width * num
      })
      color()
      start()
  })
  
  // 自动轮播
  function start() {
      timer = setInterval(() => {
          num++
          if (num >= 5) {
              num = 1;
              ul.css({
                  right: 0
              });
          }
          ul.animate({
              "right": width * num
          })
          if (num === 4) {
              $('.buttom .move li').eq(0).addClass('bg').siblings().removeClass('bg')
          } else {
              $('.buttom .move li').eq(num).addClass('bg').siblings().removeClass('bg')
          }
      }, 3000);
  }
*/


     /*懂你想要的鼠标移入*/
    $(window).scroll(function(event) {
      $('.dn-li1').on({
        mouseenter:function(){
          $('.div-yc').fadeIn();
        },
        mouseleave:function(){
          $('.div-yc').fadeOut();
        }
      });
       $('.dn-li2').on({
        mouseenter:function(){
          $('.div-yc1').fadeIn();
        },
        mouseleave:function(){
          $('.div-yc1').fadeOut();
        }
      });
       $('.dn-li3').on({
        mouseenter:function(){
          $('.div-yc2').fadeIn();
        },
        mouseleave:function(){
          $('.div-yc2').fadeOut();
        }
      });
       $('.dn-li4').on({
        mouseenter:function(){
          $('.div-yc3').fadeIn();
        },
        mouseleave:function(){
          $('.div-yc3').fadeOut();
        }
      });
       $('.dn-li5').on({
        mouseenter:function(){
          $('.div-yc4').fadeIn();
        },
        mouseleave:function(){
          $('.div-yc4').fadeOut();
        }
      });
       $('.dn-li6').on({
        mouseenter:function(){
          $('.div-yc5').fadeIn();
        },
        mouseleave:function(){
          $('.div-yc5').fadeOut();
        }
      });
       $('.dn-li7').on({
        mouseenter:function(){
          $('.div-yc6').fadeIn();
        },
        mouseleave:function(){
          $('.div-yc6').fadeOut();
        }
      });
       $('.dn-li8').on({
        mouseenter:function(){
          $('.div-yc7').fadeIn();
        },
        mouseleave:function(){
          $('.div-yc7').fadeOut();
        }
      });
       $('.dn-li9').on({
        mouseenter:function(){
          $('.div-yc8').fadeIn();
        },
        mouseleave:function(){
          $('.div-yc8').fadeOut();
        }
      });
       $('.dn-li10').on({
        mouseenter:function(){
          $('.div-yc9').fadeIn();
        },
        mouseleave:function(){
          $('.div-yc9').fadeOut();
        }
      });
       $('.dn-li11').on({
        mouseenter:function(){
          $('.div-yc10').fadeIn();
        },
        mouseleave:function(){
          $('.div-yc10').fadeOut();
        }
      });
       $('.dn-li12').on({
        mouseenter:function(){
          $('.div-yc11').fadeIn();
        },
        mouseleave:function(){
          $('.div-yc11').fadeOut();
        }
      });
    });


});







