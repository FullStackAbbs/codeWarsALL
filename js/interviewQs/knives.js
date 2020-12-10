 const knives = {
  allknives : [ {
        name:'Cleaver',
        handle: 9.5,
        thickness: 11,
        psi: .8,
        location: 'B1',
       validCategory: ['Meat']
    
      },
     {
        name:' Veggie Knife',
        handle: 9.5,
        thickness: 4.5,
        psi: .5,
        location: 'B2',
        validCategory: ['Veggies','Dairy']
    
      },
      {
        name:' Butter Knife',
        handle: 4,
        thickness: 2.5,
        psi: .1,
        location: 'A1',
        validCategory: ['Dairy']

    
      }
    
    ]
}

const food = {
  allfood : [ {
        name:'Butter',
        psiSlice: .15,
        spoilAge: 45,
        currentAge: 3, // days
        category:'Diary' 
    
      },
     {
      name:'Chicken',
      psiSlice: .8,
      spoilAge: 7,
      currentAge: 1,
      category: 'Meat'
      },
      {
        name:'Onions',
        psiSlice: .56,
        spoilAge: 10,
        currentAge: 2,
        catergory: 'Veggies'
    
      }
    ]
}

class Knife {
  constructor(name,handle,thickness,psi,location,validCategory){
    this.name = name
    this.handle = handle
    this.thickness = thickness
    this.psi = psi
    this.location = location
    this.validCategory = validCategory
  }

  addToCollection(){
    knives.allknives.push({name:this.name, 
                          handle:this.handle, 
                          thickness: this.thickness,
                          psi : this.psi,
                          location: this.location,
                          validCategory : this.validCategory})
  }
  cut(foodChoice){
    let foodSlicePSI = food.allfood.filter(el => el.name === foodChoice)[0].psiSlice
    const tolerance = .15 // .15 psi range in order to find the correct knife
    const upBound = foodSlicePSI + tolerance // the pressure need to make a cut while with tolerance range (high)
    const lowBound = foodSlicePSI - tolerance // the pressure need to make a cut while with tolerance range (low)
    let psiCheck = lowBound < this.psi && upBound > this.psi
 // catergoryCheck function, although knives may be able to cut... not all should be used. 
    // Example: Butcher knife for Cheese, even if the Butcher knife can cut the cheese physically(force-psi)
  let categoryCheck = (this.validCategory) === (food.allfood.filter(el => el.name === foodChoice)[0].category)
    return categoryCheck && psiCheck ? 'Can Cut' : 'Error: cannot cut '
    // sidenote: i wanted the categoryCheck as its own function but instead settled for the boolean check (line above)
    }

    chop(arrFood){
      const answer = arrFood.allfood.filter( el => el.psiSlice  - .15 < this.psi && el.psiSlice + .15 > this.psi).map(el => el.name)
      return answer
    }

  }


let knife4 = new Knife('Boning Knife',3,7.5,.7,'C1','Meat')
knife4.addToCollection()
// console.log(knives.allknives)
console.log(knife4.chop(food))

class Food {
  constructor(name,psiSlice,spoilAge,currentAge){
    this.name = name
    this.psiSlice = psiSlice
    this.spoilAge = spoilAge
    this.currentAge =currentAge
//     The food class should have the properties you've mentioned here but also a spoilAge property and a currentAge property.
// The user should be able to set currentAge AFTER making the object that's made from the food class. So maybe make a setter method  
  }
  isMoldy(){
    this.currentAge = this.currentAge++
    if(this.currentAge > this.spoilAge){
      return true
    }else{
      return false
    }
}}

class Solution {
    constructor(knives,food,choice){
      this.knives=knives
      this.food = food
      this.choice = choice
    }
  reportKnife(result){
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



// console.log( new Solution(knives,food,'Meat').findOnFoodList())



// node knives.js

