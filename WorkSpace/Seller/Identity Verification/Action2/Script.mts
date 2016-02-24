
'绑定银行卡
Browser("认证信息 | 数字本草").Page("认证信息 | 数字本草").WebEdit("bank").Set ""

Browser("认证信息 | 数字本草").Page("认证信息 | 数字本草").WebEdit("accountOwner").Set ""

Browser("认证信息 | 数字本草").Page("认证信息 | 数字本草").WebEdit("accountNumber").Set ""
 
Browser("认证信息 | 数字本草").Page("认证信息 | 数字本草").WebButton("保存").Click

'下一级页面会显示为 —— 个人账户已通过验证
