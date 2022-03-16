db.createUser(
	{
		user:"admin",
		pwd:"zhycgz666!!!",
		roles:[
			{
				role : "userAdminAnyDatabase",
				db	: "admin"
			}
		]
	}
)