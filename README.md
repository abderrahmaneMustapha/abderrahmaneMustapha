# Hello there it's Toumi Mustapha Abderrahmane 😁
 
 
```python 
from django.views.generic.detail import DetailView

class AboutMe(DetailView):
  name = "Toumi Mustapha Abderrahmane"
  location = "Tiaret, ALgeria"
  education = "Software engineering"
  website = "abderrahmane-mustapha.codes"
  
   #get social media links
  def get_social_contact(self)
    social_media_links = {
      "twitter": "twitter.com/Abderrahmaneend"
      "dev community" : "dev.to/abderrahmanemustapha"      
    }    
    return social_media_links 
  
  #get all my favourite  programming languages
  def get_fav_lang(self):
      languages = ['python 🐍 ', 'javascript😺 ', 'java ☕']
      return languages
      
  #get all my favourite frameworks
  def get_fav_frameworks(self):
    frameworks = ['django 🔫 ', 'react 🎯', 'bootstrap✨ ', 'django-rest-framework🧬 ']
    return frameworks
   
  #get the databases that i can use
  def get_databases(self)
   data_bases = ['postgres🐘 ', 'mysql 👍', 'mongodb 🍃']
   return data_bases
    

  
  
  
```
