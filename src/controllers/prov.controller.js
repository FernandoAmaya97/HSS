const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const provCntrl = {};

provCntrl.renderFormProv = (req, res) => {
    res.render('proveedores/new_proveedor');
};

provCntrl.createNewProv = async(req, res) => {

    AWS.config.update({
        region: 'us-east-1'
      });      

    const dynamodb = new AWS.DynamoDB.DocumentClient(); //intenta conectarse a dynamodb

    const {nombre, oficio, dc} = req.body;
    const createdAt = new Date().toISOString();
    const id = v4();

    const newProv = {
        id, 
        nombre,
        oficio,
        dc,
        createdAt,
    };

    await dynamodb
    .put({
        TableName: "proveedor",
        Item: newProv,
    })
    .promise();

    res.status(200).json(newProv);
};

module.exports = provCntrl;