'use strict'; 

/* --------------------------------------------------------------------Loggbok--------------------------------------------------------------- */

    /* --------------------------Array------------------------------------ */
    let savedPostTitle=[];
    let savedPost=[];
    /* ---------------------------Objekt--------------------------------- */
    let post = {
        title:"",
        postMessage:"",
    }





/* ------------------------------Funktion-------------------------------------------------------------------------- */

 function savePost () { 
//Titel:
var inputTitle = document.getElementById('titleFromUser').value;
    post.title=inputTitle;
    savedPostTitle.unshift(post.title);
    
//Inlägg
var inputMessage = document.getElementById('postFromUser').value;
     post.postMessage=inputMessage;
    savedPost.unshift(post.postMessage);
    console.log(savedPostTitle, savedPost);

 document.getElementById('titleFromUser').value=" ";
document.getElementById('postFromUser').value=" ";
document.getElementById('savedTitle').innerHTML=savedPostTitle[0];
document.getElementById('savedPost').innerHTML=savedPost[0];
    
}
/* ----------------------------------------------------------------------------------------------------------------- */
console.log(post);



var vadSomhelst= document.getElementById('postFromUser').value=" "



console.log(post);
/* -------------------------------------Slut---------------------------------------------------------------------- */
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Ditt inlägg är nu sparat!', 'success')
  })
}