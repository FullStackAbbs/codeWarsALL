const knives = {
  allknives : [ {
        name:'Butch Knife',
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
        psiSlice: .15
    
      },
     {
      name:'Meat',
      psiSlice: .8
      },
      {
        name:'Onions',
        psiSlice: .56
    
      }
    ]
}

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
    const tolerance = .15
    const upBound = psiSliceSelected + tolerance
    const lowBound = psiSliceSelected - tolerance
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

