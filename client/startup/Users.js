Accounts.createUser({
    username: 'nordlys',
    email : 'hello@nordlys.io',
    password : 'nordlys',
    profile  : {
	fullname: 'Nordlys'
    }    
}, function (error) {
    if (error) {
	console.log(error.reason);
    }
});
