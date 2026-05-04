import ASSETS from './assets.js';

export default {
    'bat': 
    {
        key: 'bat',
        texture: ASSETS.spritesheet.bat.key,
        frameRate: 10,
        repeat: -1
    },
    'nota_boa0_anim': // Uma única animação para os sprites de nota
    {
        key: 'nota_boa0_anim',
        texture: ASSETS.spritesheet.nota_boa0.key,
        frameRate: 5,
        repeat: -1
    },
    'nota_boa1_anim': // Uma única animação para os sprites de nota
    {
        key: 'nota_boa1_anim',
        texture: ASSETS.spritesheet.nota_boa1.key,
        frameRate: 5,
        repeat: -1
    },
    'nota_ruim0_anim': // Uma única animação para os sprites de nota
    {
        key: 'nota_ruim0_anim',
        texture: ASSETS.spritesheet.nota_ruim0.key,
        frameRate: 5,
        repeat: -1
    },
    'nota_ruim1_anim': // Uma única animação para os sprites de nota
    {
        key: 'nota_ruim1_anim',
        texture: ASSETS.spritesheet.nota_ruim1.key,
        frameRate: 5,
        repeat: -1
    },
};