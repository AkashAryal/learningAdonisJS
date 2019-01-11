'use strict'

class LoginUser {

  get rules () {
    return {
      // validation rules
      "username": "required",
      "password": "required"
    }
  }
  get validateAll () {
    return true
  }
  get messages(){
    return {
      'required': 'Woah now, {{field}} is required'
    }
  }

  async fails(error){
    this.ctx.session.withErrors(error).flashAll();
    return this.ctx.response.redirect('back');
  }
}

module.exports = LoginUser
