const sharp = require("sharp");
exports.upload = async function (files, folder) {
  const splitName = files["file"]["name"].split(".");
  const extension = splitName[splitName.length - 1];
  const fileName = new Date().getTime();

  switch (extension) {
    case "png":
      await sharp(files["file"]["path"])
        .resize(350)
        .png({ quality: 50 })
        .toFile(folder + "/" + fileName + "." + extension);
      break;

    case "jpeg":
    case "jpg":
      await sharp(files["file"]["path"])
        .resize(350)
        .jpeg({ quality: 50 })
        .toFile(folder + "/" + fileName + "." + extension);
      break;
    default:
      throw new Error("Extenão não aceita");
      break;
  }
};
