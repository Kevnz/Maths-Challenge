YUI_config = { 
groups : {
			app : {
				base : window.location.href,
				root : '/javascripts/app/', 
				patterns: {
					'app-model-' : {
						configFn : function( me ) {
							me.path = 'javascripts/app/models/' + me.name.replace (/app-model-/g, "") + '.js'
						}
					}
				}
			},
			utilities : {
				
				root: 'javascripts/gallery/',
				combine: false,
				modules : {
					'gallery-md-button' : {
						path : 'gallery-md-button/gallery-md-button.js',
						requires: ['base-build', 'widget', 'gallery-makenode']
					}
				}
			}
		}
};