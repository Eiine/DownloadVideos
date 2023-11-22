import { downloadI } from "../utils/downloadVideo.js";

const download = async (list) => {
  // Opciones de descarga (puedes personalizarlas según tus necesidades)
  const YtFlags = {
    format: "best[height<=720]+bestaudio/best[height<=720]", // Calidad media (720p) para video y mejor audio
    output: "%(title)s.%(ext)s", // Configura la plantilla de nombre de archivo
    //dumpSingleJson: true,
    //Extraxion de audio
    //format: "",
    // extractAudio: true,
    // audioFormat: "mp3",
    //output:"",
    //dumpSingleJson: true,
  };

  //Descarga del video
  await downloadI(list, YtFlags);
  return true;
};
export { download };
