const Service = require('egg').Service;

class RegLoginService extends Service {
	async regfindNickname(nickname) {
		let sql = `select * from user where nickname='${nickname}' and status=1`
		let result = await this.app.mysql.query(sql);
		if(result.length==0){
			result.sta = 2;
		}
		else{
			result.sta = -2;
		}
		return result;
	}
	
	async regfindName(username) {
		let sql = `select * from user where username='${username}' and status=1`
		let result = await this.app.mysql.query(sql);
		if(result.length==0){
			result.regcode = 3;
		}else{
			result.regcode = -3;
		}
		return result;
	}

	async reg(data) {
		let sql = `insert into user(nickname,username,passwd,ip,addtimes) values('${data.nickname}','${data.username}','${data.passwd}','${this.ctx.request.ip}',NOW())`
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

	async managerlogin(username) {
		const userData = await this.app.mysql.get('manager', { username });
		return userData;
	}
	
	updateManagerLogin(mid, ip) {
		const {ctx, app } = this;
		app.mysql.query('UPDATE manager SET ip = ?, lasttimes = NOW(), nums = nums +1 WHERE mid = ?', [ip, mid]);
	}

}
module.exports = RegLoginService;