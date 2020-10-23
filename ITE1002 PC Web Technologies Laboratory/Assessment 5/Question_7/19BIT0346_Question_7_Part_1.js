var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/company_db";


MongoClient.connect(url, function(err, db) {
	if (err){
		throw err;
	}
	var dbo = db.db("company_db");
	var Employee1 = { EmpID:"", Vehicle_No: "", Owner_Name: "", Brand_Name:"", Year_Of_Purchase="" };
	var Employee2 = { EmpID:"", Vehicle_No: "", Owner_Name: "", Brand_Name:"", Year_Of_Purchase="" };
	var Employee3 = { EmpID:"", Vehicle_No: "", Owner_Name: "", Brand_Name:"", Year_Of_Purchase="" };
	var Employee4 = { EmpID:"", Vehicle_No: "", Owner_Name: "", Brand_Name:"", Year_Of_Purchase="" };
	var Employee5 = { EmpID:"", Vehicle_No: "", Owner_Name: "", Brand_Name:"", Year_Of_Purchase="" };
	var Employee6 = { EmpID:"", Vehicle_No: "", Owner_Name: "", Brand_Name:"", Year_Of_Purchase="" };
	var Employee7 = { EmpID:"", Vehicle_No: "", Owner_Name: "", Brand_Name:"", Year_Of_Purchase="" };
	var Employee8 = { EmpID:"", Vehicle_No: "", Owner_Name: "", Brand_Name:"", Year_Of_Purchase="" };
	var Employee9 = { EmpID:"", Vehicle_No: "", Owner_Name: "", Brand_Name:"", Year_Of_Purchase="" };
	var Employee10 = { EmpID:"", Vehicle_No: "", Owner_Name: "", Brand_Name:"", Year_Of_Purchase="" };
	dbo.collection("Employee_Details_Collection").insertMany([Employee1,Employee2,Employee3,Employee4,Employee5,Employee6,Employee7,Employee8,Employee9,Employee10], function(err, res) {
		if (err) throw err;
		console.log("10 documents inserted");
		db.close();  
	});
});