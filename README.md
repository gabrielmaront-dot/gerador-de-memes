# 🎨 Gerador de Memes

Um gerador de memes simples e funcional criado com HTML5 Canvas, CSS3 e JavaScript puro.

## 🎮 Link para Jogar

👉 [**Acesse o Gerador de Memes**](https://seu-usuario.github.io/gerador-de-memes/) 👈

*(Atualize a URL acima após configurar o GitHub Pages)*

## ✨ Funcionalidades

- ✅ Escolha entre múltiplas imagens de fundo
- ✅ **Banco de imagens local** - Adicione suas próprias imagens
- ✅ Quebra de linha automática para textos longos
- ✅ Ajuste automático de tamanho de fonte
- ✅ Adicione texto superior e inferior
- ✅ Preview em tempo real
- ✅ Download do meme como PNG (sem problemas de CORS)
- ✅ Interface responsiva (desktop e mobile)
- ✅ Indicador de carregamento visual

## 🚀 Como usar

1. Abra o arquivo `index.html` no navegador
2. Selecione uma imagem de fundo
3. Digite o texto superior e/ou inferior
4. Visualize o preview em tempo real
5. Clique em "Download" para baixar o meme

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- Canvas API

## 📁 Estrutura do Projeto

```
gerador-de-memes/
├── index.html              # Estrutura HTML
├── style.css               # Estilos
├── script.js               # Lógica JavaScript
├── imagens/                # Banco de imagens local
│   ├── README.md           # Guia de como adicionar imagens
│   └── ...                 # Suas imagens aqui
├── README.md               # Este arquivo
├── BANCO_IMAGENS.md        # Guia completo do banco de imagens
├── IDEALIZACAO.md          # Documentação da idealização
├── ARQUITETURA.md          # Documentação da arquitetura
├── PLANO.md                # Plano de execução
└── MELHORIAS_SUGERIDAS.md  # Melhorias implementadas
```

## 📸 Banco de Imagens

O projeto agora suporta **imagens locais** (recomendado) e URLs externas.

### 🎯 Mais de 40 Imagens Gratuitas Incluídas!

O gerador já vem com **40+ imagens gratuitas** organizadas por categoria:
- 🐱 Animais (gatos, cachorros, pandas, etc.)
- 👤 Pessoas e Expressões
- 🎉 Emoções e Ações
- 🌍 Natureza e Paisagens
- 🔥 Objetos e Conceitos
- 🎨 Arte e Criatividade
- 🌈 Cores e Padrões
- 📸 Imagens Aleatórias (Picsum)

### Como Adicionar Suas Imagens

1. Coloque suas imagens na pasta `imagens/`
2. Atualize o array `imagensMockadas` no `script.js`
3. Exemplo: `{ nome: '🐱 Meu Meme', url: 'imagens/meu-meme.jpg' }`

📖 **Guias disponíveis:**
- [BANCO_IMAGENS.md](BANCO_IMAGENS.md) - Guia completo do banco de imagens
- [FONTES_IMAGENS_GRATUITAS.md](FONTES_IMAGENS_GRATUITAS.md) - Onde encontrar mais imagens gratuitas

### Vantagens das Imagens Locais

- ✅ Sem problemas de CORS
- ✅ Download sempre funciona
- ✅ Melhor performance
- ✅ Controle total sobre as imagens

## 📝 Licença

Este projeto é livre para uso pessoal e educacional.

