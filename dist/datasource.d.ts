/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
import DsPanelStorage from "./DsPanelStorage";
import IDatasourceAttrs from "./Interfaces/IDatasourceAttrs";
export declare class GenericDatasource {
    type: string;
    url: string;
    actualUrl: string;
    name: string;
    dsAttrs: IDatasourceAttrs;
    headers: any;
    dsPanelStorage: DsPanelStorage;
    withCredentials: boolean;
    timeRange: any;
    /** @ngInject */
    constructor(instanceSettings: any, $q: any, backendSrv: any, $location: any, $rootScope: any, $http: any);
    query(options: any): any;
    testDatasource(): any;
    doRequest(options: any): any;
}
