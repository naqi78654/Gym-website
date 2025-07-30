// this is swipper js library code
 document.addEventListener("DOMContentLoaded",()=>{
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
 })
//  on load event
window.addEventListener("load",()=>{
    alert("Website is fully loaded");

});
// this is dark mode code
let dark=document.getElementById("darkmodebut");
let body1=document.getElementById("main");
let head2=document.querySelectorAll("h2");
let para=document.querySelectorAll("p");
let list=document.querySelectorAll("a");
let cards=document.querySelectorAll(".cardhead");
dark.addEventListener("click",()=>{
    body1.classList.add("darkey");
    head2.forEach((d)=>{
        d.classList.add("darkey1");

    });
     list.forEach((l)=>{
        l.classList.add("darkey1");

    });
     para.forEach((p)=>{
        p.classList.add("darkey1");

    });
    cards.forEach((c)=>{
        c.classList.add("darkey1");

    });
    
});
dark.addEventListener("dblclick",()=>{
    body1.classList.remove("darkey");
     head2.forEach((d)=>{
        d.classList.remove("darkey1");

    });
     list.forEach((l)=>{
        l.classList.remove("darkey1");

    });
     para.forEach((p)=>{
        p.classList.remove("darkey1");

    });
     cards.forEach((c)=>{
    c.classList.remove("darkey1");
});
    
});
// service section js code
let servicebut=document.querySelectorAll(".servicebtn");
let paradetail=document.querySelectorAll(".servicedetail");
servicebut.forEach((el)=>{
    el.addEventListener("click",()=>{
        paradetail.forEach((lo)=>{
            lo.innerHTML="Get 50% off at our store by just buy more products form us and get 75% off!!";

        })
    });

});
// protein intake calculator
let probtn=document.getElementById("proteinbtn");
probtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let wazan=parseFloat(document.getElementById("weight").value);
    let naam=document.getElementById("name").value;
    let umar=document.getElementById("age").value;
    let measure=parseInt(wazan*0.8);
    let ans=document.getElementById("resultbox");
    ans.innerHTML=`Your name is ${naam} and Your age is ${umar} so, Your protein intake is ${measure} g.`;
    
   
});
// registration form coding
let register=document.getElementById("regform");
register.addEventListener("submit",(event)=>{
    event.preventDefault();
    let nam=document.getElementById("name1").value;
    let email=document.getElementById("em").value;
    let male=document.getElementById("gender").value;
     let female=document.getElementById("gender1").value;
     let no=document.getElementById("phone").value;
    //  Name validation
     if(nam===""){
        alert("Blank Space");
        return false;
     }
      if(!isNaN(nam)){
        alert(" Only Words");
        return false;
     }
    //  Phone valdation
    if(no===""){
         alert("Blank Space");
        return false;

    }
    if(isNaN(no)){
         alert(" Only Numbers");
        return false;

    }
    if(no.length!==10){
        alert(" Only 10 Digits");
        return false;

    }
    // email validation
     if(email===""){
         alert("Blank Space");
        return false;

    }
    if(email.indexOf("@")<=0){
        alert("Email not accepted");
        return false;
    }
       var modal = new bootstrap.Modal(document.getElementById("nita"), {
        keyboard: false
    });
    modal.show();

    return true;
});
// Animated Number section

  const animated = document.querySelectorAll(".animatednum");
  const speed = 200; // lower = faster

  animated.forEach((current) => {
    const targetNum = parseInt(current.dataset.number);
    let currentNum = 0;

    const update = () => {
      const increment = Math.ceil(targetNum / speed);
      currentNum += increment;

      if (currentNum < targetNum) {
        current.innerHTML = currentNum;
        setTimeout(update, 100); // call again for smooth animation
      } else {
        current.innerHTML = targetNum; // final adjustment
      }
    };

    // Start animation when page loads
    update();
  });


