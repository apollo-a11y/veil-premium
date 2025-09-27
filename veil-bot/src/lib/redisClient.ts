import Redis from 'ioredis';
import dotenv from 'dotenv';
dotenv.config();

let redis: Redis.Redis;

export async function initRedis() {
  redis = new Redis(process.env.REDIS_URL);
  await redis.ping();
  console.log('Redis connected');
}

export function getRedis() {
  if (!redis) throw new Error('Redis not initialized');
  return redis;
}
