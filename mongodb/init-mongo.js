db.createUser(
	{
		user:"admin",
		pwd:"123456",
		roles:[
			{
				role : "userAdminAnyDatabase",
				db	: "admin"
			}
		]
	}
)