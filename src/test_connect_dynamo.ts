import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import AWS from 'aws-sdk';

export const hello: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {

    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    dynamoDb.get({
        TableName: "TableName",
        Key: { HK: "test", RK: "test" },
    }, (err, result) => {

        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
                dynamo: result.Item
            }),
        };

        cb(null, response);
    })

}