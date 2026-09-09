const zoneId = process.env.CLOUDFLARE_ZONE_ID;
const token = process.env.CLOUDFLARE_CACHE_PURGE_TOKEN;

if (!zoneId || !token) {
  throw new Error(
    'Missing CLOUDFLARE_ZONE_ID or CLOUDFLARE_CACHE_PURGE_TOKEN in the Cloudflare Workers Builds environment.'
  );
}

const response = await fetch(
  `https://api.cloudflare.com/client/v4/zones/${zoneId}/purge_cache`,
  {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ hosts: ['eltoreroduluth.com'] })
  }
);

const body = await response.text();

if (!response.ok) {
  throw new Error(`Cloudflare cache purge failed (${response.status}): ${body}`);
}

let result;
try {
  result = JSON.parse(body);
} catch {
  throw new Error(`Cloudflare cache purge returned invalid JSON: ${body}`);
}

if (result.success !== true) {
  throw new Error(`Cloudflare cache purge was not successful: ${body}`);
}

console.log('Cloudflare production cache purged for eltoreroduluth.com.');
