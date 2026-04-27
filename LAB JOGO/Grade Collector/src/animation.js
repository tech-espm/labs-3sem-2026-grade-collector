import ASSETS from './assets.js';

export default {
    'bat': 
    {
        key: 'bat',
        texture: ASSETS.spritesheet.bat.key,
        frameRate: 10,
        repeat: -1
    },
    'nota_anim': // Uma única animação para os sprites de nota
    {
        key: 'nota_anim',
        texture: ASSETS.spritesheet.nota_boa.key,
        frameRate: 5,
        repeat: -1
    },
};