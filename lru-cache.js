/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  // if entry not found return -1
  if (!this.cache.has(key)) return -1;
  
  // reinsert found entry
  const value = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, value);
  
  // return value
  return this.cache.get(key);
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  // if entry is already there, delete
  if (this.cache.has(key)) this.cache.delete(key);
  // and reinsert
  this.cache.set(key, value);
  // kick out lru if needed
  if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value)
  }
};