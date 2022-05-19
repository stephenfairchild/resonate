const {uploadService} = require("../../services");
const cloudinary = require('cloudinary');

cloudinary.v2.uploader.upload = jest.fn().mockResolvedValue({
    success: true
});

describe('Upload photo service', function() {
    it("must have a file specified to upload", async () => {
        const t = async () => uploadService();
        expect(t).rejects.toThrowError("You must provide a file to upload")
    })

    it("file name cannot be empty string", async function() {
        const t = async () => uploadService("");
        expect(t).rejects.toThrowError("You must provide a file to upload")
    })

    it("must have a valid photo extension", async function() {
        let t = async () => uploadService("../fixtures/photo.txt");
        expect(t).rejects.toThrowError("The file must have a valid photo extension")

        t = () => uploadService("../txt/jpg/photo.bak")
        expect(t).rejects.toThrowError("The file must have a valid photo extension")
    })

    it("can upload a file", async function() {
        const t = uploadService("../fixtures/photo.jpg", "some-destination")
        await expect(t).resolves.toEqual("../fixtures/photo.jpg")
    })
})
