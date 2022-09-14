const title= document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    console.log("title was clicked");
}

title.addEventListener("click", handleTitleClick);

// handleTitleClick(); // 대신 클릭해 준다.

// console.log(title);

// console.dir(title); // element 확인을 도와줌.

// title.style.color = "blue";