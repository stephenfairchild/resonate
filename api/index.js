require('dotenv').config()
const cloudinary = require('cloudinary');
const upload = require('./_upload');
const get = require('./_get');

module.exports = async (request, response) => {
    const app = request.headers["x-app-id"];

    if (!app) {
        throw new Error("An `x-app-id` Header must be specified.")
    }

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
        secure: true,
    });

    if (request.method === "POST") {
        try {
            const results = await upload(app, cloudinary, request);
            return response.status(200).json({ data: results });
        } catch (err) {
            throw new Error("Unable to upload to Cloudinary.")
        }
    }

    if (request.method === "GET") {
        let params = {};

        if (request.query.identity) {
            params.identity = request.query.identity
        }

        const results = await get(app, cloudinary, params);
        return response.status(200).json({ data: results });
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
};
