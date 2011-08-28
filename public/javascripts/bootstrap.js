YUI().use('node', 'overlay',  'widget-anim', 'gallery-overlay-extras','gallery-button','transition', 'node-event-delegate', 'app-model-user' , function(Y){
	Y.on('domready', function(){
		var introOverlay = new Y.Overlay({
				zIndex      : 100,
				srcNode 	: '#optsOverlay',
				width		: '300px',
	            centered    : true,
	            constrain   : true,
	            render      : true,
	            visible     : false,
				plugins		: [	
					{ fn: Y.Plugin.OverlayModal },
					{ fn: Y.Plugin.OverlayKeepaligned } 
				]
			}),
			showLogin = (new Y.Button({srcNode:'#show-login'})).render(),
			scores = (new Y.Button({srcNode:'#scores'})).render(),
			start = (new Y.Button({srcNode:'#quick-start'})).render(),
			doLogin = (new Y.Button({srcNode:'#do-login'})).render(),
			cancelLogin =(new Y.Button({srcNode:'#cancel-login'})).render(),
			logPanel = Y.one('.login-panel'),
			basePanel = Y.one('.base-panel');
 
		showLogin.on('click', function(e){
			e.preventDefault();
			Y.log(e);
			introOverlay.hide(true);
			introOverlay.setStdModContent (Y.WidgetStdMod.BODY, logPanel,Y.WidgetStdMod.REPLACE);
			Y.log(logPanel);
			
			Y.log('clicked to login');
			introOverlay.show(true);
	
		});
		doLogin.on('click', function(e){
			Y.log('doLogin was clicked');
			var username = Y.one('#login-name').get('value'),
				password = Y.one('#password').get('value'),
				user = new Y.User({login:username,password:password});
			if(user.authenticate()){
				
			}
		});
		scores.on('click', function(e){
			introOverlay.set('centered', false);
			introOverlay.hide();
 
			Y.log('clicked to show scores');
			introOverlay.show();
		});
		
		start.on('click', function(e){
			Y.log('clicked to start this bad boy')
		});
		
		cancelLogin.on('click', function(e){
			e.preventDefault();
			introOverlay.hide(true);
			introOverlay.setStdModContent (Y.WidgetStdMod.BODY, basePanel,Y.WidgetStdMod.REPLACE);
			Y.log(logPanel);
			
			Y.log('clicked to login');
			introOverlay.show(true);
		})
		introOverlay.setStdModContent (Y.WidgetStdMod.BODY, basePanel,Y.WidgetStdMod.REPLACE);
		introOverlay.show();
		
	});
});