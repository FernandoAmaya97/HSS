const fs = require('fs');
const S3 = require('aws-sdk/clients/s3');

const s3 = new S3({
    region: process.env.REGION,
    accessKeyId: process.env.ID,
    secretAccessKey: process.env.KEY
});

//subir fotos de perfil a s3
function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: 'hss-profileimages',
        Body: fileStream,
        Key: file.filename,
        acl: 'public-rea' //Agregamos que ACL para hacer publica la imagen
    }

    return s3.upload(uploadParams).promise()
}
exports.uploadFile = uploadFile;

