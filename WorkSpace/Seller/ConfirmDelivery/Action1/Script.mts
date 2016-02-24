Browser("数字本草 | 主页").Page("数字本草 | 主页").Link("卖家中心").Click

Browser("数字本草 | 主页").Page("数字本草 | 卖家中心").Link("订单管理").Click

Browser("数字本草 | 主页").Page("数字本草 | 订单管理").Link("待发货").Click

Browser("数字本草 | 主页").Page("数字本草 | 订单管理").Link("查看订单详情").Click

Browser("数字本草 | 主页").Page("数字本草 | 发货").WebElement("发货").Click

Browser("数字本草 | 主页").Page("数字本草 | 发货").WebRadioGroup("deliveryMode").Select
'默认发货方式——快递
Browser("数字本草 | 主页").Page("数字本草 | 发货").WebEdit("deliveryMsg").Set " "
'输入 发货时间  快递公司名称  快递单号
Browser("数字本草 | 主页").Page("数字本草 | 发货").WebElement("确认发货").Click


