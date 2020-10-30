const Service = require('egg').Service;

class CommentsService extends Service {
	async comment(data) {
		var sql = `insert into comment(content，uid，rid) values('${data.comment}',${data.uid},${data.rid}) `
		var result = await this.app.mysql.query(sql);
		if (result.affectedRows) {
			result = {
				code: 1,
				msg: "评论成功",
			}
		} else {
			result = {
				code: 0,
				msg: "评论失败"
			}
		}
		return result;
	}
}
module.exports = CommentsService;