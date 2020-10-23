var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/company_db";


MongoClient.connect(url, function(err, db) {
	if (err){
		throw err;
	}
	var dbo = db.db("company_db");
	var Employee1 = { EmpID:"1", Vehicle_No: "KA 01 AA 0001", Owner_Name: "A", Brand_Name:"Ford", Year_Of_Purchase:"2020" };
	var Employee2 = { EmpID:"2", Vehicle_No: "KA 01 AA 0002", Owner_Name: "B", Brand_Name:"Toyota", Year_Of_Purchase:"2019" };
	var Employee3 = { EmpID:"3", Vehicle_No: "KA 01 AA 0003", Owner_Name: "C", Brand_Name:"Mercedes", Year_Of_Purchase:"2018" };
	var Employee4 = { EmpID:"4", Vehicle_No: "KA 01 AA 0004", Owner_Name: "D", Brand_Name:"BMW", Year_Of_Purchase:"2017" };
	var Employee5 = { EmpID:"5", Vehicle_No: "KA 01 AA 0005", Owner_Name: "E", Brand_Name:"Lamborgini", Year_Of_Purchase:"2016" };
	var Employee6 = { EmpID:"6", Vehicle_No: "KA 01 AA 0006", Owner_Name: "F", Brand_Name:"Hyundai", Year_Of_Purchase:"2015" };
	var Employee7 = { EmpID:"7", Vehicle_No: "KA 01 AA 0007", Owner_Name: "G", Brand_Name:"Mahindra", Year_Of_Purchase:"2014" };
	var Employee8 = { EmpID:"8", Vehicle_No: "KA 01 AA 0008", Owner_Name: "H", Brand_Name:"Maruti", Year_Of_Purchase:"2013" };
	var Employee9 = { EmpID:"9", Vehicle_No: "KA 01 AA 0009", Owner_Name: "I", Brand_Name:"Volvo", Year_Of_Purchase:"2012" };
	var Employee10 = { EmpID:"10", Vehicle_No: "KA 01 AA 0010", Owner_Name: "J", Brand_Name:"Nissan", Year_Of_Purchase:"2011" };
	dbo.collection("Employee_Details_Collection").insertMany([Employee1,Employee2,Employee3,Employee4,Employee5,Employee6,Employee7,Employee8,Employee9,Employee10], function(err, res) {
		if (err){
			throw err;
		}
		console.log("10 documents inserted");
		db.close();  
	});
});