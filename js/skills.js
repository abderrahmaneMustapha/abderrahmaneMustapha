
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


addSkills = ()=>{
    let projects = [{
        'title' : 'python',   
        'description' : 'this is my first programming language',
        'image' : 'https://img.icons8.com/dusk/128/000000/python.png',
        'link' : 'https://www.youtube.com/watch?v=KMwi-PZuSCA',
    
        
    },
    {
        'title' : 'java',   
        'description' : 'this is the second language',         
        'image' : 'https://img.icons8.com/dusk/128/000000/java-coffee-cup-logo.png',
        'link' : 'https://github.com/abderrahmaneMustapha/DNA',
               
    } ,

    {
        'title' : 'django',   
        'description' : 'first web framework',         
        'image' : 'https://img.icons8.com/material-sharp/128/000000/django.png',
        'link' : 'https://github.com/abderrahmaneMustapha/DNA',
               
    } ,

    {
        'title' : 'Java Script',   
        'description' : 'i learned this laguage from freecodecamp',         
        'image' : 'https://img.icons8.com/color/128/000000/javascript.png',
        'link' : 'https://github.com/abderrahmaneMustapha/DNA',
               
    } ,
    {
        'title' : 'MySql',   
        'description' : 'my first database',         
        'image' : 'https://img.icons8.com/ultraviolet/100/000000/mysql.png',
        'link' : 'https://github.com/abderrahmaneMustapha/DNA',
               
    } ,
    {
        'title' : 'React Js',   
        'description' : 'i learned this laguage from freecodecamp',         
        'image' : 'https://img.icons8.com/plasticine/128/000000/react.png',
        'link' : 'https://github.com/abderrahmaneMustapha/DNA',
               
    } ,

 
] 
    
    projects_container = document.getElementById("skills")
    projects.forEach( e => {

        projects_container.innerHTML += 
        '<div class="col-md-4">'+
            '<div class="card">'+          
                '<img id="main-img" src='+e['image']+'>'+                    
                '<h5 class="card-title text-center ">'+e['title']+'</h5>'+
                '<p class="card-text p-2  text-center">'+e['description'].substring(0,50)+'...</p>'+            
                '<button data-toggle="modal" data-target="#projectsModal'+slugify(e['title'])+'" class="btn btn-primary" type="button">Learn more</button>'+         
            '</div>'+
            
            '<div class="modal fade"  id="projectsModal'+slugify(e['title'])+'" tabindex="" role="dialog" aria-labelledby="Modal'+e['title']+'" aria-hidden="true">'+
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
                            '<a title="'+e['title']+' project  live link" href="'+e['link']+'"class="btn btn-success text-white m-1" target="_blank">Project live</a>'+                        
                        '</div>'+
                    '</div>'+
                    
                '</div>'+

            '</div>'+
       '</div>'
    })
}

addSkills()
