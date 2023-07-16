var chengjing0316 = {
  isMatch:function(object, source){
    for(var key in source){
      if(typeof source[key] == 'object'){
        if(!this.isMatch(object[key], source[key])){
          return false
        }
      }else{
        if(object[key] !== source[key]){
          return false
        }
      }
    }
    return true
  },
  property:function(path){
    return function(obj){
      return chengjing0316.get(obj,path)  //返回给定对象指定key的值
    }
  },
  matches:function(source){
    return function(object){
      return chengjing0316.isMatch(object,source)
    }
  },
  matchesProperty:function(path, srcValue){
    return function(object){
      return chengjing0316.isEqual(object[path],srcValue)
    }
  },
  iteratee:function(func){
    if(typeof func === 'function'){
      return func
    }
    if(typeof func === 'string'){
      return this.property(func)
    }
    if(typeof func === 'object' && func !== null){
      return this.matches(func)
    }
    return this.identity(func)
  },
  identity:function(arg){
    return arg
  },
  toPath: function(value){
    if(typeof value == 'string'){
      var result = value.split(/\.|\[|\]\.|\]\[|\]/)
      if(result.at(-1) == ''){
        result.pop()
      }
      if(result.at(0) == ''){
        result.shift()
      }
    }
    return result
  },
  get:function(obj, path, defaultValue){
    path = this.toPath(path)
    for(var key of path){
      if(obj != undefined){
        obj = obj[key]
      }else{
        return defaultValue
      }
    }
    return obj ?? defaultValue
  },
  has:function(object, path){
    
  },
  set:function(){
    
  },
  topath:function(){

  },
  differenceBy:function(array, values, iteratee = this.identity){
    if(!Array.isArray(iteratee)){
      let iteratee = this.iteratee(iteratee)
      let newValues = values.map(it => iteratee(it))
      return array.filter(item => {
        let newItem = iteratee(item)
        return !newValues.includes(newItem)
      })
    }else{
      return this.difference(array,values)
    }
  },
  differenceWith:function(array, values,comparator){
    return array.filter(a => {
      for (let b of values) {
        if (comparator(a, b)) {
          return false;
        }
      }
      return true;
    });
  },
  uniq:function(){

  },
  uniqBy:function(){

  },
  uniqWith:function(array, comparator){
    
  },
  cloneDeep:function(value){
    if(typeof obj == 'object'){

    }
  },
  parseJSON:function(){

  },
  stringifyJSON:function(){

  },
  isPlainObject:function(value){

  },
  sortedIndex:function(array, value){

  },
  sortedUniq:function(array){
    var result = [array[0]]

  },
  sortedUniqBy:function(array, iteratee){

  },
  shuffle:function(collection){

  },
  once:function(once){

  },
  negata:function(){

  },
  ary:function(){

  },
  unary:function(){

  },
  flip:function(){

  },
  spread:function(){

  },
  delay:function(){

  },
  curry:function(){

  },
  assign:function(){
    
  },
  merge:function(){

  },
  mapKeys:function(){

  },
  mapValues:function(object, iteratee = identity){
    var result = {}
    for(var key in object){
      var val = object[key]
    }
  },
  memoizesimple:function(func){
    var cache = new Map()
    return function(arg){
      if(cache.has(arg)){
        return cache.get(arg)
      }else{
        var result = func(arg)
        cache.set(arg, result)
        return result
      }
    }
  },
  memoize:function(func, resolver = this.identity){
    var cache = new Map()
    return function(...args){
      var cacheKey = re
    }
  },
  sum:function(array){
    return array.reduce((sum, val) => sum + val)
  },
  sumBy:function(array, iterator = this.identity){
    var result = 0
    iterator = this.iteratee(iterator)
    for(var i = 0; i < array.length; i++){
      result += iterator(array[i])
    }
    return result
  },
  chunk: function (ary, size) {
    let result = []
    for(i = 0; i < ary.length; i += size){
      result.push(ary.slice(i, i + size))
    }
    return result
  },
  compact: function(ary){
    let result = []
    for(i = 0; i < ary.length; i++){
      if(ary[i] !== 0 && ary[i] !== null && ary[i] !== undefined && !isNaN(ary[i]) && ary[i] !== "" && ary[i] !== false){
        result.push(ary.at(i))
      }
    }
    return result
  },
  concat: function(...args){
    let result = []
    for(i = 0; i < args.length; i++){
      result = result.concat(args[i])
    }
    return result
  },
  difference: function(...args){
    let nums1 = args[0], arr = []
    for(let i = 0; i < nums1.length; i++){
      for(let j = 1; j < args.length; j++){
        if(args[j].indexOf(nums1[i]) !== -1){
          // arr.push(nums1[i])
          break
        }
        if(j == args.length - 1){
          arr.push(nums1[i])
        }
      }
    }
    return arr
  },
  fill: function(ary, val, start = 0, end = ary.length){
    for(i = start; i < end; i++){
      ary[i] = val
    }
    return ary
  },
  drop: function(ary, n){
    let result = []
    if(n > ary.length - 1){
      return []
    }else if(n <= ary.length){
      return ary.slice(n)
    }else{
      return ary.slice(1)
    }
  },
  dropRight: function(array, n = 1){
    let i = array.length - n
    return i >=0 ? array.slice(0,i) : []
  },
  dropRightWhile: function(array, predicate = this.identity){
    func = _.iteratee(predicate)
    const reversedArray = array.slice().reverse();
    let dropCount = 0;
    for (let i = 0; i < reversedArray.length; i++) {
      if (!func(reversedArray[i], i, reversedArray)) {
      // 如果遇到不满足条件的元素，则返回剩余的部分
        return array.slice(0, array.length - dropCount);
      }
      dropCount++;
    }
    return []; // 如果数组全部满足条件，则返回空数组
  },
  dropWhile: function(array, predicate = this.identity){
    let c = 0
    func = this.iteratee(predicate)
    while(c < array.length && func(array[c])){
      c++
    }
    return array.slice(c)
  },
  findIndex: function(array, predicate = this.identity, fromIndex = 0){
    const length = array == null ? 0 : array.length
    if(!length){return -1}
    fromIndex = fromIndex < 0 ? Math.max(length + fromIndex, 0) : fromIndex
    func = this.iteratee(predicate)
    for(let i = fromIndex; i < length; i++){
      if(func(array[i], i, array)){
        return i
      }
    }
    return -1
  },
  findLastIndex: function(ary, test, fromIndex = ary.length - 1){
    for(i = fromIndex; i >= 0; i--){
      if(typeof(test) == 'function'){
        if(test(ary[i]) == true){
          return i
        }
      }
      if(typeof(test) == 'object'){
        if(Array.isArray(test)){
          if(test[0] in ary[i] && test[1] == ary[i][test[0]]){
            return i
          }
        }else{
            let c = true
            for(let item in test){
              if(ary[i][item] !== test[item]){
                c = false
              }
            }
            if(c){
              return i
            }
        }
      }
      if(typeof(test) == 'string'){
        if(test in ary[i] && ary[i][test]){
          return i
        }
      }
    }
    return -1
  },
  flatten: function(ary){
    return ary.flat()
  },
  flattenDeep: function(ary){
    for(i = 0; i < ary.length; i++){
      if(Array.isArray(ary[i])){
        ary = ary.flat()
      }
    }
    return ary
  },
  flattenDepth: function(ary, n){
    for(i = 0; i < n; i++){
      ary = ary.flat()
    }
    return ary
  },
  fromPairs: function(ary){
    let map = {}
    for(let i = 0; i < ary.length; i++){
      if(!(ary[i][0] in map)){
        map[ary[i][0]] = ary[i][1]
      }
    }
    return map
  },
  toPairs: function(obj){
    return Object.entries(obj)
  },
  head: function(ary){
    if(ary){
      return ary[0]
    }else{
      return undefined
    }
  },
  indexOf: function(ary, val, idx = 0){
    for(let i = 0; i < ary.length; i++){
      if(idx < 0 || idx > ary.length - 1){
        if(ary[i] == val){
          return i
        }
      }
      if(ary[i + idx] == val){
        return i + idx
      }
    }
  },
  lastIndexOf: function(ary, val, idx = ary.length - 1){
    for(let i = idx; i >= 0; i--){
      if(ary[i] == val){
        return i
      }
    }
    return -1
  },
  initial: function(ary){
    return ary.slice(0, ary.length - 1)
  },
  join: function(ary, sep){
    if(ary.length == 1){
      return ary[0] + ''
    }else{
      let result = ary[0] + ''
      for(let i = 1; i < ary.length; i++){
        result = result + sep + ary[i]
      }
      return result
    }
  },
  last: function(ary){
    return ary[ary.length - 1]
  },
  pull: function(ary, ...args){
    for(i = 0; i < args.length; i++){
      while(ary.indexOf(args[i]) !== -1){
        ary.splice(ary.indexOf(args[i]), 1)
      }
    }
    return ary
  },
  reverse: function(ary){
    let result = []
    for(i = ary.length - 1; i >= 0; i--){
      result.push(ary[i])
    }
    return result
  },
  every: function(collection, predicate){
    if(typeof(predicate) !== 'function'){
      if(Array.isArray(predicate)){
        let key = predicate[0]
        let val = predicate[1]
        predicate = element => element[key] == val
      }
      if(typeof(predicate) == 'object'){
        let predicate2 = predicate
        predicate = element => this.isEqual(element, predicate2)
      }
      if(typeof(predicate) == 'string'){
        let predicate3 = predicate
        predicate = element => element[predicate3]
      }
    }
    for(let item of collection){
      if(!(predicate(item))){
        return false
      }
    }
    return true
  },
  some: function(collection, predicate){
    if(typeof(predicate) !== 'function'){
      if(Array.isArray(predicate)){
        let key = predicate[0]
        let val = predicate[1]
        predicate = element => element[key] == val
      }
      if(typeof(predicate) == 'object'){
        let predicate2 = predicate
        predicate = element => this.isEqual(element, predicate2)
      }
      if(typeof(predicate) == 'string'){
        let predicate3 = predicate
        predicate = element => element[predicate3]
      }
    }
    for(let item of collection){
      if(predicate(item)){
        return true
      }
    }
    return false
  },
  isEqual: function(a, b){
    if(typeof(a) !== 'object' || typeof(b) !== 'object'){
      return a === b
    }
    if(a === b){
      return true
    }
    let arr1 = Object.keys(a)
    let arr2 = Object.keys(b)
    if(arr1.length !== arr2.length){
      return false
    }
    for(let item in a){
      let res = this.isEqual(a[item], b[item])
      if(!res){
        return false
      }
    }
    return true
  },
  countBy: function(collection, predicate){
    let map = {}
    if(typeof(predicate) == 'function'){
      let func1 = predicate
      predicate = e => func1(e)
    }else{
      let func2 = predicate
      predicate = e => e[func2]
    }
    for(let item of collection){
      if(!(predicate(item) in map)){
        map[predicate(item)] = 1
      }else{
        map[predicate(item)]++
      }
    }
    return map
  },
  groupBy: function(collection, predicate){
    let map = {}
    if(typeof(predicate) == 'function'){
      let func1 = predicate
      predicate = e => func1(e)
    }else{
      predicate = e => e.length
    }
    for(let item of collection){
      if(!(predicate(item) in map)){
        map[predicate(item)] = [item]
      }else{
        map[predicate(item)].push(item)
      }
    }
    return map
  },
  keyBy: function(collection, predicate){
    let map = {}
    if(typeof(predicate) == 'function'){
      let func1 = predicate
      predicate = e => func1(e)
    }else{
      let func2 = predicate
      predicate = e => e[func2]
    }
    for(let item of collection){
      if(!(predicate(item) in map)){
        map[predicate(item)] = item
      }
    }
    return map
  },
  forEach: function(collection, iteratee){
    for(let key in collection){
      iteratee(collection[key], key,collection)
    }
    return collection
  },
  map: function(collection, iteratee){
    let arr = []
    let func = iteratee
    if(typeof iteratee == 'string'){
      func = function(it){return it[iteratee]}
    }else if(typeof(iteratee) == 'function'){
      func = function(it){return it[iteratee]}
    }else if(Array.isArray(iteratee)){
      func = function(it){it[iteratee[0]] === iteratee[1]}
    }else if(typeof iteratee == 'object'){
      func = function(it){
        for(var key in iteratee){
          if(it[key] !== iteratee[key]){
            return false
          }
        }
        return true
      }
    }
    for(var i = 0; i < collection.length; i++){
      arr.push(func(collection[i],i,collection))
    }
    return arr
  },
  filter: function(array, predicate = this.identity){
    var func = this.iteratee(predicate)
    var result = []
    for(var i = 0; i < array.length; i++){
      if(func(array[i], i, array)){
        result.push(array[i])
      } 
    }
    return result
  },
  reduce: function(collection, iteratee, accumulator = 0){
    for(let item in collection){
      accumulator = iteratee(accumulator, collection[item], item)
    }
    return accumulator
  },
  reduceRight: function(collection, iteratee, accumulator = 0){
    if(Array.isArray(collection)){
      for(let i = collection.length - 1; i >= 0; i--){
        accumulator = iteratee(accumulator, collection[i], i)
      }
    }else{
      var arr = Object.keys(collection)
      for(let i = arr.length - 1; i >= 0; i--){
        accumulator = iteratee(accumulator, collection[arr[i]], arr[i])
      }
    }
    return accumulator
  },
  size: function(collection){
    if(typeof(collection) == "string" || Array.isArray(collection)){
      return collection.length
    }else{
      let count = 0
      for(var item in collection){
        count++
      }
      return count
    }
  },
  sortBy: function(collection, iteratee = this.identity){
    let func = this.iteratee(iteratee)

  },
  intersection: function(...arrays){
    if(!arrays.every(Array.isArray)){
      return []
    }
    const result = [], firstArray = arrays[0]
    for(let i = 0; i < firstArray.length; i++){
      const value = firstArray[i]
      if(result.includes(value)){
        continue
      }
      if(arrays.every(array => array.includes(value))){
        result.push(value)
      }
    }
    return result
  },
  intersectionBy: function(...arrays){
    let iteratee = this.iteratee(arrays.pop())
    let result = arrays[0]
    for(let i = 1; i < arrays.length; i++){
      let set = new Set(arrays[i].map(it => iteratee(it)))
      result = result.filter(it => set.has(iteratee(it)))
    }
    return result
  },
  intersectionWith: function(...arrays){
    let comparator = arrays.pop()
    let result = []
    outer:for(let item1 of arrays[0]){
      for(let i = 1; i < arrays.length; i++){
        let array = arrays[i]
        for(let item2 of array){
          if(comparator(item1,item2)){
            result.push(item1)
            continue outer
          }
        }
      }
    }
    return result
  },
  nth: function(array, n = 0){
    let idx = n < 0 ? array.length + n : n
    return array[idx]
  },
}

