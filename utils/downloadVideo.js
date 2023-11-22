import youtubedl from "youtube-dl-exec";

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

export { downloadI };
