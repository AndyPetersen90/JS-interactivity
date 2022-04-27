console.log("Hello World!");

const message = document.querySelector('#message');



const addMovie = (event) =>{
    event.preventDefault()

    const inputField = document.querySelector('input');
    const movie = document.createElement('li')
    const movieTitle = document.createElement("span");
    const list = document.querySelector('ul');


    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);

    movie.appendChild(movieTitle);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);

    list.appendChild(movie);



}

const form = document.querySelector('form');
form.addEventListener('submit', addMovie);

const deleteMovie = (event) => {
    event.target.parentNode.remove();
    message.textContent = `${event.target.parentNode.firstChild.textContent} was deleted!`;
    revealMessage();
}

const crossOffMovie = (event) =>{
    event.target.classList.toggle('checked');
    if(event.target.classList.contains('checked')){
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added to watch list!`
    }
    revealMessage();
}
 const revealMessage = () =>{
    message.classList.remove('hide');
    const funct = () => {message.classList.add('hide')}
    setTimeout(funct, 1000)
 }
