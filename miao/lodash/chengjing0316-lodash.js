var chengjing0316 = {
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
  findIndex: function(ary, test, fromIndex = 0){
    for(i = fromIndex; i < ary.length; i++){
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
    let result = []
    
  },
  head: function(ary){
    if(ary){
      return ary[0]
    }else{
      return undefined
    }
  },
  indexOf: function(ary, val, idx = 0){
    return ary.lastIndexOf(val, ary.length - 1 - idx)
  },
  lastIndexOf: function(ary, val, idx){
    return ary.indexOf(val, ary.length - 1 - idx)
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
  every: function(collect, pred){

  },
  some: function(){

  }
}
