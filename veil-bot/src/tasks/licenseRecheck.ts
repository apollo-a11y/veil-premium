import { fetchFromCacheOrDb } from '../lib/whitelistService';
export function scheduleLicenseRecheck(client: any, intervalMs = 6*60*60*1000) {
  async function run() {
    for (const g of client.guilds.cache.values()) {
      const license = await fetchFromCacheOrDb(g.id.toString());
      if (!license || license.status !== 'active' || (license.expires_at && new Date(license.expires_at) < new Date())) {
        try { const owner = await g.fetchOwner(); await owner.send('⛔ Veil subscription invalid — bot leaving.'); } catch(_) {}
        await g.leave();
      }
    }
  }
  run().catch(console.error);
  setInterval(() => run().catch(console.error), intervalMs);
}
