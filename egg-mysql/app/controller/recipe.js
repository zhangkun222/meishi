

'use strict';

const Controller = require('egg').Controller;

class RecipeController extends Controller {

    async getproduct(data) {
        const { ctx } = this;
        ctx.body = await this.ctx.service.recipe.getproduct(ctx.request.query)
    }
    async addproduct() {
        const { ctx } = this;
        console.log(ctx.request.body.data)
        ctx.body = await this.ctx.service.recipe.addproduct(ctx.request.body.data)
    }
    
    async getAllMenu() {
        const { ctx } = this;
        ctx.body = await this.ctx.service.recipe.getAllMenu();
    }

    async publishAnime() {
        const { ctx } = this;
        console.log(ctx.request.body.data)
        ctx.body = await this.ctx.service.recipe.publishAnime(ctx.request.body.data)
    }
    async updateMenu() {
        const { ctx } = this;
        console.log(ctx.request.body.data)
        ctx.body = await this.ctx.service.recipe.updateMenu(ctx.request.body.data)
    }

    async deleteMenu() {
        const { ctx } = this;
        console.log(ctx.request.body.data)
        ctx.body = await this.ctx.service.recipe.deleteMenu(ctx.request.body.data)
    }
}

module.exports = RecipeController;
