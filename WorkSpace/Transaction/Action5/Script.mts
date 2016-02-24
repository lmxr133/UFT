
Browser("数字本草 | 主页").Page("数字本草 | 主页").Link("[登录]").Click

Browser("数字本草 | 主页").Page("会员登录").WebEdit("j_username1").Set "0自动化测试"
Browser("数字本草 | 主页").Page("会员登录").WebEdit("j_password").Set "123456"

Browser("数字本草 | 主页").Page("会员登录").WebButton("登录").Click



