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
      if(ary[i] !== 0 && ary[i] !== null && ary[i] !== undefined && isNaN(ary[i]) && ary[i] !== "" && ary[i] !== false){
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
    for(i = 0; i < n; i++){
      ary.shift()
    }
    return ary
  },
  findIndex: function(ary, test){
    for(i = 0; i < ary.length; i++){
      if(typeof(test) == 'function'){
        if(test(ary[i]) == true){
          return i
        }
      }
      if(Array.isArray(ary)){
        if(test[0] in ary && test[1] == ary[test[0]]){
          return i
        }
      }
      if(typeof(test) == 'string'){
        if(test in ary[i]){
          return i
        }
      }
    }
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
  },
  fromPairs: function(ary){
    let map = new Map()
    for(let i = 0; i < ary.length; i++){
           map.set(ary[i][0], ary[i][1])
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
  indexOf: function(ary, val, idx){
    for(i = idx; i < ary.length; i++){
      if(ary[i] = val){
        return i
      }
    }
    return -1
  },
  lastIndexOf: function(ary, val, idx){
    for(i = ary.length - 1 - idx; i >= 0; i--){
      if(ary[i] = val){
        return i
      }
    }
  },
  initial: function(ary){
    ary.slice(0, ary.length - 1)
  },
  join: function(ary, sep){
    if(ary.length == 1){
      return ary[0] + ''
    }else{
      let result = ary[0] + ''
      for(i = 1; i < ary.length; i++){
        result = result + sep + ary[i]
      }
    }
    return result
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
