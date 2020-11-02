

'use strict';

const Controller = require('egg').Controller;

class RegLoginController extends Controller {

  async reg() {
    const { ctx } = this;
    let regdata = ctx.request.body;
    let data = { code: 1, msg: '注册成功!去登录吧' };
    let resNick = await ctx.service.reglogin.regfindNickname(regdata.nickname);
    let result = await ctx.service.reglogin.regfindName(regdata.username);
    if(resNick.sta==-2){
      data = { code: -2, msg: '该昵称已存在，请重新输入' };
    }else if (result.regcode == -3) {
      console.log(result.regcode);
      data = { code: -1, msg: '该手机号已存在，请重新输入' };
    } else {
      let results = await this.ctx.service.reglogin.reg(regdata);
      console.log(results);
    }
    ctx.body = data;
  }

  async userlogin() {
    const { ctx, app } = this;
    let formData = ctx.request.body;
    // console.log(formData);
    let results = await ctx.service.reglogin.managerlogin(formData.username);
    let data = {};
    if (!results) {
      let result = await ctx.service.reglogin.userlogin(formData.username);
      if (!result) {
        data = { code: -1, msg: '该用户的账号不存在',type:'user' };
      } else if (result.passwd != formData.passwd) {
        data = { code: 0, msg: '用户密码错误',type:'user' };
      } else {
        // 表示登录成功 
        data = { code: 1, msg: '用户登录成功',type:'user',nickname:results.nickname,id:results.uid}
        ctx.service.reglogin.updateLogin(result.uid, ctx.request.ip);
      }
    }else if(results.passwd != formData.passwd){
      data={code:0,msg:'管理员密码错误',type:'manager'};
    }else{
      data={code:1,msg:'管理员登录成功',type:'manager',nickname:results.nickname,id:results.mid};
      ctx.service.reglogin.updateManagerLogin(results.mid, ctx.request.ip);
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
