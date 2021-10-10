  let btnClose = document.querySelector("#hide");
    btnClose.onclick = hide;

  let show_btn = document.querySelector("#show");
    show_btn.onclick = show;

function show(){
    var modal = document.querySelector(".modal");
    //modal.hidden = true;
    modal.style.display = "block";
}



function hide(){
    var modal = document.querySelector(".modal");
    //modal.hidden = true;
    modal.style.display = "none";
}


