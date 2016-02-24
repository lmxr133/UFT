SystemUtil.Run"www.baidu.com"
testData = DataTable.Value("关键字输入","Global")
Browser("百度一下，你就知道").Page("百度一下，你就知道").WebEdit("wd").Set testData
Browser("百度一下，你就知道").Page("百度一下，你就知道").WebButton("百度一下").Click
Browser("百度一下，你就知道").Close
