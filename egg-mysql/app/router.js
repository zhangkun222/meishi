'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
 
 //获取漫画食谱
  router.get("/getAnime",controller.recipe.getproduct);

 //添加食谱
  router.post("/publishMenu",controller.recipe.addproduct);

 //获取食谱
  router.post("/getAllMenu",controller.recipe.getAllMenu);

 //添加漫画食谱
  router.post("/publishAnime",controller.recipe.publishAnime)

  //修改食谱
  router.post("/updateMenu",controller.recipe.updateMenu)

  //删除食谱
  router.post("/deleteMenu",controller.recipe.deleteMenu)

  //添加评论
  router.post("/comment",controller.comments.comment)
  
  //登录
  router.post("/login",controller.reglogin.userlogin)

  //注册
  router.post("/reg",controller.reglogin.reg)
  
	router.post('/uploadimg', controller.fileUpload.uploadImg);
  
	// router.post("/delpro",controller.tbshopgoods.delproduct)
	
	// router.post("/uppro",controller.tbshopgoods.upproduct)
	
};
