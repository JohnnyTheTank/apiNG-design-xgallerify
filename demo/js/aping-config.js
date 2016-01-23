"use strict";

angular.module('jtt_aping').config(['$provide', function ($provide) {

    $provide.constant("apingApiKeys", {

    });

    $provide.constant("apingDefaultSettings", {
        templateUrl : "../src/aping_design_xgallerify.html",
        items : 20, //items per request
        maxItems: 100, //max items per aping
        orderBy : "timestamp",
        orderReverse : "true",
        model: "image",
        apingApiKeys: {
            twitter: [
                {'bearer_token':'AAAAAAAAAAAAAAAAAAAAACs3iwAAAAAA%2BH8LdT7YfKIzk8fvQvqKvoePuxo%3DMKfXX2ojtacGL8aOLAhlBDUrEFpy0DUuiyebet22Wa2YVrX7cc'}
            ]
        }
    });

}]);