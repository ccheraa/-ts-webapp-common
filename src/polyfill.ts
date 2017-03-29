type findIndexCallback<T> = (value: T, index: number, obj: Array<T>) => boolean;
interface Array<T> {
  findIndex: (callback: findIndexCallback<T>, thisArg?: any) => number;
}
Array.prototype.findIndex = Array.prototype.findIndex || function(callback) {
  if (this === null) {
    throw new TypeError('Array.prototype.findIndex called on null or undefined');
  } else if (typeof callback !== 'function') {
    throw new TypeError('callback must be a function');
  }
  var list = Object(this);
  // Makes sures is always has an positive integer as length.
  var length = list.length >>> 0;
  var thisArg = arguments[1];
  for (var i = 0; i < length; i++) {
    if ( callback.call(thisArg, list[i], i, list) ) {
      return i;
    }
  }
  return -1;
};

interface Object {
  assign: (...sources: any[]) => any;
}
Object.prototype.assign = function(...sources): any {
  for (var
    hOP = Object.prototype.hasOwnProperty,
    copy = function (key) {
      if (!hOP.call(this, key)) {
        Object.defineProperty(
          this,
          key,
          Object.getOwnPropertyDescriptor(this, key)
        );
      }
    },
    i = sources.length;
    i-- > 0;
    Object.keys(sources[i]).forEach(copy, sources[i])
  ){}
  return this;
}