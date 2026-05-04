export default {
    'image': {
        spikes: {
            key: 'spikes',
            args: ['assets/spikes.png']
        },
    },
    'spritesheet': {
        bat: {
            key: 'bat',
            args: ['assets/bat.png', {
                frameWidth: 48,
                frameHeight: 48,
            }]
        },
        // Usaremos a mesma base para nota boa e ruim
        nota_boa0: {
            key: 'nota_boa0',
            args: ['assets/nota_boa0.png', {
                frameWidth: 36,
                frameHeight: 36
            }]
        },
        nota_boa1: {
            key: 'nota_boa1',
            args: ['assets/nota_boa1.png', {
                frameWidth: 36,
                frameHeight: 36
            }]
        },
        nota_ruim0: {
            key: 'nota_ruim0',
            args: ['assets/nota_ruim0.png', {
                frameWidth: 36,
                frameHeight: 36
            }]
        },
        nota_ruim1: {
            key: 'nota_ruim1',
            args: ['assets/nota_ruim1.png', {
                frameWidth: 36,
                frameHeight: 36
            }]
        },
    }
};