# Veil — Premium Whitelist Discord Bot

This is a production-ready starter for Veil.

## Quickstart

1. Copy `.env.example` -> `.env` and fill values.
2. Start Postgres & Redis:
   ```
   docker-compose up -d
   ```
3. Install deps:
   ```
   npm ci
   ```
4. Run migrations:
   ```
   npm run migrate
   ```
5. Start bot (dev):
   ```
   npm run dev
   ```

Staff commands use `;` prefix (staff-only). Guild commands use per-guild prefix (default `;`).

