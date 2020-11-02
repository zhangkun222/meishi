// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportComments = require('../../../app/controller/comments');
import ExportFileUpload = require('../../../app/controller/fileUpload');
<<<<<<< HEAD
import ExportTbshopgoods = require('../../../app/controller/tbshopgoods');
=======
import ExportRecipe = require('../../../app/controller/recipe');
import ExportReglogin = require('../../../app/controller/reglogin');
import ExportVerifLogin = require('../../../app/controller/verifLogin');
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622

declare module 'egg' {
  interface IController {
    comments: ExportComments;
    fileUpload: ExportFileUpload;
<<<<<<< HEAD
    tbshopgoods: ExportTbshopgoods;
=======
    recipe: ExportRecipe;
    reglogin: ExportReglogin;
    verifLogin: ExportVerifLogin;
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
  }
}
