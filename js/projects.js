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



let displayTechno = (tech) =>{
  images = [ 
            {'name' : 'mySql', 'src' : 'https://cdn.worldvectorlogo.com/logos/mysql.svg'} ,
            {'name':'redis', 'src' : 'img/redis48.svg'}, 
            {'name' : 'django', 'src' : 'img/django.svg'}, 
            {'name' : 'postgres', 'src' : 'https://cdn.worldvectorlogo.com/logos/postgresql.svg'},
            {'name' : 'Kivy' , 'src': 'https://raw.githubusercontent.com/kivy/kivy-design/master/logo/svg/kivy-logo-dark.svg'}
          ]
  result = ""
  tech.forEach(e=>{
    var exists  = false

    images.forEach(v=> { if ( e == v.name) exists=v['src'] })

    console.log(exists)
     if (exists){
        
        result+=  " <img title="+e+" src="+exists+" />"
       
     }
     else{
        if (e == 'flask'){
            result+=  "<i  title="+e+" class='fas fa-"+e+" fa-2x' ></i>"
        }
        else{
            result+=  "<i  title="+e+" class='fab fa-"+e+" fa-2x' ></i>"
        }
     }
     
  })

  return result
}
addProjects = ()=>{
    let projects = [{
        'title' : 'Learno',   
        'description' : 'this is my first django project, i learned alot from this i tried so much technologies'+
                        'like redis postegres and celery , ajax , websocket , responsive design, it was hard some time i didnt even know'+
                        'what to do but it was fun at the same time ',
        'image' : 'img/learno.jpg',
        'link' : 'https://www.youtube.com/watch?v=KMwi-PZuSCA',
        'repo': '#',
        'tech' : ['python', 'redis','postgres', 'django', 'css3-alt', 'html5']
        
    },
    {
        'title' : 'DNA',   
        'description' : 'an analytics app for ibn khaldoune tiaret university computer science field '+
                        'to show the administartion and the students some statistics and help them to take decisions '+
                        ' i used some machine learning to help me find some problems and some relations',
        'image' : 'https://raw.githubusercontent.com/abderrahmaneMustapha/DNA/master/screenshots/dashboard.gif',
        'link' : 'https://github.com/abderrahmaneMustapha/DNA',
        'repo': '#',
        'tech' : ['python', 'react', 'mySql', 'django', 'css3-alt', 'html5']           
    } ,

    {
        'title' : 'Cpu Dash',   
        'description' : 'this one is about dash that display graphd and a table  showing info about '+
                        'cpu vendors, models, os, memory and alot more ',
                       
        'image' : 'img/dash.gif'
        ,'link' : '#',
        'repo': '#',
        'tech' : ['python', 'react', 'flask', 'css3-alt', 'html5']           
    } ,

    {
        'title' : 'Pic Downloader',   
        'description' : 'In this project you can download pictures from pixabay using your command line '+
                        'and search for the downloaded pictures using a pyton interface in this project i used kivy and python ',
                       
        'image' : 'https://raw.githubusercontent.com/abderrahmaneMustapha/python-pixabay-downloader/master/report/images%20and%20gif/ExecutionKivy.gif'            
        ,'link' : '#',
        'repo': '#',
        'tech' : ['python', 'Kivy']
    } ,

    {
        'title' : 'Cryptopals',   
        'description' : 'contain the cryptols challenge solutions its about cryptography i used python to slove 6 challnges '+
                        'and i will work on java solutions and continue to solve other challnges soon',
                       
        'image' : 'img/cryptopals.jpg'            
        ,'link' : '#',
        'repo': '#',
        'tech' : ['python', 'java',]
    } ,

    {
        'title' : 'About malcomX',   
        'description' : 'Its about malcom X life  this is one of my freecodecamp projects ',
                       
        'image' : 'img/malcom.jpg'            
        ,'link' : '#',
        'repo': '#',
        'tech' : ['css3-alt', 'html5']
    } ,

    {
        'title' : 'Python Course',   
        'description' : 'a simple python course one of my freecodecamp projects ',
                       
        'image' : 'img/course.jpg'            
        ,'link' : '#',
        'repo': '#',
        'tech' : [ 'css3-alt', 'html5']
    } ,

   

    {
        'title' : 'Pomodoro clock',   
        'description' : 'a simple pmodoro clock one of my freecodecamp projects ',
                       
        'image' : 'img/pomodoro.jpg'            
        ,'link' : '#',
        'repo': '#',
        'tech' : ['react', 'css3-alt', 'html5']
    } ,

    {
        'title' : 'Assassins creed survey',   
        'description' : 'an assassins creed surevey template freecodecamp projects ',
                       
        'image' : 'img/assassins.jpg'            
        ,'link' : '#',
        'repo': '#',
        'tech' : ['css3-alt', 'html5']
    } ,

    {
        'title' : 'Product landing',   
        'description' : 'product landing page template freecodecamp projects',
                       
        'image' : 'img/product.jpg'            
        ,'link' : '#',
        'repo': '#',
        'tech' : [ 'css3-alt', 'html5']
    } 
] 
    
    projects_container = document.getElementById("projects")
    projects.forEach( e => {

        projects_container.innerHTML += 
        '<div class="col-md-4 mt-4">'+
            '<div class="card">'+          
                '<img id="project-img" src='+e['image']+'>'+                    
                '<h5 class="card-title text-center">'+e['title']+'</h5>'+
                '<p class="card-text p-2">'+e['description'].substring(0,50)+'...</p>'+            
                '<button data-toggle="modal" data-target="#projectsModal'+slugify(e['title'])+'" class="btn btn-primary" type="button">Learn more</button>'+         
                '<div class="tech d-flex flex-row">'
                    +displayTechno(e['tech'])+
                '</div>'+
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
                        '<div class="modal-footer row">'+    
                            
                            '<a title="'+e['title']+' project repo link" href="'+e['repo']+'"class="btn btn-info text-white m-1" target="_blank">Project repo</a>'+
                            '<a title="'+e['title']+' project  live link" href="'+e['link']+'"class="btn    btn-success text-white m-1" target="_blank">Project live</a>'+
                        
                        '</div>'+
                    '</div>'+
                    
                '</div>'+

            '</div>'+
       '</div>'
    })
}

addProjects()


