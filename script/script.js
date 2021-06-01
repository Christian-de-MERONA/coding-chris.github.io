let app = {
    init: function(){
        app.addSectionsToDOM();

        document.addEventListener("scroll", app.handleScroll);

        let paginationBtnLeft = document.querySelector(".left");
        let paginationBtnRight = document.querySelector(".right");

        paginationBtnLeft.addEventListener("click", app.changeOrder);
        paginationBtnRight.addEventListener("click", app.changeOrder);

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

            // // get list element of section template
            // let sectionList = newSection.querySelector(".skill__list");

            // //  for each element in listElements
            // for (listItem of section.listElements){
            //     // create li element
            //     let sectionListItem = document.createElement("li");

            //     // add text to li element
            //     sectionListItem.innerText = listItem;

            //     // add li element to section list element
            //     sectionList.appendChild(sectionListItem);
            // }

            // // create last list element
            // let sectionListItem = document.createElement("li");

            // //  add text to last list element
            // sectionListItem.innerText = "...";

            // // add li element to section list element
            // sectionList.appendChild(sectionListItem);

            // add new section to sections element
            sectionsBlock.appendChild(newSection);
        }

        // app.addOrder();
    },
    addOrder: function(){
        let skillItems = document.querySelectorAll(".skill");

        let orderIndex = 0;

        skillItems.forEach(element => {
            orderIndex += 1;
            element.style.order = orderIndex;
        });
    },
    handleScroll: function(e){

        let backToTopBtn = document.querySelector("#back-to-top");
        // make "go to top" button appear
        if(window.pageYOffset >= 300){
            if(backToTopBtn.classList.contains("hidden")){
                backToTopBtn.classList.remove("hidden");
            }
        } else {
            if(!backToTopBtn.classList.contains("hidden")){
                backToTopBtn.classList.add("hidden");
            }
        }
    },
    changeOrder: function(e){

        let btnClicked = e.currentTarget;

        let skills = document.querySelector("#skills");
        let newSkillElement;
        if(btnClicked.classList.contains("right")){
            console.log("right btn clicked");
            let firstSkill = skills.firstElementChild;
            newSkillElement = firstSkill.cloneNode(true);
            skills.removeChild(firstSkill);
            skills.appendChild(newSkillElement);
        } 


        if(btnClicked.classList.contains("left")) {
            let lastSkill = skills.lastElementChild;
            newSkillElement = lastSkill.cloneNode(true);
            skills.removeChild(lastSkill);
            skills.insertBefore(newSkillElement, skills.firstElementChild);
            
        }


        

    }

    
};


document.addEventListener("DOMContentLoaded", app.init);
