let app = {
    init: function(){
        app.addSkillsToDOM();

        app.addProjectsToDOM();

        document.addEventListener("scroll", app.handleScroll);

        // document.addEventListener("click", app.insertModale);

        document.querySelector(".navigation__burger").addEventListener("click", app.handleMenu);
        
        let navLinks = document.querySelectorAll(".navigation__link");
        navLinks.forEach(element =>(
            element.addEventListener("click", app.handleMenu)
        ))

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
            newProjet.querySelector(".illustration__enlarge").addEventListener("click", app.insertModale);
            
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
    insertModale: function(e){

        // insert a modale on the page when clicked on project image
        let projectImage = e.target.parentElement.querySelector(".illustration__image").src;
        let projectTitle = e.target.parentElement.querySelector(".illustration__image").title;

        let body = document.querySelector(".container");

        let modaleWindow = document.createElement("div");
        modaleWindow.classList.add("modale");

        let htmlString = '<img class="modale__image" src="' + projectImage + '" alt="' + projectTitle + '"><div class="modale-close"></div>';

        modaleWindow.innerHTML = htmlString;

        modaleWindow.querySelector(".modale-close").addEventListener("click", function(){
            body.removeChild(document.querySelector(".modale"));
        })

        body.appendChild(modaleWindow);

    },
    handleMenu: function(e){

        if(window.innerWidth < 500) {
            document.querySelector(".navbar").classList.toggle("burger-menu-open");
        }
    }
    
};


document.addEventListener("DOMContentLoaded", app.init);
