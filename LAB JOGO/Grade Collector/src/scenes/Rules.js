export class Rules extends Phaser.Scene {
    constructor() {
        super('Rules');
    }

    create() {
        this.add.image(0, 0, 'background').setOrigin(0);

        this.add.text(this.scale.width * 0.5, 90, 'REGRAS DO JOGO', {
            fontFamily: 'PressStart2P', fontSize: 48, color: '#ffff00',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        const rulesText = [
            '1. Toque na tela para fazer o personagem subir.',
            '2. Desvie dos espinhos.',
            '3. Colete suas prioridades para aumentar sua nota.',
            '4. Evite o Roblox e o Tiktok, eles diminuem sua nota.',
            '5. Se sua nota chegar a 6 ou menos, voce reprova.',
            '6. Chegue a 20 pontos para ser aprovado!'
        ].join('\n\n');

        this.add.text(this.scale.width * 0.5, 320, rulesText, {
            fontFamily: 'PressStart2P', fontSize: 22, color: '#ffffff',
            stroke: '#000000', strokeThickness: 5,
            align: 'left',
            lineSpacing: 2.5,
            wordWrap: { width: 1040 }
        }).setOrigin(0.5);

        this.createButton(this.scale.width * 0.5 - 220, 620, 'VOLTAR', () => {
            this.scene.start('Game');
        });

        this.createButton(this.scale.width * 0.5 + 220, 620, 'JOGAR', () => {
            this.scene.start('Game');
        });
    }

    createButton(x, y, label, callback) {
        const button = this.add.rectangle(x, y, 340, 70, 0x000000, 0.75)
            .setStrokeStyle(4, 0xffffff)
            .setInteractive({ useHandCursor: true });

        const text = this.add.text(x, y, label, {
            fontFamily: 'PressStart2P', fontSize: 24, color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);

        button.on('pointerover', () => {
            button.setFillStyle(0x333333, 0.9);
            text.setColor('#ffff00');
        });

        button.on('pointerout', () => {
            button.setFillStyle(0x000000, 0.75);
            text.setColor('#ffffff');
        });

        button.on('pointerdown', callback);
    }
}
