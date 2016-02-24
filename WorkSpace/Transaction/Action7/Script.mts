

Browser("数字本草 | 主页").Page("数字本草 | 主页").Image("山楂").Click




Browser("人参 | 丹参 | 根茎类 | 药材 | 数字本草").Page("人参 | 丹参 | 根茎类 | 药材 | 数字本草").WebButton("立刻购买").Click

Browser("人参 | 丹参 | 根茎类 | 药材 | 数字本草").Page("结帐 | 数字本草").WebEdit("WebEdit").Set "5"

Browser("人参 | 丹参 | 根茎类 | 药材 | 数字本草").Page("结帐 | 数字本草").WebButton("提交订单").Click

'生成订单号

Browser("人参 | 丹参 | 根茎类 | 药材 | 数字本草").Page("订单确认 | 数字本草").Link("查看并支付").Click

'点击查看并支付后，进入一个新的页面，来完成支付
Browser("数字本草").Page("数字本草").WebButton("支付").Click
Browser("数字本草").Dialog("安全性警告").Page("安全性警告").WebButton("继续").Click

'进入选择银行页面
Browser("网关选择页面").Page("网关选择页面").WebRadioGroup("bank").Select "0309|0000|CibTrans.jsp?GateId=09"
'Browser("网关选择页面").Page("网关选择页面").WebRadioGroup("bank").Select "0057|0057|FdBankTrans.jsp?GateId=57" @@ hightlight id_;_Browser("网关选择页面 2").Page("网关选择页面").WebRadioGroup("bank")_;_script infofile_;_ZIP::ssf2.xml_;_
'Browser("网关选择页面").Page("网关选择页面").WebRadioGroup("bank").Select "0024|0024|JsbchinaTrans.jsp?GateId=24" @@ hightlight id_;_Browser("网关选择页面 2").Page("网关选择页面").WebRadioGroup("bank")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("网关选择页面").Page("网关选择页面").Image("submit").Click

'进入银行仿真支付页面
Browser("Browser").Page("Page").WebButton("兴业银行仿真环境第一步").Click

Browser("Browser").Page("Page_2").WebButton("兴业仿真银行第二步").Click
'恭喜，您的订单已经支付完毕



Browser("数字本草 | 主页").Page("数字本草 | 主页").Image("数字本草").Click
Browser("Browser").Page("数字本草 | 主页").Link("[退出]").Click
SystemUtil.CloseProcessByName"firefox.exe"

Wait(120)


