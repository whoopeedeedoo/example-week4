/**
 * Post
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  connection: "mongodb",
  attributes: {
  	title: {
      type: 'string',
      required: true
    },
    content: {
      type: 'string',
      required: true
    },
    owner:{
      model: "User"
    }
  	/* e.g.
  	nickname: 'string'
  	*/

  }

};
