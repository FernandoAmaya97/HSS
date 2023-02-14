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

    const {correo, password, nombre, oficio, dc, direccion, ciudad, estado, cp} = req.body;
    const createdAt = new Date().toISOString();
    const id = v4();

    const newProv = {
        id, 
        correo,
        password,
        nombre,
        oficio,
        dc,
        direccion,
        ciudad,
        estado,
        cp,
        createdAt,
    };

    await dynamodb
    .put({
        TableName: "proveedor",
        Item: newProv,
    })
    .promise();
    console.log(req.body);
    res.render('proveedores/login_prov')
};

provCntrl.renderLoginProv = (req, res) => {
    res.render('proveedores/login_prov')
};

module.exports = provCntrl;