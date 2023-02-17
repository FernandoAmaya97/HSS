const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const provCntrl = {};

provCntrl.renderFormProv = (req, res) => {
    res.render('proveedores/new_proveedor');
};

provCntrl.createNewProv = async(req, res) => {     

    const dynamodb = new AWS.DynamoDB.DocumentClient({
        region: 'us-east-1',
        accessKeyId: 'AKIAV2APQYE42MDOVC5O',
        secretAccessKey: '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'
    }); //intenta conectarse a dynamodb

    const {correo, password, nombre, oficio, dc, direccion, ciudad, estado, cp} = req.body;
    const createdAt = new Date().toISOString();
    const id = v4();
    
    const newProv = {
        'id': id,
        'correo': correo,
        'password': password,
        'nombre': nombre,
        'oficio': oficio,
        'dc': dc,
        'direccion': direccion,
        'ciudad': ciudad,
        'estado': estado,
        'cp': cp,
        'createdAt': createdAt
    };

    const params = {
        TableName: "proveedor",
        Item: newProv,
    };
    await dynamodb.put(params, function(err, data) {
        if(err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    })
    .promise();
    console.log(req.body);
    res.render('proveedores/login_prov')
};

provCntrl.renderLoginProv = (req, res) => {
    res.render('proveedores/login_prov')
};

module.exports = provCntrl;