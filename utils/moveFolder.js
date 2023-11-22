import fs from "fs";
import path from "path";
import { downloadPath, rootPath } from "./alias.js";

const moveFolder = () => {
  const data = fs.readdirSync(rootPath);

  const files = data.filter((item) => item.includes(".mp4"));
  files.forEach((file) => {
    let origin = path.join(rootPath, file);
    let destiny = path.join(downloadPath, file);
    fs.renameSync(origin, destiny);
  });
  return files;
};

export { moveFolder };
