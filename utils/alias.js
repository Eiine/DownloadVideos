import { fileURLToPath } from "url";
import path from "path";
const moduleURL = import.meta.url;

// Convertir la URL a una ruta de archivo
const filePath = fileURLToPath(moduleURL);
const parentDirectoryPath = path.dirname(filePath);
const rootPath = path.join(parentDirectoryPath, "..");
const downloadPath = path.join(rootPath, "/download");

export { rootPath, downloadPath };
