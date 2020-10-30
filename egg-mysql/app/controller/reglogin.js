

'use strict';

const Controller = require('egg').Controller;

class RegLoginController extends Controller {
  
  async reg() {
    const { ctx } = this;
    let regdata=ctx.request.body;
    console.log(789789);
    console.log(regdata);
    let data = { code: 1, msg: '注册成功!去登录吧' };
    let result = await ctx.service.reglogin.regfindName(regdata.username);
    if(result.regcode!=-1){
      console.log(result.regcode);
      data = { code: -1, msg: '该用户名已存在，请重新输入' };
    }else{
      let results=await this.ctx.service.reglogin.reg(regdata);
      console.log(123);
      console.log(results);
    }
	  ctx.body=data;
  }

  async userlogin() {
    const { ctx, app } = this;
    let formData = ctx.request.body;
    // console.log(formData);
    let result = await ctx.service.reglogin.userlogin(formData.username);
    console.log(result);
    let data = { code: 1, msg: '登录成功' };
    if (!result) {
      data = { code: -1, msg: '账号不存在' };
    } else if (result.passwd != formData.passwd) {
      data = { code: 0, msg: '密码错误' };
    } else {
      // 表示登录成功 
      ctx.service.reglogin.updateLogin(result.uid,ctx.request.ip);
    }
    ctx.body = data;
  }

  


  // async delproduct() {
  //   const { ctx } = this;
  //   ctx.body = await this.ctx.service.tbshopgoods.delproduct(ctx.request.body.id)
  // }
  // async upproduct() {
  //   const { ctx } = this;
  //   ctx.body = await this.ctx.service.tbshopgoods.upproduct(ctx.request.body.uppproduct)
  // }
}

module.exports = RegLoginController;
