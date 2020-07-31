﻿# abderrahmaneMustapha
 
 
```python 
from django.views.generic.detail import DetailView

class AboutMe(DetailView):
  name = "Toumi Mustapha Abderrahmane"
  location = "Tiaret, ALgeria"
  education = "Software engineering"
  website = "abderrahmane-mustapha.codes"
  
  #get all my favourite  programming languages
  def get_fav_lang(self):
      languages = ['python', 'javascript', 'java']
      return languages
      
  #get all my favourite frameworks
  def get_fav_frameworks(self):
    frameworks = ['django', 'react', 'bootstrap']
    return frameworks
    
  #get social media links
  def get_social_contact(self)
    social_media_links = {
      "twitter": "twitter.com/Abderrahmaneend"
      "dev community" : "https://dev.to/abderrahmanemustapha"
      
    }
    
    return social_media_links 
  
  
  
```
