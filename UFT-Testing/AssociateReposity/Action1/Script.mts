Browser("百度一下，你就知道")._
Page("百度一下，你就知道")._
WebEdit("wd").Set"QTP"

MsgBox Browser("百度一下，你就知道").Page("百度一下，你就知道").WebEdit("wd").GetROProperty("value")

