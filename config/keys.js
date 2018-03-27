
module.exports = {
	facebook: {
		// Facebook App Settings
		fb_app_id: process.env.FACEBOOK_APP_ID || "1791165357568831",
		fb_app_secret: process.env.FACEBOOK_APP_SECRET || "70b43373323e9c92705ecec5b1189f78",
		fb_page_id: process.env.PAGE_ID || "1791165357568831",
		app_key: process.env.APP_KEY,
		client_secret: process.env.CLIENT_SECRET,
		page_access_token: process.env.PAGE_ACCESS_TOKEN,
		user_access_token: process.env.USER_ACCESS_TOKEN,
		verify_token: process.env.VERIFICATION_TOKEN,

	},
	mongodb: {
        dbURL: process.env.MONGODB_URI || "mongodb://localhost:27017/sweetlipsdb"
    },
    session: {
	    cookieKey: 'stuckwanyah'
    }
};