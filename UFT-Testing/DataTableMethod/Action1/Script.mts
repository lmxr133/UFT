DataTable.GlobalSheet.AddParameter "column1" , "value1"
DataTable.GlobalSheet.AddParameter "column2" , "value2"
DataTable.LocalSheet.AddParameter "column3" , "value3"

DataTable.GetSheet("Action1").SetCurrentRow(2)
DataTable.Value("column4","Action1") = "Row2"


