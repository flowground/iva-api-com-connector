/**
 * Auto-generated action file for "Entertainment Express" API.
 *
 * Generated at: 2019-05-07T14:42:31.223Z
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
 * Operation: 'SearchEntertainmentGet'
 * Endpoint Path: '/Entertainment/Search/'
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
    "Ids",
    "Skip",
    "Take",
    "Providers",
    "DeliveryMethods",
    "OfferTypes",
    "VideoQualities",
    "ProgramTypes",
    "AvailabilityCountries",
    "Genres",
    "Tags",
    "Certifications",
    "PersonNames",
    "PeopleIds",
    "Jobs",
    "ReleaseTypes",
    "ReleaseCountries",
    "YearRange_Start",
    "YearRange_End",
    "ReleaseDateRange_Start",
    "ReleaseDateRange_End",
    "OriginalReleaseDateRange_Start",
    "OriginalReleaseDateRange_End",
    "Package",
    "Title",
    "ShowId",
    "SeasonId",
    "Includes",
    "Culture",
    "ExternalId",
    "ExternalIdType",
    "HasVideo",
    "VideoId",
    "VideoTargetCountries",
    "VideoTargetLanguages",
    "SortByTimeStamp",
    "SortBy",
    "ModifiedRecordsSince",
    "OriginatingNetworks",
    "Status",
    "Revenue",
    "Budget",
    "Minimum_IvaRating",
    "Minimum_EncodeDate",
    "IncludeDeleted",
    "TrendSourceIds",
    "TrendBrands",
    "TrendCountries",
    "TrendListClassifiers"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "Ids": "Ids",
    "Skip": "Skip",
    "Take": "Take",
    "Providers": "Providers",
    "DeliveryMethods": "DeliveryMethods",
    "OfferTypes": "OfferTypes",
    "VideoQualities": "VideoQualities",
    "ProgramTypes": "ProgramTypes",
    "AvailabilityCountries": "AvailabilityCountries",
    "Genres": "Genres",
    "Tags": "Tags",
    "Certifications": "Certifications",
    "PersonNames": "PersonNames",
    "PeopleIds": "PeopleIds",
    "Jobs": "Jobs",
    "ReleaseTypes": "ReleaseTypes",
    "ReleaseCountries": "ReleaseCountries",
    "YearRange_Start": "YearRange_Start",
    "YearRange_End": "YearRange_End",
    "ReleaseDateRange_Start": "ReleaseDateRange_Start",
    "ReleaseDateRange_End": "ReleaseDateRange_End",
    "OriginalReleaseDateRange_Start": "OriginalReleaseDateRange_Start",
    "OriginalReleaseDateRange_End": "OriginalReleaseDateRange_End",
    "Package": "Package",
    "Title": "Title",
    "ShowId": "ShowId",
    "SeasonId": "SeasonId",
    "Includes": "Includes",
    "Culture": "Culture",
    "ExternalId": "ExternalId",
    "ExternalIdType": "ExternalIdType",
    "HasVideo": "HasVideo",
    "VideoId": "VideoId",
    "VideoTargetCountries": "VideoTargetCountries",
    "VideoTargetLanguages": "VideoTargetLanguages",
    "SortByTimeStamp": "SortByTimeStamp",
    "SortBy": "SortBy",
    "ModifiedRecordsSince": "ModifiedRecordsSince",
    "OriginatingNetworks": "OriginatingNetworks",
    "Status": "Status",
    "Revenue": "Revenue",
    "Budget": "Budget",
    "Minimum_IvaRating": "Minimum_IvaRating",
    "Minimum_EncodeDate": "Minimum_EncodeDate",
    "IncludeDeleted": "IncludeDeleted",
    "TrendSourceIds": "TrendSourceIds",
    "TrendBrands": "TrendBrands",
    "TrendCountries": "TrendCountries",
    "TrendListClassifiers": "TrendListClassifiers"
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
        operationId: 'SearchEntertainmentGet',
        pathName: '/Entertainment/Search/',
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