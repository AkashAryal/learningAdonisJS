'use strict'
const User = use('App/Models/User')

class UserController {
  async create({request, response, auth}){

    const user = await User.create(request.only(['username','email', 'password'])) //request include csrf token
    await auth.login(user);
    return response.redirect('/');
  }

  async login({request, response, auth, session}){
    const {username, password} = request.all();

    try {
      await auth.attempt(username, password);
      return response.redirect('/')
    } catch (error) {
      session.flash({loginError: "These credentials are incorrect (:_;)"});
      return response.redirect('/login');
    }

  }

}

module.exports = UserController
