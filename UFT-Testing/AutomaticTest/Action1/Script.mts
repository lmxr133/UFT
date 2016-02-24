Browser("数字本草 | 主页").Page("数字本草 | 主页").Link("[注册]").Click 16,4 @@ hightlight id_;_Browser("数字本草 | 主页").Page("数字本草 | 主页").Link("[注册]")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("数字本草 | 主页").Page("注册").WebButton("马上注册").Click 57,16 @@ hightlight id_;_Browser("数字本草 | 主页").Page("注册").WebButton("马上注册")_;_script infofile_;_ZIP::ssf2.xml_;_
With Browser("数字本草 | 主页").Page("个人注册信息完善")
    .WebEdit("userId").Set DataTable("A","Global") @@ hightlight id_;_Browser("数字本草 | 主页").Page("个人注册信息完善").WebEdit("userId")_;_script infofile_;_ZIP::ssf3.xml_;_
	.WebEdit("pwd").SetSecure "5698a5e3afe68531f54a94fbfdf2967fecf2" @@ hightlight id_;_Browser("数字本草 | 主页").Page("个人注册信息完善").WebEdit("pwd")_;_script infofile_;_ZIP::ssf4.xml_;_
	.WebEdit("checkPwd").SetSecure "5698a5e79490b60db7dcf06a0e384eec619f" @@ hightlight id_;_Browser("数字本草 | 主页").Page("个人注册信息完善").WebEdit("checkPwd")_;_script infofile_;_ZIP::ssf5.xml_;_
	.WebEdit("mobileNumber").Set DataTable("B","Global") @@ hightlight id_;_Browser("数字本草 | 主页").Page("个人注册信息完善").WebEdit("mobileNumber")_;_script infofile_;_ZIP::ssf6.xml_;_
	.WebEdit("captcha").Set "1" @@ hightlight id_;_Browser("数字本草 | 主页").Page("个人注册信息完善").WebEdit("captcha")_;_script infofile_;_ZIP::ssf7.xml_;_
	.WebButton("立即注册").Click 71,19 @@ hightlight id_;_Browser("数字本草 | 主页").Page("个人注册信息完善").WebButton("立即注册")_;_script infofile_;_ZIP::ssf8.xml_;_
End With
Browser("数字本草 | 主页").Page("个人注册信息完善_2").Link("下次再说>>").Click 59,4 @@ hightlight id_;_Browser("数字本草 | 主页").Page("个人注册信息完善 2").Link("下次再说>>")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("数字本草 | 主页").Page("个人注册成功").Link("实名认证>>").Click 45,9 @@ hightlight id_;_Browser("数字本草 | 主页").Page("个人注册成功").Link("实名认证>>")_;_script infofile_;_ZIP::ssf10.xml_;_
With Browser("数字本草 | 主页").Page("个人卖家实名认证")
	.WebEdit("idName").Set DataTable("C","Global") @@ hightlight id_;_Browser("数字本草 | 主页").Page("个人卖家实名认证").WebEdit("idName")_;_script infofile_;_ZIP::ssf11.xml_;_
	.WebEdit("idCard").Set "111111111111111111" @@ hightlight id_;_Browser("数字本草 | 主页").Page("个人卖家实名认证").WebEdit("idCard")_;_script infofile_;_ZIP::ssf12.xml_;_
	.WebButton("提交认证").Click 55,22 @@ hightlight id_;_Browser("数字本草 | 主页").Page("个人卖家实名认证").WebButton("提交认证")_;_script infofile_;_ZIP::ssf13.xml_;_
End With
With Browser("数字本草 | 主页").Page("绑定银行卡")
	.WebEdit("paymentInfoDataList[0].bank").Set "中国银行" @@ hightlight id_;_Browser("数字本草 | 主页").Page("绑定银行卡").WebEdit("paymentInfoDataList[0].bank")_;_script infofile_;_ZIP::ssf14.xml_;_
	.WebEdit("paymentInfoDataList[0].account").Set DataTable("C","Global") @@ hightlight id_;_Browser("数字本草 | 主页").Page("绑定银行卡").WebEdit("paymentInfoDataList[0].account")_;_script infofile_;_ZIP::ssf15.xml_;_
	.WebEdit("paymentInfoDataList[0].account_2").Set "1" @@ hightlight id_;_Browser("数字本草 | 主页").Page("绑定银行卡").WebEdit("paymentInfoDataList[0].account 2")_;_script infofile_;_ZIP::ssf16.xml_;_
    .WebButton("保存").Click 63,18 @@ hightlight id_;_Browser("数字本草 | 主页").Page("绑定银行卡").WebButton("保存")_;_script infofile_;_ZIP::ssf17.xml_;_
End With
Browser("数字本草 | 主页").Page("个人卖家认证完成").WebButton("开始设置交易账号").Click 70,12 @@ hightlight id_;_Browser("数字本草 | 主页").Page("个人卖家认证完成").WebButton("开始设置交易账号")_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("数字本草 | 主页").Page("数字本草").Link("交易账户").Click 100,11 @@ hightlight id_;_Browser("数字本草 | 主页").Page("数字本草").Link("交易账户")_;_script infofile_;_ZIP::ssf19.xml_;_
With Browser("数字本草 | 主页").Page("数字本草_2")
	.WebButton("开始设置").Click 83,21 @@ hightlight id_;_Browser("数字本草 | 主页").Page("数字本草 2").WebButton("开始设置")_;_script infofile_;_ZIP::ssf20.xml_;_
	.WebEdit("operPwd").SetSecure "5698a7840b0b67b6" @@ hightlight id_;_Browser("数字本草 | 主页").Page("数字本草 2").WebEdit("operPwd")_;_script infofile_;_ZIP::ssf21.xml_;_
	.WebEdit("operPwd1").SetSecure "5698a78bb6f2e79d" @@ hightlight id_;_Browser("数字本草 | 主页").Page("数字本草 2").WebEdit("operPwd1")_;_script infofile_;_ZIP::ssf22.xml_;_
	.WebButton("立即开通").Click 51,20 @@ hightlight id_;_Browser("数字本草 | 主页").Page("数字本草 2").WebButton("立即开通")_;_script infofile_;_ZIP::ssf23.xml_;_
	.Link("基础信息").Click 80,14 @@ hightlight id_;_Browser("数字本草 | 主页").Page("数字本草 2").Link("基础信息")_;_script infofile_;_ZIP::ssf24.xml_;_
End With
With Browser("数字本草 | 主页").Page("数字本草_3")
	.WebEdit("name").Set DataTable("D","Global") @@ hightlight id_;_Browser("数字本草 | 主页").Page("数字本草 3").WebEdit("name")_;_script infofile_;_ZIP::ssf25.xml_;_
	.WebEdit("description").Set "欢迎0" @@ hightlight id_;_Browser("数字本草 | 主页").Page("数字本草 3").WebEdit("contactName1")_;_script infofile_;_ZIP::ssf27.xml_;_
	.WebEdit("contactName1").Set DataTable("C","Global") @@ hightlight id_;_Browser("数字本草 | 主页").Page("数字本草 3").WebEdit("contactName1")_;_script infofile_;_ZIP::ssf28.xml_;_
	.WebEdit("contactPhone1").Set DataTable("B","Global") @@ hightlight id_;_Browser("数字本草 | 主页").Page("数字本草 3").WebEdit("contactPhone1")_;_script infofile_;_ZIP::ssf29.xml_;_
	.WebList("countryIso").Select "中国" @@ hightlight id_;_Browser("数字本草 | 主页").Page("数字本草 3").WebList("countryIso")_;_script infofile_;_ZIP::ssf30.xml_;_
	.WebList("regionIso").Select "山西" @@ hightlight id_;_Browser("数字本草 | 主页").Page("数字本草 3").WebList("regionIso")_;_script infofile_;_ZIP::ssf31.xml_;_
	.WebList("cityCode").Select "大同" @@ hightlight id_;_Browser("数字本草 | 主页").Page("数字本草 3").WebList("cityCode")_;_script infofile_;_ZIP::ssf32.xml_;_
	.WebList("cityDistrictCode").Select "新荣" @@ hightlight id_;_Browser("数字本草 | 主页").Page("数字本草 3").WebList("cityDistrictCode")_;_script infofile_;_ZIP::ssf33.xml_;_
	.WebEdit("street").Set "迎水道1" @@ hightlight id_;_Browser("数字本草 | 主页").Page("数字本草 3").WebEdit("street")_;_script infofile_;_ZIP::ssf34.xml_;_
End With
Browser("数字本草 | 主页").Close



 @@ hightlight id_;_Browser("数字本草 | 主页").Page("数字本草 3").WebButton("创建店铺")_;_script infofile_;_ZIP::ssf35.xml_;_
