
'use strict';

const Controller = require('egg').Controller;
class CommentsController extends Controller {
    async comment() {
        const { ctx } = this;
        console.log(ctx.request.body.data)
        ctx.body = await this.ctx.service.comments.comment(ctx.request.body.data)
    }

    async getComment() {
        const { ctx } = this;
        let rid = ctx.request.body.rid;
        ctx.body = await this.ctx.service.comments.getComment(rid)
    }
}
module.exports = CommentsController;
