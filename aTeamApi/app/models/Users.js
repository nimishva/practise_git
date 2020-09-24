const mongoose = require('mongoose'); // Includig Mongoose Package
const timeLib  = require('../libs/timeLib');

Schema = mongoose.Schema;

let userSchema = new Schema ( {

        userId  : {

             type        : String,
             default     : "",
             index       : true,
             unique      : true

        },
        password  : {

             type        : String,
             default     : "",

        },

        name : {

             type        : String,
             default     : "",

        },
        email    : {

             type        : String,
             default     : "",

        },
        gender : {

             type : String,
             default : ""

        },
        profile_img : {

             type : String,
             default : ""

        },
        requests : [],
        friendsList : [ ],
        createdOn :{

            type:Date,
            default:timeLib.now()

          }

});


mongoose.model('Users',userSchema);

