import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	model(params){
   		return this.get('ajax').request('https://api.github.com/users/'+params['user_id']);
	},
	setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('model', model);
  }
});
