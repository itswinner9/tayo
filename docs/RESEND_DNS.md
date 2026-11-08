# Resend DNS for tayoservices.ca

Status in Resend: **pending** until these records exist and Resend can verify them.

Right now the domain returns **NXDOMAIN** (no public DNS). Buy/activate `tayoservices.ca` at your registrar, then add records in that DNS panel (Cloudflare, GoDaddy, Namecheap, Google Domains, etc.).

## Records to add (from Resend)

| Type | Name / Host | Value | Priority | Notes |
| --- | --- | --- | --- | --- |
| **TXT** (DKIM) | `resend._domainkey` | `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDbGOb6nFxAzQW42wDbI0EpqUHnT2rMd5VNlCg4OBlpkPlgbg/7Dv5g+8gcPHtfilzlusQeeHVuo2cb3nOS5d2CebnePE+JeVLAeeybZaxUOzWnu6zMG5c0LnqVfFSNuVr9anuVVc83F7zX4T+Usiqv8jaTvSEyWAiu7tv4Rc6l7wIDAQAB` | — | Some panels want the full hostname `resend._domainkey.tayoservices.ca` |
| **CNAME** | `rsend` | `rsend.forge.rmta.net` | — | Resend SPF / send path |
| **CNAME** | `send` | `send.forge.rmta.net` | — | Resend SPF / send path |
| **MX** (optional) | `@` | `inbound-smtp.us-east-1.amazonaws.com` | `10` | Only if you want **inbound** mail on `@tayoservices.ca`. Skip if Gmail/Google Workspace already owns MX. |

TTL: Auto / 3600 is fine.

### Name field tips

- If the panel auto-appends `.tayoservices.ca`, enter only `resend._domainkey`, `rsend`, `send`, `@`.
- If it asks for a full hostname, use `resend._domainkey.tayoservices.ca`, etc.

## After DNS propagates

1. In Resend → Domains → `tayoservices.ca` → **Verify** / wait until status is **Verified**.
2. Set env (local + host):

```bash
RESEND_API_KEY=re_xxxxxxxx
RESEND_FROM=Tayo Website <leads@tayoservices.ca>
LEADS_TO_EMAIL=tayo247services@gmail.com
```

3. Submit a test quote on `/contact`. You should get mail at Gmail, From: `leads@tayoservices.ca`.

## MX warning

Quote forms do **not** need the Receiving MX record. They use Resend’s send API and deliver to `LEADS_TO_EMAIL` (your Gmail).

Only add the MX if you also want people to email `you@tayoservices.ca` through Resend inbound. If you later use Google Workspace on this domain, use Google’s MX instead and keep Resend’s DKIM + `send` / `rsend` CNAMEs for outbound.
