FullFileName = "E:\test.png"
Browser("micClass:=Browser").CaptureBitmap FullFileName,True
Reporter.ReportEvent micFail,"错误截图写入报告",_
"这是一个很给力的功能",FullFileName

Instr 
FireEvent
