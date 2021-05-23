var IList = require('./Ilist');

var AList = function(capacity){
    IList.call(this, capacity);
    this.size = 0;
    this.offset = 0;
    this.DEFAULT_CAPACITY = 10;
    this.array = (() => {
        if(!capacity){
            return new Array(this.DEFAULT_CAPACITY);
        }else if (capacity && typeof capacity === 'number'){
            return new Array(capacity);
        }else if(Array.isArray(capacity)){
            this.size = capacity.length;
            return capacity;
        }else{
            throw new Error('Error');
        }
    })();
    this.ensureCapacity = function(){
        var newArray = new Array(this.array.length + Math.floor(this.array.length * 1.5));
        for (var i = 0; i < this.array.length; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }
    this.addValue = function(value) {
        this.array[this.offset++] = value;
        this.size++;
    };
    this.checkIndex = function(value){
        if(value < 0 || value > this.array.length - 1){
            throw new Error('Index is not found');
        }
    }
};

AList.prototype = Object.create(IList.prototype);
AList.prototype.constructor = AList;

AList.prototype.clear = function () {
    this.array = [];
    this.size = 0;
    this.index = 0;
};

AList.prototype.getSize = function () {
    return this.size;
};

AList.prototype.add = function (value) {
    if(this.size === this.array.length){
        this.ensureCapacity();
        this.addValue(value);
    } else {
        if (this.array[this.offset]) {
            this.offset++;
            this.add(value);
        } else {
            this.addValue(value);
        }
    }
};

AList.prototype.set = function (value, index) {
    this.checkIndex(index);
    if (!this.array[index]) {
        this.array[index] = value;
        this.size++;
    } else {
        this.array[index] = value;
    }
}; 

AList.prototype.get = function (index) {
    this.checkIndex(index);
    return this.array[index];
    
}; 

AList.prototype.remove = function (index) {
    this.checkIndex(index);
    var temp = this.array[index];
    this.array[index] = undefined;
    this.size--;
    return temp;    
}; 

AList.prototype.toArray = function () {
    return this.array;
}; 

AList.prototype.toString = function () {
    return String(this.array);
}; 

AList.prototype.contains = function (value) {
    for(var i = 0; i < this.array.length; i++){
        if(this.array[i] === value){
            return true;
        } 
    }
    return false;
}; 

AList.prototype.minValue = function () {
    var min = this.array[0];
    for(var i=0; i<this.array.length; i++){
      if(min > this.array[i]){
        min=this.array[i];
      }
    }
    return  min;
};

AList.prototype.maxValue = function () {
    var max = this.array[0];
  for(var i=0; i < this.array.length; i++){
    if(max < this.array[i]){
      max = this.array[i];
    }
  }
  return  max;
}; 

AList.prototype.minIndex = function () {
    var min = this.array[0], index = 0;
    for(var i=0; i < this.array.length; i++){
      if(min > this.array[i]){
        min = this.array[i];
        index = i;
      }
    }
    return index;
}; 

AList.prototype.maxIndex = function () {
    var max = this.array[0], index = 0;
    for(var i=0; i < this.array.length; i++){
      if(max < this.array[i]){
        max = this.array[i];
        index = i;
      }
    }
    return index;
};

AList.prototype.reverse = function () {
    var result = [];
    for(var i = this.array.length; i > 0; i--){
        result.push(this.array[i-1]);
    }
    return result;
}; 
AList.prototype.halfReverse = function () {
    var firstHalfArray = Math.floor(this.array.length / 2);
    var secondHalfArray = this.array.length - firstHalfArray;
    var result =[];
    for(var i = 0; i < secondHalfArray; i++){
        result[i] = this.array[i + firstHalfArray];
    }
    for(var i = 0; i < firstHalfArray; i++){
        result[i + secondHalfArray] = this.array[i];
    }
    return result;
};

AList.prototype.retainAll = function (value) {
    for (var i = 0; i < this.array.length; i++) {
        var deleteValue = false;
        for (var j = 0; j < value.length; j++) {
            if (this.array[i] === value[j]) {
                deleteValue = true;
                break;
            }
        }
        if (!deleteValue) {
            this.array[i] = undefined;
            this.size--;
        }
    }
    return this.array;
}; 

AList.prototype.removeAll = function (value) {
    for (var i = 0; i < this.array.length; i++) {
        var deleteValue = true;
        for (var j = 0; j < value.length; j++) {
            if (this.array[i] === value[j]) {
                deleteValue = false;
                break;
            }
        }
        if (!deleteValue) {
            this.array[i] = undefined;
            this.size--;
        }
    }
    return this.array;
}; 

AList.prototype.print = function () {
    for(var i = 0; i < this.array.length; i++){
        if(this.array[i] === undefined){
            continue
        }
       console.log(this.array[i]);
    }
}; 
module.exports = AList;
