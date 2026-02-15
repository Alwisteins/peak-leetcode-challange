type TCached = {
  value: number;
  expired: NodeJS.Timeout;
};
class TimeLimitedCache {
  private cache = new Map<number, TCached>();

  constructor() {}

  set(key: number, value: number, duration: number) {
    const isExists = this.cache.has(key);

    if (isExists) {
      clearTimeout(this.cache.get(key)?.expired);
    }

    const expired = setTimeout(() => this.cache.delete(key), duration);
    this.cache.set(key, { value, expired });

    return !!isExists;
  }

  get(key: number) {
    const cached = this.cache.get(key);
    if (!cached) return -1;
    return cached.value;
  }

  count() {
    return this.cache.size;
  }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
