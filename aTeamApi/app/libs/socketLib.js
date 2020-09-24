const socketio          = require('socket.io');
const mangoose          = require('mongoose');
const shortId           = require('shortid');
const logger            = require('./logger');
const tokenLib          = require('./tokenLib');
const check             = require('./checkLib');
const resposne          = require('./responseGenLib');

let setServer = (server) => {
    let allOnlineUsers  = [];
    let io              = socketio.listen(server);
    let myIo            = io.of('');
    myIo.on('connection',(socket)=>{
        socket.emit('verifyUser'," ");

        socket.on('set-user',(authToken)=>{
            console.log('set user called');
            tokenLib.verifyToken(authToken,'',(err,user)=>{
                if(err){
                    socket.emit('auth-error',{status:500,error:'Please provide coorect token data'});
                }else{
                    console.log('user id verified,setting user details');
                    let currentUserId      = user.data;
                    socket.userId          = currentUserId;   
                    let fullName           = `${currentUserId.firstName} ${currentUserId.lastName}`;
                    console.log(fullName +" is online");
                    socket.emit(currentUserId.userId +": you are online");
                    let usrObj = {userId:currentUserId.userId,fullName : fullName};
                    allOnlineUsers.push(usrObj);
                }
            })
        }) //set user ends here

        socket.on('disconnect',()=>{
            console.log("user is disconnected");
            console.log(socket.userId);
            //Remove user form allOnline user array
            var removeIndex = allOnlineUsers.map(function(user){
                return user.userId.indexOf(socket.userId); 
            }) // Map function ends here
            allOnlineUsers.splice(removeIndex,1);
        });
    }) // sockt initialization
} // Main event handler ends here

module.exports = { setServer} ;