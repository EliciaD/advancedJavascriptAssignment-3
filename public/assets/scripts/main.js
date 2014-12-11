
// -----------------------------
// Wait for DOM Load
// -----------------------------

jQuery(function($) {

  // -----------------------------
  // Router
  // -----------------------------

  var Router = Backbone.Router.extend({

    // Our Routes
    routes: {
      '' : 'home',
      'about': 'about',
      'portfolio': 'portfolio',
      'contact': 'contact'
    },

    // Home Route
    home: function() {
      console.log('Navigating to Home Page');
      App.views['home'].render();
    },

    // About Route
    about: function() {
      console.log('Navigating to About Page');
      App.views['about'].render();
    },
    // Portfolio Route
    portfolio: function() {
      console.log('Navigating to Portfolio Page');
      App.views['portfolio'].render();
    },


    // Contact Route
    contact: function() {
      console.log('Navigating to Contact Page');
      App.views['contact'].render();
    }

  });

  // -----------------------------
  // Application
  // -----------------------------

  var Application = function() {

    // Add router
    this.router = new Router();

    // Setup views
    this.views = {
      home: new HomeView(),
      about: new AboutView(),
      portfolio: new PortfolioView(),
      contact: new ContactView()
    };

  };

  // -----------------------------
  // Home View
  // -----------------------------

  var HomeView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#home',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        image: 'assets/images/banner.png',
        content: '<div class="intro"><h1>Elicia Durtnall / UX Design</h1><h2>"Enthusiastic, Web Design and Interactive Media graduate. UX designer.</h2></div>'

      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

// -----------------------------
  // Portfolio View
  // -----------------------------

  var AboutView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#about',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
       
        body: '<p>Hi, my name is Elicia Durtnall<br></br>I aspire to be a UX Designer. I am currently in my last year at Humber College for web design and interactive media. Send me a <a href="mailto:eliciadurtnall@gmail.com?Subject=Website%20Contact" target="">message</a> if you would like to chat or give me a follow on twitter <a href="">@eliciad</a>. I look forward to hearing from you!</p>',
        image: 'assets/images/elicia_durtnall.png'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

 // -----------------------------
  // Portfolio View
  // -----------------------------

  var PortfolioView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#portfolio',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
     
      works: [
          {title: 'Northern Tickets - Case Study', desc: 'Northern tickets: Heuristic Evaluation and User Testing', image:'assets/images/northern.png'},
          {title: 'Helpr - An App for Volunteers', desc: 'Startup: wireframing, prototyping and market plan.',  image:'assets/images/project8.png', URL:'https://github.com/EmersonGGS/Blockgun-Insanity'},
          {title: 'Farm Fresh - Local Shopping App', desc: 'Startup: personas, wireframes, and high fidelity prototypes.', image:'assets/images/projects2.png'},
          {title: 'Investment Planning Counsel - Marketing & Communications', desc: 'Advisor site creations, and internal & external communications.', image:'assets/images/project7.png'},
        ]
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Contact View
  // -----------------------------

  var ContactView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#contact',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<p>Hi Everyone,<br>Thank you for checking out my website. Feel free to contact me below in whatever way is most convienent to you. If you want to give advice, share a story, or connect as a professional contact, here is all you need to reach me.<br></br>Sincerely,<br>Elicia Durtnall</p>',
        body: '<p>cell:<a class="mobile-only" href="tel:705-627-8288">705-627-8288</a><br>email: <a href="mailto:eliciadurtnall@gmail.com?Subject=contact%20from%20website" target="_blank">eliciadurtnall@gmail.com</a><br>twitter:<a href="https://twitter.com/EliciaDurtnall" target="_blank">@eliciad</a></p>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Start Application
  // -----------------------------

  var App = new Application();

  // Start Backbone History
  Backbone.history.start({ pushState: true });

  // -----------------------------
  // Navigation Links
  // -----------------------------

  $(document).delegate('a', 'click', function(e) {
    e.preventDefault();
    App.router.navigate($(this).attr('href'), { trigger: true });

  });


});