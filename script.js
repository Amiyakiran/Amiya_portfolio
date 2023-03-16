/* typing effect */
/* var typed = new Typed(".typing",{
    strings:["","MEA(R)N Stack Developer","MEA(R)N Stack Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true

})
 */
/* aside */
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;

for(let i=0; i<totalNavList; i++){
   
    const a = navList[i].querySelector("a");
   
    a.addEventListener("click",function(){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }

        for(let j=0; j<totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                /* console.log("back-section" + navList[j].querySelector("a")); */
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
    })
}
function showSection(element){

    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
   const target = element.getAttribute("href").split("#")[1];
   console.log(target);
   document.querySelector("#" + target).classList.add("active");
}

//for side navbar to open
const navTogglerBtn = document.querySelector(".nav-toggle"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", ()=>{
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            /* navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.toggle("open");
            } */
        }