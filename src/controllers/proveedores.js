const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const addProv = async(event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient(); //intenta conectarse a dynamodb

    const {nombre, oficio, dc} = JSON.parse(event.body);
    const createdAt = new Date();
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

    return {
        statusCode: 200,
        body: JSON.stringify(newProv),
    };
};

module.exports = {
    addProv,
};