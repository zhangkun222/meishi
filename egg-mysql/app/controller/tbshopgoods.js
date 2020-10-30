

'use strict';

const Controller = require('egg').Controller;

class TbShopGoodsController extends Controller {
  async login() {
    const { ctx, app } = this;
    // 接收客户端提交上来的数据
    let formData = ctx.request.body;
    console.log(formData);
    // 需要去数据验证信息的正确性
    let result = await ctx.service.user.login(formData.username);
    console.log(result);
    let data = { code: 1, Msg: '登录成功' };
    if (!result) {
      data = { code: -1, Msg: '账号不存在' };
    } else if (result.passwd != formData.passwd) {
      data = { code: 0, Msg: '密码错误' };
    } else {
      // 表示登录成功 
      ctx.service.user.updateLogin(result.uid);
      ctx.body = data;
    }
  }
  async getproduct(data) {
    const { ctx } = this;
    ctx.body = await this.ctx.service.tbshopgoods.getproduct(ctx.request.query)
  }
  async addproduct() {
    const { ctx } = this;
    console.log(ctx.request.body.data)
    ctx.body = await this.ctx.service.tbshopgoods.addproduct(ctx.request.body.data)
  }

  async publishAnime() {
    const { ctx } = this;
    console.log(ctx.request.body.data)
    ctx.body = await this.ctx.service.tbshopgoods.publishAnime(ctx.request.body.data)
  }


  async updateMenu() {
    const { ctx } = this;
    console.log(ctx.request.body.data)
    ctx.body = await this.ctx.service.tbshopgoods.updateMenu(ctx.request.body.data)
  }

  async deleteMenu() {
    const { ctx } = this;
    console.log(ctx.request.body.data)
    ctx.body = await this.ctx.service.tbshopgoods.deleteMenu(ctx.request.body.data)
  }


  async comment() {
    const { ctx } = this;
    console.log(ctx.request.body.data)
    ctx.body = await this.ctx.service.tbshopgoods.comment(ctx.request.body.data)
  }


  async delproduct() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.tbshopgoods.delproduct(ctx.request.body.id)
  }
  async upproduct() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.tbshopgoods.upproduct(ctx.request.body.uppproduct)
  }
}

module.exports = TbShopGoodsController;
