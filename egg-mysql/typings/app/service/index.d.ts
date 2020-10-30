// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportComments = require('../../../app/service/comments');
import ExportRecipe = require('../../../app/service/recipe');
import ExportReglogin = require('../../../app/service/reglogin');

declare module 'egg' {
  interface IService {
    comments: AutoInstanceType<typeof ExportComments>;
    recipe: AutoInstanceType<typeof ExportRecipe>;
    reglogin: AutoInstanceType<typeof ExportReglogin>;
  }
}
