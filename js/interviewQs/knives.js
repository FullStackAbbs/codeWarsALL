const knives = {
  allknives : [ {
        name:'Cleaver',
        handle: 9.5,
        thickness: 11,
        psi: .8,
        location: 'B1'
    
      },
     {
        name:' Veggie Knife',
        handle: 9.5,
        thickness: 4.5,
        psi: .5,
        location: 'B2'
    
      },
      {
        name:' Butter Knife',
        handle: 4,
        thickness: 2.5,
        psi: .1,
        location: 'A1'
    
      }
    
    ]
}

const food = {
  allfood : [ {
        name:'Butter',
        psiSlice: .15,
        spoilAge: 45,
        currentAge: 3 // days
    
      },
     {
      name:'Meat',
      psiSlice: .8,
      spoilAge: 7,
      currentAge: 1
      },
      {
        name:'Onions',
        psiSlice: .56,
        spoilAge: 10,
        currentAge: 2 
    
      }
    ]
}

class Knife {
  constructor(name,handle,thickness,psi,location){
    this.name = name
    this.handle = handle
    this.thickness = thickness
    this.psi = psi
    this.location = location
  }
  cut(psi){
    if(food.psiSlice < this.psi ){
      return 'This cannot cut '

    }
    this.psi

  }
}

let knife4 = new Knife('Boning Knife',3,7.5,1.24,'C1')
console.log(knife4.cut())

class Food {
  constructor(name,psiSlice,spoilAge,currentAge){
    this.name = name
    this.psiSlice = psiSlice
    this.spoilAge = spoilAge
    this.currentAge =currentAge
  }
  isMoldy(spoilAge,currentAge){
    this.currentAge > this.spoilAge ? true : false
}}

class Solution {
    constructor(knives,food,choice){
      this.knives=knives
      this.food = food
      this.choice = choice
    }
  reportKnife(result,choice){
  const msg = `You have selected ${this.choice} from the food list.The knife you will need is a ${result[0].name} and can be found in the knife drawer at location ${result[0].location}. Enjoy!  `
  console.log(msg)
  }

  findKnife(psiSliceSelected){
    // psiSliceSelected (pounds per square inch) refers to the amount of pressure needed for a succesful cut
    const tolerance = .15 // .15 psi range in order to find the correct knife
    const upBound = psiSliceSelected + tolerance // the pressure need to make a cut while with tolerance range (high)
    const lowBound = psiSliceSelected - tolerance // the pressure need to make a cut while with tolerance range (low)
    let result = knives.allknives.filter( el =>  lowBound < el.psi && upBound > el.psi)  
    this.reportKnife(result,this.choice)
  }

  findOnFoodList(){
    let foodChoice = food.allfood.filter(el => el.name === this.choice)
    let psiSliceSelected = foodChoice[0].psiSlice
    this.findKnife(psiSliceSelected)
  }

  



// find out what the user choose
// match the choice text with food list
// access the food list I need to grab the food psi Slice
// filter the knife selection based on the foodPsislice matching the knives.psi value
// return the location of the knife with the correct psi value

  

}



console.log( new Solution(knives,food,'Meat').findOnFoodList())



// node knives.js

