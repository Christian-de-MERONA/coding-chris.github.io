let app = {
    init: function(){
        app.addSkillsToDOM();

        app.addProjectsToDOM();

        document.addEventListener("scroll", app.handleScroll);

    },
    addSkillsToDOM:function(){
        // get skills div
        const skillsBlock = document.querySelector("#skills");

        // for each skill info
        for (skill of skills){

            // get skill template
            let skillTemplate = document.querySelector("#skills-template");
            
            // clone template
            let newskill = skillTemplate.content.cloneNode(true);

            // get title element of skill template
            let skillName = newskill.querySelector(".skill__name");
            skillName.textContent = skill.title;

            // get title element of skill template
            let skillIcon = newskill.querySelector(".skill__icon");
            skillIcon.innerHTML = '<i class="' + skill.icon + ' inline-fab"></i>';

            // add new skill to skills element
            skillsBlock.appendChild(newskill);
        }
    },
    addProjectsToDOM:function(){
        const projetsSection = document.querySelector("#projects");

        // console.log(projetsSection);

        for (project of projects){

            // get template for projects
            let projetTemplate = document.querySelector("#projects-template");
            
            let newProjet = projetTemplate.content.cloneNode(true);
            
            newProjet.querySelector(".project-card__title").textContent = project.name;
            newProjet.querySelector(".project-card__description").textContent = project.description;
            newProjet.querySelector(".illustration__image").src = project.picture.big;
            newProjet.querySelector(".illustration__image").title = project.name;
            
            projetsSection.appendChild(newProjet);
        }

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
