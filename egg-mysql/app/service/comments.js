const Service = require('egg').Service;

class CommentsService extends Service {
	async comment(data) {
		var sql = `INSERT INIO comment(comment,uid,rid) values('${data.comment}',${data.uid},${data.rid}) `
		var sql = `insert into comment(content，uid，rid,addtimes) values('${data.comment}',${data.uid},${data.rid},Now()) `
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

	async getComment(rid) {
		let commentDate = await this.app.mysql.get('comment', { rid });
<<<<<<< HEAD
		let sql = `select * from user  where uid='${commentDate.uid}' and status=1`
=======
		// if(commentDate)
		let sql = `select * from user where uid='${commentDate.uid}' and status=1`
>>>>>>> 79685e5d06535f4a33d783a9185c3e1ac5ee42d3
		let result = await this.app.mysql.query(sql);
		let data = { cid: commentDate.cid, uid: commentDate.uid, nickname: result.nickname, content: commentDate.content, times: commentDate.addtimes }
		return data;
	}
}
module.exports = CommentsService;