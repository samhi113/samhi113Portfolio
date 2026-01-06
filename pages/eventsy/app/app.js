import { loadPage } from "../model/model.js";

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
 
/* The `$(document).ready(function () { ... });` code block is using jQuery to ensure that the code
inside the function runs only after the DOM (Document Object Model) has been fully loaded. */
$(document).ready(function () {
    initURLListener();
    //loadPage("home");
});