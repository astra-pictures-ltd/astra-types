export var UploadTypes;
(function (UploadTypes) {
    UploadTypes["LINK"] = "link";
    UploadTypes["CLOUDINARY"] = "cloudinary";
})(UploadTypes || (UploadTypes = {}));
export var MediaSize;
(function (MediaSize) {
    MediaSize["ORIGINAL"] = "auto";
    MediaSize[MediaSize["SMALL"] = 0.25] = "SMALL";
    MediaSize[MediaSize["MEDIUM"] = 0.4] = "MEDIUM";
    MediaSize[MediaSize["LARGE"] = 0.5] = "LARGE";
    MediaSize[MediaSize["EXTRALARGE"] = 0.8] = "EXTRALARGE";
})(MediaSize || (MediaSize = {}));
