const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault();
    console.log(loginInput.value);
    // const username = loginInput.value;
    // console.log(username);
}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
    alert("click");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

// 브라우저가 실행시켜주고, 내용을 전달해준다.