const formidable = require("formidable");
const path = require("path");
const { upload } = require("../helpers/upload");

exports.upload = function (request, response) {
  const form = formidable();

  form.parse(request, async (err, fields, files) => {
    try {
      if (err) {
        next(err);
        return;
      }

      const folder = path.join(__dirname, "../../frontend", "src", "uploads");

      await upload(files, folder);

      response.json("uploaded");
    } catch (error) {
      console.log(error);
    }
  });
};
