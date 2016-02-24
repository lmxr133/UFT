Browser("micClass :=Browser").Page("micClass :=Page").WebEdit("name :=wd").Set"QTP"
Browser("micClass :=Browser").Page("micClass :=Page").WebButton("name := 百度一下").Click

Set baidu = Browser("micClass :=Browser").Page("micClass :=Page")
Print baidu.Link("name :=  新闻 "   ).Exist
With baidu
	 Print .Link("name := hao123" ).Exist
	 Print .Link("name := 地图 "    ).Exist
	 Print .Link("name := 视频  "   ).Exist
	 Print .Link("name := 贴吧  "   ).Exist
	 Print .Link("name := 关于百度 "   ).Exist
	 Print .Link("name := About Baidu "    ).Exist
End With
