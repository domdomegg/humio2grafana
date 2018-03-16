export declare class HumioConfigCtrl {
    static templateUrl: string;
    current: any;
    suggestUrl: string;
    /** @ngInject */
    constructor($scope: any, $injector: any, $q: any, $http: any);
    resetToken(): void;
    getSuggestUrls(): string[];
    onUseEncriptionChange(): void;
}
export default HumioConfigCtrl;
