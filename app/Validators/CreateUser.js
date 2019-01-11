'use strict'

class CreateUser {
  get rules () {
    return {
      "username":"min:6|required|unique:users",
      "email":"required|unique:users",
      "password":"required|unique:users|min:6"
    }
  }

  get messages(){
    return {
      'min': "Gomen-nasai m(_　_)m, {{field}} needs to be at least 6 characters long",
      'required': 'Woah now, {{field}} is required',
      'uniq': 'Wait a second, the {{field}} already exists'

    }
  }

  get validateAll () {
      return true
    }

  async fails(error){
    this.ctx.session.withErrors(error).flashAll();
    return this.ctx.response.redirect('back');
  }
}

module.exports = CreateUser
