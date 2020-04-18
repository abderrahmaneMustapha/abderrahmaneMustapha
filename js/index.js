/* add projects  */

addProjects = ()=>{
    let projects = [{
        'title' : 'learno',   
        'description' : 'this is my first django project, i learned alot from this i tried so much technologies'+
                        'like redis postegres and celery , ajax , websocket , responsive design',
        'image' : 'img/learno.jpg'
    },
    {
        'title' : 'DNA',   
        'description' : 'an analytics app for ibn khaldoune tiaret university computer science field'+
                        'to show the administartion and the students some statistics and help them to take decisions'+
                        ' i used some machine learning to help me find some problems and some relations',
        'image' : 'https://raw.githubusercontent.com/abderrahmaneMustapha/DNA/master/screenshots/dashboard.gif'            
    } ] 
    
    projects_container = document.getElementById("projects")
    projects.forEach( e => {
        console.log(projects_container)
        projects_container.innerHTML += 
        '<div class="col-md-4">'+
            '<div class="card">'+            
                '<h4 class="card-title text-center">'+e['title']+'</h4>'+
                '<img src='+e['image']+'>'+
                '<p class="card-text">'+e['description'].substring(0,100)+'...</p>'+            
                '<button class="btn btn-primary" type="button">Learn more</button>'+
            '</div>'+
       '</div>'
    })
}

addProjects()