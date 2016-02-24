
For i = 0 To 20 Step 1
	

Browser("数字本草").Page("数字本草").WebElement("全草类").Click
Browser("数字本草").Page("数字本草").WebElement("薄荷").Click

Browser("数字本草").Page("数字本草").WebEdit("商品规格").Set "个"

Browser("数字本草").Page("数字本草").WebList("countrySelector产地").Select "越南"


Browser("数字本草").Page("数字本草").WebList("countrySelector库存地").Select "中国"
Browser("数字本草").Page("数字本草").WebList("regionSelector库存地").Select "天津"

Browser("数字本草").Page("数字本草").WebEdit("灰分").Set "5"

Browser("数字本草").Page("数字本草").WebEdit("杂质").Set "5"

Browser("数字本草").Page("数字本草").WebButton("自动生成标题").Click

Browser("数字本草").Page("数字本草").WebEdit("库存量").Set "100000"
Browser("数字本草").Page("数字本草").WebEdit("起售量").Set "10"
'Browser("数字本草").Page("数字本草").WebEdit("采购数量").Set "100"
Browser("数字本草").Page("数字本草").WebEdit("采购单价").Set "100"
Browser("数字本草").Page("数字本草").WebElement("删除").Click
Browser("数字本草").Page("数字本草").WebEdit("安全库存").Set "10000"



Browser("数字本草").Page("数字本草").WebElement("添加图片").Click
Browser("数字本草").Page("数字本草").WebElement("历史图片").Click
Browser("数字本草").Page("数字本草").Image("0000031001-PRODUCT-20160216113").Click



Browser("数字本草").Page("数字本草").Frame("Frame").WebElement("WebElement").Object.innerText="123"

Browser("数字本草").Page("数字本草").WebButton("发布商品").Click

Browser("数字本草").Page("数字本草").Link("继续发布商品>>").Click
wait 1

Next
