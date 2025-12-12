// Referências aos elementos DOM
const canvas = document.getElementById('canvasMeme');
const ctx = canvas.getContext('2d');
const textoSuperior = document.getElementById('textoSuperior');
const textoInferior = document.getElementById('textoInferior');
const seletorCategoria = document.getElementById('seletorCategoria');
const seletorImagem = document.getElementById('seletorImagem');
const btnGerar = document.getElementById('btnGerar');
const btnDownload = document.getElementById('btnDownload');
const uploadImagem = document.getElementById('uploadImagem');
const btnUpload = document.getElementById('btnUpload');
const nomeArquivo = document.getElementById('nomeArquivo');
const buscaImagem = document.getElementById('buscaImagem');

// Controles de texto
const tamanhoFonteSuperior = document.getElementById('tamanhoFonteSuperior');
const tamanhoFonteInferior = document.getElementById('tamanhoFonteInferior');
const corTextoSuperior = document.getElementById('corTextoSuperior');
const corTextoInferior = document.getElementById('corTextoInferior');
const valorTamanhoSuperior = document.getElementById('valorTamanhoSuperior');
const valorTamanhoInferior = document.getElementById('valorTamanhoInferior');

// Sistema de Balões de Fala

// ============================================
// BANCO DE IMAGENS - Gerador de Memes
// ============================================
// 
// Para adicionar suas próprias imagens:
// 1. Coloque o arquivo na pasta 'imagens/'
// 2. Adicione uma entrada aqui com o caminho relativo
// 3. Exemplo: { nome: '🐱 Meu Meme', url: 'imagens/meu-meme.jpg' }
//
// Você pode usar:
// - Imagens locais: 'imagens/nome-do-arquivo.jpg'
// - URLs externas: 'https://exemplo.com/imagem.jpg'
// ============================================

// ============================================
// BANCO DE IMAGENS COM CATEGORIAS
// ============================================
// Estrutura: { categoria: 'Nome', nome: 'Nome da Imagem', url: 'URL' }
// Para imagens locais: { categoria: 'Gatos', nome: '🐱 Gato Surpreso', url: 'imagens/gato.jpg' }

const imagensMockadas = [
    // ============================================
    // 🐱 GATOS (Vários tipos de gatos)
    // ============================================
    { categoria: 'Gatos', nome: '🐱 Gato Surpreso', url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop' },
    { categoria: 'Gatos', nome: '🐱 Gato Dormindo', url: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?w=600&h=400&fit=crop' },
    { categoria: 'Gatos', nome: '🐱 Gato Curioso', url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&h=400&fit=crop' },
    { categoria: 'Gatos', nome: '🐱 Gato Brincando', url: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop' },
    { categoria: 'Gatos', nome: '🐱 Gato Olhando', url: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&h=400&fit=crop' },
    { categoria: 'Gatos', nome: '🐱 Gato Fofo', url: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=600&h=400&fit=crop' },
    
    // ============================================
    // 🐶 CACHORROS (Vários tipos de cachorros)
    // ============================================
    { categoria: 'Cachorros', nome: '🐶 Cachorro Feliz', url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=400&fit=crop' },
    { categoria: 'Cachorros', nome: '🐶 Cachorro Brincando', url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop' },
    { categoria: 'Cachorros', nome: '🐶 Cachorro Dormindo', url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop' },
    { categoria: 'Cachorros', nome: '🐶 Cachorro Fofo', url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop' },
    
    // ============================================
    // 🦁 OUTROS ANIMAIS
    // ============================================
    { categoria: 'Outros Animais', nome: '🦁 Leão', url: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&h=400&fit=crop' },
    { categoria: 'Outros Animais', nome: '🐼 Panda', url: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=600&h=400&fit=crop' },
    { categoria: 'Outros Animais', nome: '🐰 Coelho', url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&h=400&fit=crop' },
    
    // ============================================
    // 👤 PESSOAS (Expressões e reações)
    // ============================================
    { categoria: 'Pessoas', nome: '😎 Pessoa Pensativa', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop' },
    { categoria: 'Pessoas', nome: '🤔 Pessoa Confusa', url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop' },
    { categoria: 'Pessoas', nome: '😱 Reação Surpresa', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop' },
    { categoria: 'Pessoas', nome: '🤷‍♂️ Indecisão', url: 'https://picsum.photos/600/400?random=14' },
    { categoria: 'Pessoas', nome: '😴 Sonolência', url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop' },
    { categoria: 'Pessoas', nome: '🎭 Drama', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop' },
    { categoria: 'Pessoas', nome: '😄 Riso', url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=400&fit=crop' },
    { categoria: 'Pessoas', nome: '🤨 Cético', url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&h=400&fit=crop' },
    
    // ============================================
    // 🎉 EMOÇÕES E AÇÕES
    // ============================================
    { categoria: 'Emoções', nome: '🎉 Celebração', url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop' },
    { categoria: 'Emoções', nome: '🏆 Vitória', url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop' },
    { categoria: 'Emoções', nome: '💪 Força', url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop' },
    { categoria: 'Emoções', nome: '🎯 Foco', url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop' },
    { categoria: 'Emoções', nome: '🤝 Aperto de Mão', url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop' },
    
    // ============================================
    // 🌍 NATUREZA E PAISAGENS
    // ============================================
    { categoria: 'Natureza', nome: '🌊 Paisagem Aquática', url: 'https://picsum.photos/600/400?random=11' },
    { categoria: 'Natureza', nome: '🏙️ Cidade', url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop' },
    { categoria: 'Natureza', nome: '🌅 Paisagem Natural', url: 'https://picsum.photos/600/400?random=12' },
    { categoria: 'Natureza', nome: '🌲 Floresta', url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop' },
    { categoria: 'Natureza', nome: '🏔️ Vista de Montanha', url: 'https://picsum.photos/600/400?random=13' },
    { categoria: 'Natureza', nome: '🌊 Oceano', url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=400&fit=crop' },
    { categoria: 'Natureza', nome: '🏔️ Paisagem Montanhosa', url: 'https://picsum.photos/600/400?random=10' },
    
    // ============================================
    // 🔥 OBJETOS E COMIDA
    // ============================================
    { categoria: 'Objetos', nome: '☕ Café', url: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop' },
    { categoria: 'Objetos', nome: '🍕 Pizza', url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop' },
    { categoria: 'Objetos', nome: '💻 Tecnologia', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop' },
    { categoria: 'Objetos', nome: '📚 Livros', url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop' },
    { categoria: 'Objetos', nome: '🎮 Games', url: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&h=400&fit=crop' },
    { categoria: 'Objetos', nome: '🎵 Música', url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop' },
    
    // ============================================
    // 🎨 ARTE E CRIATIVIDADE
    // ============================================
    { categoria: 'Arte', nome: '🎨 Arte', url: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop' },
    { categoria: 'Arte', nome: '📸 Fotografia', url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop' },
    { categoria: 'Arte', nome: '✏️ Desenho', url: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop&q=80' },
    
    // ============================================
    // 🌈 CORES E PADRÕES
    // ============================================
    { categoria: 'Cores', nome: '🌈 Cores', url: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&h=400&fit=crop' },
    { categoria: 'Cores', nome: '⭐ Estrelas', url: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop' },
    
    // ============================================
    // 📸 ALEATÓRIAS
    // ============================================
    { categoria: 'Aleatórias', nome: '🖼️ Imagem Aleatória 1', url: 'https://picsum.photos/600/400?random=1' },
    { categoria: 'Aleatórias', nome: '🖼️ Imagem Aleatória 2', url: 'https://picsum.photos/600/400?random=2' },
    { categoria: 'Aleatórias', nome: '🖼️ Imagem Aleatória 3', url: 'https://picsum.photos/600/400?random=3' },
    { categoria: 'Aleatórias', nome: '🖼️ Imagem Aleatória 4', url: 'https://picsum.photos/600/400?random=4' },
    { categoria: 'Aleatórias', nome: '🖼️ Imagem Aleatória 5', url: 'https://picsum.photos/600/400?random=5' },
];

// Variável para armazenar a imagem atual
let imagemAtual = null;
let carregando = false;

// Obter todas as categorias únicas
function obterCategorias() {
    const categorias = [...new Set(imagensMockadas.map(img => img.categoria))];
    return categorias.sort();
}

// Preencher o seletor de categorias
function preencherCategorias() {
    const categorias = obterCategorias();
    categorias.forEach(categoria => {
        const option = document.createElement('option');
        option.value = categoria;
        option.textContent = categoria;
        seletorCategoria.appendChild(option);
    });
}

// Filtrar imagens por categoria
function filtrarImagensPorCategoria(categoria) {
    if (!categoria || categoria === '') {
        return imagensMockadas;
    }
    return imagensMockadas.filter(imagem => imagem.categoria === categoria);
}

// Preencher o seletor de imagens baseado na categoria selecionada
function preencherSeletorImagens(categoriaSelecionada = '') {
    // Limpar seletor atual
    seletorImagem.innerHTML = '<option value="">Selecione uma imagem...</option>';
    
    // Obter imagens filtradas
    const imagensFiltradas = filtrarImagensPorCategoria(categoriaSelecionada);
    
    // Preencher com imagens filtradas
    imagensFiltradas.forEach((imagem) => {
        const option = document.createElement('option');
        option.value = imagem.url;
        option.textContent = imagem.nome;
        seletorImagem.appendChild(option);
    });
    
    // Se não houver imagens, mostrar mensagem
    if (imagensFiltradas.length === 0) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'Nenhuma imagem nesta categoria';
        option.disabled = true;
        seletorImagem.appendChild(option);
    }
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

// Calcular tamanho de fonte dinamicamente baseado no texto
function calcularTamanhoFonte(texto, maxWidth, tamanhoInicial = 40) {
    let tamanho = tamanhoInicial;
    ctx.font = `bold ${tamanho}px Impact, Arial Black, sans-serif`;
    let largura = ctx.measureText(texto).width;
    
    // Reduzir tamanho se texto for muito largo
    while (largura > maxWidth && tamanho > 20) {
        tamanho -= 2;
        ctx.font = `bold ${tamanho}px Impact, Arial Black, sans-serif`;
        largura = ctx.measureText(texto).width;
    }
    
    return tamanho;
}

// Quebrar texto em múltiplas linhas
function quebrarTexto(texto, maxWidth) {
    const palavras = texto.split(' ');
    const linhas = [];
    let linhaAtual = palavras[0] || '';
    
    for (let i = 1; i < palavras.length; i++) {
        const teste = linhaAtual + ' ' + palavras[i];
        const metrics = ctx.measureText(teste);
        
        if (metrics.width > maxWidth && linhaAtual.length > 0) {
            linhas.push(linhaAtual);
            linhaAtual = palavras[i];
        } else {
            linhaAtual = teste;
        }
    }
    
    if (linhaAtual) {
        linhas.push(linhaAtual);
    }
    
    return linhas.length > 0 ? linhas : [texto];
}

// Desenhar texto com quebra de linha automática
function desenharTextoComQuebra(texto, x, y, maxWidth, maxHeight, posicao = 'top') {
    if (!texto) return;
    
    // Calcular tamanho de fonte adequado
    const tamanhoFonte = calcularTamanhoFonte(texto, maxWidth);
    ctx.font = `bold ${tamanhoFonte}px Impact, Arial Black, sans-serif`;
    
    // Quebrar texto em linhas
    const linhas = quebrarTexto(texto, maxWidth);
    const alturaLinha = tamanhoFonte * 1.2;
    const alturaTotal = linhas.length * alturaLinha;
    
    // Ajustar posição Y baseado na posição (top ou bottom)
    let yInicial = y;
    if (posicao === 'bottom') {
        yInicial = y - alturaTotal;
    }
    
    // Desenhar cada linha
    linhas.forEach((linha, index) => {
        const yLinha = yInicial + (index * alturaLinha);
        
        // Desenhar contorno primeiro
        ctx.strokeText(linha, x, yLinha);
        // Depois desenhar preenchimento
        ctx.fillText(linha, x, yLinha);
    });
}

// Carregar imagem
function carregarImagem(url) {
    mostrarCarregamento();
    
    const img = new Image();
    
    // Verificar se é URL externa (precisa de CORS) ou local
    const isUrlExterna = url.startsWith('http://') || url.startsWith('https://');
    
    if (isUrlExterna) {
        img.crossOrigin = 'anonymous'; // Permite CORS para download (apenas URLs externas)
    }
    // Imagens locais não precisam de crossOrigin
    
    img.onload = () => {
        imagemAtual = img;
        carregando = false;
        renderizarMeme();
    };
    
    img.onerror = () => {
        carregando = false;
        console.error('Erro ao carregar imagem:', url);
        
        // Mensagem de erro mais específica
        let mensagemErro = 'Erro ao carregar imagem';
        let mensagemDica = 'Tente selecionar outra imagem';
        
        // Se for imagem local, dar dica diferente
        if (!isUrlExterna) {
            mensagemErro = 'Imagem local não encontrada';
            mensagemDica = 'Verifique se o arquivo existe em: ' + url;
        }
        
        // Usar imagem padrão em caso de erro
        ctx.fillStyle = '#fee2e2';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#dc2626';
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('❌ ' + mensagemErro, canvas.width / 2, canvas.height / 2 - 20);
        ctx.fillStyle = '#991b1b';
        ctx.font = '14px Arial';
        ctx.fillText(mensagemDica, canvas.width / 2, canvas.height / 2 + 10);
        imagemAtual = null;
        atualizarDownload();
    };
    
    img.src = url;
}

// ============================================
// SISTEMA DE BALÕES DE FALA
// ============================================

// Função auxiliar para desenhar retângulo arredondado
function desenharRoundRect(x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}


// Configurar estilo do texto (usando valores dos controles)
function configurarTexto(tipo = 'superior') {
    // Obter tamanho e cor baseado no tipo
    const tamanho = tipo === 'superior' 
        ? parseInt(tamanhoFonteSuperior.value) 
        : parseInt(tamanhoFonteInferior.value);
    const cor = tipo === 'superior' 
        ? corTextoSuperior.value 
        : corTextoInferior.value;
    
    ctx.font = `bold ${tamanho}px Impact, Arial Black, sans-serif`;
    ctx.fillStyle = cor;
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
    
    // Configurar estilo do texto
    configurarTexto();
    
    // Configurar parâmetros para quebra de linha
    const maxWidth = canvas.width - 40; // Margem de 20px de cada lado
    const x = canvas.width / 2;
    
    // Desenhar texto superior com quebra de linha
    if (textoSuperiorValue) {
        ctx.textBaseline = 'top';
        const ySuperior = 30;
        desenharTextoComQuebra(textoSuperiorValue, x, ySuperior, maxWidth, 150, 'top');
    }
    
    // Desenhar texto inferior com quebra de linha
    if (textoInferiorValue) {
        ctx.textBaseline = 'bottom';
        const yInferior = canvas.height - 30;
        desenharTextoComQuebra(textoInferiorValue, x, yInferior, maxWidth, 150, 'bottom');
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

// Event Listeners

// Atualizar ao digitar texto
textoSuperior.addEventListener('input', renderizarMeme);
textoInferior.addEventListener('input', renderizarMeme);

// Mudar categoria - atualiza lista de imagens
seletorCategoria.addEventListener('change', (e) => {
    const categoriaSelecionada = e.target.value;
    preencherSeletorImagens(categoriaSelecionada);
    
    // Limpar seleção de imagem quando mudar categoria
    seletorImagem.value = '';
    imagemAtual = null;
    carregando = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#64748b';
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Selecione uma imagem', canvas.width / 2, canvas.height / 2);
    atualizarDownload();
});

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


// Controles de tamanho de fonte - atualizar valores
tamanhoFonteSuperior.addEventListener('input', (e) => {
    valorTamanhoSuperior.textContent = e.target.value + 'px';
    renderizarMeme();
});

tamanhoFonteInferior.addEventListener('input', (e) => {
    valorTamanhoInferior.textContent = e.target.value + 'px';
    renderizarMeme();
});

// Controles de cor - atualizar renderização
corTextoSuperior.addEventListener('input', renderizarMeme);
corTextoInferior.addEventListener('input', renderizarMeme);

// Inicialização
function inicializar() {
    // Preencher categorias primeiro
    preencherCategorias();
    
    // Preencher imagens (todas inicialmente)
    preencherSeletorImagens('');
    
    // Mostrar mensagem inicial no canvas
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#667eea';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('🎨 Gerador de Memes', canvas.width / 2, canvas.height / 2 - 30);
    ctx.fillStyle = '#64748b';
    ctx.font = '18px Arial';
    ctx.fillText('Selecione uma categoria e imagem', canvas.width / 2, canvas.height / 2 + 10);
    
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

