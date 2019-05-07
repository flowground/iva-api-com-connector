/**
 * Auto-generated action file for "Entertainment Express" API.
 *
 * Generated at: 2019-05-07T14:42:31.254Z
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
 * Operation: 'GetTvMediaTeamListings'
 * Endpoint Path: '/TvGrid/teams/{TeamID}/listings'
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
    "TvMediaApiKey",
    "TeamID",
    "LineupID",
    "Start",
    "End",
    "TimeZone",
    "Channel",
    "ExcludeChan",
    "StartChan",
    "EndChan",
    "Station",
    "ExcludeStation",
    "Search",
    "ShowType",
    "ExcludeShowType",
    "Id",
    "SportType",
    "League",
    "Team",
    "NotYetStarted",
    "SportEventsOnly",
    "DescriptiveVideoOnly",
    "LiveOnly",
    "NewShowsOnly",
    "AdultContent",
    "DisplayArtwork",
    "Detail"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "TvMediaApiKey": "TvMediaApiKey",
    "TeamID": "TeamID",
    "LineupID": "LineupID",
    "Start": "Start",
    "End": "End",
    "TimeZone": "TimeZone",
    "Channel": "Channel",
    "ExcludeChan": "ExcludeChan",
    "StartChan": "StartChan",
    "EndChan": "EndChan",
    "Station": "Station",
    "ExcludeStation": "ExcludeStation",
    "Search": "Search",
    "ShowType": "ShowType",
    "ExcludeShowType": "ExcludeShowType",
    "Id": "Id",
    "SportType": "SportType",
    "League": "League",
    "Team": "Team",
    "NotYetStarted": "NotYetStarted",
    "SportEventsOnly": "SportEventsOnly",
    "DescriptiveVideoOnly": "DescriptiveVideoOnly",
    "LiveOnly": "LiveOnly",
    "NewShowsOnly": "NewShowsOnly",
    "AdultContent": "AdultContent",
    "DisplayArtwork": "DisplayArtwork",
    "Detail": "Detail"
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
        operationId: 'GetTvMediaTeamListings',
        pathName: '/TvGrid/teams/{TeamID}/listings',
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