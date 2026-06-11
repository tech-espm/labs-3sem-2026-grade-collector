# Laboratório Experimental - Sistemas de Informação ESPM

<p align="center">
    <a href="https://www.espm.br/cursos-de-graduacao/sistemas-de-informacao/"><img src="https://raw.githubusercontent.com/tech-espm/misc-template/main/logo.png" alt="Sistemas de Informação ESPM" style="width: 375px;"/></a>
</p>

# Jogo Grade Collector

### 2026-01

## Visão Geral

O **Grade Collector** é um jogo digital desenvolvido em **JavaScript** com o uso da biblioteca **Phaser**, voltado para a criação de uma experiência interativa em 2D diretamente no navegador.

O projeto foi desenvolvido como parte do Laboratório Experimental da ESPM, com o objetivo de aplicar conceitos de programação, desenvolvimento de jogos, organização de projetos web, lógica de colisões, manipulação de sprites e estruturação de cenas.

No jogo, o jogador controla um morcego em um cenário com rolagem lateral. A proposta é sobreviver desviando dos obstáculos e coletando notas boas para aumentar sua pontuação. Ao mesmo tempo, é necessário evitar notas ruins, que reduzem a nota do jogador. O objetivo final é alcançar a pontuação necessária para ser aprovado.

A aplicação utiliza uma estrutura simples de projeto web, composta por **HTML**, **JavaScript**, arquivos de imagem, fonte personalizada e a biblioteca **Phaser**. O arquivo `index.html` carrega a página do jogo, importa a biblioteca `phaser.js` e inicia o código principal localizado em `src/main.js`.

## Participantes

- [Gustavo Knorre](https://github.com/GKnorre)
- [Kevin Lee](https://github.com/kevinnleee)
- [Ricardo D'Ávila](https://github.com/tec-ricardo)

## Objetivos do Projeto

O objetivo principal do projeto é desenvolver um jogo 2D funcional utilizando a biblioteca Phaser, explorando conceitos de lógica de programação, interatividade e desenvolvimento front-end.

Entre os principais objetivos do projeto estão:

- Desenvolver um jogo 2D executável no navegador.
- Utilizar o Phaser como engine principal do projeto.
- Trabalhar com estrutura de cenas, elementos visuais e lógica de jogo.
- Aplicar conceitos de HTML, JavaScript e organização de arquivos web.
- Implementar movimentação do personagem por meio de interação do usuário.
- Criar um sistema de pontuação baseado em notas boas e notas ruins.
- Implementar colisões entre jogador, itens coletáveis e obstáculos.
- Criar telas diferentes para início do jogo, regras, vitória e derrota.
- Trabalhar com sprites, imagens, animações e elementos visuais em estilo pixel art.
- Praticar o desenvolvimento de um projeto interativo com começo, meio e fim.

## Configuração do Projeto

Para executar o projeto corretamente, é recomendado abrir o jogo por meio de um servidor local, evitando problemas no carregamento de arquivos JavaScript, imagens e fontes.

### Opção recomendada: Visual Studio Code com Live Server

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto no **Visual Studio Code**.
3. Instale a extensão **Live Server**, caso ainda não tenha.
4. Abra o arquivo `index.html`.
5. Clique com o botão direito no arquivo.
6. Selecione **Open with Live Server**.
7. O jogo será aberto automaticamente no navegador.

## Mais Informações

### Como Jogar

Na tela inicial, o jogador encontra a mensagem **"Toque para estudar!"** e pode iniciar a partida tocando na tela. Abaixo da mensagem inicial também existe o botão **"VER REGRAS"**, que leva o jogador para uma tela com as instruções principais do jogo.

Durante a partida:

- Toque na tela para fazer o morcego subir.
- Desvie dos espinhos para continuar jogando.
- Colete notas boas para aumentar sua nota.
- Evite notas ruins, pois elas diminuem sua nota.
- O jogo começa com nota **10**.
- Cada nota boa aumenta a pontuação.
- Cada nota ruim diminui a pontuação.
- Se a nota chegar a **6 ou menos**, o jogador reprova.
- Se a nota chegar a **25 ou mais**, o jogador é aprovado.

# Licença

Este projeto é licenciado sob a [MIT License](https://github.com/tech-espm/labs-3sem-2026-grade-collector/blob/main/LICENSE).

<p align="right">
    <a href="https://www.espm.br/cursos-de-graduacao/sistemas-de-informacao/"><img src="https://raw.githubusercontent.com/tech-espm/misc-template/main/logo-si-512.png" alt="Sistemas de Informação ESPM" style="width: 375px;"/></a>
</p>
