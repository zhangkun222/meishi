
'use strict';

const Controller = require('egg').Controller;

class CommentsController extends Controller {
    async comment() {
        const { ctx } = this;
        console.log(ctx.request.body.data)
        ctx.body = await this.ctx.service.comments.comment(ctx.request.body.data)
    }
}

module.exports = CommentsController;
