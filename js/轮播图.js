window.addEventListener('load', function () {
    var left = this.document.querySelector('.left-tab');
    var right = this.document.querySelector('.right-tab');
    var box = this.document.querySelector('.box');
    var ul = this.document.querySelector('.ul');
    var pul = this.document.querySelector('.pul');
    var li = ul.querySelectorAll('li');
    console.log(li.length);
    console.log(left);
    console.log(right);
    var bwidth = box.offsetWidth;
    var cir = 0;
    box.addEventListener('mouseenter', function () {
        left.style.display = 'block';
        right.style.display = 'block';
        clearInterval(time);
        time = null;
    })

    box.addEventListener('mouseleave', function () {
        left.style.display = 'none';
        right.style.display = 'none';
        time = setInterval(function () {
            right.click();
        },3000)
    })

    for (i = 0; i < li.length; i++){
       
        li[i].addEventListener('click', function () {
            
            for (i = 0; i < li.length; i++){
                li[i].className = '';
                li[i].setAttribute('index',i);
            }
            this.className = 'current'
            
            var index = this.getAttribute('index', i);
            
            num = cir=index;
           console.log(index*bwidth);
            animate(pul, -index * bwidth);
        })
    }

    var num = 0;
        right.addEventListener('click', function () {
            if (num ==li.length) {
                pul.style.left = 0;
                num = 0;
            }
            num++;
            animate(pul, -num * bwidth);
            cir++;
            if (cir == li.length) {
                cir = 0;
            }
            for (i = 0; i < li.length; i++){
                li[i].className = '';
            }
            li[cir].className='current'
        })
    
   left.addEventListener('click', function () {
            if (num == 0) {
             num = li.length;
             pul.style.left=-num*bwidth+'px';              
            }
            num--;
            animate(pul, -num * bwidth);
            cir--;
       
            if (cir <0) {
                cir = 4;
            }
            for (i = 0; i < li.length; i++){
                li[i].className = '';
            }
            li[cir].className='current'
        })
    
    var time = this.setInterval(function () {
        right.click();
    },3000)
    
})