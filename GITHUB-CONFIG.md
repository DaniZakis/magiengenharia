# GitHub Push Configuration

## Remotes

### Client (production - Netlify deploys from here)
```bash
git remote set-url client https://<TOKEN>@github.com/DaniZakis/magiengenharia.git
```

### Origin (development)
```bash
git remote set-url origin https://<TOKEN>@github.com/Regboy744/maggi-engenharia.git
```

## Push Commands

```bash
# Push to client (production)
git push client main

# Push to origin (development)
git push origin main
```

## Workflow

1. Make changes
2. Build to verify: `npm run build`
3. Stage and commit: `git add . && git commit -m "message"`
4. Push to client: `git push client main`

## Token

Replace `<TOKEN>` with a valid GitHub Personal Access Token.
> Remember to rotate/revoke tokens periodically for security.
