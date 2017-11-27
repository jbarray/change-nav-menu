//获取数据
var nav1=document.getElementById('nav').getElementsByTagName('li');
 var nav2=document.getElementsByClassName('child');

//鼠标放置在第一菜单时,出现相应的第二菜单
function changeNav1(){
    for(var i=0;i<nav1.length;i++){
        nav1[i].id=i;
        nav1[i].onmouseover=function(){//第一菜单的变化
            for(var j=0;j<nav1.length;j++){
                nav1[j].className='';
            }
            this.className='on';
            for(var k=0;k<nav2.length;k++){//第二菜单的变化
                nav2[k].style.display='none';
            }
            nav2[this.id].style.display='block';
        }
    }
}
changeNav1();