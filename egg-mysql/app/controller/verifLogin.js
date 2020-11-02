'use strict';

const Controller = require('egg').Controller;

class VerifLoginController extends Controller {
    async smsVerif() {
        const { ctx } = this;
        ctx.body=await ctx.service.verifLogin.smsVerif(ctx.request.body)
    }

    async verifLogin() {
        const { ctx } = this;
        let result = await ctx.service.verifLogin.login(ctx.request.body)
        console.log(result)
        ctx.body = result;
    }

}


module.exports = VerifLoginController;
