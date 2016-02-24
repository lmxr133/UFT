
Browser("数字本草").Page("数字本草(主页）").Link("卖家中心").Click

Browser("数字本草").Page("数字本草(主页）").Link("交易账户(列表）").Click

'Browser("数字本草").Page("数字本草").Link("交易账户(平铺）").Click

Browser("数字本草").Page("数字本草（卖家中心-交易账户）").WebButton("开始设置").Click

Browser("数字本草").Page("数字本草（卖家中心-交易账户）").WebEdit("SetPassword").Set " "

Browser("数字本草").Page("数字本草（卖家中心-交易账户）").WebEdit("ConfirmPassword").Set " "

Browser("数字本草").Page("数字本草（卖家中心-交易账户）").WebButton("立即开通").Click

'完成交易账号设置，可以申请店铺并发布商品了。


