const {uploadService} = require("../../services");

describe('Upload photo service', function() {
    it("must have a file specified to upload", async function() {
        expect(() => uploadService()).toThrowError("You must provide a file to upload")
    })

    it("file name cannot be empty string", async function() {
        expect(() => uploadService("")).toThrowError("You must provide a file to upload")
    })

    it("must have a valid photo extension", async function() {
        expect(() => uploadService("../fixtures/photo.txt")).toThrowError("The file must have a valid photo extension")
        expect(() => uploadService("../txt/jpg/photo.bak")).toThrowError("The file must have a valid photo extension")
    })

    it("can upload a file", async function() {
        expect(uploadService("../fixtures/photo.jpg", "some-destination")).toEqual("../fixtures/photo.jpg")
    })
})
