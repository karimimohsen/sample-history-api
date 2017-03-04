class Route {

    constructor() {
        
        window.onpopstate = function (event) {
            console.log("history changed to: " + document.location.href);
        }   
    }

    add(state, title, url) {
        history.pushState(state, title, url);
    }

    replace(state, title, url) {
        history.replaceState(state, title, url);
    }


}