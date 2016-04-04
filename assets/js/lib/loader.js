"use strict";

class Loader{

    constructor(){
        this._events();
    }
    _events(){
        $(window).on("load", (e) => { this._handleLoad(e) });
    }
    _handleLoad(e){

        window.setTimeout(function(){
            $("body").addClass("__loaded");
        }, 3000);

        return false;
    }
}

export default Loader;