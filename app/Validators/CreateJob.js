'use strict'

class CreateJob {
  get rules () {
    return {
      // validation rules
      "title": "required",
      "link":"required"
    }
  }
  get validateAll () {
    return true
  }
  get messages(){
    return {
      "required": "Woah now, {{field}} is required"
    }
  }
}

module.exports = CreateJob
