'On Error Resume Next
DataTable.Import("C:\Users\LM\Desktop\ShopTask.xlsx")
For i = 6 To 7 Step 1

CurrentRow = DataTable.GetSheet("Global").GetCurrentRow
DataTable.GetSheet("Global").SetCurrentRow(i)

Browser("会员登录").Page("数字本草 | 主页").Link("[登录]").Click

With Browser("会员登录").Page("会员登录")	
	.WebEdit("j_username1").Set DataTable("用户名","Global")
	.WebEdit("j_password").Set DataTable("密码","Global")
	.WebButton("登录").Click
End With

Browser("会员登录").Page("数字本草 | 主页").Link("卖家中心").Click


With Browser("会员登录").Page("数字本草")
	

	.Link("基础信息").Click
	.WebEdit("name").Set DataTable("店铺名称","Global")
	.WebEdit("description").Set  DataTable("店铺简介","Global")
	.WebEdit("contactName1").Set  DataTable("联系人1","Global")
	.WebEdit("contactPhone1").Set  DataTable("联系人1电话","Global")

	.WebEdit("contactName2").Set  DataTable("联系人2","Global")
	.WebEdit("contactPhone2").Set  DataTable("联系人2电话","Global")
	.WebEdit("contactName3").Set  DataTable("联系人3","Global")
	.WebEdit("contactPhone3").Set  DataTable("联系人3电话","Global")
	.WebEdit("telephone").Set  DataTable("座机号","Global")
	.WebEdit("fax").Set  DataTable("传真","Global")
	.WebEdit("qq").Set  DataTable("QQ","Global")
	
	
	.WebList("countryIso").Select  DataTable("国家","Global")
	.WebList("regionIso").Select  DataTable("省份","Global")
	.WebList("cityCode").Select  DataTable("市级","Global")
	.WebList("cityDistrictCode").Select  DataTable("地区","Global")
	.WebEdit("street").Set  DataTable("街道","Global")
	.WebButton("创建店铺").Click
End With
Browser("数字本草").Page("数字本草").Link("[退出]").Click
Browser("会员登录").Close

SystemUtil.Run"D:\Program Files (x86)\Mozilla Firefox\firefox.exe","https://123.150.11.173"



Next















