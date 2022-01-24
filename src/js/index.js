import '../css/index.css';
import { obtenerDescripcion, generarId } from './grid-config/generate-id-for-onekey';
import { DrumKeys } from './classes/drum-keys';

/* 
   Este codigo solo lo use para generar un id unico para cada key de la bateria sin tener que escribirlo 
   uno por uno: 
*/
export const keysDescription = [...obtenerDescripcion()];
generarId(keysDescription);

const drumKeys = [(new DrumKeys(0)), (new DrumKeys(1)), (new DrumKeys(2)),
(new DrumKeys(3)), (new DrumKeys(4)), (new DrumKeys(5)),
(new DrumKeys(6)), (new DrumKeys(7)), (new DrumKeys(8))];

const nodeElementDrumAudios = drumKeys.map((key) => {
   const node = document.createElement('audio');
   node.src = `../assets/sounds/${key.sound}`;
   node.title = (key.keyValue).toLowerCase();
   return node;
});

const authenticateKeyCodePress = (keyCode) => {

   switch (keyCode) {

      case 65:
         return 0;
      case 83:
         return 1;
      case 68:
         return 2;
      case 70:
         return 3;
      case 71:
         return 4;
      case 72:
         return 5;
      case 74:
         return 6;
      case 75:
         return 7;
      case 76:
         return 8;
      default:
         return null;
   }

}

const keyHtmlElememnts = document.querySelectorAll('.keys');

window.addEventListener('keydown', (e) => {
   /*    const keyNumber = authenticateKeyCodePress(e.keyCode);
      if (keyNumber) { */
   try {
      keyHtmlElememnts[authenticateKeyCodePress(e.keyCode)];
      nodeElementDrumAudios[authenticateKeyCodePress(e.keyCode)].currentTime = 0;
      nodeElementDrumAudios[authenticateKeyCodePress(e.keyCode)].play();
   } catch (error) {
      console.log('Esta presionando una tecla no disponible.');
   }
   /*  } */
});

keyHtmlElememnts.forEach(key => key.addEventListener('click', (e) => {
   const nodeAudioArray = nodeElementDrumAudios.filter((audio) => {
      if (audio.title == key.id) return audio;
   });
   nodeAudioArray[0].currentTime = 0;
   nodeAudioArray[0].play();
}));





