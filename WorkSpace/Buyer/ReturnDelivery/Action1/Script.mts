Browser("数字本草 | 主页").Page("数字本草 | 主页").Link("买家中心").Click

Browser("数字本草 | 主页").Page("数字本草").Link("退货退款管理").Click

Browser("数字本草 | 主页").Page("退货退款管理 | 数字本草").Link("查看").Click

Browser("退货退款详情 | 数字本草").Page("退货退款详情 | 数字本草").Link("退货发货").Click

Browser("退货退款详情 | 数字本草").Page("退货退款详情 | 数字本草").WebRadioGroup("deliveryMode").Select "express-delivery"

Browser("退货退款详情 | 数字本草").Page("退货退款详情 | 数字本草").WebEdit("deliveryMsg").Set " "

Browser("退货退款详情 | 数字本草").Page("退货退款详情 | 数字本草").WebElement("确认发货").Click

 @@ hightlight id_;_Browser("退货退款详情 | 数字本草").Page("退货退款详情 | 数字本草").WebRadioGroup("deliveryMode")_;_script infofile_;_ZIP::ssf2.xml_;_
