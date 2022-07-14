const openNavBtn = document.querySelector(".open-nav-btn");
const headerNav = document.querySelector(".header__nav");

openNavBtn.addEventListener("click", () => {
    toggleContent(headerNav)
})

const headerTitlesSublist = document.querySelectorAll(".js-header__title-sublist");
const headerSublists = document.querySelectorAll(".js-header__sublist");

headerTitlesSublist.forEach(function(title) {
    title.addEventListener("click", () => {

        // fecha todos as outras listas, exeto a lista clicada
        headerTitlesSublist.forEach(function(titleOther) {
            if (title != titleOther) {
                let headerSublist = takeSublist(titleOther)
                hideContent(headerSublist);
                titleOther.classList.remove("arrow-up");
            } 
        })

        // se a lista clicade estiver aberta, ela é fechada e vice-versa
        let headerSublist = takeSublist(title)
        toggleContent(headerSublist);
        title.classList.toggle("arrow-up");
    })
})

function toggleContent(element) {
    element.classList.toggle("hidden");    
    setTimeout(() => element.classList.toggle("zero-opacity"), 100);
}

function hideContent(element) {
    element.classList.add("hidden");
    setTimeout(() => element.classList.add("zero-opacity"), 100);
}

// Loop que verifica no DOM onde está a sublist (isso através de nome de classe)
function takeSublist(title) {
    for (i=0; i<title.parentNode.children.length; i++) {
        if (title.parentNode.children[i].className.includes("js-header__sublist")) {
            headerSublist = title.parentNode.children[i];
        }
    }
    return headerSublist;
}