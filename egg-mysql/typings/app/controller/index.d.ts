// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTbshopgoods = require('../../../app/controller/tbshopgoods');
import ExportTest = require('../../../app/controller/test');

declare module 'egg' {
  interface IController {
    tbshopgoods: ExportTbshopgoods;
    test: ExportTest;
  }
}
