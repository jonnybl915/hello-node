var ViewTemplateConstructor = function(domElSelector , htmlTemplFunction){
   this.domEl = domElSelector

   this.buildHTMLTemplate = htmlTemplFunction

   this.render = function(data){
      var tgtEl = document.querySelector(this.domEl)
      tgtEl.innerHTML = this.buildHTMLTemplate(data)
   }
}

var cardsTemplateFn = function(collectionData){
   console.log(collectionData)
   var bigStr = collectionData.models.map(function(personObj){
      console.log(personObj)
      return `
         <div class="col-xs-12 col-sm-4">
            <div class="user-card">
               <img class="profile-img" src="${personObj.get('picture').large}">
               <h4>${personObj.get('name').first} ${personObj.get('name').last}</h4>
               <p class="text-muted">${personObj.get('email')} | <mark>${personObj.get('nat')}</mark> </p>
            </div>
         </div>
      `
   }).join('')

   return bigStr
}
