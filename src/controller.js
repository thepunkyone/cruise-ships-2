class Controller{
    constructor(){
        this.initializeSea();
    }
    initializeSea() {
        let counter = 0;
        setInterval( () => {
       const viewport = document.querySelector("#viewport");       
       if(counter % 2 === 0){
        viewport.style.backgroundImage = "url('../images/water1.png')"; 
       counter ++;
       } else {
       viewport.style.backgroundImage = "url('../images/water0.png')";
        counter ++;
         };        
        }, 1000)
    }
};
