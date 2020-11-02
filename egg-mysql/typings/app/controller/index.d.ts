// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportComments = require('../../../app/controller/comments');
import ExportFileUpload = require('../../../app/controller/fileUpload');
import ExportRecipe = require('../../../app/controller/recipe');
import ExportReglogin = require('../../../app/controller/reglogin');
import ExportVerifLogin = require('../../../app/controller/verifLogin');

declare module 'egg' {
  interface IController {
    comments: ExportComments;
    fileUpload: ExportFileUpload;
    recipe: ExportRecipe;
    reglogin: ExportReglogin;
    verifLogin: ExportVerifLogin;
  }
}
