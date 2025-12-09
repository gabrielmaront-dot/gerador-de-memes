# 📝 Exemplo de Como Adicionar Imagens

## Exemplo Prático

Suponha que você tem uma imagem chamada `gato-engracado.jpg` e quer adicioná-la ao gerador.

### Passo 1: Coloque a Imagem na Pasta

```
imagens/
└── gato-engracado.jpg  ← Sua imagem aqui
```

### Passo 2: Adicione no script.js

Abra `script.js` e encontre o array `imagensMockadas`. Adicione sua imagem:

```javascript
const imagensMockadas = [
    // ===== SUAS IMAGENS LOCAIS =====
    { nome: '🐱 Gato Engraçado', url: 'imagens/gato-engracado.jpg' },
    
    // ... resto das imagens
];
```

### Passo 3: Teste

1. Abra `index.html` no navegador
2. Veja se "🐱 Gato Engraçado" aparece no seletor
3. Selecione e teste!

## ✅ Checklist

Antes de adicionar uma imagem, verifique:

- [ ] Arquivo está na pasta `imagens/`
- [ ] Nome do arquivo não tem espaços
- [ ] Caminho no código está correto: `'imagens/nome-do-arquivo.jpg'`
- [ ] Formato suportado (JPG, PNG, GIF, WebP)
- [ ] Tamanho razoável (< 1MB recomendado)

## 🎯 Dicas

- Use nomes descritivos: `gato-surpreso.jpg` é melhor que `img1.jpg`
- Organize por categoria se tiver muitas imagens
- Teste sempre após adicionar uma nova imagem

