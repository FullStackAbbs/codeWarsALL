const knives = {
  allknives : [ {
        name:'Butch Knives',
        handle: 9.5,
        thickness: 11,
        psi: .8,
        location: 'B1'
    
      },
     {
        name:' Veggie Knives',
        handle: 9.5,
        thickness: 4.5,
        psi: .5,
        location: 'B2'
    
      }]

}
const result = knives.allknives.filter( el => el.psi < .7)

function ResultKnives(result) {
  constructor(result)
    this.result = result
    this.result.location = WebGLUniformLocation
  

    this.report = function(result){
    result.forEach((el) => {
      console.log('The knife you are looking for is here:'+ el.location)
    })
  }
}

console.log(ResultKnives(result))


// for(let i=0;i<knives.allknives.length;i++){
//   if(knives.allknives[i].psi < .7){
//    console.log(knives.allknives[i].location)
//   }
// }
// NOTE: wanted to consider a striaghtforward apporoach

// NOTE: this particular solution only allows for one entry, consider create a constructor function 



// create another object that includes foods from a select list
// console.log(knives.allknives[1])


// node knives.js

// ,
//    {
//     name:'Butch Knives',
//     handle: 9.5,
//     thickness: 11,
//     psi: .8,
//     location: 'B1'

//   },
//  {
//     name:' Veggie Knives',
//     handle: 9.5,
//     thickness: 4.5,
//     psi: .5,
//     location: 'B2'

//   }
