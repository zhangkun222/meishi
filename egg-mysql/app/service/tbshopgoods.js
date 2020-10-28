const Service = require('egg').Service;

class TbShopGoodsService extends Service {
  async getproduct(pagenum,total,keyword) {
	  
	var sql="select * from shop_goods where status=0"
	
	if(keyword){
		sql+=` and kw like '%${keyword}%'`
	}
	sql+=` limit ${(pagenum-1)*total},${total}`
	
	var goods=await this.app.mysql.query(sql);
	
	return goods;
  }

	async addproduct(product){
		console.log(product)
		var sql=`INSERT INTO recipe(title,degree,cooktime,taste,pdesc,foodlist,amountlist,steps,stepsImg,cover,tips,uid) VALUES('${product.title}','${product.degree}','${product.cooktime}','${product.taste}','${product.pdesc}','${product.foodlist}','${product.amountlist}','${product.steps}','${product.stepsImg}','${product.cover}','${product.tips}',${product.uid})`
		console.log(sql)

		var result=await this.app.mysql.query(sql);

		if(result.affectedRows){
			result={
				code:1,
				msg:"提交成功",
				id:result.insertId
			}
		}else{
			result={
				code:0,
				msg:"提交失败"
			}
		}
		return result;
	}
	
	async delproduct(id){
		var sql=`update shop_goods set status=1 where id=${id}`
		var result=await this.app.mysql.query(sql);
		if(result.affectedRows){
			result={
				code:1,
				msg:"删除成功"
			}
		}else{
			result={
				code:0,
				msg:"删除失败"
			}
		}
		return result;
	}
	async upproduct(product){
		var sql=`UPDATE shop_goods SET kw='${product.kw}',c1='${product.c1}',c2='${product.c2}',c3='${product.c3}' WHERE id=${product.id}`
		var result=await this.app.mysql.query(sql);

		if(result.affectedRows){
			result={
				code:1,
				msg:"修改成功",
			}
		}else{
			result={
				code:0,
				msg:"修改失败"
			}
		}
		return result;
	}
}
module.exports = TbShopGoodsService;