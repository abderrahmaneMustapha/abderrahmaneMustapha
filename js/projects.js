/* i found this function in  https://gist.github.com/codeguy/6684588 */

slugify  = (str)=> {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}


/* add projects  */

addProjects = ()=>{
    let projects = [{
        'title' : 'Learno',   
        'description' : 'this is my first django project, i learned alot from this i tried so much technologies'+
                        'like redis postegres and celery , ajax , websocket , responsive design, it was hard some time i didnt even know'+
                        'what to do but it was fun at the same time ',
        'image' : 'img/learno.jpg'
    },
    {
        'title' : 'DNA',   
        'description' : 'an analytics app for ibn khaldoune tiaret university computer science field '+
                        'to show the administartion and the students some statistics and help them to take decisions '+
                        ' i used some machine learning to help me find some problems and some relations',
        'image' : 'https://raw.githubusercontent.com/abderrahmaneMustapha/DNA/master/screenshots/dashboard.gif'            
    } ,

    {
        'title' : 'Cpu Dash',   
        'description' : 'this one is about dash that display graphd and a table  showing info about '+
                        'cpu vendors, models, os, memory and alot more ',
                       
        'image' : 'img/dash.gif'            
    } ,

    {
        'title' : 'Pic Downloader',   
        'description' : 'In this project you can download pictures from pixabay using your command line '+
                        'and search for the downloaded pictures using a pyton interface in this project i used kivy and python ',
                       
        'image' : 'https://raw.githubusercontent.com/abderrahmaneMustapha/python-pixabay-downloader/master/report/images%20and%20gif/ExecutionKivy.gif'            
    } ,

    {
        'title' : 'Cryptopals',   
        'description' : 'contain the cryptols challenge solutions its about cryptography i used python to slove 6 challnges '+
                        'and i will work on java solutions and continue to solve other challnges soon',
                       
        'image' : 'img/cryptopals.jpg'            
    } ,

    {
        'title' : 'About malcomX',   
        'description' : 'Its about malcom X life  this is one of my freecodecamp projects ',
                       
        'image' : 'img/malcom.jpg'            
    } ,

    {
        'title' : 'Python Course',   
        'description' : 'a simple python course one of my freecodecamp projects ',
                       
        'image' : 'img/course.jpg'            
    } ,

   

    {
        'title' : 'Pomodoro clock',   
        'description' : 'a simple pmodoro clock one of my freecodecamp projects ',
                       
        'image' : 'img/pomodoro.jpg'            
    } ,

    {
        'title' : 'Assassins creed survey',   
        'description' : 'an assassins creed surevey template freecodecamp projects ',
                       
        'image' : 'img/assassins.jpg'            
    } ,

    {
        'title' : 'Product landing',   
        'description' : 'product landing page template freecodecamp projects',
                       
        'image' : 'img/product.jpg'            
    } 
] 
    
    projects_container = document.getElementById("projects")
    projects.forEach( e => {

        projects_container.innerHTML += 
        '<div class="col-md-4 mt-4">'+
            '<div class="card">'+          
                '<img src='+e['image']+'>'+                    
                '<h5 class="card-title text-center">'+e['title']+'</h5>'+
                '<p class="card-text p-2">'+e['description'].substring(0,50)+'...</p>'+            
                '<button data-toggle="modal" data-target="#projectsModal'+slugify(e['title'])+'" class="btn btn-primary" type="button">Learn more</button>'+         
            '</div>'+
            
            '<div class="modal fade"  id="projectsModal'+slugify(e['title'])+'" tabindex="" role="dialog" aria-labelledby="Modal'+slugify(e['title'])+'" aria-hidden="true">'+
                '<div class="modal-dialog  modal-lg" role="document">'+
                    '<div class="modal-content">'+
                        '<div class="modal-header text-center">'+
                           '<h3 class="modal-title" id="exampleModalLongTitle">'+e['title']+'</h3>'+
                           '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                            '<span aria-hidden="true">&times;</span>'+
                            '</button>'+
                        '</div>'+
                        '<div class="modal-body text-center p-4">'+
                            '<img src='+e['image']+'>'+ 
                            '<p>'+e['description']+' .</p>'+
                        '</div>'+ 
                        '<div class="modal-footer">'+
                            '<a  class="btn btn-secondary text-white" >Project link</a>'+
                        '</div>'+
                    '</div>'+
                    
                '</div>'+

            '</div>'+
       '</div>'
    })
}

addProjects()


