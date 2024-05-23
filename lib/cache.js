// lib/cache.js
import LRU from "lru-cache";

const cache = new LRU({
  max: 500, // Maximum number of items in cache
  ttl: 1000 * 60 * 5, // Time to live in milliseconds (e.g., 5 minutes)
});

export default cache;
