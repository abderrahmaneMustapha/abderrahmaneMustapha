
collapse = ()=>{
    
nav = document.getElementsByClassName('nav-link')
Array.prototype.forEach.call(nav, element => {
    
    element.addEventListener('click',()=>{
        Array.prototype.forEach.call(nav, element => {
     
            
            element.className="nav-link"  
           
            content = document.getElementById(element.getAttribute('data-toggle')).className = "hide row"
      
    }) 
        element.className="nav-link active" 
        content = document.getElementById(element.getAttribute('data-toggle')).className = "show row"
        
    })
    

});
 
}


collapse()