const multiparty = require("multiparty");
const { v1: uuid } = require('uuid');

/**
 * Uploads a file to the specified app
 * @param {string} app - The title of the app
 * @param Object cloudinary - The Cloudinary instance
 * @param Object request - The request object
 */
module.exports = async (app, cloudinary, request) => {
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

    const cloudinaryResponse = await new Promise((resolve, reject) => {
        const identity = uuid();
        cloudinary.v2.uploader.upload(photoPath, {public_id: `${app}/${identity}`}, function(error, result) {
            if (error) {
                reject(error)
            }

            resolve(result)
        });
    })

    return cloudinaryResponse;
}
