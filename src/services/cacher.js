

export class Cacher {

  cache = {};

  isValueCached(key) {
    return this.getCachedValue(key);
  }

  cacheValue(key, value) {
    this.cache[key] = value;
  }

  getCachedValue(key) {
    return this.cache[key]
  }

}