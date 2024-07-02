let element=document.querySelectorAll(".hide");
let observer= new IntersectionObserver((elem)=>{
    elem.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});
element.forEach((el)=>{
    observer.observe(el)
});
let shree=document.querySelector("#shree");
setTimeout(()=>{
   shree.style.color="red";
},1500);
const linkedin=document.querySelector("#linkedin");
const github=document.querySelector("#github");
const instagram=document.querySelector("#instagram");
linkedin.addEventListener('click',()=>{
    window.location.href="https://www.linkedin.com/in/subhashree-satapathy-7271042ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app.%20%20%20%20%20%20%20(%20%20LinkedIn)";
})

github.addEventListener('click',()=>{
    window.location.href="https://github.com/Subhashreesatapathy";
})