const UserController = require('./controllers/UserController')

module.exports = (app) =>{
    //get all user
    app.get('/users', UserController.index)

}