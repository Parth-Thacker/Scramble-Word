let words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
]
const wordText = document.querySelector(".word")
const hintText = document.querySelector(".hint span")
const timeText = document.querySelector(".time span b")
const refreshButton = document.querySelector(".refresh-word")
const checkButton = document.querySelector(".check-word")
const inputfield = document.querySelector("input")
let correctWord,timer;

const initTimer = maxTime =>{
    clearInterval(timer);
    timer = setInterval(()=>{
        if(maxTime>0){
            maxTime--;
           return timeText.innerText = maxTime
        }
        alert(`Time Up ${correctWord.toLocaleUpperCase()} was The coreect one`)
        initGame();
    },1000)
}
const initGame = ()=>{
    initTimer(30);
    let randomObj = words[Math.floor(Math.random()* words.length)]
    let wordArray = randomObj.word.split("")
    
    for(let i= wordArray.length-1;i>0;i--){
        let j = Math.floor(Math.random()*(i+1));
        [wordArray[i],wordArray[j]] = [wordArray[j],wordArray[i]]
    }
    wordText.innerText = wordArray.join("")
    hintText.innerText = randomObj.hint
    correctWord = randomObj.word.toLocaleLowerCase();
    inputfield.value="";
    inputfield.setAttribute("maxLength",correctWord.length)
    console.log(randomObj.word);
}   

initGame();

function checkWord(){
    let userWord = inputfield.value.toLocaleLowerCase();
    // console.log(userWord);
    if(!userWord){
        return alert(`Enter word`)
    }
    if(userWord !== correctWord) return alert(`oops!! ${userWord} is not correct word`);
    
    alert(`Congratulations!! ${userWord.toLocaleUpperCase()} is correct word`)
    initGame()
}
refreshButton.addEventListener("click",initGame)
checkButton.addEventListener("click",checkWord)
