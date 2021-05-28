var ITree = require('./ITree');

var BST = function(){
    this.root = null;
    this.Node = function(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
    this.insertNode = function(node, newNode){
        if(newNode.value < node.value){
            if(node.left === null){
                node.left = newNode;
            } else{
                this.insertNode(node.left, newNode);
            }
        } else{
            if(node.right === null){
                node.right = newNode;
            } else{
                this.insertNode(node.right, newNode);
            }
        }
    }
    this.inOrderTraverse = function(node, callback){
        if(node){
            this.inOrderTraverse(node.left, callback);
            callback(node.value);
            this.inOrderTraverse(node.right, callback);
        }
    }
    this.findMinNode = function(node){
        if(node.left === null){
        return node;

        } else{
            return this.findMinNode(node.left)
        }
    }
    this.removeNode = function(node, value){
        if(!node){
            return;
        } else if(value < node.value){
            node.left = this.removeNode(node.left, value)
            return node;
        } else if(value > node.value){
            node.right = this.removeNode(node.right, value)
            return node;
        } else{
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }
            if(node.left === null){
                node = node.right;
                return node;
            } else if(node.right === null){
                node = node.left;
                return node;
            }
            var aux = this.findMinNode(node.right);
            node.data = aux.data;
      
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }
    this.heightHelper = function(node, result){
        if (node.left === null && node.right === null) {
            return result
        }
        if (node.left !== null && node.right === null) {
            return this.heightHelper(node.left, result+1)
        }
        if (node.left === null && node.right !== null) {
            return this.heightHelper(node.right, result+1)
        }
        return Math.max(this.heightHelper(node.right, result+1), this.heightHelper(node.left,result+1));
    }
    this.widthHelper = function(node, level){
        if (node === null) {
            return 0;
        }
        if(level === 1){
            return 1;
        }
        return this.widthHelper(node.left,level - 1) + this.widthHelper(node.right, level - 1);
    }
    this.nodesHelper = function(node){
        if (node.left !== null && node.right !== null){
            return 1;
        } 
        return this.nodesHelper(node.left) + this.nodesHelper(node.right);
    }
    this.leavesHelper = function(node){
        if (node.left === null && node.right === null){
            return 1;
        } 
        return this.leavesHelper(node.left) + this.leavesHelper(node.right);
    }
};

BST.prototype = Object.create(ITree.prototype);
BST.prototype.constructor = BST;

BST.prototype.insert = function (value) {
    var newNode = new this.Node(value);
    if(!this.root){
        this.root = newNode;
    } else{
        this.insertNode(this.root, newNode);
    }
};

BST.prototype.init = function (array) {
    if(!array){
        return;
    }
    for (var i = 0; i < array.length; i++) {
        this.insert(array[i]);
    }
};

BST.prototype.clear = function () {
    this.root = null;
};

BST.prototype.print = function (type, callback) {
    switch(type){
        case "pre": break;
        case "post": break;
        case "in": this.inOrderTraverse(this.root, callback); break;
    }
}; 

BST.prototype.search = function(value) {
    if(!this.root){
        return false;
    }
    var current = this.root
    var found = false
    while(current && !found){
        if(value < current.value){
            current = current.left
        } else if(value > current.value){
            current = current.right
        } else {
            found = current
        }
    }
    if(!found){
        return;
    }
    return found;
}

BST.prototype.height = function(value) {
    if(!this.root){
        return;
    }
    return this.heightHelper(this.root, 1);
}

BST.prototype.width = function(value) {
    if (!this.root) {
        return;
    }
    var widthMax = 0;
    for (var i = 0; i < this.height(); i++) {
        var temp = this.widthHelper(this.root, i);
        widthMax = Math.max(temp, widthMax)
    }
    return widthMax;
}
BST.prototype.nodes = function() {
    if (!this.root) {
        return;
    }
    return this.nodesHelper(this.root);
}

BST.prototype.leaves = function() {
    if (!this.root) {
        return;
    }
    return this.leavesHelper(this.root, 0);
}

BST.prototype.getSize = function () {
    return this.nodes() + this.leaves();
};

BST.prototype.minNode = function (node) {
   if(!this.root){
       return;
   }
   var current = this.root;
    while (current.left !== null) {
        current = current.left;
    }
  return current;
};

BST.prototype.maxNode = function (node) {
    if(!this.root){
        return;
    }
    var current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current;
}; 

BST.prototype.remove = function (value) { 
    this.root = this.removeNode(this.root, value);
}; 


module.exports = BST;