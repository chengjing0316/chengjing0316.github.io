
// Vector
class Vector{
  constructor(x, y){
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
//自己写的链式调用简单计算器
class Tc{
  constructor(vall){
    this.val = vall
  }
  add(val){
    var x = this.val + val
    return new Tc(x)
  }
  minus(val){
    var x = this.val - val
    return new Tc(x)
  }
  get value(){
    return this.val
  }
}
//Complex
class Complex{
  constructor(real, imag){
    this.real = real
    this.imag = imag
  }
  plus(c){
    var real = this.real + c.real
    var imag = this.imag + c.imag
    return new Complex(real, imag)
  }
  static plus(a, b){
    var real = a.real + b.real
    var imag = a.imag + b.imag
    return new Complex(real, imag)
  }
  minus(c){
    var real = this.real - c.real
    var imag = this.imag - c.imag
    return new Complex(real, imag)
  }
  static minus(a, b){
    var real = a.real - b.real
    var imag = a.imag - b.imag
    return new Complex(real, imag)
  }
  mul(c){
    var real = this.real * c.real - this.imag * c.imag
    var imag = this.real * c.imag + this.imag * c.real
    return new Complex(real, imag)
  }
  static mul(a, b){
    var real = a.real * b.real - a.imag * b.imag
    var imag = a.real * b.imag + b.imag * b.real
    return new Complex(real, imag)
  }
  div(c){
    var helper = new Complex(c.real, -c.imag)
    var up = this.mul(helper)
    var down = c.mul(helper) 
    var real = up.real / down.real
    var imag = up.imag / down.real
    return new Complex(real, imag)
  }
  static div(a, b){
    var helper = new Complex(b.real, -b.imag)
    var up = a.mul(helper)
    var down = b.mul(helper) 
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
  push(val){
    var node = {
      val:val,
      next:null
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
  get size(){
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
  get size(){
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
      val:val,
      next:null
    }
    if(this.head == null){
      this.head = this.tail = node
      return
    }else{
      this.tail.next = node
      this.tail = node
      return
    }
  }
  prepend(val){
    var node = {
      val:val,
      next: null
    }
    if(this.head == null){
      this.head = this.tail = node
      return
    }else{
      node.next = this.head
      this.head = node
      return
    }
  }
  at(idx){ //返回链表的第idx个元素
    if(this.head == this.tail == null) return null
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
    
    // Mymap
class MyMap{
  constructor(){
    this.keys = []
    this.vals = []
  }
  set(key, val){
    var keyIdx = this.keys.indexOf(key)
    if(keyIdx !== -1){
      this.vals[keyIdx] = val
    }else{
      this.keys.push(key)
      this.vals.push(val)
    }
  }
  get(key){
    var keyIdx = this.keys.indexOf(key)
    if(keyIdx >= 0){
      return this.vals[keyIdx]
    }
  }
  has(key){
    if(this.keys.includes(key)){
      return true
    }else{
      return false
    }
  }
  delete(key){
    var keyIdx = this.keys.indexOf(key)
    if(keyIdx >= 0){
      this.keys.splice(keyIdx, 1)
      this.vals.splice(keyIdx, 1)
      return true
    }
    return false
  }
  get size(){
    return this.keys.length
  }
}
// MySet
class MySet{
  // elements = []
  constructor(){
    this.elements = []
  }
  add(val){
    if(!this.has(val)){
      this.elements.push(val)
    }
  }
  delete(val){
    if(this.has(val)){
      var idx = this.elements.indexOf(val)
      this.elements.splice(idx, 1)
    }
  }
  has(val){
    return this.elements.includes(val)
  }
  get size(){
    return this.elements.length
  }
}
/*
String.prototype.mymatch
String.prototype.mymatchAll
String.prototype.myreplace
String.prototype.myreplaceAll
String.prototype.mysearch 
RegExp.prototype.mytest
利用RegExp.prototype.exec实现以上所有函数
调用方式跟自带的一样
*/
String.prototype.mymatch = function(re){
  if(re.global){
    re.lastIndex = 0
    var result =  []
    var match
    while(match = re.exec(this)){
      result.push(match[0])
    }
    return result
  }else{
    return re.exec(this)
  }
}
String.prototype.mymatchAll = function(re){
  if(re instanceof RegExp){
    if(!re.global){
      throw new TypeError('String.prototype.matchAll called with a non-global RegExp argument')
    }
  }
  if(typeof re == 'string'){
    re = new RegExp(re, 'g')
  }
  re.lastIndex = 0
  var result = []
  var match
  while(match = re.exec(this)){
    result.push(match)
  }
  return result
}
String.prototype.mysplit = function(re){
  if(typeof re == 'string'){
    re = new RegExp(re)
  }
  var result = []
  if(!re.global){
    re = new RegExp(re.source, 'g' + re.flags)
  }
  re.lastIndex = 0
  var match
  var lastLastIndex = 0
  while(match = re.exec(this)){
    result.push(this.slice(lastLastIndex, match.index))
    result.push(...match.slice(1))
    lastLastIndex = re.lastIndex
  }
  result.push(this.slice(lastLastIndex))
  return result
}

String.prototype.myreplace = function(regexp, replacer){
  regexp.lastIndex = 0
  var result = ''
  var match
  var lastLastIndex = 0
  while(match = regexp.exec(this)){
    result += this.slice(lastLastIndex,match.index)
    if(typeof replacer == 'function'){
      result += replacer(...match, match.index, match.input)
    }else{
      var replacement = replacer.myreplace(/\$([1-9\&])/g, (_, idx) =>{
        if(idx == '&'){
          return match[0]
        }else{
          return match[idx]
        }
      })
      result += replacement
    }
    lastLastIndex = regexp.lastIndex
    if(!regexp.global){
      lastLastIndex = match.index + match[0].length
      break
    }
  }
  result += this.slice(lastLastIndex)
  return result
}
String.prototype.myreplaceAll = function(){
  if (!re.global) {
    throw new TypeError('xxx')
  }
  return this.myreplace(re, replacer)
}
/**
 * @param target {string|RegExp}
 * @returns {number}
 */
String.prototype.mysearch = function(target){
  if(typeof target == 'string'){
    return this.indexOf(target)
  }else{
    var match = target.exec(this)
    if(match){
      return match.index
    }else{
      return -1
    }
  }
}
RegExp.prototype.mytest = function(str){
  if(this.exec(str)){
    return true
  }else{
    return false
  }
}
