const addButton = document.getElementById("note");

const updateLSData = () => {

const textAreaData  = document.querySelectorAll('textarea');
const notes = [ ] ;
textAreaData.forEach((note) => {

    return notes.push(note.value)
})

localStorage.setItem('notes' , JSON.stringify(notes));
}



const addNewNote = (text = '') => {

    const note = document.createElement('div');

    note.classList.add('note')

    const htmlData = `
   
           <div class="operation">
   
               <button class="edit-btn">
                   
                   <i class="fal fa-edit edit-icon"></i>
               </button>
               <button class="del-btn">
                   
                   <i class="fas fa-trash del-icon"></i>
                   
               </button>
               
           </div>
           
           <textarea name="" id="" cols="38" rows="5" class="${text ? "hidden" :  ""}"> </textarea>
           <div class="main ${text ? "" :  "hidden"}">
               
           </div>

          
  `
//  
note.insertAdjacentHTML( 'afterbegin' , htmlData);

// console.log(note);

// getting references 
const editButton =  note.querySelector(".edit-btn") 
const delButton =  note.querySelector(".del-btn") 
const main =  note.querySelector(".main") 
const textArea =  note.querySelector("textarea") 


// Deleting the node ...

delButton.addEventListener('click' , () => { 

note.remove();


})


// toggle using edit button //
textArea.value = text ; 
main.innerHTML = text ;


editButton.addEventListener('click', () => {

main.classList.toggle('hidden')
textArea.classList.toggle('hidden')

})



textArea.addEventListener('change' , (event) => {

    const value =  event.target.value ;
    // console.log(value);
    main.innerHTML = value;
    updateLSData() ;

})



document.body.appendChild(note)
}


// getting data back from local storage ; 

const notes = JSON.parse(localStorage.getItem('notes'))

addButton.addEventListener('click', () => addNewNote());

