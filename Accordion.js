//Variables

const accordion = document.getElementsByClassName('content-container');

//Here we accessing the accordion with the for loop
for(i =0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function () { 
        this.classList.toggle('active')

        /*This code works by first getting all the elements under content container
        after that we loop through the element with the class to add a event lister
        of active to all of them */
     })
}