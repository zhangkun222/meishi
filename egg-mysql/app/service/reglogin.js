const Service = require('egg').Service;

class RegLoginService extends Service {

	async regfindName(data) {
		let sql = `select * from user where username='${data.username}' and status=1`
		let result = await this.app.mysql.query(sql);
		result.regcode = -1;
		return result;
	}

	async reg(data) {
		let sql = `insert into user(username,passwd,ip,addtimes) values('${data.username}','${data.passwd}','${this.ctx.request.ip}',NOW())`
		let result = await this.app.mysql.query(sql);
		return result;
	}

	async userlogin(username) {
		const userData = await this.app.mysql.get('user', { username });
		return userData;
	}

	updateLogin(uid, ip) {
		const { ctx, app } = this;
		app.mysql.query('UPDATE user SET ip = ?, lasttimes = NOW(), nums = nums +1 WHERE uid = ?', [ip, uid]);
	}

}
module.exports = RegLoginService;