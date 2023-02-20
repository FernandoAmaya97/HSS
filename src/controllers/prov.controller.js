const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const fs = require('fs');
const { uploadFile } = require('../aws/s3');

const provCntrl = {};

// Renderiza el formulario para crear un nuevo proveedor
provCntrl.renderFormProv = (req, res) => {
    res.render('proveedores/new_proveedor');
};

// Maneja la creación de un nuevo proveedor
provCntrl.createNewProv = async(req, res) => {     

    const dynamodb = new AWS.DynamoDB.DocumentClient({
        region: process.env.REGION,
        accessKeyId: process.env.ID,
        secretAccessKey: process.env.KEY
    }); //intenta conectarse a dynamodb

    const {correo, password, nombre, oficio, dc, direccion, ciudad, estado, cp} = req.body;
    const createdAt = new Date().toISOString();
    const id = v4();

    console.log(req.file);
    const result = await uploadFile(req.file)
    console.log(result['Location']);

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
        'createdAt': createdAt,
        'urlFoto': result['Location']
    };

    const params = {
        TableName: "proveedor",
        Item: newProv,
    };

    try {
        await dynamodb.put(params).promise();
        console.log("Success");
        res.render('proveedores/login_prov');
    } catch (err) {
        console.log("Error", err);
        res.status(500).send("Error al crear el proveedor");
    }
};

provCntrl.renderLoginProv = (req, res) => {
    res.render('proveedores/login_prov');
};

module.exports = provCntrl;
