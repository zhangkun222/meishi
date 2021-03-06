/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = exports = {};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1591599511708_2672';

	// add your middleware config here
	config.middleware = [];

	config.security = {
		csrf: {
			enable: false,
			ignoreJSON: true
		}
	}

	config.mysql = {
		client: {
			host: "localhost",
			port: "3306",
			user: "root",
			password: "root",
			database: "meals"
		}
	}

	config.cluster = {
		listen: {
			path: '',
			hostname:"localhost",
			port: 8000
			// ,
			// hostname: 'admin.jianmian.com'//默认localhost和ip地址,上线时用0.0.0.0
		}
	}

	//cnpm i --save egg-cors
	//plugin.js  里做配置
	// 跨域的配置
	config.cors = {
	  origin: 'http://localhost:8080',
	//   ,allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
	//   // // 允许跨域携带凭证
	//   ,credentials: true,
	  
	//   origin: '*',
	  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
	  // 允许跨域携带凭证
	  ,credentials: true
	};
	
	
<<<<<<< HEAD
	
	// 配置来设置大小
=======
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
	config.multipart = {
	  mode: 'file'
	};

<<<<<<< HEAD

	config.bodyParser = {
		jsonLimit: '5mb',
		formLimit: '6mb',
	  };




=======
>>>>>>> cdb33da2d4f63f703d53b0a9de015961c3cf1622
	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};

	return {
		...config,
		...userConfig,
	};
};
