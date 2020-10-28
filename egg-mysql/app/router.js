'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  
  //演示MVVM 案例新开的接口
  router.get('/test', controller.test.index);
  
  //商品分页查询+按关键词查询
  /*
  {
	  name:"/getproduct",
	  type:"get"
	  data:{
		  pagenum:2,
		  total:20,
		  keyword:""
	  },
	  res:{
		  proArr:[{id,kw,c1,c2,c3}]
	  }
  }
  */
 
  router.get("/getproduct",controller.tbshopgoods.getproduct);
  
  
  //新增产品的接口
//   {
// 		name:"/addpro",
// 		type:"post",
// 		data:{
//			product:{
			// 			kw:"",//必填
			// 			c1:"",//必填
			// 			c2:"",
			// 			c3:""
			//}	
// 		},
// 		res:{
// 			code:1
// 			msg:"提交成功”,
//			id：200010//插入成功的id号
// 		
// 	}

  router.post("/publishMenu",controller.tbshopgoods.addproduct)


  //删除产品的接口
	//   {
	// 		name:"/delpro",
	// 		type:"post",
	// 		data:{
	//			id:10001//需要删除的商品id
	// 		},
	// 		res:{
	// 			code:1,//1成功0失败
	// 			msg:"提交成功”
	// 	}

	router.post("/delpro",controller.tbshopgoods.delproduct)
	
  //修改产品的接口
	//   {
	// 		name:"/delpro",
	// 		type:"post",
	// 		data:{
	//			id:10001//需要删除的商品id
	// 		},
	// 		res:{
	// 			code:1,//1成功0失败
	// 			msg:"提交成功”
	// 	}

	router.post("/uppro",controller.tbshopgoods.upproduct)

  
};
