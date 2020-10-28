'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async index() {
    const { ctx } = this;

	ctx.body="eggjs 返回的字符串"
	
  }
}

module.exports = TestController;
