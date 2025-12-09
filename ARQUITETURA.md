# ARQUITETURA - Gerador de Memes

## Estrutura de Arquivos

```
gerador-de-memes/
├── index.html          # Estrutura HTML principal
├── style.css           # Estilos e layout responsivo
├── script.js           # Lógica JavaScript e manipulação de Canvas
├── README.md           # Documentação do projeto
├── IDEALIZACAO.md      # Documentação da idealização
├── ARQUITETURA.md      # Este arquivo
├── PLANO.md            # Plano de execução
└── DEPLOY.md           # Instruções de deploy
```

## Componentes HTML

### index.html
- Container principal (`<div class="container">`)
- Título (`<h1>Gerador de Memes</h1>`)
- Campo de texto superior (`<textarea id="textoSuperior">`)
- Seletor de imagem (`<select id="seletorImagem">`)
- Campo de texto inferior (`<textarea id="textoInferior">`)
- Botão de gerar (`<button id="btnGerar">`)
- Botão de download (`<a id="btnDownload">`)
- Canvas para preview (`<canvas id="canvasMeme">`)

## Componentes CSS

### style.css
- Reset básico e variáveis CSS
- Layout responsivo (Grid/Flexbox)
- Estilos para campos de entrada
- Estilos para botões
- Estilos para canvas
- Media queries para mobile

## Componentes JavaScript

### script.js
- **Variáveis globais:**
  - Referências aos elementos DOM
  - Contexto 2D do canvas
  - Imagens mockadas (array de URLs)
  - Imagem atual carregada

- **Funções principais:**
  - `carregarImagem(url)`: Carrega imagem no canvas
  - `renderizarMeme()`: Desenha imagem e textos no canvas
  - `atualizarDownload()`: Atualiza link de download com data URL
  - `configurarTexto()`: Configura estilo do texto (fonte, cor, contorno)

- **Event Listeners:**
  - Input nos textareas (atualização em tempo real)
  - Change no select (mudança de imagem)
  - Click no botão gerar
  - Click no botão download

## Fluxo de Dados

```
Usuário digita texto
    ↓
Event listener detecta input
    ↓
renderizarMeme() é chamada
    ↓
Canvas é limpo
    ↓
Imagem é desenhada
    ↓
Texto superior é desenhado (topo)
    ↓
Texto inferior é desenhado (base)
    ↓
Link de download é atualizado
```

## Como usar Canvas

### Elemento HTML5
```html
<canvas id="canvasMeme" width="600" height="400"></canvas>
```

### Contexto 2D
```javascript
const canvas = document.getElementById('canvasMeme');
const ctx = canvas.getContext('2d');
```

### Operações principais
- `ctx.clearRect()`: Limpa o canvas
- `ctx.drawImage()`: Desenha imagem
- `ctx.fillText()`: Desenha texto preenchido
- `ctx.strokeText()`: Desenha contorno do texto
- `canvas.toDataURL()`: Converte para base64 (download)

## Como desenhar texto sobre imagem

1. **Carregar imagem:**
   ```javascript
   const img = new Image();
   img.onload = () => renderizarMeme();
   img.src = url;
   ```

2. **Desenhar imagem:**
   ```javascript
   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
   ```

3. **Configurar texto:**
   ```javascript
   ctx.font = 'bold 40px Impact';
   ctx.fillStyle = '#ffffff';
   ctx.strokeStyle = '#000000';
   ctx.lineWidth = 3;
   ctx.textAlign = 'center';
   ctx.textBaseline = 'top';
   ```

4. **Desenhar texto superior:**
   ```javascript
   ctx.fillText(textoSuperior, x, y);
   ctx.strokeText(textoSuperior, x, y);
   ```

5. **Desenhar texto inferior:**
   ```javascript
   ctx.textBaseline = 'bottom';
   ctx.fillText(textoInferior, x, y);
   ctx.strokeText(textoInferior, x, y);
   ```

## Como fazer download

1. **Converter canvas para data URL:**
   ```javascript
   const dataURL = canvas.toDataURL('image/png');
   ```

2. **Criar link de download:**
   ```javascript
   const link = document.getElementById('btnDownload');
   link.href = dataURL;
   link.download = 'meme.png';
   ```

## Dados mockados

Array de URLs de imagens públicas (ex: Unsplash, Picsum, ou imagens locais):

```javascript
const imagensMockadas = [
  'https://picsum.photos/600/400?random=1',
  'https://picsum.photos/600/400?random=2',
  'https://picsum.photos/600/400?random=3',
  // ... mais URLs
];
```

## Desafios técnicos principais

1. **CORS (Cross-Origin Resource Sharing):**
   - Imagens de domínios diferentes podem bloquear
   - Solução: Usar imagens do mesmo domínio ou serviços que permitem CORS

2. **Carregamento assíncrono de imagens:**
   - Imagens demoram para carregar
   - Solução: Usar `onload` para garantir que imagem está pronta

3. **Posicionamento de texto:**
   - Texto deve ficar legível em qualquer imagem
   - Solução: Contorno preto, posicionamento fixo (topo/base)

4. **Responsividade:**
   - Canvas tem tamanho fixo
   - Solução: Ajustar tamanho do canvas via CSS e JavaScript

5. **Download em diferentes navegadores:**
   - Comportamento pode variar
   - Solução: Usar `download` attribute e fallback para `window.open()`

