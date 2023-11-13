import ytdl from "ytdl-core";
import fs from "fs";

const download = async (url) => {
  try {
    // Configuración opcional
    const options = {
      quality: "highest",
      filter: "audioandvideo",
    };

    // Descarga del video
    const videoStream = ytdl(url, options).pipe(
      fs.createWriteStream("video.mp4")
    );
  } catch (error) {
    console.error("Error:", error);
  }
};

export { download };
