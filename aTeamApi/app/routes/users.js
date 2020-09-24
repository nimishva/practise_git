const express           = require('express'); //Including Express
const router            = express.Router();
const appConfig         = require('../../config/appConfig'); //Including appConfig file
const userController    = require('../controllers/usersCon'); //Including Controller file

let setRouter = (app) =>{

   let baseUrl = `${appConfig.apiVersion}/users`; //Declaring baseUrl 


    //Routes 
    //Signup route
    app.post(`${baseUrl}/signUp`,userController.signUpFn);

    /**
	 * @api {get} /api/v1/users/signup New User Signup
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "User Created",
	    "status": 200,
	    "data": [
                              {
						            userId: "string",
					            	name: "string",
						            email: "string",
						            gender: "string",
									profile_img: string,
									friendsList:Array,
						            createdOn: "date"
					             }
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "user creation error",
	    "status": 500,
	    "data": null
	   }
	 */



    //Signin  route
    app.post(`${baseUrl}/signIn`,userController.signInFn);
    /**
	 * @api {get} /api/v1/users/signin sigin
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Login successfull",
	    "status": 200,
        "data": [      
                    token:"authorization token",
                    userData :   
                                {
						            userId: "string",
					            	name: "string",
						            email: "string",
						            gender: "string",
						            profile_img: string,
						            frinedsList: array,
						            createdOn: "date"
					             }
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Login failed",
	    "status": 500,
	    "data": null
	   }
	 */

    //get all data route
    app.get(`${baseUrl}/getAll`,userController.getAllData);

    /**
	 * @api {get} /api/v1/users/getAll Get all Users
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Data Found",
	    "status": 200,
	    "data": [
					{
						userId: "string",
						username: "string",
						firstName: "string",
						lastName: "string",
						email: string,
						mobile: number,
						createdOn: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Data fetching error",
	    "status": 500,
	    "data": null
	   }
	 */



    //get userid  by name
    app.post(`${baseUrl}/getUserIdByName`,userController.getUserId);

     //get userList
    app.get(`${baseUrl}/getUsersList`,userController.getUsersList);

};


module.exports = {
    setRouter : setRouter
}