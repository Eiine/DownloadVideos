import youtubedl from "youtube-dl-exec";
const download = (list) => {
  // URL del video que deseas descargar

  const downloadI = async (url, option) => {
    // Ejecutar la descarga
    await youtubedl(url, option)
      .then((output) => {
        console.log("Video descargado:", output);
      })
      .catch((error) => {
        console.error("Error al descargar el video:", error.message);
      });
  };

  list.forEach(async (element) => {
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
    await downloadI(element, YtFlags);
    console.log("operacion finalizada");
  });
};
export { download };
