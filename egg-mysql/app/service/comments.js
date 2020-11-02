const Service = require('egg').Service;

class CommentsService extends Service {
	async comment(data) {
		let sql = `insert into comment(content，uid，rid,addtimes) values('${data.comment}',${data.uid},${data.rid},Now()) `
		let result = await this.app.mysql.query(sql);
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
		let data=[];
		let result;
		let sql1;
		let sql=`select * from comment where rid=${rid} and status=1`;
		let commentDate = await this.app.mysql.query(sql);
		if(commentDate.length==0){
			return {code:-1,msg:'该菜谱暂时还没有评论'}
		}else{
			for (let i = 0; i < commentDate.length; i++) {
				sql1 = `select * from user  where uid='${commentDate[i].uid}' and status=1`
				result = await this.app.mysql.query(sql1);
				data.push({ cid: commentDate[i].cid, uid: commentDate[i].uid, nickname: result.nickname, content: commentDate[i].content, times: commentDate[i].addtimes });
			}
		}
		return data;
	}
}
module.exports = CommentsService;