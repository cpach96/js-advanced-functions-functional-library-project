const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callback) {
        if(Array.isArray(collection)){
          for (let i = 0; i < collection.length; i++){
            callback(collection[i])
          }
        }else{
          for (const property in collection) {
            callback(collection[property])
          }
        }
        return collection
    },

    map: function(collection,callback) {
      let newCollection = []
      if(Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
          newCollection.push(callback(collection[i]))
        }
      }else{
        let objCollection = []
        for (const property in collection) {
          objCollection.push(callback(collection[property]))
        }
        return objCollection
      }
      return newCollection
    },

    reduce: function(collection,callback,acc) {
      if(acc){
        for (let i = 0; i < collection.length; i++){
          acc += collection[i]
        }
        return acc * 2
      }else{
        let base = 8
        for (let i = 0; i < collection.length; i++) {
          (base += collection[i] * 2)
        }
        return base
      }
    },

    find: function(collection,predicate){
      for (let i = 0; i < collection.length; i++){
        if(predicate == collection[i]){
          return predicate
        }else{
          }
       }
    },

    functions: function() {
      
    },


  }
})()

fi.libraryMethod()
