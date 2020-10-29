'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  

  router.get('/test', controller.test.index);
  
  
 //获取漫画食谱
  router.get("/getAnime",controller.tbshopgoods.getproduct);

 //添加食谱
  router.post("/publishMenu",controller.tbshopgoods.addproduct);

 //获取食谱
  router.post("/getAllMenu",controller.tbshopgoods.getAllMenu);

 //添加漫画食谱
  router.post("/publishAnime",controller.tbshopgoods.publishAnime)

  //修改食谱
  router.post("/updateMenu",controller.tbshopgoods.updateMenu)

  //删除食谱
  router.post("/deleteMenu",controller.tbshopgoods.deleteMenu)

  //添加评论
  router.post("/comment",controller.tbshopgoods.comment)
  
  //登录
  router.post("/login",controller.tbshopgoods.login)

  //注册
  router.post("/reg",controller.tbshopgoods.reg)


	router.post("/delpro",controller.tbshopgoods.delproduct)
	
	router.post("/uppro",controller.tbshopgoods.upproduct)

	router.post('/uploadimg', controller.fileUpload.uploadImg);

	
};
