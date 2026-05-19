let img;

function preload() {
  // Substitua pelo link ou pelo arquivo da sua imagem equirretangular
  // Nota: Imagens de teste precisam permitir CORS se linkadas externamente
  img = loadImage('equirectangular-pano.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);

  // Permite controlar a câmera arrastando o mouse (olhar ao redor)
  // O último argumento define a sensibilidade do movimento
  orbitControl(2, 2, 0);

  // Remove as linhas de contorno dos polígonos da esfera
  noStroke();

  // Aplica a imagem como textura
  texture(img);

  // O TRUQUE: Inverter o eixo Z (escala -1) vira a esfera do avesso.
  // Isso coloca a textura do lado de dentro, onde a câmera está!
  scale(1, 1, -1);

  // Desenha a esfera. O raio deve ser grande o suficiente para não "cortar" a câmera.
  // 1000 a 2000 é um bom tamanho. Detalhe (24, 24) para ficar bem redonda.
  sphere(1500, 24, 24);
}

// Ajusta o tamanho da tela caso a janela do navegador mude de tamanho
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}