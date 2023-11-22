import { downloadPath, rootPath } from "./alias.js";
import fs from "fs";
import path from "path";

const garbageCollecto = async () => {
  const deletFile = fs.readdirSync(downloadPath);
  const total = [];
  deletFile.forEach((element) => {
    if (element.includes(".mp4")) {
      fs.rmSync(path.join(downloadPath, element));
    }
  });
  console.log("File delete");
};

export { garbageCollecto };
