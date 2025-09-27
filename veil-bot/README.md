# Veil Bot

Premium-only Discord bot with whitelist enforcement, moderation, and utility.

## Setup

1. Copy `.env.example` to `.env` and fill values.
2. Run migrations in `migrations/`.
3. Start services:

```bash
docker-compose up --build
```

## Commands
- Moderation: kick, ban, unban, warn, warnings
- Utility: prefix, help, userinfo, serverinfo, uptime, setmodlog

All commands use prefix-based system (default `;`).
