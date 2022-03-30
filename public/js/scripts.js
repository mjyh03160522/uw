/*!
* Start Bootstrap - Freelancer v7.0.3 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {


    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // 캐릭터 변수 받기
    const audioContainer = document.querySelector('#audioContainer');
    const playBtn = document.querySelector('.js-playBtn');

    const tempBtn01 = document.querySelector('.tempBtn01');
    const tempBtn02 = document.querySelector('.tempBtn02');
    const tempBtn03 = document.querySelector('.tempBtn03');
    const tempBtn04 = document.querySelector('.tempBtn04');
    const tempBtn05 = document.querySelector('.tempBtn05');
    const tempBtn06 = document.querySelector('.tempBtn06');
    const tempBtn07 = document.querySelector('.tempBtn07');
    const tempBtn08 = document.querySelector('.tempBtn08');
    const tempBtn09 = document.querySelector('.tempBtn09');
    const tempBtn10 = document.querySelector('.tempBtn10');
    const tempBtn11 = document.querySelector('.tempBtn11');
    const tempBtn12 = document.querySelector('.tempBtn12');
    const tempBtn13 = document.querySelector('.tempBtn13');

    const done = document.querySelector('.js-check');
    const reload = document.querySelector('.js-rerun');
    const gamestart = document.querySelector('.js-start');

    const start = document.querySelector('.start');

    values=[];
    charlist=[];

    function addRecord01(){
        var inp = document.getElementsByClassName('tempBtn01')[0].id;
        values.push(inp);
        charlist.push("도플갱어");
        document.getElementById("doppleganger").style.border ="3px solid red "
        alert("도플갱어 선택 완료");
        }

      function addRecord02(){
          var inp = document.getElementsByClassName('tempBtn02')[0].id;
          values.push(inp);
<<<<<<< HEAD
          charlist.push("늑대인간");
=======
          charlist.push("늑대인간 x 2");
>>>>>>> 9470c14a5896aa7cef24dfcf653b439a2c6a3da0
          document.getElementById("werewolf").style.border ="3px solid red "
          alert("늑대인간 2명 선택 완료");
          }

      function addRecord03(){
            var inp = document.getElementsByClassName('tempBtn03')[0].id;
            values.push(inp);
            charlist.push("배신자");
            document.getElementById("minon").style.border ="3px solid red "
            alert("배신자 선택 완료");
            }

      function addRecord04(){
            var inp = document.getElementsByClassName('tempBtn04')[0].id;
            values.push(inp);
            charlist.push("프리메이슨");
            document.getElementById("ch04").style.border ="3px solid red "
<<<<<<< HEAD
            alert("프리메이슨 선택 완료");
=======
            alert("프리메이슨 2명 선택 완료");
>>>>>>> 9470c14a5896aa7cef24dfcf653b439a2c6a3da0
            }
      function addRecord05(){
            var inp = document.getElementsByClassName('tempBtn05')[0].id;
            values.push(inp);
            charlist.push("예언자");
            document.getElementById("ch05").style.border ="3px solid red "
            alert("예언자 선택 완료");
            }
      function addRecord06(){
            var inp = document.getElementsByClassName('tempBtn06')[0].id;
            values.push(inp);
            charlist.push("강도");
            document.getElementById("ch06").style.border ="3px solid red "
            alert("강도 선택 완료");
            }
      function addRecord07(){
              var inp = document.getElementsByClassName('tempBtn07')[0].id;
              values.push(inp);
              charlist.push("말썽쟁이");
              document.getElementById("ch07").style.border ="3px solid red "
              alert("말썽쟁이 선택 완료");
            }
      function addRecord08(){
            var inp = document.getElementsByClassName('tempBtn08')[0].id;
            values.push(inp);
            charlist.push("주정뱅이");
            document.getElementById("ch08").style.border ="3px solid red "
            alert("주정뱅이 선택 완료");
            }
      function addRecord09(){
              var inp = document.getElementsByClassName('tempBtn09')[0].id;
              values.push(inp);
              charlist.push("불면증 강민지");
              document.getElementById("ch09").style.border ="3px solid red "
              alert("불면증 강민지 선택 완료");
            }
      function addRecord10(){
            var inp = document.getElementsByClassName('tempBtn10')[0].id;
            values.push(inp);
            charlist.push("잉여 시민");
            document.getElementById("ch10").style.border ="3px solid red "
            alert("잉여 선택 완료");
            }
      function addRecord11(){
            var inp = document.getElementsByClassName('tempBtn11')[0].id;
            values.push(inp);
            charlist.push("사냥꾼");
            document.getElementById("ch11").style.border ="3px solid red "
            alert("사냥꾼 선택 완료");
            }
      function addRecord12(){
            var inp = document.getElementsByClassName('tempBtn12')[0].id;
            values.push(inp);
            charlist.push("무두장이");
            document.getElementById("ch12").style.border ="3px solid red "
            alert("무두장이 선택 완료");
            }
      function addRecord13(){
          var inp = document.getElementsByClassName('tempBtn13')[0].id;
          values.push(inp);
          charlist.push("늑대인간 x 1");
          document.getElementById("werewolf1").style.border ="3px solid red "
          alert("늑대인간 1명 선택 완료");
          }

      function check(){
          if (charlist.length <1){
              alert("선택된 캐릭터가 없습니다.");
          }else {
            //localStorage.setItem("key", JSON.stringify(values));

            alert("선택된 캐릭터 :"+charlist);

          }
      }

      function funcstart(){


        localStorage.setItem("key", JSON.stringify(values));

        alert("선택된 캐릭터 :"+charlist);
      }



      function rerun(){
        values=[]
        charlist=[]
        alert("캐릭터를 처음부터 다시 선택합니다.")
      }






    tempBtn01.addEventListener('click', addRecord01);
    tempBtn02.addEventListener('click', addRecord02);
    tempBtn03.addEventListener('click', addRecord03);
    tempBtn04.addEventListener('click', addRecord04);
    tempBtn05.addEventListener('click', addRecord05);
    tempBtn06.addEventListener('click', addRecord06);
    tempBtn07.addEventListener('click', addRecord07);
    tempBtn08.addEventListener('click', addRecord08);
    tempBtn09.addEventListener('click', addRecord09);
    tempBtn10.addEventListener('click', addRecord10);
    tempBtn11.addEventListener('click', addRecord11);
    tempBtn12.addEventListener('click', addRecord12);
    tempBtn13.addEventListener('click', addRecord13);
    done.addEventListener('click', check);
    reload.addEventListener('click', rerun);


    gamestart.addEventListener('click',funcstart)
});
