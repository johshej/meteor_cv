Accounts.createUser({
    username: 'minbruger',
    email : 'email@example.com',
    password : 'minkode',
    profile  : {
	fullname: 'Mit navn'
    }    
}, function (error) {
    if (error) {
	console.log(error.reason);
    }
});
