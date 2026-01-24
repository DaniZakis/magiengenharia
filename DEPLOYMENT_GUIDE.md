# Guia Completo de Deploy - Maggi Engenharia Website

## 📋 Índice
1. [Pré-requisitos](#pré-requisitos)
2. [Opções de Deployment](#opções-de-deployment)
3. [Deploy no Netlify (Recomendado)](#deploy-no-netlify-recomendado)
4. [Deploy no Vercel](#deploy-no-vercel)
5. [Deploy em Servidor Próprio](#deploy-em-servidor-próprio)
6. [Configuração de Domínio](#configuração-de-domínio)
7. [Monitoramento e Manutenção](#monitoramento-e-manutenção)

---

## 🔧 Pré-requisitos

Antes de fazer o deploy, certifique-se de ter:

- ✅ Node.js v16+ instalado (`node -v`)
- ✅ NPM v7+ instalado (`npm -v`)
- ✅ Conta no Git (GitHub, GitLab ou Bitbucket)
- ✅ Código enviado para um repositório Git
- ✅ Conta em uma plataforma de hosting (Netlify, Vercel, etc)

### Verificar Instalação

```bash
node --version      # v18.x.x ou superior
npm --version       # v9.x.x ou superior
git --version       # git version 2.x.x ou superior
```

---

## 🚀 Opções de Deployment

| Plataforma | Custo | Facilidade | Escalabilidade | Recomendado? |
|-----------|-------|-----------|----------------|------------|
| **Netlify** | Gratuito + Pago | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ SIM |
| **Vercel** | Gratuito + Pago | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ SIM |
| **GitHub Pages** | Gratuito | ⭐⭐⭐ | ⭐⭐ | Básico |
| **Servidor Próprio** | Variável | ⭐⭐ | ⭐⭐⭐⭐⭐ | Avançado |

---

## 💛 Deploy no Netlify (Recomendado)

### Passo 1: Preparar o Repositório Git

```bash
# Navegue para o diretório do projeto
cd /home/regboy/coding/maggiEngenharia/engineering-site

# Verifique o status do git
git status

# Se não estiver commitado, commite agora
git add .
git commit -m "Prepare for deployment"
```

### Passo 2: Criar Conta no Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Clique em **"Sign Up"**
3. Escolha **"Sign up with GitHub"** (recomendado)
4. Autorize o Netlify a acessar seus repositórios

### Passo 3: Conectar Repositório

1. No dashboard Netlify, clique em **"Add new site"**
2. Escolha **"Import an existing project"**
3. Selecione o provedor Git (GitHub)
4. Autorize e selecione o repositório `maggiEngenharia` ou `engineering-site`

### Passo 4: Configurar Build

Na tela de configuração:

```
Branch to deploy: main
Build command: npm run build
Publish directory: dist
```

**Variáveis de Ambiente (se necessário):**
```
Netlify não requer variáveis de ambiente para este projeto
```

### Passo 5: Deploy

1. Clique em **"Deploy site"**
2. Aguarde a construção (geralmente 2-3 minutos)
3. Você receberá uma URL automática como: `https://your-site-name.netlify.app`

### Verificar Deploy

```bash
# Confirme que o site está online
# Visite a URL fornecida pelo Netlify
```

---

## 🔳 Deploy no Vercel

### Passo 1: Criar Conta Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Sign Up"**
3. Escolha **"Continue with GitHub"**

### Passo 2: Importar Projeto

1. No dashboard Vercel, clique em **"Add New"**
2. Escolha **"Project"**
3. Busque e selecione o repositório

### Passo 3: Configurar Deployment

```
Framework Preset: Astro
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### Passo 4: Completar Deploy

1. Clique em **"Deploy"**
2. Aguarde a construção
3. Acesse sua URL: `https://your-project.vercel.app`

---

## 🖥️ Deploy em Servidor Próprio

### Opção A: VPS (Ubuntu/Debian)

#### Passo 1: Conectar ao Servidor

```bash
# SSH no seu servidor
ssh user@seu-servidor.com

# Atualizar pacotes
sudo apt update && sudo apt upgrade -y

# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verificar instalação
node --version
npm --version
```

#### Passo 2: Clonar Repositório

```bash
# Navegar para diretório de aplicações
cd /var/www

# Clonar repositório
git clone https://github.com/seu-usuario/engineering-site.git
cd engineering-site

# Instalar dependências
npm install

# Build do projeto
npm run build
```

#### Passo 3: Configurar Nginx

```bash
# Instalar Nginx
sudo apt install -y nginx

# Criar arquivo de configuração
sudo nano /etc/nginx/sites-available/engineering-site
```

Copie o seguinte conteúdo:

```nginx
server {
    listen 80;
    server_name seu-dominio.com.br www.seu-dominio.com.br;

    root /var/www/engineering-site/dist;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;

    # Try files - importante para SPA
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Passo 4: Ativar Site

```bash
# Criar symlink
sudo ln -s /etc/nginx/sites-available/engineering-site /etc/nginx/sites-enabled/

# Testar configuração
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx

# Ativar na inicialização
sudo systemctl enable nginx
```

#### Passo 5: SSL com Let's Encrypt

```bash
# Instalar Certbot
sudo apt install -y certbot python3-certbot-nginx

# Gerar certificado
sudo certbot certonly --nginx -d seu-dominio.com.br -d www.seu-dominio.com.br

# Configurar renovação automática
sudo systemctl enable certbot.timer
```

Atualizar Nginx para HTTPS:

```nginx
server {
    listen 443 ssl http2;
    server_name seu-dominio.com.br www.seu-dominio.com.br;

    ssl_certificate /etc/letsencrypt/live/seu-dominio.com.br/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/seu-dominio.com.br/privkey.pem;

    # ... resto da configuração ...
}

# Redirecionar HTTP para HTTPS
server {
    listen 80;
    server_name seu-dominio.com.br www.seu-dominio.com.br;
    return 301 https://$server_name$request_uri;
}
```

#### Passo 6: Atualizar Automaticamente

```bash
# Criar script de deploy
cat > /var/www/engineering-site/deploy.sh << 'EOF'
#!/bin/bash
cd /var/www/engineering-site
git pull origin main
npm install
npm run build
EOF

chmod +x /var/www/engineering-site/deploy.sh

# Configurar webhook no GitHub para rodar este script
```

---

## 🌐 Configuração de Domínio

### Registrar Domínio

1. Escolha um registrador:
   - Registro.br (Brasil - recomendado para .com.br)
   - GoDaddy
   - Namecheap
   - HostGator

2. Registre: `maggiengenharia.com.br` ou `maggiengenharia.com`

### Apontar Domínio para Netlify

**No Netlify:**
1. Site Settings → Domain management
2. Add custom domain
3. Copie os nameservers fornecidos

**No Registrador:**
1. Acesse o painel de DNS
2. Procure "Nameservers" ou "NS Records"
3. Troque pelos nameservers do Netlify

### Apontar Domínio para VPS

**No seu registrador, configure:**

```
A Record: @ ou seu-dominio.com → seu-ip-do-servidor
A Record: www → seu-ip-do-servidor
CNAME: www → seu-dominio.com (alternativa)
```

**Propagar DNS (até 48 horas):**
```bash
# Verificar propagação
nslookup seu-dominio.com
dig seu-dominio.com
```

---

## 📊 Monitoramento e Manutenção

### Verificar Status do Site

```bash
# Ping no site
curl -I https://seu-dominio.com.br

# Verificar tempo de resposta
curl -w 'Tempo total: %{time_total}s\n' -o /dev/null https://seu-dominio.com.br
```

### Logs do Netlify

1. Acesse o painel Netlify
2. Vá para **Deploys**
3. Clique no deploy para ver logs
4. Procure por erros

### Logs do Servidor VPS

```bash
# Logs do Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Logs do sistema
sudo journalctl -u nginx -f
```

### Backups

#### Netlify
- Automático pelo Git
- Reverta para qualquer versão antiga

#### VPS
```bash
# Backup manual
tar -czf engineering-site-backup-$(date +%Y%m%d).tar.gz /var/www/engineering-site

# Backup automático (cron)
0 2 * * * tar -czf /backups/engineering-site-$(date +\%Y\%m\%d).tar.gz /var/www/engineering-site
```

### Atualizações

```bash
# Verificar atualizações de dependências
npm outdated

# Atualizar dependências
npm update

# Atualizar para versão maior (com cuidado)
npm install astro@latest @astrojs/vue@latest
```

---

## 🔐 Segurança

### Proteção CSRF e XSS

O projeto já tem proteção básica. Para melhorar:

1. **Adicionar Headers de Segurança**

No Netlify, crie `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

2. **Habilitar HTTPS**
   - ✅ Netlify: Automático com Let's Encrypt
   - ✅ VPS: Configure com Let's Encrypt (veja acima)

3. **Monitorar Erros**
   - Configure Sentry.io para rastreamento de erros
   - Configure Google Analytics para monitorar tráfego

---

## 📞 Suporte Pós-Deploy

### Problemas Comuns

#### "Site não encontrado" ou erro 404

```bash
# Verificar build
npm run build

# Verificar diretório de saída
ls -la dist/

# Verificar se o index.html existe
ls dist/index.html
```

#### Site lento

1. **Otimizar imagens:**
   ```bash
   # Usar ferramentas como ImageOptim ou TinyPNG
   ```

2. **Ativar cache:**
   ```nginx
   # Já configurado no exemplo Nginx acima
   ```

3. **Usar CDN:**
   - Netlify: Automático
   - Vercel: Automático
   - VPS: Configure Cloudflare

#### Erro ao fazer build

1. Verificar Node.js version (deve ser 16+)
2. Deletar `node_modules` e `package-lock.json`:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

---

## ✅ Checklist de Deploy

- [ ] Repositório Git criado e código commitado
- [ ] Variáveis de ambiente definidas (se necessário)
- [ ] Build local funciona: `npm run build`
- [ ] Site visualizado localmente: `npm run preview`
- [ ] Domínio registrado
- [ ] Plataforma de hosting configurada
- [ ] Deploy realizado com sucesso
- [ ] Domínio apontando para o servidor
- [ ] HTTPS funcionando
- [ ] Site acessível e responsivo em dispositivos móveis
- [ ] Formulário de contato testado
- [ ] WhatsApp links testados
- [ ] Todas as páginas carregando corretamente
- [ ] Lighthouse score > 85
- [ ] Analytics configurado (opcional)

---

## 🎯 Próximos Passos Recomendados

1. **SEO**
   - Adicionar `sitemap.xml`
   - Adicionar `robots.txt`
   - Configurar Open Graph tags

2. **Analytics**
   - Integrar Google Analytics 4
   - Integrar Microsoft Clarity

3. **CMS**
   - Configurar Decap CMS totalmente
   - Adicionar coletas de blog
   - Treinar equipe no CMS

4. **Email Marketing**
   - Integrar Mailchimp ou SendGrid
   - Criar campanha de boas-vindas

5. **Performance**
   - Implementar lazy loading
   - Otimizar imagens automaticamente
   - Implementar PWA (Progressive Web App)

---

## 📚 Recursos Úteis

- **Astro Docs:** https://docs.astro.build
- **Netlify Docs:** https://docs.netlify.com
- **Vercel Docs:** https://vercel.com/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vue.js 3:** https://vuejs.org/guide/

---

## 💬 Suporte

Para dúvidas durante o deploy:
1. Verifique os logs
2. Consulte a documentação oficial
3. Procure por issues semelhantes no GitHub

**Data de Atualização:** 24 de Janeiro de 2025
**Versão:** 1.0
