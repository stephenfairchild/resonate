module.exports = function(filename, destination) {
    if (!filename) {
        throw Error("You must provide a file to upload");
    }

    if(!filename.match(/\.(jpg|jpeg|png)$/i)) {
        throw Error("The file must have a valid photo extension");
    }

    if (!destination) {
        throw Error("You must provide a destination to upload to");
    }

    //await cloudinary.v2.uploader.upload(filename, {
    //  resource_type: "photo", 
    //  public_id: destination,
    //  overwrite: true, 
    //  notification_url: "https://mysite.example.com/notify_endpoint"
    //}, function(error, result) {
    //  console.log(result, error)
    //});

    return filename
}
