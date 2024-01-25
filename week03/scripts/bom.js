const chapterInput = document.querySelector('#favchap');
const addButton = document.querySelector('button');
const chapterList = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
    displayList(chapter);
})

addButton.addEventListener('click', () => {
    if(chapterInput.value != ''){
        displayList(chapterInput.value);
        chaptersArray.push(chapterInput.value);
        setChapterList();
    }
    chapterInput.focus();
    chapterInput.value = '';
})

function displayList(item) {
    const li = document.createElement('li');
    const delButton = document.createElement('button')
    li.innerHTML = item;
    delButton.textContent = '❌';
    li.append(delButton);
    chapterList.append(li);
    delButton.addEventListener('click', () => {
        chapterList.removeChild(li);
        deleteChapter(li.textContent)
        chapterInput.focus();
    });
}

function setChapterList(){
    localStorage.setItem("BoMChapterList", JSON.stringify(chaptersArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem("BoMChapterList"))
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((compare) => compare !== chapter);
    setChapterList();
}