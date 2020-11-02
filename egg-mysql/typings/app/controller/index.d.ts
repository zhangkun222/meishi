// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportFileUpload = require('../../../app/controller/fileUpload');
import ExportTbshopgoods = require('../../../app/controller/tbshopgoods');

declare module 'egg' {
  interface IController {
    fileUpload: ExportFileUpload;
    tbshopgoods: ExportTbshopgoods;
  }
}
