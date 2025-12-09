# 📸 Guia do Banco de Imagens

## 🎯 Como Funciona

O gerador de memes agora suporta **imagens locais** (recomendado) e **URLs externas** (fallback).

## ✅ Vantagens de Imagens Locais

- ✅ **Sem problemas de CORS** - Download sempre funciona
- ✅ **Melhor performance** - Carregamento mais rápido
- ✅ **Controle total** - Você escolhe as imagens
- ✅ **Funciona offline** - Não depende de serviços externos
- ✅ **Mais confiável** - Não quebra se serviços externos mudarem

## 📁 Estrutura de Pastas

```
gerador-de-memes/
├── imagens/              ← Suas imagens ficam aqui
│   ├── README.md
│   ├── .gitkeep
│   ├── gato-surpreso.jpg
│   ├── homem-pensativo.jpg
│   └── ... (suas imagens)
├── script.js
├── index.html
└── ...
```

## 🚀 Como Adicionar Suas Próprias Imagens

### Passo 1: Prepare a Imagem

1. Escolha uma imagem (JPG, PNG ou GIF)
2. **Tamanho recomendado:** 600x400 pixels
3. **Tamanho do arquivo:** Tente manter abaixo de 500KB
4. **Nome do arquivo:** Use nomes descritivos sem espaços
   - ✅ `gato-surpreso.jpg`
   - ✅ `homem-pensativo.png`
   - ❌ `gato surpreso.jpg` (evite espaços)

### Passo 2: Adicione a Imagem

1. Copie sua imagem para a pasta `imagens/`
2. Exemplo: `imagens/meu-meme-favorito.jpg`

### Passo 3: Atualize o script.js

Abra `script.js` e adicione sua imagem no array `imagensMockadas`:

```javascript
const imagensMockadas = [
    // Adicione suas imagens locais AQUI (no topo do array)
    { nome: '🐱 Meu Meme Favorito', url: 'imagens/meu-meme-favorito.jpg' },
    { nome: '😎 Outro Meme', url: 'imagens/outro-meme.png' },
    
    // ... resto das imagens
];
```

### Exemplo Completo

```javascript
const imagensMockadas = [
    // ===== SUAS IMAGENS LOCAIS =====
    { nome: '🐱 Gato Surpreso', url: 'imagens/gato-surpreso.jpg' },
    { nome: '😎 Homem Pensativo', url: 'imagens/homem-pensativo.jpg' },
    { nome: '🤔 Pessoa Confusa', url: 'imagens/pessoa-confusa.jpg' },
    
    // ===== FALLBACK: URLs Externas =====
    // (opcional - pode remover se não precisar)
    { nome: '🎉 Celebração', url: 'https://images.unsplash.com/...' },
];
```

## 📋 Formato das Imagens

### Formatos Suportados
- ✅ JPG / JPEG
- ✅ PNG
- ✅ GIF
- ✅ WebP

### Tamanhos Recomendados
- **Largura:** 600-800 pixels
- **Altura:** 400-600 pixels
- **Proporção:** 3:2 ou 4:3 funciona bem
- **Tamanho do arquivo:** < 500KB (otimize antes de adicionar)

## 🎨 Dicas para Escolher Imagens

### ✅ Boas Imagens para Memes
- Espaço no topo e embaixo para textos
- Fundo simples ou com pouco detalhe
- Alto contraste (texto branco fica legível)
- Imagens famosas de memes
- Expressões faciais marcantes

### ❌ Evite
- Imagens muito detalhadas
- Fundos muito coloridos/confusos
- Imagens sem espaço para texto
- Arquivos muito grandes (> 1MB)

## 🔧 Otimização de Imagens

### Antes de Adicionar

1. **Redimensione** para ~600x400px
2. **Comprima** o arquivo (use ferramentas online)
3. **Teste** se o texto fica legível sobre a imagem

### Ferramentas Úteis
- [TinyPNG](https://tinypng.com/) - Comprimir imagens
- [Squoosh](https://squoosh.app/) - Otimizar e redimensionar
- [Remove.bg](https://www.remove.bg/) - Remover fundo (opcional)

## 📝 Exemplo de Uso

1. Você tem uma imagem: `meu-meme.jpg`
2. Copia para: `imagens/meu-meme.jpg`
3. Adiciona no `script.js`:
   ```javascript
   { nome: '🎭 Meu Meme', url: 'imagens/meu-meme.jpg' }
   ```
4. Pronto! A imagem aparece no seletor

## ⚠️ Troubleshooting

### Imagem não aparece?
- ✅ Verifique se o arquivo está na pasta `imagens/`
- ✅ Confira se o caminho no código está correto
- ✅ Verifique se o nome do arquivo não tem espaços
- ✅ Teste abrindo a imagem diretamente no navegador: `file:///caminho/imagens/sua-imagem.jpg`

### Download não funciona?
- ✅ Imagens locais sempre funcionam (sem CORS)
- ⚠️ URLs externas podem ter problemas de CORS
- 💡 Use imagens locais para garantir que download funcione

### Imagem muito grande?
- ✅ Redimensione antes de adicionar
- ✅ Comprima o arquivo
- ✅ Use formatos otimizados (JPG para fotos, PNG para gráficos)

## 🎯 Próximos Passos

1. Adicione suas imagens favoritas na pasta `imagens/`
2. Atualize o `script.js` com os caminhos
3. Teste o gerador
4. Compartilhe seus memes! 🎉

## 📚 Recursos

- Veja `imagens/README.md` para mais detalhes
- Consulte a documentação do projeto em `README.md`

