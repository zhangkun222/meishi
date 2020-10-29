

'use strict';

const Controller = require('egg').Controller;

class TbShopGoodsController extends Controller {
  async getproduct(data) {
    const { ctx } = this;
	  ctx.body=await this.ctx.service.tbshopgoods.getproduct(data)
  }
  async addproduct() {
    const { ctx } = this;
    console.log(ctx.request.body.data)
	  ctx.body=await this.ctx.service.tbshopgoods.addproduct(ctx.request.body.data)
  }

  async publishAnime() {
    const { ctx } = this;
    console.log(ctx.request.body.data)
	  ctx.body=await this.ctx.service.tbshopgoods.publishAnime(ctx.request.body.data)
  }
  

  async delproduct(){
    const { ctx } = this;
	  ctx.body=await this.ctx.service.tbshopgoods.delproduct(ctx.request.body.id)
  }
  async upproduct() {
    const { ctx } = this;
	  ctx.body=await this.ctx.service.tbshopgoods.upproduct(ctx.request.body.uppproduct)
  }
}

module.exports =TbShopGoodsController;
