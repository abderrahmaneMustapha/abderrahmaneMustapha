(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{24:function(e,a,t){},25:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(18),r=t.n(l),s=(t(24),t(1)),i=t(2),m=t(4),o=t(3),d=(t(25),[{id:"12",name:"Learn now",image:"https://ik.imagekit.io/ykyl2djdvw/learno_SPjc6Wg3X.JPG"},{id:"15",name:"Donate",image:"https://ik.imagekit.io/ykyl2djdvw/doante_HsAQkV_jNZNP.JPG"},{id:"14",name:"dz startups",image:"https://ik.imagekit.io/ykyl2djdvw/dzstartups_DUtVqkv2XMD.JPG"},{id:"19",name:"Limitless learning",image:"https://ik.imagekit.io/ykyl2djdvw/limitless_anmAwXEbQbAhm.JPG"}]),u=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={projectsList:d},n}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{id:"home-projects-container",className:"container"},c.a.createElement("div",{className:"d-flex flex-row"},this.state.projectsList.map((function(a){return c.a.createElement("div",{onClick:e.props.handleImageClick,key:a.id,className:"col-md-3"},c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:a.image,alt:"image for "+a.name}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"f-c-gr-1"},a.name))))}))))}}]),t}(c.a.Component),p=(t(26),t(27),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleImageClick=function(e){var a=e.target;a.src&&n.setState({main_project_image:{src:a.src,alt:a.alt}})},n.state={main_project_image:{src:"https://ik.imagekit.io/ykyl2djdvw/learno_SPjc6Wg3X.JPG",alt:"learno image abderrahmane mustapha toumi potfolio"}},n.handleImageClick=n.handleImageClick.bind(),n}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:this.state.main_project_image.src,alt:this.state.main_project_image.alt,className:"full-width-back-image"}),c.a.createElement("div",{className:"row",id:"main-home"},c.a.createElement("header",{className:"col-md-5"},c.a.createElement("h5",{className:"f-c-g header-sec-text-size"},"Hello there its Toumi Mustapha Abderrahmane"),c.a.createElement("h1",{className:"f-c-gr-1 header-main-text-size"},"I'm software engineering student and a full stack webdeveloper "),c.a.createElement("h5",{className:"f-c-g header-sec-text-size"},"passionate and ready to face challenges and solve problems")),c.a.createElement("div",{className:"col-md-7 col-sm-12"},c.a.createElement("img",{className:"d-block w-100",src:this.state.main_project_image.src,alt:this.state.main_project_image.alt})),c.a.createElement("div",{className:"col-12"},c.a.createElement(u,{handleImageClick:this.handleImageClick}))))}}]),t}(c.a.Component)),h=(t(28),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"side-profile-bar"},c.a.createElement("div",{className:"main "},c.a.createElement("section",null,c.a.createElement("header",null,c.a.createElement("h5",{className:"h5 text-center"},"Toumi Mustapha Abderrahmane")),c.a.createElement("div",{className:"image-container"},c.a.createElement("img",{className:"d-block w-75 mx-auto mt-auto rounded-circle",src:"https://ik.imagekit.io/ykyl2djdvw/23f8c228-9596-4b80-9a13-c0f0f22a9652_JZl9Fz0tSB-v.jpg",alt:" Toumi abderrahmane in his portfolio XD"})))))}}]),t}(c.a.Component)),v=t(10),E=(t(29),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"main-profile-bar"},c.a.createElement("ul",{className:""},c.a.createElement("li",{className:""},c.a.createElement(v.b,{to:{pathname:"/profile/",search:"?tab=dev"}},"Dev")),c.a.createElement("li",{className:""},c.a.createElement(v.b,{to:{pathname:"/profile/",search:"?tab=github"}},"Github")),c.a.createElement("li",{className:""},c.a.createElement(v.b,{to:{pathname:"/profile/",search:"?tab=twitter"}},"Twitter")),c.a.createElement("li",{className:""},c.a.createElement(v.b,{to:{pathname:"/profile/",search:"?tab=skills"}},"Skills")),c.a.createElement("li",{className:""},c.a.createElement(v.b,{to:{pathname:"/profile",search:"?tab=achievements"}},"Achievements"))))}}]),t}(c.a.Component));t(35);function f(){return c.a.createElement("div",{id:"profile-tab",className:"container-fluid"},c.a.createElement("h1",{className:"main-text"},"Dev"),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-3 "},c.a.createElement("div",{className:"text-center"},c.a.createElement("h5",null,"Articles",c.a.createElement("br",null)),c.a.createElement("span",null,"6"))),c.a.createElement("div",{className:"col-3 mx-1"},c.a.createElement("div",{className:"text-center"},c.a.createElement("h5",null,"Views",c.a.createElement("br",null)),c.a.createElement("span",null,"5,089"))),c.a.createElement("div",{className:"col-3 "},c.a.createElement("div",{className:"text-center"},c.a.createElement("h5",null,"Followers",c.a.createElement("br",null)),c.a.createElement("span",null,"202")))))}function g(){return c.a.createElement("div",{id:"profile-tab",className:"container-fluid"},c.a.createElement("h1",{className:"main-text"},"Github"),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-3 "},c.a.createElement("div",{className:"text-center"},c.a.createElement("h5",null,"Repo",c.a.createElement("br",null)),c.a.createElement("span",null,"27"))),c.a.createElement("div",{className:"col-3 mx-1"},c.a.createElement("div",{className:"text-center"},c.a.createElement("h5",null,"Followers",c.a.createElement("br",null)),c.a.createElement("span",null,"67"))),c.a.createElement("div",{className:"col-3 "},c.a.createElement("div",{className:"text-center"},c.a.createElement("h5",null,"Pull Requests",c.a.createElement("br",null)),c.a.createElement("span",null,"10")))))}function b(){return c.a.createElement("div",{id:"profile-tab",className:"container-fluid"},c.a.createElement("h1",{className:"main-text"},"Twitter"),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-3 "},c.a.createElement("div",{className:"text-center"},c.a.createElement("h5",null,"Posts",c.a.createElement("br",null)),c.a.createElement("span",null,"102"))),c.a.createElement("div",{className:"col-3 mx-1"},c.a.createElement("div",{className:"text-center"},c.a.createElement("h5",null,"Followers",c.a.createElement("br",null)),c.a.createElement("span",null,"320"))),c.a.createElement("div",{className:"col-3 "},c.a.createElement("div",{className:"text-center"},c.a.createElement("h5",null,"Pull Requests",c.a.createElement("br",null)),c.a.createElement("span",null,"10")))))}function N(){return c.a.createElement("div",{id:"profile-tab"},c.a.createElement("div",{className:"header-sec-text-size p-md-5 text-center"},c.a.createElement("spna",{className:"h1"},"A")," full stack web developer  who use ",c.a.createElement("span",{className:"h2"}," Python "),"and ",c.a.createElement("span",{className:"h2"}," Javascript "),"i like to use ",c.a.createElement("span",{className:"h2"}," Django ")," or",c.a.createElement("span",{className:"h2"}," Nodejs ")," for the backend part , and ",c.a.createElement("span",{className:"h2"}," React ")," for the frontend part im also familiar with ",c.a.createElement("span",{className:"h2"}," Agile ")," methodologys , and other software engeneering fields currently im involved in the development of ",c.a.createElement("span",{className:"h2"}," Open source "),"projects in community lovers and dzcode"))}function y(){return c.a.createElement("div",{id:"profile-tab"},"Coming soon")}var j=t(5),w=function(e,a){e&&(e.src=a)};function k(){var e=Object(j.f)(),a=document.getElementById("profile-image-bg");return c.a.createElement(c.a.Fragment,null,c.a.createElement(j.a,{exact:!0,path:"/profile",render:function(t){t.match;if("?tab=twitter"===e.search)return w(a,"https://www.flaticon.com/svg/static/icons/svg/1051/1051382.svg"),c.a.createElement(b,null)}}),c.a.createElement(j.a,{exact:!0,path:"/profile",render:function(t){t.match;if("?tab=github"===e.search)return w(a,"https://www.flaticon.com/svg/static/icons/svg/1051/1051377.svg"),c.a.createElement(g,null)}}),c.a.createElement(j.a,{exact:!0,path:"/profile",render:function(t){t.match;if("?tab=dev"===e.search)return w(a,"https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"),c.a.createElement(f,null)}}),c.a.createElement(j.a,{exact:!0,path:"/profile",render:function(t){t.match;if("?tab=skills"===e.search)return w(a,"https://www.flaticon.com/svg/static/icons/svg/2502/2502399.svg"),c.a.createElement(N,null)}}),c.a.createElement(j.a,{exact:!0,path:"/profile",render:function(t){t.match;if("?tab=achievements"===e.search)return w(a,"https://www.flaticon.com/svg/static/icons/svg/3135/3135722.svg"),c.a.createElement(y,null)}}))}t(36);var _=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"profile",className:"container"},c.a.createElement("img",{id:"profile-image-bg",src:"https://www.flaticon.com/svg/static/icons/svg/2502/2502399.svg",alt:"abderrahme profile background by tabs"}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement(h,null)),c.a.createElement("div",{className:"col-md-8"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement(k,null)),c.a.createElement("div",{className:"col-12"},c.a.createElement(E,null))))))))}}]),t}(c.a.Component),O=(t(37),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("li",{className:"media blog-side-list-item"},c.a.createElement("div",{className:"media-body"},c.a.createElement("h6",{className:"mt-0 mb-1"},this.props.title))))}}]),t}(c.a.Component)),x=(t(38),[{title:"Paypal and django",alt:"show an easy way, how you can add paypal to django ",src:"https://res.cloudinary.com/practicaldev/image/fetch/s--NjktpJcn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ayid1no80nyjotbs44zw.jpg",link:"https://dev.to/abderrahmanemustapha/paypal-payments-and-django-client-server-side-basics-9l8"},{title:"Send emails with django",alt:"show an easy way, how you can add paypal to django ",src:"https://res.cloudinary.com/practicaldev/image/fetch/s--NjktpJcn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ayid1no80nyjotbs44zw.jpg",link:"https://dev.to/abderrahmanemustapha/paypal-payments-and-django-client-server-side-basics-9l8"},{title:"Drag and drop image",alt:"show an easy way, how you can add paypal to django ",src:"https://res.cloudinary.com/practicaldev/image/fetch/s--NjktpJcn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ayid1no80nyjotbs44zw.jpg",link:"https://dev.to/abderrahmanemustapha/paypal-payments-and-django-client-server-side-basics-9l8"},{title:"React comment reply",alt:"show an easy way, how you can add paypal to django ",src:"https://res.cloudinary.com/practicaldev/image/fetch/s--NjktpJcn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ayid1no80nyjotbs44zw.jpg",link:"https://dev.to/abderrahmanemustapha/paypal-payments-and-django-client-server-side-basics-9l8"},{title:"Covid dash part-1",alt:"show an easy way, how you can add paypal to django ",src:"https://res.cloudinary.com/practicaldev/image/fetch/s--NjktpJcn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ayid1no80nyjotbs44zw.jpg",link:"https://dev.to/abderrahmanemustapha/paypal-payments-and-django-client-server-side-basics-9l8"},{title:"Covid dash part-2",alt:"show an easy way, how you can add paypal to django ",src:"https://res.cloudinary.com/practicaldev/image/fetch/s--NjktpJcn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ayid1no80nyjotbs44zw.jpg",link:"https://dev.to/abderrahmanemustapha/paypal-payments-and-django-client-server-side-basics-9l8"}]),C=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("aside",{id:"side-nav"},c.a.createElement("header",{id:"side-nav-header",className:"my-4"},c.a.createElement("div",{className:"row my-3"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("img",{className:"d-block w-100 rounded-circle",src:"https://ik.imagekit.io/ykyl2djdvw/23f8c228-9596-4b80-9a13-c0f0f22a9652_JZl9Fz0tSB-v.jpg",alt:"toumi abderrahmane in his portfolio profile"})),c.a.createElement("div",{id:"my-name",className:"col-md-7 p-0"},"Toumi Mustapha Abderrahmane"))," ",c.a.createElement("div",null)," "),c.a.createElement("nav",{id:"blogs-list-side-nav"},c.a.createElement("header",{className:"mb-3"},c.a.createElement("h6",{className:"h-75 mr-auto"},"Articles List")),c.a.createElement("ul",{className:"list-unstyled"},x.map((function(e){return c.a.createElement(O,{title:e.title,alt:e.alt,src:e.src,link:e.link})})))),c.a.createElement("div",null,c.a.createElement("ul",{className:"list-unstyled"},c.a.createElement("li",{title:"Message me",className:""}),c.a.createElement("li",{title:"Send a feedback",className:""}),c.a.createElement("li",{title:"Download source code",className:""}))))}}]),t}(c.a.Component),z=(t(39),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{id:"home-nav",className:"navbar navbar-expand-lg  navbar-transparent bg-transparent"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement("a",{className:"nav-link",href:"/"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/profile/?tab=skills"},"Profile")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/projects"},"Projects"))))}}]),t}(c.a.Component)),P=(t(40),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={data:n.props.data},n}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state.data;return c.a.createElement("div",{id:"project-card",className:"card mb-5 bg-transparent border-0",onClick:function(){e.props.onClick()}},c.a.createElement("img",{src:a.main_image.src,alt:a.main_image.alt,className:"img-thumbnail p-0"}),c.a.createElement("div",{className:" text p-1"},c.a.createElement("header",{className:"text-center font-weight-bold"},a.short_name),c.a.createElement("div",null,a.tags.map((function(e){return c.a.createElement("span",{className:"mx-1"},e)})))))}}]),t}(c.a.Component)),J=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={data:{},search:"",loading:!0},e.handleSearchClick=function(a){a.preventDefault();var t=document.getElementById("search").value,n=[];e.state.data.projects.forEach((function(e){(e.name.toLowerCase().includes(t.toLowerCase())||e.overview.toLowerCase().includes(t.toLowerCase()))&&n.push(e)})),e.setState({search:n})},e.handleGotoProject=function(a){e.props.history.push({pathname:"/project/".concat(a.slug),state:{data:a}})},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.jsonbin.io/b/5f89e01165b18913fc5ff104/7",{method:"GET"}).then((function(e){return e.json()})).then((function(a){e.setState({data:a,search:a.projects,loading:!1})}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("nav",null,c.a.createElement("header",null,c.a.createElement("form",{className:"form-inline my-2 my-lg-0"},c.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",id:"search"}),c.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",onClick:this.handleSearchClick},"Search"))),c.a.createElement("hr",null))),c.a.createElement("div",{className:"col-md-8"},c.a.createElement("div",{className:"d-flex  flex-wrap  justify-content-center"},this.state.search?this.state.search.map((function(a){return c.a.createElement("div",{className:"col-md-4 mb-4"},c.a.createElement(P,{key:a.id,data:a,onClick:function(){e.handleGotoProject(a)}}))})):c.a.createElement("div",null,"Nothing to search for here")))))}}]),t}(c.a.Component),S=(t(41),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.location.state.data;return c.a.createElement("section",{className:"container-fluid p-1",id:"project-page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-5 col-sm-12 desc-container"},c.a.createElement("div",{className:"desc-main "},c.a.createElement("header",null,c.a.createElement("h2",{className:"h2"},e.name)),c.a.createElement("section",{className:"text-break w-100 mb-5"},e.overview),c.a.createElement("section",{className:"tags mt-2"},e.tags.map((function(e){return c.a.createElement("span",{className:"mx-1"},e+" ,")}))))),c.a.createElement("div",{className:"col-md-7 col-sm-12"},c.a.createElement("div",{className:"image-container mx-auto w-80"},c.a.createElement("img",{src:e.main_image.src,alt:e.main_image.alt,className:"d-block w-100"})),c.a.createElement("div",{className:"text-container mt-5"},c.a.createElement("p",{className:"my-2"},e.description)))))}}]),t}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement("div",{className:"bg-b-to-b min-h-100"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-10"},c.a.createElement(z,null),c.a.createElement(c.a.StrictMode,null,c.a.createElement(v.a,null,c.a.createElement(j.c,null,c.a.createElement(j.a,{exact:!0,path:"/"},c.a.createElement(p,null)),c.a.createElement(j.a,{path:"/profile",component:_}),c.a.createElement(j.a,{exact:!0,path:"/projects",component:J}),c.a.createElement(j.a,{path:"/project/:slug",component:S}))))),c.a.createElement("div",{className:"col-md-2"},c.a.createElement(C,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.85494d5b.chunk.js.map