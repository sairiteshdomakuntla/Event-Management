import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 300, checkperiod: 320 }); 

export const cacheMiddleware = (duration = 300) => {
  return async (req, res, next) => {
    if (req.method !== 'GET') {
      return next();
    }

    const key = `cache:${req.originalUrl}`;

  
    const cachedData = cache.get(key);
    if (cachedData) {
      return res.json(cachedData);
    }

    const originalJson = res.json;
    res.json = function(data) {
      cache.set(key, data, duration); 
      originalJson.call(this, data);
    };

    next();
  };
};

export const clearCache = async (pattern) => {
 
  const keys = cache.keys();
  keys.forEach((key) => {
    if (key.includes(pattern)) {
      cache.del(key); 
    }
  });
};
