YUI.add('app-model-user', function(Y){ 
	Y.UserDetails = Y.Base.create('user-details', Y.View, [], {
	  // Add prototype methods and properties for your View here if desired. These
	  // will be available to all instances of your View. You may also override
	  // existing default methods and properties of Y.View.
	
	  // Override the default container element.
	  container: '<div class="user-details"/>',
	
	  // Provide a template that will be used to render the view. The template can
	  // be anything we want, but in this case we'll use a string that will be
	  // processed with Y.Lang.sub().
	  template: 'Welcome {login}. ' +
	            '<a href="#" class="eat">Eat a Slice!</a>',
	
	  // Specify delegated DOM events to attach to the container.
	  events: {
	    '.eat': {click: 'eatSlice'}
	  },
	
	  // The initializer function will run when a view is instantiated. This is a
	  // good time to subscribe to change events on a model instance.
	  initializer: function () {
	    var model = this.model;
	
	    // Re-render this view when the model changes, and destroy this view when
	    // the model is destroyed.
	    model.after('change', this.render, this);
	    model.after('destroy', this.destroy, this);
	  },
	
	  // The render function is responsible for rendering the view to the page. It
	  // will be called whenever the model changes.
	  render: function () {
	    // Render this view's HTML into the container element.
	    this.container.setContent(Y.Lang.sub(this.template,
	        this.model.getAttrs(['login'])));
	
	    // Append the container element to the DOM if it's not on the page already.
	    if (!this.container.inDoc()) {
	      Y.one('body').append(this.container);
	    }
	  },
	
	  // The eatSlice function will handle click events on this view's "Eat a Slice"
	  // link.
	  eatSlice: function (e) {
	    e.preventDefault();
	
	    // Call the pie model's eatSlice() function. This will consume a slice of
	    // pie (if there are any left) and update the model, thus causing the view
	    // to re-render.
	    this.model.eatSlice();
	  }
	});
},  '0.0.1', {requires:['view','gallery-mustache']});