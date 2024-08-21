const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "dsv8ms6no",
    api_key: "871725542346379",
    api_secret: "THS48PxbgGZQ5RAlyFncTZPH-Zw"
})

let uploadImage = (path, originalname) => {
    return cloudinary.uploader.upload(
        path,
        { public_id: `${originalname}` },
        function (error, result) {
            return result;
        }
    );
};

module.exports = uploadImage;