# Onírica — Landing Page

Site estático de marketing do [Onírica — Espelho dos Sonhos](https://github.com/eumagnun/dreams-agent), publicado no GitHub Pages:

🔗 **[eumagnun.github.io/dreams-agent-lp](https://eumagnun.github.io/dreams-agent-lp/)**

Este repositório é intencionalmente separado do app principal (`dreams-agent`) — é só HTML/CSS/JS puro, sem build step, sem dependências, sem backend. O app autenticado de verdade (cadastro, chat, créditos) fica no Firebase Hosting, em [onirica-app.web.app](https://onirica-app.web.app).

## Estrutura
- `index.html` — página única (hero, como funciona, features, CTA, disclaimer).
- `style.css` — estilos, mesma estética mística (dark + dourado/rosa) do app principal.
- `script.js` — i18n próprio em JavaScript puro (pt-BR/en/es), independente do `react-i18next` usado no app. Detecta idioma do navegador, permite troca manual, persiste em `localStorage`.
- `assets/` — logo (`logo.webp`/`logo.png`, comprimida a partir de `ui/public/icon-512.png` do repo principal) e favicon.

## Editar localmente
Não precisa de build. Basta abrir `index.html` no navegador, ou subir um servidor estático simples:
```bash
python3 -m http.server 8123
```

## Deploy
Automático: todo push na branch `main` publica no GitHub Pages (configurado em **Settings → Pages**, fonte = branch `main`, pasta `/`). Não há workflow do GitHub Actions — é o modo "deploy from a branch" clássico do Pages.

## Atualizando a logo
Quando a logo do app principal (`ui/public/icon-512.png` no repo `dreams-agent`) mudar, regenere os assets aqui:
```bash
python3 -c "
from PIL import Image
img = Image.open('/caminho/para/dreams-agent/ui/public/icon-512.png').convert('RGBA')
img_resized = img.resize((480, 480), Image.LANCZOS)
img_resized.save('assets/logo.png', optimize=True)
img_resized.save('assets/logo.webp', 'WEBP', quality=85)
"
```
