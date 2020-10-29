// STACKS //
// When to use stacks... when you do not need create any dynamic programmming
// RIRO : Recent In Recent Out  aka push and pop, array with no shift and unshift
// Call Stack shows the order is which functions should be executed in
// class Stack{
//   constructor(){
//     //All stacks should 1) push 2)pop 3) size
//     // Intiate the storage and length var
//     this._storage =[];
//     this._length=0
//     // increase the length
//     push(value){
//       // add the value to the front of the storage stack
//       this._storage[this._length] = value
//       // increment the length counter
//       this._length = this._length+1
//
//     }
//     pop(){}
//       // remove the value
//         this._storage[this._length] = undefined
//       // decrement the length
//       this._length = this._length - 1
//       // return the new stack ?
//
//     size(){
//       return this._length
//       // return the size of the stack based on length
//     }
//
//     isEmpty(){
//       if(this._length === 0){
//         return "Stack is Empty"
//       }
//     peek(){
//       return this._storage[this._length-1]
//     }
//     view(){
//       let top =this.top - 1;
//       while(top>=0){
//         console.log(this._storage[top])
//         top = top - 1;
//       }
//     }
//     }
//    }
//   }


  //
  // Queues
  //  RIPO Recent In Past Out
  class Queues{
    constructor(value){
      this._storage=[]
      this._length=0
      enqueue(value){
        this._storage[this._length] = value
      }
      dequeue(){
        this._storage[0]= undefined
      }
      isEmpty(){
        if(this._length === 0){
          return "Queue is Empty"
        }}
        view(){
              let top =this.top - 1;
              while(top>=0){
                console.log(this._storage[top])
                top = top - 1;
              }
    }
  }}
  // node stacksQueuesLL.js

  const myQueue = new Queue();
  myQueue.enqueue('Abbey')
  myQueue.view()
