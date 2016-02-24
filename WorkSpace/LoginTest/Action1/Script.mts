

a = Browser("micClass:=Browser").Page("micClass:=Page").WebEdit("name:=j_username1").GetROProperty("x")
b = Browser("micClass:=Browser").Page("micClass:=Page").WebEdit("name:=j_username1").GetROProperty("y")

c = Browser("会员登录").Page("会员登录").WebEdit("j_username1").GetTOProperty("x")
d = Browser("会员登录").Page("会员登录").WebEdit("j_username1").GetTOProperty("y")
If a=c AND b=d Then
	'Msgbox "Passed"
	Reporter.ReportEvent micPass,"step1","Passed"
Else
   Reporter.ReportEvent micFail,"step1","Failed"
End If

a = Browser("micClass:=Browser").Page("micClass:=Page").WebEdit("name:=j_password").GetROProperty("x")
b = Browser("micClass:=Browser").Page("micClass:=Page").WebEdit("name:=j_password").GetROProperty("y")

c = Browser("会员登录").Page("会员登录").WebEdit("j_password").GetTOProperty("x")
d = Browser("会员登录").Page("会员登录").WebEdit("j_password").GetTOProperty("y")
If a=c AND b=d Then
	'Msgbox "Passed"
	Reporter.ReportEvent micPass,"step2","Passed"
Else
    Reporter.ReportEvent micFail,"step2","Failed"
	
End If

a = Browser("micClass:=Browser").Page("micClass:=Page").WebButton("name:=登录").GetROProperty("x")
b = Browser("micClass:=Browser").Page("micClass:=Page").WebButton("name:=登录").GetROProperty("y")

c = Browser("会员登录").Page("会员登录").WebButton("登录").GetTOProperty("x")
d = Browser("会员登录").Page("会员登录").WebButton("登录").GetTOProperty("y")
If a=c AND b=d Then
	'Msgbox "Passed"
	Reporter.ReportEvent micPass,"step3","Passed"
Else
    Reporter.ReportEvent micFail,"step3","Failed"
End If
