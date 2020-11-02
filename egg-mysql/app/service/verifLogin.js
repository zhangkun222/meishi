const Service = require('egg').Service;
const Core = require('@alicloud/pop-core');
class VerifLoginService extends Service {
    async smsVerif(obj) {
        console.log(112233);
        console.log(obj);
        console.log(this.ctx.session.smsnum);
        var client = new Core({
            accessKeyId: 'LTAI4G3dMb5Aip1KpdEawg9B',
            accessKeySecret: 'D5eAyzusddobzP11xnUXvlmxhyNmrt',
            endpoint: 'https://dysmsapi.aliyuncs.com',
            apiVersion: '2017-05-25'
        });
        const num = Math.floor((Math.random() + 1) * 1000)
        //后端服务器session 缓存验证码，方便之后在用户登录时，再次使用session进行验证码对比
        this.ctx.session.smsnum = num;
        var params = {
            "RegionId": "cn-hangzhou",
            "PhoneNumbers": `${obj.phone}`,
            "SignName": "一日三餐美食菜谱",
            "TemplateCode": "SMS_205400749",
            "TemplateParam": `{"code":${num}}`
        }
        var requestOption = {
            method: 'POST'
        };
        client.request('SendSms', params, requestOption).then((result) => {
            console.log(JSON.stringify(result));
        }, (ex) => {
            console.log(ex);
        })
    }

    async login(paramsObj) {
        let data = {};
        if (paramsObj.verif) {//短信动态码登录
            if (paramsObj.verif == this.ctx.session.smsnum) {//动态码正确
                var sql = `select * from user where username="${paramsObj.userphone}"`;
                var userarr = await this.app.mysql.query(sql);
                if (userarr[0]) { //手机号存在登录成功
                    data = { code: 1, msg: "登录成功" }
                } else {//手机号不存在未注册
                    data = { code: -1, msg: "该手机号未注册" }
                }
            } else {//动态码错误
                data = { code: 0, msg: "验证码错误" }
            }
            return data;
        }
    }


}
module.exports = VerifLoginService;