YUI.add('app-model-user', function(Y){ 
	var User = Y.Base.create('User', Y.Model, [], {
		sync: function(action, options, callback){
			
		},
		authenticate: function(){
			return true;
		}
	}, {
		ATTRS: {
			login:{
				value : 'Player' 
			},
			password : {
				value: null
			}
		}
	});
	Y.User =  User;
},  '0.0.1', {requires:['model', 'io-base' ]});