"use strict";

apingApp.config(['$provide', function ($provide) {

    $provide.constant("apingApiKeys", {
        instagram: "<YOUR_INSTAGRAM_API_KEY>",
        instagramClientId: "<YOUR_INSTAGRAM_CLIENT_ID>",
    });

    $provide.constant("apingDefaultSettings", {
        templateUrl : "../src/aping_design_xgallerify.html",
        items : 20, //items per request
        maxItems: 100, //max items per aping
        orderBy : "timestamp",
        orderReverse : "true",
        type: "image",
    });

}]);