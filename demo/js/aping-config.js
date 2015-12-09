"use strict";

apingApp.config(['$provide', function ($provide) {

    $provide.constant("apingApiKeys", {
        twitter: [
            {'bearer_token':'AAAAAAAAAAAAAAAAAAAAACs3iwAAAAAA%2BH8LdT7YfKIzk8fvQvqKvoePuxo%3DMKfXX2ojtacGL8aOLAhlBDUrEFpy0DUuiyebet22Wa2YVrX7cc'}
        ]
    });

    $provide.constant("apingDefaultSettings", {
        templateUrl : "../src/aping_design_xgallerify.html",
        items : 20, //items per request
        maxItems: 100, //max items per aping
        orderBy : "timestamp",
        orderReverse : "true",
        model: "image",
    });

}]);