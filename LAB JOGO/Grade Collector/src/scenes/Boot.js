import ASSETS from '../assets.js';

export class Boot extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        // Carrega o fundo
        this.load.image('background', 'assets/background.png');

        // Carrega os outros assets do assets.js
        for (let type in ASSETS) {
            for (let key in ASSETS[type]) {
                let assetData = ASSETS[type][key];
                this.load[type](assetData.key, ...assetData.args);
            }
        }
    }

    create() {
        this.scene.start('Game');
    }
}