
Browser("数字本草").Page("数字本草").WebButton("申请退货退款").Click

Browser("数字本草 | 退货退款").Page("数字本草").WebRadioGroup("returnTypeRadio").Select "return"
Browser("数字本草 | 退货退款").Page("数字本草").WebCheckBox("productOption").Set "ON"
Browser("数字本草 | 退货退款").Page("数字本草").WebCheckBox("productOption").Set " "
Browser("数字本草 | 退货退款").Page("数字本草").WebEdit("reason").Set " "

Browser("数字本草 | 退货退款").Page("数字本草").WebButton("提交申请").Click






 @@ hightlight id_;_Browser("数字本草 2").Page("数字本草").WebRadioGroup("returnTypeRadio")_;_script infofile_;_ZIP::ssf3.xml_;_
