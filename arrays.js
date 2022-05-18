//ex1
const sumNumbersInArray = (numbersArray) => {
    return numbersArray.reduce((accumulator, number) => {
        return accumulator + number;
    }, 0)
}

//ex2
const multiplyNumbersSelfInArray = (numbersyArray) => {
    return numbersyArray.map(numbery => {
        return numbery = numbery * numbery;
    }, 0)
}

//ex3
const multiplyNumbersArray = (multiplyArray) => {
    return multiplyArray.reduce((accumulator, numbersy) => {
        return accumulator = accumulator * numbersy;
    }, 1)
}

//ex4
const BiggerNumberArray = (Biggerarray) => {
    return Biggerarray.reduce((accumulator, biggersy) => {
      if (biggersy > accumulator){
          return biggersy
      }
      else{return accumulator}
    }, Biggerarray[0])
}

//ex5

const biggerThanSixArray = (SixArray) => {
    return SixArray.filter(sixy => sixy % 6 === 0)
} 


//ex6 
const lengthIsArray = (lengtharray) => {
    return lengtharray.map(lengthsy => lengthsy = lengthsy.length, 0)
}


//ex7
const lengthIsAtArray = (lengthyarray) => {
    return lengthyarray.map(lengthsysh => {
        return lengthsysh + lengthsysh.length})
}

//ex8
const sumWordsInArray = (WordsArray) => {
    return WordsArray.reduce((accumulator, word) => {
        return accumulator + word + " ";
    }," ")
}

//ex9
const IsPositiveArray = (PositiveArray) => {
    return PositiveArray.filter(posi => posi > 0 )
    .reduce ((
        accumulator, posinumber) => accumulator +posinumber)
} 

//ex10
const IsBetweenArray = (betweenarray, numbera, numberb) => {
    return betweenarray.filter (betty => {
        return betty >= numbera && betty <= numberb; 
    }).reduce ((accumulator) =>{
         return accumulator + 1;
        } ,0)
}

//ex11

const IsstringArray = (StringsArray) => {
    const stringarraysplit = StringsArray.split(" ")
    return stringarraysplit.map(stringarraysplit => { 
        return stringarraysplit.length;})
}  


//ex12
const IsFirstArray = (firstArray) => {
    const firstarraysplit = firstArray.split(" ")
    return firstarraysplit.map(stringarraysplit => { 
        return stringarraysplit.charAt(0);}).join('')
}  
