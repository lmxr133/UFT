Browser("会员登录").Page("会员登录").WebEdit("j_username").Set"QTP"
Browser("会员登录").Page("会员登录").WebEdit("j_password").Set"123456"
Browser("会员登录").Page("会员登录").WebCheckBox("_spring_security_remember_me").Set "ON"
Browser("会员登录").Page("会员登录").WebButton("登录").Click







