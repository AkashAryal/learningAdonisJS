'use strict'

class AdminMiddleware {
  async handle ({ request, response, auth, session }, next) {
    // call next to advance the request
    if(!auth.user){
      session.flash({admin: "You're not authenticated! ヽ( `д´*)ノ"});
      return response.redirect('/login')
    }

    await next()
  }
}

module.exports = AdminMiddleware
