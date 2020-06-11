// Binary Search Tree

// a tree data struc. is a way to hold data that looks like a tree
// all data points in the tree are called nodes
// // the top of the tree is called the root nodes
// // which can breakout into 0 or more child nodes
// // leaf nodes: nodes that have no children
// BI- only two branches


// // Learning Moment: bc Binary are 10110 etc therefore the average operation
// is used , which results in a reduce runtime by half in comparison to other methods.

// Binary Search treesa are ordered
// // LEFT sub-tree : less than or equal to the parent node
// // RIGHT sub-tree: greater than the parent node

// Big(O)
// Insert: log n
// Delete: log n
//
// // TO CREATE A NODE (ea node in the tree)//
class Node{
constructor(data, left=null, right=null){
  this.data = data;
  this.left= left
  this.right = right
}
}
// // TO CREATE the BST // //
class BST{
  constructor(){
    this.root=null;
    // creates the root node at the top of the tree
  }

  // when we want to add a node, we must create a function to do so
  add(data) {
   const node = this.root;
   if (node === null) {
     // if its the root node then the value will be null
     // therefore creating a new node
     this.root = new Node(data);
     // grabs the reference data for a new node: returning data,left,right
     return;
     // if its the first node, return the function do not CONTINUE to execute
   } else {
     const searchTree = function(node) {
       // create the function variable to look for the tree
       if (data < node.data) {
         // if its greater than the root node then go these conditions
         //
         // CONDITION 1:
         // if there is no left child node
         if (node.left === null) {
           node.left = new Node(data);
           // create add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
           return;
         } else if (node.left !== null) {
           return searchTree(node.left);
         }
       } else if (data > node.data) {
         if (node.right === null) {
           node.right = new Node(data);
           return;
         } else if (node.right !== null) {
           return searchTree(node.right);
         }
       } else {
         return null;
       }
     };
     return searchTree(node);
   }
 }
}
