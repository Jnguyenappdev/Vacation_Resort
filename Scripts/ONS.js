//room type   max  jun-aug   rest of year rates per night
//queen     5       250        150 
//king     2        250       150
//2brs     6        350      210

//const messageDiv = document.getElementById("messageDiv");
 //messageDiv.innerText = 
 //"The room you selected will not hold your party".

// the orignial room cost
//dicount
//discount cost
//tax
//total cost of the stay

//Bonus: 
//display confirmation number
// first three character of name
//gypen
//the month and year
//hypen
//the number of adults on res
//colon
// number of kids
//ex: DAN-102021-7:2:0
 
//input 

const nameEl = document.getElementById('nameInput');
const emailEl = document.getElementById('emailInput');

const dateEl = document.getElementById('dateInput');
const numEl = document.getElementById('numNightsInput');

const queenRadioEl = document.getElementById('queenRoom');
const kingRadioEl = document.getElementById('kingRoom');
const twoRadioEl = document.getElementById('twoBRS');
const suite = twoRadioEl.checked 

const numAdultsEl = + document.getElementById('numAdultsInput').value;
const numChildrenEl = + document.getElementById('numChildrenInput').value ;

const noneRadioEl = document.getElementById('None');
const aaaSeniorRadioEl = document.getElementById('aaaSenior');
const militaryRadioEl = document.getElementById('military');
const baseRoomCostEl = document.getElementById('baseRoomCost');
const dicountEl = document.getElementById('discount');
const totalDiscountEl = document.getElementById('discountCost');
const taxAmountEl = document.getElementById('tax');
const totalCostEl = document.getElementById('totalCost');

const messageEl = document.getElementById('messageRoom')

const totalOcc = numAdultsEl + numChildrenEl


function getRoomRate (checkInDate, roomType){
    const monthDate = checkInDate.getMonth() +1 ;
    const onSeason = onSeason >= 6 && onSeason <= 8;
    let roomRate = 150;
    if (onSeason){
        if (roomType == )
        roomRate = 250
        if (roomType == suite;){
        roomRate = 350
        } 
    } else {
        if(roomType == suite)
        roomRate210
    }

    return roomRate;

}

getRoomRate()