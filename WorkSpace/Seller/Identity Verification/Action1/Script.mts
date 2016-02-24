Browser("数字本草 | 主页").Page("数字本草 | 主页").Link("卖家中心").Click
'账户没有实名认证会进入——实名认证提示页面
Browser("数字本草 | 主页").Page("Page").Link("实名认证>>").Click 

Browser("数字本草 | 主页").Page("认证信息 | 数字本草").WebButton("开始认证").Click
'身份认证
Browser("数字本草 | 主页").Page("认证信息 | 数字本草").WebEdit("idName").Set" "
Browser("数字本草 | 主页").Page("认证信息 | 数字本草").WebEdit("idCard").Set" "

Browser("数字本草 | 主页").Page("认证信息 | 数字本草").WebButton("提交认证").Click



