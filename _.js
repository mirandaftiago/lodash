//#1-#2
const _ = {

  //#3-#6
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  //#7-#10
  inRange(number, start, end) {
    if(end === undefined) {
      end = start;
      start = 0;
    }
    if(start > end) {
      let tempEnd = end;
      end = start;
      start = tempEnd;
    }
    const isInRange = start <= number && number < end;
    return isInRange;
  },

  //#11-#14
  words(string) {
    let words = string.split(' ');
    return words;
  },

  //#15-#18
  pad(string, length) {
    if(length <= string.length) {
      return string;
    }
    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString;
  },

  //#19-#22
  has(object, key) {
    const hasValue = object[key];
    if(hasValue !== undefined) {
      return true;
    } return false;
  },

  //#23-#26
  invert(object) {
    let invertedObject = {};
    for(let key in object){
      const originalValue = object[key];
      invertedObject = {originalValue : key}
    }
    return invertedObject;
  },

  //#27-#30
  findKey(object, predicate) {
    for (let key in object){
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if(predicateReturnValue){
        return key;
      };
    };
    undefined
    return undefined;
  },

  //#31-#34
  drop(arr, number){
    if(number === undefined) {
     number = 1;
    }
    let droppedArray = arr.slice(number, arr.length);
    return droppedArray;
  },

  //#35-#38
  dropWhile(arr, predicate){
    const cb = (element, index) => {
      return !predicate(element, index, arr);
    }
    let dropNumber = arr.findIndex(cb);
    let droppedArray = this.drop(arr, dropNumber);
    return droppedArray;
  },
  
  //#39-#42
  chunk(arr, size = 1) {
    let arrChunks = [];
    for (let i=0; i < arr.length; i += size){
      let arrChunk = arr.slice(i, i + size);
      arrChunks.push(arrChunk);
    }
    return arrChunks;
  }
};

// Do not write or modify code below this line.
module.exports = _;
