export class GameWin extends Phaser.Scene {
    constructor() {
        super('GameWin');
    }

    create() {
        // Fundo
        this.add.image(0, 0, 'background').setOrigin(0);

        // Mensagem de Reprovado
        this.add.text(this.scale.width * 0.5, this.scale.height * 0.4, 'APROVADO', {
            fontFamily: 'PressStart2P', fontSize: 80, color: '#00ff00',
            stroke: '#000000', strokeThickness: 12,
            align: 'center'
        }).setOrigin(0.5);

        this.add.text(this.scale.width * 0.5, this.scale.height * 0.6, 'Toque para tentar reiniciar', {
            fontFamily: 'PressStart2P', fontSize: 32, color: '#ffffff',
            stroke: '#000000', strokeThickness: 6,
            align: 'center'
        }).setOrigin(0.5);

        // Reiniciar o jogo ao clicar
        this.input.once('pointerdown', () => {
            this.scene.start('Game');
        });
    }
}