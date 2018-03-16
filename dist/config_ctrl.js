System.register([], function(exports_1) {
    var HumioConfigCtrl;
    return {
        setters:[],
        execute: function() {
            HumioConfigCtrl = (function () {
                /** @ngInject */
                function HumioConfigCtrl($scope, $injector, $q, $http) {
                    this.suggestUrl = 'https://cloud.humio.com';
                    console.log(this.current);
                    // NOTE: for humio always use proxy
                    this.current.access = 'proxy';
                    this.current.jsonData.encryptToken = this.current.jsonData.encryptToken || false;
                }
                HumioConfigCtrl.prototype.resetToken = function () {
                    this.current.secureJsonFields.humioToken = false;
                };
                HumioConfigCtrl.prototype.getSuggestUrls = function () {
                    return ['https://cloud.humio.com', 'https://go.humio.com'];
                };
                HumioConfigCtrl.prototype.onUseEncriptionChange = function () {
                    console.log(this.current);
                    console.log(this.current.encryptToken);
                };
                HumioConfigCtrl.templateUrl = "partials/config.html";
                return HumioConfigCtrl;
            })();
            exports_1("HumioConfigCtrl", HumioConfigCtrl);
            exports_1("default",HumioConfigCtrl);
        }
    }
});
//# sourceMappingURL=config_ctrl.js.map