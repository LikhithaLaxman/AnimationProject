

document.addEventListener('mouseover',function(e){
    let body=document.querySelector('body')
    let heart=document.createElement('span')
    let X=e.offsetX;
    let Y=e.offsetY;
    heart.style.left=X+'px';
    heart.style.top=Y+'px';

    let size=Math.random()*80;
    heart.style.widt=20+size+'px';
    heart.style.height=20+size+'px';

    let transformValue=Math.random()*360;
    heart.style.transform='rotate('+transformValue+'deg)';

    body.appendChild(heart);

    setTimeout(()=>{
        heart.remove()

    },1000)
});


