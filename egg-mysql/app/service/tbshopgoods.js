const Service = require('egg').Service;

class TbShopGoodsService extends Service {
	
	async login(username) {
		//   是可以直接执行SQL语句的
		const userData = await this.app.mysql.get('user', { username });
		return userData;
	  }
	  updateLogin(uid) {
		const {ctx, app} = this;
		app.mysql.query('UPDATE user SET ip = ?, lasttimes = NOW(), nums = nums +1 WHERE uid = ?', [ctx.request.ip, uid]);
	  }

	//获取动漫菜谱
	async getproduct() {
		var sql = "select * from anime where status=1"
		var goods = await this.app.mysql.query(sql);
		return goods;
	}
	//添加菜谱
	async addproduct(product) {
		console.log(product)
		var sql = `INSERT INTO recipe(title,degree,cooktime,taste,pdesc,foodlist,amountlist,steps,stepsImg,cover,tips,uid) VALUES('${product.title}','${product.degree}','${product.cooktime}','${product.taste}','${product.pdesc}','${product.foodlist}','${product.amountlist}','${product.steps}','${product.stepsImg}','${product.cover}','${product.tips}',${product.uid})`
		console.log(sql)

		var result = await this.app.mysql.query(sql);

		if (result.affectedRows) {
			result = {
				code: 1,
				msg: "提交成功",
				id: result.insertId
			}
		} else {
			result = {
				code: 0,
				msg: "提交失败"
			}
		}
		return result;
	}
	//添加动漫菜谱
	async publishAnime(product) {
		console.log(product)
		var sql = `INSERT INTO anime(aname,cover,mid) VALUES('${product.aname}','${product.cover}',${product.mid})`
		console.log(sql)
		var result = await this.app.mysql.query(sql);
		if (result.affectedRows) {
			result = {
				code: 1,
				msg: "提交成功",
				id: result.insertId
			}
		} else {
			result = {
				code: 0,
				msg: "提交失败"
			}
		}
		return result;
	}

	//修改食谱
	async updateMenu(data) {
		// console.log(data)
		let date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDate()).toString().padStart(2, '0') + ' ' + (new Date().getHours()).toString().padStart(2, '0') + ':' + (new Date().getMinutes()).toString().padStart(2, '0') + ':' + (new Date().getSeconds()).toString().padStart(2, '0');
		var sql = `update recipe set title='${data.title}',degree='${data.degree}',cooktime='${data.cooktime}',taste='${data.taste}',pdesc='${data.pdesc}',foodlist='${data.foodlist}',amountlist='${data.amountlist}',steps='${data.steps}',stepsImg='${data.stepsImg}',cover='${data.cover}',tips='${data.tips}',uid=${data.uid},updatetimes=${date} where rid=${data.rid}`
		var result = await this.app.mysql.query(sql);
		if (result.affectedRows) {
			result = {
				code: 1,
				msg: "修改成功",
			}
		} else {
			result = {
				code: 0,
				msg: "修改失败"
			}
		}
		return result;
	}

	async deleteMenu(data) {
		// console.log(data)
		var sql = `update recipe set statue=0 where rid=${rid}`
		var result = await this.app.mysql.query(sql);
		if (result.affectedRows) {
			result = {
				code: 1,
				msg: "删除成功",
			}
		} else {
			result = {
				code: 0,
				msg: "删除失败"
			}
		}
		return result;
	}

	async comment(data) {
		// console.log(data)
		//
		var sql = `insert into comment(content，uid，rid) values('${data.comment}',${data.uid},${data.rid}) `
		var result = await this.app.mysql.query(sql);
		if (result.affectedRows) {
			result = {
				code: 1,
				msg: "删除成功",
			}
		} else {
			result = {
				code: 0,
				msg: "删除失败"
			}
		}
		return result;
	}


}
module.exports = TbShopGoodsService;