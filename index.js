import { download } from "./script_download/script-1.js";
import { moveFolder } from "./utils/moveFolder.js";
import { convertVideo } from "./utils/ConverVideo.js";
import { garbageCollecto } from "./utils/garbagecollector.js";
const list = ["https://www.youtube.com/watch?v=WdDg-5u4QZc"];

const downloadResult = async () => {
  let final = 0;

  do {
    const result = await download(list[final]);

    if (result == true) {
      final++;
    }
  } while (list.length > final);

  //Se encarga de mover los videos a su nueva carpeta
  const file = moveFolder();
  const result = await convertVideo(file);

  //la funcion garbage_collector se encarga de eliminar los archivos originales
  garbageCollecto();
};
downloadResult();
