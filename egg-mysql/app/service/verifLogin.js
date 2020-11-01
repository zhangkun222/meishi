const Service = require('egg').Service;
// const Core = require('@alicloud/pop-core');
class VerifLoginService extends Service {
	// async login(paramsObj) {
	// 	if (paramsObj.verif) {//短信动态码登录
    //         // console.log(this.ctx.session.smsnum,444444444)
    //         if (paramsObj.verif == this.ctx.session.smsnum) {//动态码正确
      
    //           var sql = `select * from user where username="${paramsObj.userphone}"`
    //           var userarr = await this.app.mysql.query(sql1)
    //           //  console.log(userarr1)
    //           if (userarr[0]) { //手机号存在登录成功
    //             return { code: 1, info: "登录成功" }
    //           } else {//手机号不存在未注册
    //             return { code: -1, info: "该手机号未注册" }
    //           }
      
    //         } else {//动态码错误
    //           return { code: 0, info: "验证码错误" }
    //         }
    //     }      
    // }
    
    // async smsVerif(obj) {
    //     console.log(obj, "smsverif77")
    //     var client = new Core({
    //         accessKeyId: 'LTAI4G7qTmvEzDSP4kTQXhQp',
    //         accessKeySecret: 'dfPydm9Du6EEsPNNrZ96tV8maZdctT',
    //         endpoint: 'https://dysmsapi.aliyuncs.com',
    //         apiVersion: '2017-05-25'
    //     });

    //     const num = Math.floor((Math.random() + 1) * 1000)
	// 	//后端服务器session 缓存验证码，方便之后在用户登录时，再次使用session进行验证码对比
    //     this.ctx.session.smsnum = num
    //     console.log(num)
    //     var params = {
    //         "RegionId": "cn-hangzhou",
    //         "PhoneNumbers": `${obj.phone}`,
    //         "SignName": "mtgyy",
    //         "TemplateCode": "SMS_196650323",
    //         "TemplateParam": `{"code":${num}}`
    //     }

    //     var requestOption = {
    //         method: 'POST'
    //     };
    //     client.request('SendSms', params, requestOption).then((result) => {
    //         console.log(JSON.stringify(result));
    //     }, (ex) => {
    //         console.log(ex);
    //     })


    // }
}
module.exports = VerifLoginService;