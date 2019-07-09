/* Stacks! */

// functions: push, pop, peek, length

//understanding stack with Array 

var letters = []; // this is our stack

var word = "MOM"

var rword = "";

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
   letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
   rword += letters.pop(); 
}

if (rword === word) {
   console.log(word + " is a palindrome.");
}
else {
   console.log(word + " is not a palindrome.");
}

//creating stack
var stack = function(value){
  this.count =0;
  this.storage={};
      
    // Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }
    this.size = function() {
        return this.count;
    }
      // Returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
    // Removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
}

var myStack = new stack();

myStack.push(1);
myStack.push(12);
myStack.push(14);
console.log(myStack.peek());
myStack.pop(14);
console.log(myStack.peek());