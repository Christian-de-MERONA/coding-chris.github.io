let app = {
    init: function(){
        app.addSectionsToDOM();

    },
    showList:function(evt){
        const mouseoverElement = evt.target;
        mouseoverElement.closest(".section").classList.remove("list-hidden");
    },
    hideList:function(evt){
        const mouseoverElement = evt.target;
        mouseoverElement.closest(".section").classList.add("list-hidden");

    },
    addSectionsToDOM:function(){
        // get sections div
        const sectionsBlock = document.querySelector("#sections");

        // for each section info
        for (section of sectionsInfo){
            // get section template
            let sectionTemplate = document.querySelector("#section-template");
            
            // clone template
            let newSection = sectionTemplate.content.cloneNode(true);

            // get title element of section template
            let sectionTitle = newSection.querySelector(".section__title");
            
            sectionTitle.innerHTML = '<i class="' + section.icon + ' inline-fab"></i>';

            // get list element of section template
            let sectionList = newSection.querySelector(".section__list");

            //  for each element in listElements
            for (listItem of section.listElements){
                // create li element
                let sectionListItem = document.createElement("li");

                // add text to li element
                sectionListItem.innerText = listItem;

                // add li element to section list element
                sectionList.appendChild(sectionListItem);
            }

            // create last list element
            let sectionListItem = document.createElement("li");

            //  add text to last list element
            sectionListItem.innerText = "...";

            // add li element to section list element
            sectionList.appendChild(sectionListItem);

            // add new section to sections element
            sectionsBlock.appendChild(newSection);
        }

        // call listener function to add listeners to all sections
        app.addAllListeners();


    },
    addAllListeners:function(){
        // get all sections 
        let sectionList = document.querySelectorAll('.section');

        // add listeners to each section
        for (section of sectionList){
            section.addEventListener("mouseover", app.showList);
            section.addEventListener("mouseleave", app.hideList);
        }
    }

    
};


document.addEventListener("DOMContentLoaded", app.init);
