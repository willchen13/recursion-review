// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // check, 9, null, true, false
  if (typeof obj === 'number') {
    return obj.toString();
  }

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'boolean') {
    return obj.toString();
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    var result='[';
    for (var i=0; i<obj.length; i++) {
      if (i!==obj.length-1) {
        result += stringifyJSON(obj[i]) + ',';
      } else {
        result += stringifyJSON(obj[i]);
      }
    }
    return result + ']';
  }

  if (typeof obj === 'object') {
    var result = '{';
    var count = 0;
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
      } else {
        var stringKey = stringifyJSON(key);
        var stringValue = stringifyJSON(obj[key]);
        count++;
        if (count !== Object.keys(obj).length) {
          result += stringKey + ':' + stringValue + ',';
        } else {
          result += stringKey + ':' + stringValue;
        }
      }
    }
    return result + '}';
  }

};
