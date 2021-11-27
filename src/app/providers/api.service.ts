import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  static mobile = 'MOBILE';
  static browse = 'BROWSE';
  static yes = 'YES';
  static no = 'NO';
  static pending = 'PENDING';

  // 因测试，所以将有效期都设置为1000天
  static dataValidTime = 1000 * 24 * 3600 * 1000;
  static cityDataValidTime = 1000 * 24 * 3600 * 1000;

  // 接口基础地址
  static domain = 'http://192.168.1.102:9005';

  static SAVE_LOCAL: any = {
    deviceType: 'deviceType',
    currentUser: 'currentUser',
    accountStatus: 'accountStatus',
    nickname: 'nickname',
    userAvatar: 'userAvatar',
    userBlogPhoto: 'userBlogPhoto',
    currentCity: 'currentCity', // currentCity和cityData和wealthData是同步的，只要currentCity更新，这两个data也同时更新
    currentCityPrice: 'currentCityPrice',
    cityLngLat: 'cityLngLat',
    userLngLat: 'userLngLat',
  };


  static HOUSE: any = {
    getCityPrice: '/webcommon/house/getCityPrice',
    getCityCommunityData: '/webcommon/house/getCityCommunityData',
    getCountyData: '/webcommon/house/getCountyData',
    getCommunityInfo: '/webcommon/house/getCommunityInfo',
    startAssess: '/webcommon/house/startAssess',
  };

  /**
   * 每次调用sequence加1
   */
  static getSequence = (() => {
    let sequence = 1;
    return () => {
      return ++sequence;
    };
  })();


  // 根据url获取文件类型
  static getFileType(fileUrl: string): string {
    return fileUrl.substring(fileUrl.lastIndexOf('.') + 1, fileUrl.length).toLowerCase();
  }
  // 根据url获取文件名(包含文件类型)
  static getFileName(fileUrl: string): string {
    return fileUrl.substring(fileUrl.lastIndexOf('/') + 1, fileUrl.length).toLowerCase();
  }

  static getFileMimeType(fileType: string): string {
    let mimeType = '';
    switch (fileType) {
      case 'txt':
        mimeType = 'text/plain';
        break;
      case 'docx':
        mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        break;
      case 'doc':
        mimeType = 'application/msword';
        break;
      case 'pptx':
        mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
        break;
      case 'ppt':
        mimeType = 'application/vnd.ms-powerpoint';
        break;
      case 'xlsx':
        mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        break;
      case 'xls':
        mimeType = 'application/vnd.ms-excel';
        break;
      case 'zip':
        mimeType = 'application/x-zip-compressed';
        break;
      case 'rar':
        mimeType = 'application/octet-stream';
        break;
      case 'pdf':
        mimeType = 'application/pdf';
        break;
      case 'jpg':
        mimeType = 'image/jpeg';
        break;
      case 'png':
        mimeType = 'image/png';
        break;
      default:
        mimeType = 'application/' + fileType;
        break;
    }
    return mimeType;
  }

}
