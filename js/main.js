//Truncate Card Title
window.addEventListener("load", function(){
    truncateCardTitle();
});

function truncateCardTitle(){
    var cardList = document.getElementsByClassName("card-title");
    for(var i = 0; i < cardList.length; i++){
        var text = cardList[i].innerHTML;
        var newText = truncateString(text,40);
        cardList[i].innerHTML = newText;
    }
}

function truncateString(str, num){
    if(str.length > num){
        return str.slice(0, num) + "...";
    }else{
        return str;
    }
}

// SidebarMini
var toggleBtn = document.querySelector('.sidebarMini__button');
var sidebarMini = document.querySelector('.sidebarMini');
var switchBtn = document.querySelector('#checkbox');

switchBtn.addEventListener('click', function(){
    document.querySelector('body').classList.toggle('dark-mode');
});

toggleBtn.addEventListener('click', function(){
    sidebarMini.classList.toggle('is-opened');
});