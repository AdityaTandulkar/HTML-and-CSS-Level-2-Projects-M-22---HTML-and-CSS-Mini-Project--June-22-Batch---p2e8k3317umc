const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (event)=>{
    const radio = event.target.parentNode.firstElementChild.nextElementSibling;
    // const icon = event.target.parentNode.firstElementChild.firstElementChild.firstElementChild;
    // let check = false;
    const removeAttrElem = document.querySelector('[checked]');

    if(removeAttrElem === radio){
        removeAttrElem.removeAttribute("checked");
        removeAttrElem.parentNode.firstElementChild.firstElementChild.firstElementChild.style.transform = "rotate(0deg)";
    }
    else if(removeAttrElem !== null && removeAttrElem !== radio){
        removeAttrElem.removeAttribute("checked");
        removeAttrElem.parentNode.firstElementChild.firstElementChild.firstElementChild.style.transform = "rotate(0deg)";
        radio.parentNode.firstElementChild.firstElementChild.firstElementChild.style.transform = "rotate(45deg)";
        radio.setAttribute("checked","");
    }
    else{
        radio.setAttribute("checked","");
        radio.parentNode.firstElementChild.firstElementChild.firstElementChild.style.transform = "rotate(45deg)";
    }
});