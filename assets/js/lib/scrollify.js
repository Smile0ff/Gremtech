"use strict";

import getVendor from "./getVendor";

let elements = $(".scrollify");
let transform = getVendor("transform");
let transition = getVendor("transition");

class Scrollify{

    constructor(){
        this._events();
    }
    _events(){
        $(document).on("scroll", (e) => { this._handleScroll(e) });
    }
    _handleScroll(e){
        let scrollY = $(document).scrollTop();

        elements.each((index, el) => {
            el = $(el);
            let shift = 0;
            let scrollDiff = 0;
            let offsetTop = el.offset().top;

            if(scrollY + window.innerHeight >= offsetTop){
                scrollDiff = Math.floor((scrollY + window.innerHeight) - offsetTop);
                shift = (scrollDiff / el.data("speed")) * -1;
                
                el.css({
                    transform: "translate3d(0, "+ shift +"px, 0)",
                    transition: "transform .1s ease"
                });
            }
        }); 

        return false;
    }
}

export default Scrollify;