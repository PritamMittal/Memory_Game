document.addEventListener('DOMContentLoaded',() =>{
  
    //card options
    const cardArray =[

    {
        name:'fries',
        img: 'images/fries.jpeg'
    },

    {
        name:'fries',
        img: 'images/fries.jpeg'
    },

    {
        name:'burger',
        img: 'images/burger.jpeg'
    },

    {
        name:'burger',
        img: 'images/burger.jpeg'
    },

    {
        name:'samosa',
        img: 'images/samosa.jpeg'
    },

    {
        name:'samosa',
        img: 'images/samosa.jpeg'
    },


    {
        name:'icecream',
        img: 'images/icecream.jpeg'
    },

    {
        name:'icecream',
        img: 'images/icecream.jpeg'
    },

    {
        name:'milkshake',
        img: 'images/milkshake.jpeg'
    },

    {
        name:'milkshake',
        img: 'images/milkshake.jpeg'
    },

    {
        name:'pizza',
        img: 'images/pizza.jpeg'
    },

    {
        name:'pizza',
        img: 'images/pizza.jpeg'
    },
]

cardArray.sort(()=>0.5- Math.random())

const grid= document.querySelector('.grid')
const resultDisplay= document.querySelector('#result')
var cardsChosen = []
var cardsChosenId=[]
var cardsWon= []

//Create your board
function createBoard(){
    for(let i=0; i< cardArray.length;i++){
        var card= document.createElement('img')
        card.setAttribute('src','images/blank.jpeg')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        card.classList.add('card')
        grid.appendChild(card)
    }
  }

//Check for matches
function checkForMatch(){
    var cards= document.querySelectorAll('img')
    const optionOneId= cardsChosenId[0]
    const optionTwoId= cardsChosenId[1]
    if(cardsChosen[0]===cardsChosen[1]){
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.jpeg')
        cards[optionTwoId].setAttribute('src','images/white.jpeg')
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src','images/blank.jpeg')
        cards[optionTwoId].setAttribute('src','images/blank.jpeg')
        alert('Sorry, try again')
    }
    cardsChosen=[]
    cardsChosenId=[]
    resultDisplay.textContent= cardsWon.length
    if(cardsWon.length===cardArray.length/2){
        resultDisplay.textContent= 'Congratulations'
    }
}

//Flip card
  function flipCard(){
      var cardId= this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length===2){
          setTimeout(checkForMatch, 500)
      }
  }

  createBoard()

})