// Referências aos elementos DOM
const canvas = document.getElementById('canvasMeme');
const ctx = canvas.getContext('2d');
const textoSuperior = document.getElementById('textoSuperior');
const textoInferior = document.getElementById('textoInferior');
const seletorImagem = document.getElementById('seletorImagem');
const btnGerar = document.getElementById('btnGerar');
const btnDownload = document.getElementById('btnDownload');

// Array de imagens mockadas (URLs públicas)
const imagensMockadas = [
    { nome: 'Imagem 1', url: 'https://picsum.photos/600/400?random=1' },
    { nome: 'Imagem 2', url: 'https://picsum.photos/600/400?random=2' },
    { nome: 'Imagem 3', url: 'https://picsum.photos/600/400?random=3' },
    { nome: 'Imagem 4', url: 'https://picsum.photos/600/400?random=4' },
    { nome: 'Imagem 5', url: 'https://picsum.photos/600/400?random=5' },
    { nome: 'Imagem 6', url: 'https://picsum.photos/600/400?random=6' },
];

// Variável para armazenar a imagem atual
let imagemAtual = null;

// Preencher o seletor com as imagens mockadas
function preencherSeletor() {
    imagensMockadas.forEach((imagem, index) => {
        const option = document.createElement('option');
        option.value = imagem.url;
        option.textContent = imagem.nome;
        seletorImagem.appendChild(option);
    });
}

// Carregar imagem
function carregarImagem(url) {
    const img = new Image();
    img.crossOrigin = 'anonymous'; // Permite CORS para download
    
    img.onload = () => {
        imagemAtual = img;
        renderizarMeme();
    };
    
    img.onerror = () => {
        console.error('Erro ao carregar imagem:', url);
        // Usar imagem padrão em caso de erro
        ctx.fillStyle = '#cccccc';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#666666';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Erro ao carregar imagem', canvas.width / 2, canvas.height / 2);
    };
    
    img.src = url;
}

// Configurar estilo do texto
function configurarTexto() {
    ctx.font = 'bold 40px Impact, Arial Black, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 4;
    ctx.textAlign = 'center';
    ctx.lineJoin = 'round';
}

// Renderizar o meme no canvas
function renderizarMeme() {
    // Limpar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Se não houver imagem, não renderizar
    if (!imagemAtual) {
        return;
    }
    
    // Desenhar imagem de fundo
    ctx.drawImage(imagemAtual, 0, 0, canvas.width, canvas.height);
    
    // Obter textos
    const textoSuperiorValue = textoSuperior.value.trim();
    const textoInferiorValue = textoInferior.value.trim();
    
    // Configurar estilo do texto
    configurarTexto();
    
    // Desenhar texto superior
    if (textoSuperiorValue) {
        ctx.textBaseline = 'top';
        const ySuperior = 30;
        // Desenhar contorno primeiro (para efeito de borda)
        ctx.strokeText(textoSuperiorValue, canvas.width / 2, ySuperior);
        // Depois desenhar preenchimento
        ctx.fillText(textoSuperiorValue, canvas.width / 2, ySuperior);
    }
    
    // Desenhar texto inferior
    if (textoInferiorValue) {
        ctx.textBaseline = 'bottom';
        const yInferior = canvas.height - 30;
        // Desenhar contorno primeiro
        ctx.strokeText(textoInferiorValue, canvas.width / 2, yInferior);
        // Depois desenhar preenchimento
        ctx.fillText(textoInferiorValue, canvas.width / 2, yInferior);
    }
    
    // Atualizar link de download
    atualizarDownload();
}

// Atualizar link de download
function atualizarDownload() {
    try {
        const dataURL = canvas.toDataURL('image/png');
        btnDownload.href = dataURL;
        btnDownload.style.display = 'inline-block';
    } catch (error) {
        console.error('Erro ao gerar data URL:', error);
        btnDownload.style.display = 'none';
    }
}

// Event Listeners

// Atualizar ao digitar texto
textoSuperior.addEventListener('input', renderizarMeme);
textoInferior.addEventListener('input', renderizarMeme);

// Mudar imagem
seletorImagem.addEventListener('change', (e) => {
    const url = e.target.value;
    if (url) {
        carregarImagem(url);
    } else {
        imagemAtual = null;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

// Botão gerar (força renderização)
btnGerar.addEventListener('click', () => {
    if (imagemAtual) {
        renderizarMeme();
    } else {
        alert('Por favor, selecione uma imagem primeiro!');
    }
});

// Inicialização
function inicializar() {
    preencherSeletor();
    
    // Carregar primeira imagem por padrão
    if (imagensMockadas.length > 0) {
        seletorImagem.value = imagensMockadas[0].url;
        carregarImagem(imagensMockadas[0].url);
    }
    
    // Inicializar canvas vazio
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#999999';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Selecione uma imagem para começar', canvas.width / 2, canvas.height / 2);
}

// Executar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    inicializar();
}

