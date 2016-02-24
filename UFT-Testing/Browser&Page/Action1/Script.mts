SystemUtil.Run"C:\Program Files\Internet Explorer\iexplore.exe","www.51testing.com"

Set ObjBrowser =Description.Create()
ObjBrowser("micClass").Value = "Browser"

'Browser(ObjBrowser).FullScreen
Browser(ObjBrowser).Navigate"bbs.51testing.com"
Browser(ObjBrowser).Page("micClass := Page").Sync
Set ObjBrowser =Nothing
Wait 1
'ChechPoint start------>
'通过自身属性接口获取Browser的URL用于Step1的验证
'
'
checkURL = Trim(Browser("micClass:=Browser").Object.LocationURL)
If checkURL = "http://bbs.51testing.com" Then
	Reporter.ReportEvent micPass,"step1","Passed"
Else
    Reporter.ReportEvent micPass,"step1","Failed"
End If
'End of CheckPoint------>

'Step2
'通过OpenNewTab方法打开一个新的选项卡
Browser("micClass:=Browser").OpenNewTab:Wait 1
'通过GetROProperty方法动态获取当前浏览器对象的封装属性
testHWND = Browser("name:=新建选项卡").GetROProperty("hwnd")
Browser("name:=新建选项卡").Navigate"bbs.51testing.com"

'step3
Browser("51Testing软件测试论坛 - Powered").Page("51Testing软件测试论坛 - Powered").WebElement("登录").Click

With Browser("51Testing软件测试论坛 - Powered").Page("登录 - 51Testing软件测试论坛 -")
		.WebEdit("username").Set"lmxr133"
		.WebEdit("password").Set"lm4204598"
		.WebElement("登录").Click
		Wait 1
End With
'ChechPoint start------>
'一旦用户登录成功，则 退出 这个Link 会存在于页面中，所以用此控件作为验证点

oExist = Browser("51Testing软件测试论坛 - Powered")._
       Page("51Testing软件测试论坛 - Powered").Link("退出").Exist(1)
If oExist Then
	Reporter.ReportEvent micPass,"step3","passed"
else
    Reporter.ReportEvent micFail,"step3","failed"
End If
'End of CheckPoint------>

'根据之前动态获取的句柄，可以准确定位到具体的Browser，然后将其关闭
Browser("hwnd:="&testHWND).Close
Browser("micClass:=Browser").Refresh:Wait 2
'同样，刷新页面后，如果 退出 这个Link对象还存在，则说明状态已经传输到本页面上了，
'同时，说明本案例的自动化测试案例成功！
'ChechPoint start------>
oExist =Browser("51Testing软件测试论坛 - Powered")._
       Page("51Testing软件测试论坛 - Powered").Link("退出").Exist(1)
If oExist Then
	Reporter.ReportEvent micPass,"step4","passed"
else
    Reporter.ReportEvent micFail,"step4","failed"
End If
'End of CheckPoint------>       
