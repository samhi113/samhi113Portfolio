function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace('#', '');
    console.log(hashTag + ' ' + pageID);
    loadPage(pageID);
}

function initURLListener() {
    $(window).on('hashchange', changeRoute);
    changeRoute();
}

function loadPage(pageName) {
    if (pageName != "") {
        $.get("pages/" + pageName + ".html", (data) =>{
            $("#app").html(data);
        }).fail((error) => {
            console.log("error " + error);
        });
    } else {
        $.get("pages/home.html", (data) =>{
            $("#app").html(data);
        }).fail((error) => {
            console.log("error " + error);
        });
    }
}
 
/* The `$(document).ready(function () { ... });` code block is using jQuery to ensure that the code
inside the function runs only after the DOM (Document Object Model) has been fully loaded. */
$(document).ready(function () {
    initURLListener();
    //loadPage("home");
});