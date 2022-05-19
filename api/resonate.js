require('dotenv').config()
const multiparty = require("multiparty");
const cloudinary = require('cloudinary');

module.exports = async (request, response) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
        secure: true,
    });

    if (request.method === "POST") {
        const form = new multiparty.Form();
        const data = await new Promise((resolve, reject) => {
            form.parse(request, function (err, fields, files) {
                if (err) reject({ err });
                if (files.length > 1) {
                    throw new Error("We currently only support uploading a single file.")
                }

                resolve({ fields, files });
            });
        });

        let photoPath = data.files.photo[0].path
        const result = await new Promise((resolve, reject) => {
            cloudinary.v2.uploader.upload(photoPath, function(error, result) {
                if (error) {
                    console.log(JSON.stringify(error))
                    throw new Error("Unable to upload to Cloudinary. Check the logs")
                }

                resolve(result)
            });
        })

        return response.status(200).json({ data: result });
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
};
