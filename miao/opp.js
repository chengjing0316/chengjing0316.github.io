
    // Mymap
class MyMap{
  #keys = []
  #vals = []
  constructor(){
    this.#keys = []
    this.#vals = []
  }
  set(key, val){
    if(this.#keys.has(key)){
      this.#vals[keyIdx] = val
    }else{
      this.#keys.push(key)
      this.#vals.push(val)
    }
    return this
  }
  get(key){
    var keyIdx = this.#keys.indexOf(key)
    if(keyIdx >= 0){
      return this.#vals[keyIdx]
    }
  }
  has(key){
    if(this.#keys.includes(key)){
      return true
    }else{
      return false
    }
  }
  delete(key){
    var keyIdx = this.#keys.indexOf(key)
    if(keyIdx >= 0){
      this.#keys.splice(keyIdx, 1)
      this.#vals.splice(keyIdx, 1)
      return true
    }
    return false
  }
  get size(){
    return this.#keys
  }
}
// MySet
class MySet{
  #elements = []
  constructor(){
    this.#elements = []
  }
  add(val){
    if(!this.has(val)){
      this.#elements.push(val)
    }
  }
  remove(val){
    if(this.has(val)){
      var idx = this.#elements.indexOf(val)
      this.#elements.splice(idx, 1)
    }
  }
  has(val){
    return this.#elements.includes(val)
  }
  size(){
    return this.#elements.length
  }
}

// Vector
class Vector{
  constructor(){
    this.x = x
    this.y = y
  }
  plus(vector){
    var x = this.x + vector.x
    var y = this.y + vector.y
    return new Vector(x, y)
  }
  minus(vector){
    var x = this.x - vector.x
    var y = this.y - vector.y
    return new Vector(x, y)
  }
  get length(){
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}


//Complex
class Complex{
  constructor(){
    this.real = real
    this.imag = imag
  }
  plus(c){
    var real = this.real + c.real
    var imag = this.imag + c.imag
    return new Complex(real, imag)
  }
  minus(){
    var real = this.real - c.real
    var imag = this.imag - c.imag
    return new Complex(real, imag)
  }
  mul(){
    var real = this.real * c.real - this.imag * c.imag
    var imag = this.real * c.imag + this.imag * c.real
    return new Complex(real, imag)
  }
  div(){
    var helper = new Complex(c.real, -c.imag)
    var up = this.mul(helper)
    var down = c.mul(helper) 
    var real = up.real / down.real
    var imag = up.imag / down.real
    return new Complex(real, imag)
  }
}

//Stack
class Stack{
  constructor(){
    this.head = null
    this.nodeCount = 0
  }
  push(){
    var node = {
      val, next:null
    }
    this.nodeCount++
    if(this.head == null){
      this.head = node
    }else{
      node.next = this.head
      this.head = node
    }
  }
  pop(){
    if(this.head == null){
      return undefined
    }
    this.nodeCount--
    var result = this.head.val
    this.head = this.head.next
    return result
  }
  size(){
    return this.nodeCount
  }
}

//Queue
class Queue{
  constructor(){
    this.vals = []
  }
  add(val){
    this.vals.push(val)
  }
  pop(){
    return this.vals.shift()
  }
  size(){
    return this.vals.length
  }
}


//LinkedList
class LinkedList{
  constructor(){
    this.head = null
    this.tail = null
  }
  append(val){
    var node = {
      val, next:null
    }
    if(this.head == null){
      this.head = this.tail = node
    }else{
      this.tail.next = node
      this.tail = node
    }
  }
  prepend(){
    var node = {
      val, next: null
    }
    if(this.head == null){
      this.head = this.tail = node
    }else{
      node.next = this.head
      this.head = node
    }
  }
  at(idx){ //返回链表的第idx个元素
    var p = this.head
    var count = 0
    while(count < idx){
      p = p.next
      count++
    }
    return p.val
  }
  get size(){
    var p = this.head
    var l = 0
    while(p){
      l++
      p = p.next
    }
    return l
  }
}


