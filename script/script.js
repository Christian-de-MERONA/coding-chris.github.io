let app = {
    init: function(){
        app.addSectionsToDOM();

    },
    addSectionsToDOM:function(){
        // get sections div
        const sectionsBlock = document.querySelector("#skills");

        // for each section info
        for (section of sectionsInfo){
            // get section template
            let sectionTemplate = document.querySelector("#skills-template");
            
            // clone template
            let newSection = sectionTemplate.content.cloneNode(true);

            // get title element of section template
            let sectionTitle = newSection.querySelector(".skill__icon");
            
            sectionTitle.innerHTML = '<i class="' + section.icon + ' inline-fab"></i>';

            // get list element of section template
            let sectionList = newSection.querySelector(".skill__list");

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

    }

    
};


document.addEventListener("DOMContentLoaded", app.init);
