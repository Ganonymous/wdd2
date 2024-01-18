const chapterInput = document.querySelector('#favchap');
const addButton = document.querySelector('button');
const chapterList = document.querySelector('#list');

addButton.addEventListener('click', () => {
    if(chapterInput.value != ''){

        const li = document.createElement('li');
        const delButton = document.createElement('button')
        li.innerHTML = chapterInput.value;
        delButton.textContent = '❌';
        li.append(delButton);
        chapterList.append(li);
        delButton.addEventListener('click', () => {
            chapterList.removeChild(li);
            chapterInput.focus();
        })
    }
    chapterInput.focus();
    chapterInput.value = '';
})