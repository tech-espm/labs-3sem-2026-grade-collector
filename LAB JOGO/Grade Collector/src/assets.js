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
        nota_boa: {
            key: 'nota_boa',
            args: ['assets/coin.png', {
                frameWidth: 54,
                frameHeight: 36
            }]
        },
        nota_ruim: {
            key: 'nota_ruim',
            args: ['assets/coin.png', {
                frameWidth: 54,
                frameHeight: 36
            }]
        },

    }
};