import Home from '../ui/pages/Home.jsx';
//import Contact from '../ui/components/Contact.jsx';
import SkillsListWrapper from '../ui/pages/SkillsListWrapper.jsx';
import NotFound from '../ui/pages/NotFound.jsx';
import Register from '../ui/components/Login/Register.jsx';
import Login from '../ui/components/Login/Login.jsx';
import '/imports/api/User.js';

var routes = [];
if (Meteor.userId()) {
    routes = [
	{
	    path: '/',
	    component: Home
	},
	{
	    path: '/skills',
	    component: SkillsListWrapper
	},
/*	{
	    path: '/contact',
	    component: Contact
	},
*/
	{
	    path: '/logout',
	},
	{
	    path: '*',
	    component: NotFound
	}
    ];
}
else {
    routes = [
	{
	    path: '/',
	    component: Home
	},
	{
	    path: '/register',
	    component: Register
	},
	{
	    path: '/login',
	    component: Login
	},
	{
	    path: '*',
	    component: NotFound
	}
    ];
}

export default routes;
