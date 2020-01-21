System.register(["app/plugins/sdk", "lodash", "./helper", "./css/query-editor.css!"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var sdk_1, lodash_1, helper_1, GenericDatasourceQueryCtrl;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (sdk_1_1) {
                sdk_1 = sdk_1_1;
            },
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (helper_1_1) {
                helper_1 = helper_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            GenericDatasourceQueryCtrl = (function (_super) {
                __extends(GenericDatasourceQueryCtrl, _super);
                function GenericDatasourceQueryCtrl($scope, $injector, $http, $q, datasourceSrv, $location) {
                    var _this = _super.call(this, $scope, $injector) || this;
                    _this.$http = $http;
                    _this.$scope = $scope;
                    _this.$q = $q;
                    _this.$location = $location;
                    _this.target.humioQuery = _this.target.humioQuery || 'timechart()';
                    _this.target.humioDataspace = _this.target.humioDataspace || undefined;
                    _this.dataspaces = [];
                    _this._getHumioDataspaces().then(function (r) {
                        _this.dataspaces = r;
                    });
                    _this.originalUrl = '';
                    $http({
                        url: '/api/datasources/' + _this.datasource.id,
                        method: 'GET',
                    }).then(function (res) {
                        _this.originalUrl = res.data.url;
                    });
                    return _this;
                }
                GenericDatasourceQueryCtrl.prototype.getHumioLink = function () {
                    if (this.originalUrl === '') {
                        return '#';
                    }
                    else {
                        var isLive = this.$location.search().hasOwnProperty('refresh') &&
                            helper_1.default.checkToDateNow(this.datasource.timeRange.raw.to);
                        var start = '24h';
                        var end = undefined;
                        if (isLive) {
                            start = helper_1.default.parseDateFrom(this.datasource.timeRange.raw.from);
                        }
                        else {
                            start = this.datasource.timeRange.from._d.getTime();
                            end = this.datasource.timeRange.to._d.getTime();
                        }
                        var linkSettings = {
                            query: this.target.humioQuery,
                            live: isLive,
                            start: start,
                        };
                        if (end) {
                            linkSettings['end'] = end;
                        }
                        var widgetType = helper_1.default.getPanelType(this.target.humioQuery);
                        if (widgetType === 'time-chart') {
                            linkSettings['widgetType'] = widgetType;
                            linkSettings['legend'] = 'y';
                            linkSettings['lx'] = '';
                            linkSettings['ly'] = '';
                            linkSettings['mn'] = '';
                            linkSettings['mx'] = '';
                            linkSettings['op'] = '0.2';
                            linkSettings['p'] = 'a';
                            linkSettings['pl'] = '';
                            linkSettings['plY'] = '';
                            linkSettings['s'] = '';
                            linkSettings['sc'] = 'lin';
                            linkSettings['stp'] = 'y';
                        }
                        return (this.originalUrl +
                            '/' +
                            this.target.humioDataspace +
                            '/search?' +
                            this._serializeQueryOpts(linkSettings));
                    }
                };
                GenericDatasourceQueryCtrl.prototype.onChangeInternal = function () {
                    this.panelCtrl.refresh();
                };
                GenericDatasourceQueryCtrl.prototype.showHumioLink = function () {
                    if (this.datasource.timeRange) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                GenericDatasourceQueryCtrl.prototype._serializeQueryOpts = function (obj) {
                    var str = [];
                    for (var p in obj) {
                        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
                    }
                    return str.join('&');
                };
                GenericDatasourceQueryCtrl.prototype._getHumioDataspaces = function () {
                    if (this.datasource.url) {
                        var requestOpts = {
                            method: 'POST',
                            url: this.datasource.url + '/graphql',
                            headers: this.datasource.headers,
                            data: { query: '{searchDomains{name}}' },
                        };
                        return this.datasource.dsAttrs.backendSrv
                            .datasourceRequest(requestOpts)
                            .then(function (r) {
                            var res = r.data.data.searchDomains.map(function (_a) {
                                var name = _a.name;
                                return ({ value: name, name: name });
                            });
                            return lodash_1.default.sortBy(res, ['name']);
                        });
                    }
                    else {
                        return this.$q.when([]);
                    }
                };
                GenericDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';
                return GenericDatasourceQueryCtrl;
            }(sdk_1.QueryCtrl));
            exports_1("default", GenericDatasourceQueryCtrl);
        }
    };
});
//# sourceMappingURL=query_ctrl.js.map