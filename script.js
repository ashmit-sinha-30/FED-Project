'use strict';
/*SIGN IN*/
const signInEl = document.querySelector('.signin');
const closeModalEl = document.querySelector('.close-modal');
const overlayEl = document.querySelector('.overlay');
const signinModalEl = document.querySelector('.signinmodal');
const signinBEl = document.querySelector('.signin-b');

const signIn = function(){
    signinModalEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
}

const closeModal = function(){
    signinModalEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
}

signInEl.addEventListener('click',signIn);

closeModalEl.addEventListener('click',closeModal);
document.addEventListener('keydown',function(e){
    if(e.key === 'Escape' && !signinModalEl.classList.contains('hidden')){
        closeModal();
    }
});

/*LOG IN*/
const login = function(){
    let userName = document.getElementById('username1').value;
    let passWord = document.getElementById('password2').value;

    let websiteUsername = 'Ashmit';
    let websitePassword = 'fedxash123';

    if(userName == websiteUsername && passWord == websitePassword){
        window.location.assign("login.html");
        alert("Login Succesfull 🎉!!")
    }else{
        alert("Invalid Credentials 💀!!")
    }
}

//Carousel

document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".heroimg");
    const buttonsHtml = Array.from(items, () => {
      return `<span class="carousel__button"></span>`;
    });
  
    carousel.insertAdjacentHTML(
      "beforeend",
      `
          <div class="carousel__nav">
              ${buttonsHtml.join("")}
          </div>
      `
    );
  
    const buttons = carousel.querySelectorAll(".carousel__button");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        // un-select all the items
        items.forEach((item) =>
          item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("carousel__button--selected")
        );
  
        items[i].classList.add("carousel__item--selected");
        button.classList.add("carousel__button--selected");
      });
    });
  
    // Select the first item on page load
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
  });
  
  //LOG OUT
  const logout = function(){
       window.location.assign("index.html");
       alert("Logout Succesfull 🥲!!")
  }

const logOutEl = document.querySelector('.signin');
const logoutModalEl = document.querySelector('.logoutmodal');
const logoutBEl = document.querySelector('.logout-b');

const logOut = function(){
    logoutModalEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
}

const closeModalL = function(){
    logoutModalEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
}

logOutEl.addEventListener('click',logOut);

closeModalEl.addEventListener('click',closeModalL);
document.addEventListener('keydown',function(e){
    if(e.key === 'Escape' && !logoutModalEl.classList.contains('hidden')){
        closeModalL();
    }
});