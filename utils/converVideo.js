import ffmpeg from "fluent-ffmpeg";
import path from "path";
import { downloadPath, rootPath } from "./alias.js";
import EventEmitter from "events";
const emitter = new EventEmitter();
ffmpeg.setFfmpegPath(
  path.join(rootPath, "/utils", "/ffmpeg", "/bin", "ffmpeg.exe")
);
const convertVideo = async (list) => {
  return new Promise((resolve, reject) => {
    const conversionPromises = list.map((file) => {
      return new Promise((resolveConversion, rejectConversion) => {
        const inputPath = path.join(downloadPath, `${file}`);
        const outputPath = path.join(downloadPath, "/converts", `${file}`);
        ffmpeg(inputPath)
          .size("720x480")
          .output(outputPath)
          .on("end", () => {
            console.log(`Conversión completa para ${file}`);
            resolveConversion();
          })
          .on("error", (err) => {
            console.error(`Error en la conversión para ${file}:`, err);
            rejectConversion(err);
          })
          .run();
      });
    });

    // Esperar a que todas las conversiones se completen
    Promise.all(conversionPromises)
      .then(() => {
        console.log("Todas las conversiones completadas");
        resolve("Todas las conversiones completadas");
      })
      .catch((error) => {
        console.error("Error durante las conversiones:", error);
        reject(error);
      });
  });
};

export { convertVideo };
