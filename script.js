// Referências aos elementos DOM
const canvas = document.getElementById('canvasMeme');
const ctx = canvas.getContext('2d');
const textoSuperior = document.getElementById('textoSuperior');
const textoInferior = document.getElementById('textoInferior');
const seletorImagem = document.getElementById('seletorImagem');
const btnGerar = document.getElementById('btnGerar');
const btnDownload = document.getElementById('btnDownload');

// Array de imagens mockadas (URLs públicas) - Templates perfeitos para memes
const imagensMockadas = [
    { nome: '🐱 Gato Surpreso', url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop' },
    { nome: '😎 Homem Pensativo', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop' },
    { nome: '🤔 Pessoa Confusa', url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop' },
    { nome: '🎉 Celebração', url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop' },
    { nome: '😱 Reação Surpresa', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop' },
    { nome: '🤷‍♂️ Indecisão', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&q=80' },
    { nome: '🏆 Vitória', url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop' },
    { nome: '😴 Sonolência', url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop' },
    { nome: '🎭 Drama', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop' },
    { nome: '🔥 Fogo', url: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop' },
    { nome: '🌊 Natureza', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop' },
    { nome: '🏙️ Cidade', url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop' },
];

// Variável para armazenar a imagem atual
let imagemAtual = null;
let carregando = false;

// Preencher o seletor com as imagens mockadas
function preencherSeletor() {
    imagensMockadas.forEach((imagem, index) => {
        const option = document.createElement('option');
        option.value = imagem.url;
        option.textContent = imagem.nome;
        seletorImagem.appendChild(option);
    });
}

// Mostrar indicador de carregamento
function mostrarCarregamento() {
    carregando = true;
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#667eea';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Carregando imagem...', canvas.width / 2, canvas.height / 2 - 20);
    ctx.fillStyle = '#999999';
    ctx.font = '16px Arial';
    ctx.fillText('Aguarde...', canvas.width / 2, canvas.height / 2 + 20);
}

// Carregar imagem
function carregarImagem(url) {
    mostrarCarregamento();
    
    const img = new Image();
    img.crossOrigin = 'anonymous'; // Permite CORS para download
    
    img.onload = () => {
        imagemAtual = img;
        carregando = false;
        renderizarMeme();
    };
    
    img.onerror = () => {
        carregando = false;
        console.error('Erro ao carregar imagem:', url);
        // Usar imagem padrão em caso de erro
        ctx.fillStyle = '#fee2e2';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#dc2626';
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('❌ Erro ao carregar imagem', canvas.width / 2, canvas.height / 2 - 20);
        ctx.fillStyle = '#991b1b';
        ctx.font = '16px Arial';
        ctx.fillText('Tente selecionar outra imagem', canvas.width / 2, canvas.height / 2 + 20);
        imagemAtual = null;
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
    // Se estiver carregando, não renderizar
    if (carregando) {
        return;
    }
    
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
    
    // Se não houver textos, apenas mostrar a imagem
    if (!textoSuperiorValue && !textoInferiorValue) {
        atualizarDownload();
        return;
    }
    
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
        // Verificar se há imagem carregada
        if (!imagemAtual || carregando) {
            btnDownload.style.opacity = '0.5';
            btnDownload.style.pointerEvents = 'none';
            btnDownload.title = 'Selecione uma imagem primeiro';
            return;
        }
        
        const dataURL = canvas.toDataURL('image/png');
        
        // Validar se o dataURL foi gerado corretamente
        if (!dataURL || dataURL === 'data:,') {
            throw new Error('DataURL inválido');
        }
        
        btnDownload.href = dataURL;
        btnDownload.style.display = 'inline-block';
        btnDownload.style.opacity = '1';
        btnDownload.style.pointerEvents = 'auto';
        btnDownload.title = 'Clique para baixar o meme';
        
        // Adicionar feedback visual
        btnDownload.classList.add('download-ready');
        setTimeout(() => {
            btnDownload.classList.remove('download-ready');
        }, 500);
    } catch (error) {
        console.error('Erro ao gerar data URL:', error);
        btnDownload.style.opacity = '0.5';
        btnDownload.style.pointerEvents = 'none';
        btnDownload.title = 'Erro ao preparar download';
        
        // Mostrar mensagem de erro de forma mais suave
        mostrarMensagemErro('⚠️ Problema ao preparar download. Tente novamente.');
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
        carregando = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#64748b';
        ctx.font = '18px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Selecione uma imagem para começar', canvas.width / 2, canvas.height / 2);
        atualizarDownload();
    }
});

// Botão gerar (força renderização)
btnGerar.addEventListener('click', () => {
    if (carregando) {
        return;
    }
    
    if (imagemAtual) {
        renderizarMeme();
        // Feedback visual no botão
        btnGerar.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btnGerar.style.transform = '';
        }, 150);
    } else {
        // Melhorar mensagem de erro
        mostrarMensagemErro('Por favor, selecione uma imagem primeiro!');
    }
});

// Função para mostrar mensagem de erro de forma mais elegante
function mostrarMensagemErro(mensagem) {
    // Criar elemento de mensagem se não existir
    let mensagemEl = document.getElementById('mensagemErro');
    if (!mensagemEl) {
        mensagemEl = document.createElement('div');
        mensagemEl.id = 'mensagemErro';
        mensagemEl.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%);
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            font-weight: 600;
            animation: slideInRight 0.3s ease-out;
            max-width: 300px;
        `;
        document.body.appendChild(mensagemEl);
    }
    
    mensagemEl.textContent = mensagem;
    mensagemEl.style.display = 'block';
    
    setTimeout(() => {
        mensagemEl.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            mensagemEl.style.display = 'none';
        }, 300);
    }, 3000);
}

// Inicialização
function inicializar() {
    preencherSeletor();
    
    // Mostrar mensagem inicial no canvas
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#667eea';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('🎨 Gerador de Memes', canvas.width / 2, canvas.height / 2 - 30);
    ctx.fillStyle = '#64748b';
    ctx.font = '18px Arial';
    ctx.fillText('Selecione uma imagem para começar', canvas.width / 2, canvas.height / 2 + 10);
    
    // Carregar primeira imagem por padrão após um pequeno delay
    if (imagensMockadas.length > 0) {
        setTimeout(() => {
            seletorImagem.value = imagensMockadas[0].url;
            carregarImagem(imagensMockadas[0].url);
        }, 500);
    }
}

// Executar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    inicializar();
}

