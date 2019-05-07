/**
 * Auto-generated action file for "Entertainment Express" API.
 *
 * Generated at: 2019-05-07T14:42:31.216Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / iva-api-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'SearchCelebrityGet'
 * Endpoint Path: '/Celebrity/Search/'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "Package",
    "Ids",
    "Skip",
    "Take",
    "Includes",
    "Name",
    "FaceDetails_Age",
    "FaceDetails_Beard",
    "FaceDetails_Mustache",
    "FaceDetails_Emotions",
    "FaceDetails_Eyeglasses",
    "FaceDetails_Sunglasses",
    "FaceDetails_EyesOpen",
    "FaceDetails_MouthOpen",
    "FaceDetails_Gender",
    "FaceDetails_Smile",
    "MinImageHeight",
    "MinImageWidth",
    "ImageType",
    "ImageViolence",
    "ImageSexuality",
    "ImageTags",
    "OfficialImage",
    "ImageEntertainmentIds",
    "BirthName",
    "Gender",
    "BirthDate",
    "BirthYear",
    "BirthDayOfMonth",
    "BirthMonthOfYear",
    "DeathDayOfMonth",
    "DeathMonthOfYear",
    "ExternalId",
    "ExternalIdType",
    "ModifiedRecordsSince",
    "SortByTimeStamp",
    "IncludeDeleted"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "Package": "Package",
    "Ids": "Ids",
    "Skip": "Skip",
    "Take": "Take",
    "Includes": "Includes",
    "Name": "Name",
    "FaceDetails_Age": "FaceDetails_Age",
    "FaceDetails_Beard": "FaceDetails_Beard",
    "FaceDetails_Mustache": "FaceDetails_Mustache",
    "FaceDetails_Emotions": "FaceDetails_Emotions",
    "FaceDetails_Eyeglasses": "FaceDetails_Eyeglasses",
    "FaceDetails_Sunglasses": "FaceDetails_Sunglasses",
    "FaceDetails_EyesOpen": "FaceDetails_EyesOpen",
    "FaceDetails_MouthOpen": "FaceDetails_MouthOpen",
    "FaceDetails_Gender": "FaceDetails_Gender",
    "FaceDetails_Smile": "FaceDetails_Smile",
    "MinImageHeight": "MinImageHeight",
    "MinImageWidth": "MinImageWidth",
    "ImageType": "ImageType",
    "ImageViolence": "ImageViolence",
    "ImageSexuality": "ImageSexuality",
    "ImageTags": "ImageTags",
    "OfficialImage": "OfficialImage",
    "ImageEntertainmentIds": "ImageEntertainmentIds",
    "BirthName": "BirthName",
    "Gender": "Gender",
    "BirthDate": "BirthDate",
    "BirthYear": "BirthYear",
    "BirthDayOfMonth": "BirthDayOfMonth",
    "BirthMonthOfYear": "BirthMonthOfYear",
    "DeathDayOfMonth": "DeathDayOfMonth",
    "DeathMonthOfYear": "DeathMonthOfYear",
    "ExternalId": "ExternalId",
    "ExternalIdType": "ExternalIdType",
    "ModifiedRecordsSince": "ModifiedRecordsSince",
    "SortByTimeStamp": "SortByTimeStamp",
    "IncludeDeleted": "IncludeDeleted"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['ApiKeyHeader'] = cfg['ApiKeyHeader'];
    securities['ApiKeyQuery'] = cfg['ApiKeyQuery'];

    let callParams = {
        spec: spec,
        operationId: 'SearchCelebrityGet',
        pathName: '/Celebrity/Search/',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}