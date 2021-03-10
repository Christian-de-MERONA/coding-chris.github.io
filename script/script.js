let app = {
    init: function(){
        let sectionList = document.querySelectorAll('.section');

        for (section of sectionList){
            section.addEventListener("mouseover", app.showList);
            section.addEventListener("mouseleave", app.hideList);
        }

        console.log(sectionInfo);


    },
    showList:function(evt){
        const mouseoverElement = evt.target;
        if(mouseoverElement.classList.contains("section")){
            const listElement = mouseoverElement.querySelector(".section__list");
            listElement.classList.remove("list-hidden");
        }
    },
    hideList:function(evt){
        const mouseoverElement = evt.target;
        if(mouseoverElement.classList.contains("section")){
            const listElement = mouseoverElement.querySelector(".section__list");
            listElement.classList.add("list-hidden");
        }
    }
    
};


document.addEventListener("DOMContentLoaded", app.init);
