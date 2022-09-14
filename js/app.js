const h1 = document.querySelector("div.hello:first-child h1");

function handlerTitleClick(){
    // h1.className = "active"; // getter이며 setter이다/
    // console.log(h1.className);

    // if(h1.className === "active") {
    //     h1.className = "";
    // } else {
    //     h1.className = "active";
    // }

    const clickedClass = "clicked";

    if(h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handlerTitleClick);