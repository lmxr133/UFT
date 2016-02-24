SystemUtil.Run"www.baidu.com"

For Iterator = 0 To 9 Step 1
	
	Browser("百度一下，你就知道").Page("百度一下，你就知道").WebEdit("wd").Set DataTable("演示","Action1")

    Browser("百度一下，你就知道").Page("百度一下，你就知道").WebButton("百度一下").Click
    Browser("百度一下，你就知道").Page("QTP测试技术导航_百度搜索").Image("到百度首页").Click
   
Next





