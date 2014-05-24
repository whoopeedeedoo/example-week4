/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	name: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    posts:{
      model: "Post"
    },
    toDisplay: function(){
      return "username is " + this.name;
    }

  },beforeCreate: function(values, next){
    console.log("create params");
    console.log(values);

    next();
  }

};
