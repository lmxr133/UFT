Browser("数字本草").Page("数字本草").WebButton("申请退货退款").Click

Browser("数字本草").Page("数字本草").WebRadioGroup("returnTypeRadio").Select "refund"
Browser("数字本草").Page("数字本草").WebEdit("amount").Set " "
Browser("数字本草").Page("数字本草").WebEdit("reason").Set " "

Browser("数字本草").Page("数字本草").WebButton("提交申请").Click






