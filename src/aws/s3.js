const fs = require('fs');
const S3 = require('aws-sdk/clients/s3');

const s3 = new S3({
    region: 'us-east-1',
        accessKeyId: 'AKIAV2APQYE427U2EQ6P',
        secretAccessKey: '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'
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

