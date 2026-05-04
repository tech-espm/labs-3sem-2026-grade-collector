import ASSETS from '../assets.js';
import ANIMATION from '../animation.js';

export class Game extends Phaser.Scene {
    constructor() {
        super('Game');
        this.centreX;
        this.centreY;
        this.pathY;
        this.pathOffset = 0;
        this.pathOffsetTarget = 0;
        this.pathOffsetMax = 100;
        this.pathHeight = 300;
        this.pathHeightTarget = 300;
        this.pathHeightMin = 50;
        this.pathHeightMax = 200;

        this.score = 10; // Alterado: Começa com 10
        this.distance = 0;
        this.distanceMax = 200;
        this.flyVelocity = -200;
        this.backgroundSpeed = 4;
        this.coinDistance = 10;
        this.coinDistanceMax = 150;
        this.spikeDistance = 0;
        this.spikeDistanceMax = 18;

        this.gameStarted = false;
    }

    create() {
        this.score = 10; // Resetar para 10 ao iniciar
        this.centreX = this.scale.width * 0.5;
        this.centreY = this.scale.height * 0.5;
        this.pathHeight = this.pathHeightMax;

        this.cameras.main.setBackgroundColor(0x000000);

        this.background1 = this.add.image(0, 0, 'background').setOrigin(0);
        this.background2 = this.add.image(this.background1.width, 0, 'background').setOrigin(0);

        this.tutorialText = this.add.text(this.centreX, this.centreY - 50, 'Toque para estudar!', {
            fontFamily: 'PressStart2P', fontSize: 42, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.scoreText = this.add.text(this.centreX, 50, 'Nota: 10', {
            fontFamily: 'PressStart2P', fontSize: 32, color: '#ffff00',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setDepth(100);

        this.initAnimations();
        this.initPlayer();
        this.initInput();
        this.initPhysics();
    }

    update() {
        this.background1.x -= this.backgroundSpeed;
        this.background2.x -= this.backgroundSpeed;

        if (this.background1.x + this.background1.width < 0) {
            this.background1.x += (this.background1.width * 2);
        }
        if (this.background2.x + this.background2.width < 0) {
            this.background2.x += (this.background2.width * 2);
        }

        if (!this.gameStarted) return;

        this.distance += this.backgroundSpeed;
        this.coinDistance += this.backgroundSpeed;
        this.spikeDistance += this.backgroundSpeed;

        if (this.distance > this.distanceMax) {
            this.distance -= this.distanceMax;
            this.randomPath();
        }

        if (this.coinDistance > this.coinDistanceMax) {
            this.coinDistance -= this.coinDistanceMax;
            this.addGrade();
        }

        if (this.spikeDistance > this.spikeDistanceMax) {
            this.spikeDistance -= this.spikeDistanceMax;
            this.addSpike();
        }

        this.coinGroup.getChildren().forEach(coin => {
            coin.x -= this.backgroundSpeed;
            coin.refreshBody();
            if (coin.x < -50) coin.destroy();
        });

        this.obstacleGroup.getChildren().forEach(obstacle => {
            obstacle.x -= this.backgroundSpeed;
            obstacle.refreshBody();
            if (obstacle.x < -50) obstacle.destroy();
        });

        this.updatePath();
    }

    randomPath() {
        this.pathOffsetTarget = Phaser.Math.RND.between(-this.pathOffsetMax, this.pathOffsetMax);
        this.pathHeightTarget = Phaser.Math.RND.between(this.pathHeightMin, this.pathHeightMax);
    }

    updatePath() {
        const d1 = this.pathOffsetTarget - this.pathOffset;
        const d2 = this.pathHeightTarget - this.pathHeight;
        this.pathOffset += d1 * 0.01;
        this.pathHeight += d2 * 0.01;
        this.pathY = this.centreY + this.pathOffset;
    }

    initAnimations() {
        if (!this.anims.exists(ANIMATION.bat.key)) {
            this.anims.create({
                key: ANIMATION.bat.key,
                frames: this.anims.generateFrameNumbers(ANIMATION.bat.texture),
                frameRate: ANIMATION.bat.frameRate,
                repeat: ANIMATION.bat.repeat
            });
        }
        if (!this.anims.exists(ANIMATION.nota_boa0_anim.key)) {
            this.anims.create({
                key: ANIMATION.nota_boa0_anim.key,
                frames: this.anims.generateFrameNumbers(ANIMATION.nota_boa0_anim.texture),
                frameRate: ANIMATION.nota_boa0_anim.frameRate,
                repeat: ANIMATION.nota_boa0_anim.repeat
            });
        }
        if (!this.anims.exists(ANIMATION.nota_boa1_anim.key)) {
            this.anims.create({
                key: ANIMATION.nota_boa1_anim.key,
                frames: this.anims.generateFrameNumbers(ANIMATION.nota_boa1_anim.texture),
                frameRate: ANIMATION.nota_boa1_anim.frameRate,
                repeat: ANIMATION.nota_boa1_anim.repeat
            });
        }
        if (!this.anims.exists(ANIMATION.nota_ruim0_anim.key)) {
            this.anims.create({
                key: ANIMATION.nota_ruim0_anim.key,
                frames: this.anims.generateFrameNumbers(ANIMATION.nota_ruim0_anim.texture),
                frameRate: ANIMATION.nota_ruim0_anim.frameRate,
                repeat: ANIMATION.nota_ruim0_anim.repeat
            });
        }
        if (!this.anims.exists(ANIMATION.nota_ruim1_anim.key)) {
            this.anims.create({
                key: ANIMATION.nota_ruim1_anim.key,
                frames: this.anims.generateFrameNumbers(ANIMATION.nota_ruim1_anim.texture),
                frameRate: ANIMATION.nota_ruim1_anim.frameRate,
                repeat: ANIMATION.nota_ruim1_anim.repeat
            });
        }
    }

    initPhysics() {
        this.obstacleGroup = this.add.group();
        this.coinGroup = this.add.group();
        this.physics.add.overlap(this.player, this.obstacleGroup, this.hitObstacle, null, this);
        this.physics.add.overlap(this.player, this.coinGroup, this.collectGrade, null, this);
    }

    initPlayer() {
        this.player = this.physics.add.sprite(200, this.centreY, ASSETS.spritesheet.bat.key)
            .setDepth(100)
            .setCollideWorldBounds(true);
        this.player.anims.play(ANIMATION.bat.key, true);
    }

    initInput() {
        this.physics.pause();
        this.input.once('pointerdown', () => {
            this.startGame();
        });
    }

    startGame() {
        this.gameStarted = true;
        this.physics.resume();
        this.input.on('pointerdown', () => { this.fly(); });
        this.fly();
        this.tutorialText.setVisible(false);
    }

    addGrade() {
        // Inclui 0 e 10
        const isGood = Phaser.Math.RND.between(0, 10) > 3; 

        let assetKey;
        if (isGood) {
            assetKey = 'nota_boa' + Phaser.Math.RND.between(0, 1);
        } else {
            assetKey = 'nota_ruim' + Phaser.Math.RND.between(0, 1);
        }
        
        const grade = this.physics.add.staticSprite(this.scale.width + 50, this.pathY, assetKey);
        
        if (!isGood) {
            //grade.setTint(0xff0000); 
            grade.setData('value', -1);
        } else {
            grade.setData('value', 1);
        }

        grade.anims.play(assetKey + '_anim', true);
        this.coinGroup.add(grade);
    }

    addSpike() {
        const spikeTop = this.physics.add.staticSprite(this.scale.width + 50, this.pathY - this.pathHeight, 'spikes').setFlipY(true);
        const spikeBottom = this.physics.add.staticSprite(this.scale.width + 50, this.pathY + this.pathHeight, 'spikes');
        this.obstacleGroup.add(spikeTop);
        this.obstacleGroup.add(spikeBottom);
    }

    fly() {
        this.player.setVelocityY(this.flyVelocity);
    }

    hitObstacle(player, obstacle) {
        if (!this.gameStarted) return; // Evita múltiplas chamadas
        this.gameStarted = false;
        this.physics.pause();
        this.tweens.add({
            targets: this.player,
            scale: 3,
            alpha: 0,
            duration: 800,
            ease: Phaser.Math.Easing.Expo.Out
        });
        this.GameOver();
    }

    collectGrade(player, grade) {
        const val = grade.getData('value');
        this.score += val;
        
        this.scoreText.setText(`Nota: ${this.score}`);
        grade.destroy();

        // Nova condição: Se a nota for menor que 0, perde o jogo
        if (this.score < 0) {
            this.hitObstacle(this.player, null);
        } else if (this.score >= 15) {
            this.GameWin();
        }
    }

    GameOver() {
        this.time.delayedCall(1000, () => {
            this.scene.start('GameOver');
        });
    }

    GameWin() {
        
                if (!this.gameStarted) return; // Evita múltiplas chamadas
                this.gameStarted = false;
                this.physics.pause();
        this.scene.start('GameWin');
    }
}