export class GameOver extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }

    create() {
        // Fundo
        this.add.image(0, 0, 'background').setOrigin(0);

        // Mensagem de Reprovado
        this.add.text(this.scale.width * 0.5, this.scale.height * 0.4, 'REPROVADO', {
            fontFamily: 'Arial Black', fontSize: 80, color: '#ff0000',
            stroke: '#000000', strokeThickness: 12,
            align: 'center'
        }).setOrigin(0.5);

        this.add.text(this.scale.width * 0.5, this.scale.height * 0.6, 'Toque para tentar a recuperação', {
            fontFamily: 'Arial Black', fontSize: 32, color: '#ffffff',
            stroke: '#000000', strokeThickness: 6,
            align: 'center'
        }).setOrigin(0.5);

        // Reiniciar o jogo ao clicar
        this.input.once('pointerdown', () => {
            this.scene.start('Game');
        });
    }
}