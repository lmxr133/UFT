
'Msgbox Browser("数字本草").Page("数字本草").WebList("countryIso").GetROProperty("name")
Browser("micClass := Browser").Page("micClass := Page").WebList("name := countryIso","items count := 2""index := 0").Select "中国"
Browser("micClass := Browser").Page("micClass := Page").WebList("name := regionIso","items count := 35","index := 1").Select "天津"
Browser("micClass := Browser").Page("micClass := Page").WebList("name := cityCode","index := 2").Select "天津"
Browser("micClass := Browser").Page("micClass := Page").WebList("name := cityDistrictCode","index := 3").Select "津南"
'
'
'
'Browser("数字本草").Page("数字本草").WebList("countryIso").Object.Select "中国"
'Browser("数字本草").Page("数字本草").WebList("regionIso").Object.Select  "天津"
'Browser("数字本草").Page("数字本草").WebList("cityCode").Object.Select "天津"
'Browser("数字本草").Page("数字本草").WebList("cityDistrictCode").Object.Select "津南"
'
'
'
Browser("数字本草").Page("数字本草").WebList("countryIso").Select "中国"
Browser("数字本草").Page("数字本草").WebList("regionIso").Select "天津"
Browser("数字本草").Page("数字本草").WebList("cityCode").Select "天津"
Browser("数字本草").Page("数字本草").WebList("cityDistrictCode").Select "津南"
'
'
'
'
'Browser("数字本草").Page("数字本草").WebList("countryIso").Select "中国"
'Browser("数字本草").Page("数字本草").WebList("regionIso").Select "天津"
'Browser("数字本草").Page("数字本草").WebList("cityCode").Select "天津"
'Browser("数字本草").Page("数字本草").WebList("cityDistrictCode").Select "津南"


Browser("Mercury Class := Browser").Page("micClass := Page").WebEdit("name := wd").Set"QTP"
'set oBrowser=Description.Create
'Set oPage=Description.Create
'Set oEdit=Description.Create
'oBrowser("micClass").value = "Browser"
'oPage("micClass").value="Page"
'oEdit("name").value="wd"
'Browser(oBrowser).Page(oPage).WebEdit(oEdit).Set"QTP"

set oBrowser=Description.Create()
Set oPage=Description.Create()
Set oList=Description.Create()
oBrowser("micClass").value = "Browser"
oPage("micClass").value="Page"
oList("name").value = "countryIso"
If oList("name").value="countryIso" Then
Browser(oBrowser).Page(oPage).WebList(oList).Select "中国"
ElseIf oList("name").value="reginIso"  Then
Browser(oBrowser).Page(oPage).WebList(oList).Select "天津"
ElseIf oList("name").value="cityCode" Then
Browser(oBrowser).Page(oPage).WebList(oList).Select "天津"
ElseIf oList("name").value="cityDistrictCode" Then
Browser(oBrowser).Page(oPage).WebList(oList).Select "津南"

End If

set oBrowser=Description.Create()
Set oPage=Description.Create()
Set oList=Description.Create()
oBrowser("micClass").value = "Browser"
oPage("micClass").value="Page"
oList("name").value = "reginIso" 
oList("items count").value ="35"
If oList("name").value="countryIso" Then
Browser(oBrowser).Page(oPage).WebList(oList).Select "中国"
ElseIf oList("name").value="reginIso" and oList("items count").value ="35" Then
Browser(oBrowser).Page(oPage).WebList(oList).Select "天津"
ElseIf oList("name").value="cityCode" Then
Browser(oBrowser).Page(oPage).WebList(oList).Select "天津"
ElseIf oList("name").value="cityDistrictCode" Then
Browser(oBrowser).Page(oPage).WebList(oList).Select "津南"

End If
'
'set oBrowser=Description.Create()
'Set oPage=Description.Create()
'Set oList=Description.Create()
'oBrowser("micClass").value = "Browser"
'oPage("micClass").value="Page"
'oList("name").value = "cityCode"
'If oList("name").value="countryIso" Then
'Browser(oBrowser).Page(oPage).WebList(oList).Select "中国"
'ElseIf oList("name").value="reginIso"  Then
'Browser(oBrowser).Page(oPage).WebList(oList).Select "天津"
'ElseIf oList("name").value="cityCode" Then
'Browser(oBrowser).Page(oPage).WebList(oList).Select "天津"
'ElseIf oList("name").value="cityDistrictCode" Then
'Browser(oBrowser).Page(oPage).WebList(oList).Select "津南"
'
'End If
'
'set oBrowser=Description.Create()
'Set oPage=Description.Create()
'Set oList=Description.Create()
'oBrowser("micClass").value = "Browser"
'oPage("micClass").value="Page"
'oList("name").value = "cityDistrictCode"
'If oList("name").value="countryIso" Then
'Browser(oBrowser).Page(oPage).WebList(oList).Select "中国"
'ElseIf oList("name").value="reginIso"  Then
'Browser(oBrowser).Page(oPage).WebList(oList).Select "天津"
'ElseIf oList("name").value="cityCode" Then
'Browser(oBrowser).Page(oPage).WebList(oList).Select "天津"
'ElseIf oList("name").value="cityDistrictCode" Then
'Browser(oBrowser).Page(oPage).WebList(oList).Select "津南"
'
'End If

