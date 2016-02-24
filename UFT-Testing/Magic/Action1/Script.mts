With Browser("51Testing软件测试网-中国软件测试人的精神家园").Page("51Testing软件测试网-中国软件测试人的精神家园")
     .WebButton("搜索").Object.innerText = "百度搜索"
     .Image("51Testing软件测试网").Object.src = "//www.baidu.com/img/bd_logo1.png"
     .Link("注册").Object.innerText = "加入百度（注册）"
     .WebButton("WebButton").Object.innerText = "baidu_login"
End With
Browser("百度一下，你就知道").Page("百度一下，你就知道").WebButton("百度一下").Object.defaultValue = "百度一百万下"
Browser("百度一下，你就知道").Page("百度一下，你就知道").WebButton("百度一下").Object.click
 
MsgBox Browser("百度一下，你就知道").Page("百度一下，你就知道")._
            WebEdit("wd").Object.value
