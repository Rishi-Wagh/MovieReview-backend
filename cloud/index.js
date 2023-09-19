const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dhxv2d1c0",
  api_key: "251535423591269",
  api_secret:  "cJTQ9lZYtTKUW-62bpX4f_O4xrg",
  secure: true,
});

module.exports = cloudinary;
