export class HumioConfigCtrl {
  public static templateUrl = "partials/config.html";

  current: any;
  suggestUrl: string = 'https://cloud.humio.com';

  /** @ngInject */
  constructor($scope, $injector, $q, $http) {
    console.log(this.current);
    // NOTE: for humio always use proxy
    this.current.access = 'proxy';
    this.current.jsonData.encryptToken = this.current.jsonData.encryptToken || false;
  }
  
  resetToken() {
    this.current.secureJsonFields.humioToken = false;
  }

  getSuggestUrls() {
    return ['https://cloud.humio.com', 'https://go.humio.com'];
  }
  
  onUseEncriptionChange() {
    console.log(this.current);
    console.log(this.current.encryptToken);
  }
}

export default HumioConfigCtrl;
