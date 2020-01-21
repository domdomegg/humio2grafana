import { QueryCtrl } from 'app/plugins/sdk';
import IDatasourceAttrs from './Interfaces/IDatasourceAttrs';
import IDatasourceRequestHeaders from './Interfaces/IDatasourceRequestHeaders';
import './css/query-editor.css!';
declare class GenericDatasourceQueryCtrl extends QueryCtrl {
    static templateUrl: string;
    $http: any;
    $scope: any;
    $q: any;
    $location: any;
    originalUrl: string;
    dataspaces: any[];
    datasource: {
        id: string;
        url: string;
        dsAttrs: IDatasourceAttrs;
        headers: IDatasourceRequestHeaders;
        timeRange: {
            from: any;
            to: any;
            raw: {
                from: string;
                to: string;
            };
        };
    };
    target: any;
    panelCtrl: any;
    constructor($scope: any, $injector: any, $http: any, $q: any, datasourceSrv: any, $location: any);
    getHumioLink(): string;
    onChangeInternal(): void;
    showHumioLink(): boolean;
    _serializeQueryOpts(obj: any): string;
    _getHumioDataspaces(): any;
}
export default GenericDatasourceQueryCtrl;
