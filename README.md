# randki40.pl

Portal randkowy 40+ — MVP Faza 1 (statyczny, Stripe + Brevo ESP).

## Dev

```bash
pnpm install
pnpm dev
```

## Build / Docker

```bash
pnpm build
docker build -t randki40 .
```

Port kontenera: **3000**. Coolify app: `landing-site3` → `WidzewKrul/randki40.pl`.

## Env (Coolify — nie commituj `.env`)

| Zmienna | Opis |
|---------|------|
| `NEXT_PUBLIC_SITE_URL` | `https://randki40.pl` |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | Umami site ID |
| `NEXT_PUBLIC_ESP_FORM_URL` | Brevo form action URL |
| `NEXT_PUBLIC_STRIPE_PREMIUM_URL` | Stripe Payment Link Premium |
| `NEXT_PUBLIC_STRIPE_VIP_URL` | Stripe Payment Link VIP |

## Git init (pierwszy push)

```bash
git init
git add .
git commit -m "init: portal 40+ MVP"
git branch -M main
git remote add origin https://github.com/WidzewKrul/randki40.pl.git
git push -u origin main
```

Runbook: [`../../../docs/DEPLOY_COOLIFY.md`](../../../docs/DEPLOY_COOLIFY.md)
