var IList = require('../Ilist');

var LList = function(){
    this.size = 0;
    this.root = null;
    this.Node = function(value){
        this.value = value;
        this.next = null;
    }
    this.checkIndex = function(index){
        if(index < 0 || index > this.size){
            throw new Error('Index is not found')
        }
    }
};
LList.prototype = Object.create(IList.prototype);
LList.prototype.constructor = LList;

LList.prototype.clear = function () {
    this.size = 0;
    return this.root = null;
};

LList.prototype.getSize = function () {
    return this.size;
};
LList.prototype.add = function (value) {
    var newNode = new this.Node(value);
    this.size++;
    if(!this.root){
        this.root = newNode;
    } else{
        var tempNode = this.root;
        while(tempNode.next !== null){
            tempNode = tempNode.next;
        }
        tempNode.next = newNode;
    }
};
LList.prototype.toArray = function () {
    if(this.size === 0){
        return new Array();
    }
    var array = new Array(this.size);
    var tempNode = this.root;
    var index = 0;
    while(tempNode !== null){
        array[index++] = tempNode.value;
        tempNode = tempNode.next;
    }
    return array;
};

LList.prototype.set = function (value, index) {
    var newNode = new this.Node(value);
    var tempNode = this.root;
    this.checkIndex(index);
    if(this.size === 0 ){
        newNode.next = tempNode;
        this.root = newNode;
        this.size++;
    } else{
        var count = 0;
        while(count !== index){
            tempNode = tempNode.value;
            count++;
        }
        tempNode.value = value;
    }
}; 

LList.prototype.get = function (index) {
    this.checkIndex(index);
    var tempNode = this.root;
    var count  = 0;
    while (tempNode !== null){
        if(count === index){
            return tempNode.value;
        }
        tempNode = tempNode.next;
        count++;
    }
}; 

LList.prototype.remove = function (value) { 
    if(!this.root){
        return;
    }  
    var tempNode = this.root;
    if (tempNode.value === value) {
        var removeValue = tempNode.value;
        this.root = tempNode.next;
        this.size--;
        return removeValue;
    }
    while (tempNode.next !== null) {
        if (tempNode.next.value === value) {
            var removedNode = tempNode.next;
            tempNode.next = tempNode.next.next;
            this.size--;
            return removedNode.value;
        } else {
            tempNode = tempNode.next;
        }
    }
}; 

LList.prototype.toString = function () {
    if(this.size === 0){
        return;
    }
    var str= "";
    var tempNode = this.root;
    while (tempNode !== null) {
        str += tempNode.value;
        if (tempNode.next === null) {
            break;
        }
        str += " ";
        tempNode = tempNode.next;
    }
    return str;
}; 

LList.prototype.contains = function (value) {
    if(this.size === 0){
        return;
    }
    var tempNode = this.root;
    while (tempNode !== null) {
        if (tempNode.value === value) {
            return true;
        }
        tempNode = tempNode.next;
    }
    return false;
}; 

LList.prototype.minValue = function () {
    if(this.size === 0){
        return;
    }
    var tempNode = this.root;
    var minValue = this.root.value;
    while (tempNode !== null) {
        if (minValue > tempNode.value) {
            minValue = tempNode.value;
        }
        tempNode = tempNode.next;
    }
    return minValue;
};

LList.prototype.maxValue = function () {
    if(this.size === 0){
        return;
    }
    var tempNode = this.root;
    var maxValue = this.root.value;
    while (tempNode !== null) {
        if (maxValue < tempNode.value) {
            maxValue = tempNode.value;
        }
        tempNode = tempNode.next;
    }
    return maxValue;
}; 

LList.prototype.minIndex = function () {
    if(this.size === 0){
        return;
    }
    var tempNode = this.root;
    var minValue = this.root.value;
    var index = 0;
    var count = 0;
    while (tempNode !== null) {
        if (minValue > tempNode.value) {
            index = count;
            minValue = tempNode.value;
        }
      tempNode = tempNode.next;
      count++;
    }
    return index;
}; 

LList.prototype.maxIndex = function () {
    if(this.size === 0){
        return;
    }
    var tempNode = this.root;
    var maxValue = this.root.value;
    var index = 0;
    var count = 0;
    while (tempNode !== null) {
        if (maxValue < tempNode.value) {
            index = count;
            maxValue = tempNode.value;
        }
      tempNode = tempNode.next;
      count++;
    }
    return index;
};

LList.prototype.retainAll = function (array) {
    if(array.lenght < 1){
        return;
    }
    var tempArray = [];
    for (var i = 0; i < this.size; i++) {
      var tempNode = this.root;
      while (tempNode !== null) {
        if (tempNode.value !== array[i]) {
          tempArray.push(tempNode.value);
        }
        tempNode = tempNode.next;
      }
    }
    this.removeAll(tempArray);
}; 

LList.prototype.removeAll = function (array) {
    if(this.size === 0){
        return;
    }
    var tempNode = this.root;
    for (var i = 0; i < this.size; i++) {
        while (tempNode !== null) {
          if (tempNode.value === array[i]) {
            this.remove(array[i]);
          }
          tempNode = tempNode.next;
        }
    }
}; 

LList.prototype.print = function () {
    if(this.size === 0){
        return;
    }
    var printStr = "";
    var tempNode = this.root;
    while (tempNode !== null) {
      printStr += tempNode.value + "\n";
      tempNode = tempNode.next;
    }
    console.log(printStr);
}; 

module.exports = LList;