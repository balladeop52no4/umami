import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,   // 改成這樣，更直接
  },
  migrations: {
    seed: 'node scripts/setup-db.js',   // Umami 常見的 seed 腳本路徑
    // 如果上面執行後還是找不到腳本，再改試下面這行：
    // seed: 'tsx prisma/seed.ts',
  },
});
