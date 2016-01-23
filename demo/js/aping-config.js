"use strict";

angular.module('jtt_aping').config(['$provide', function ($provide) {

    $provide.constant("apingDefaultSettings", {
        apingApiKeys: {
            twitter: [
                {'bearer_token':'AAAAAAAAAAAAAAAAAAAAACs3iwAAAAAA%2BH8LdT7YfKIzk8fvQvqKvoePuxo%3DMKfXX2ojtacGL8aOLAhlBDUrEFpy0DUuiyebet22Wa2YVrX7cc'}
            ]
        }
    });

}]);