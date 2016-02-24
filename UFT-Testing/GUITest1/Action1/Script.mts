Browser("百度一下，你就知道").Page("百度一下，你就知道").WebEdit("wd").Set"QTP"
Browser("百度一下，你就知道").Page("百度一下，你就知道").WebEdit("wd").SetTOProperty "name","query"
Browser("百度一下，你就知道").Page("百度一下，你就知道").WebEdit("wd").Set"QTP"

index = Browser("百度一下，你就知道").Page("百度一下，你就知道").WebEdit("wd").GetROProperty("source_index")	
Browser("百度一下，你就知道").Page("百度一下，你就知道").WebEdit("source_index:=" & index).Set"QTP"


