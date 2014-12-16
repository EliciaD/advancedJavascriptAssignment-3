
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
      'contact': 'contact',
      'details': 'details',
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
    // Portfolio Route
        details: function() {
          console.log('Navigating to Portfolio Page');
          App.views['details'].render();
        },

    // Contact Route
    contact: function() {
      console.log('Navigating to Contact Page');
      App.views['contact'].render();
    },

   

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
        details: new detailsView(),
      contact: new ContactView(),
    
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
  // About View
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
       
        body: '<p>Hi, my name is Elicia Durtnall<br></br>I aspire to be a UX Designer. I am currently in my last year at Humber College for web design and interactive media. Send me a <a href="/contact">message</a> if you would like to chat or give me a follow on twitter <a href="https://twitter.com/EliciaDurtnall" target="_blank">@eliciad</a>. I look forward to hearing from you!</p>',
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
          {title: 'Northern Tickets - Case Study', desc: 'Northern tickets: Heuristic Evaluation, and User Testing', image:'assets/images/northern.png', url:'/details'},
          {title: 'Helpr - An App for Volunteers', desc: 'Startup: wireframing, prototyping and market plan.',  image:'assets/images/project8.png'},
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
  // Details View
  // -----------------------------

  var detailsView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#details',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        title1:'Executive Summary',
        pg: 'The ticket purchasing flow of northerntickets.com has been examined by using heuristic evaluation. Heuristic evaluation is a review of your site to see if it follows a set list of design principles. These principles work as a general rule of thumb to create a product with the maximum amount of usability for users. We have checked the ticket purchasing flow of the site by completing the task of booking tickets for Nils Frahm at Adelaide Hall on November 19th. The most repetitive heuristics problem found in the site was visibility of system status. I checked all areas of the ticketing purchase process to make sure that the system keeps users aware about what is going on in the site, and provides appropriate feedback.  This issue was found early in the purchasing process so this problem should be made a priority to resolve. As it could potentially prevent users from becoming invested in the ticket purchasing process. Later in the document I will examine the specifics of where this heuristic takes place, as well as other challenges in the site.',
        title: 'Heuristics',
        body: 'Jacob Nielson’s 10 General principles of design looked at within the process of buying tickets on northerntickets.com<br></br> 1.  Visibility of system status<br>2.  Match Between System and the Real World<br>3.  User Control and Freedom<br>4.  Consistency and Standards<br>5.  Error Prevention<br>6.  Recognition Rather Than Recall<br>7.  Flexibility and Efficiency of use<br>8.  Aesthetic and minimalist Design<br>9.  Help users Recognize, diagnose and recover from errors<br>10. Help and Documentation',
        title2: 'Issues',
       
        issue: [
          { subtitle:'Global Issues', desc: '1. The logo works as the home button on certain pages, but not on all pages. It is very inconsistent. The menu changes when browsing the site to on an account page. Consistency is important to creating a user friendly website.', image:'assets/images/heuristicIssues/menu1.png', image2:'assets/images/heuristicIssues/menu2.png',heuristic:' Heuristic evaluated: Consistency and standards'},
          { subtitle:'Page Level Issues', desc: '1. When you search an event on the home page, before the fold the first thing you see for results is irrelevant information. It is important that you strive for a minimal design. If a user searches for Nils Frahm they would like to be presented with the results for that search first. I suggest that below the results you add a “Didn’t find what you were looking for? Customize your search.” I suggest that the information about if you receive declined by fraud services messages be available elsewhere on the site or if they have received the message then be available to them then. This information is irrelevant to the search.', image:'assets/images/heuristicIssues/issue1.png', heuristic:' Heuristic evaluated: Aesthetic and minimalist design'},
          { desc: '2. The customize your search form and the homepage search does not give any indicator that the search has done anything if you make a mistake and type the artists name incorrectly, for example when searching for Nils Frahm, if you mistakenly type Nils Framh no results are shown. It is important that your site provides feedback to users so they can always be informed on what is happening. There should never be a disconnect from the user and your system. Maybe add text to say did you mean Nils Framh? or artist not found and  add a you might also like and present a list of other similar artists.', image:'assets/images/heuristicIssues/issue2.png', heuristic:'Heuristic evaluated: Visibility of system status' },
          { desc: '3. Requested seats number must be greater than 0. Requested price types must be on the price chart. This error could be worded differently. The error message should speak the user’s language. Also the error should appear before continuing to the next page. When the add link button is selected in the shopping cart the same issue occurs. This error messages should be easily understood, indicate the problem, and introduce a solution.', image:'assets/images/heuristicIssues/issue3.png', image2:'assets/images/heuristicIssues/issue3b.png', heuristic:'Heuristic evaluated: Help users recognize, diagnose, and recover from errors'},
          { desc: '4. When the user is instructed to fill out a form before purchasing tickets, clicking continue without filling out all the required fields results in a list being displayed of what you are missing in an alert box. This is bad heuristics because it requires you to use recall rather than recognition when returning to the form. The user has to try to remember which fields were not filled out and how to correct it. I recommend that the missing form attributes be displayed on the page rather then in a pop up which you have to delete in order to continue.',image:'assets/images/heuristicIssues/issue4.png', heuristic:'Heuristic evaluated: Recognition rather than recall'},
          { desc: '5. On the account page there is no indicator to how far you are in the process until you get to the delivery details page. Users need to know where they are in the process at all times. If there is no indicator to where you are in the purchasing process it is likely users will abandon the process all together. Also on the account page when the user clicks continue with the form, without filling out all the required fields, the form tells you there is something wrong with yellow warning sign’s. This is very confusing. The areas incomplete should be shown in red, as yellow gives the impression it is recommended to fill out this section not a requirement. Even so it is not enough to tell the user something is wrong.  There should be a response telling the user how to fix the form on the page. I recommend that with each field incomplete the system highlight it with red and provide them with some sort of example or short explanation of how to properly fill out the area on the page. Also we can restructure the input fields to not be both vertical and horizontal. Eliminating the user needing to look both up and down, and left to right as fields could be missed.',image:'assets/images/heuristicIssues/issue5.png', heuristic:'Heuristics evaluated: Error prevention, Help and Documentation, Visibility of system status and Match between system and the real world.'},
          { desc: '6. The shopping cart performance details do not include location, which makes the user rely on recall. Also the shopping cart’s remove performance link deletes all tickets, there is no option to delete a single ticket for example if the user no longer needs 3 tickets, or they accidently chose 3 and just want one. I recommend adjusting the remove performance feature to be a remove ticket feature. With a remove ticket feature users will have the freedom to delete whichever tickets they choose.',image:'assets/images/heuristicIssues/issue6.png', heuristic:'Heuristic evaluated: Recognition rather than recall, and User control and freedom.'},
          { desc: '7. Captchas are un liked by users, having an entire page dedicated to a captcha may annoy a user from continuing there purchasing process. I suggest a check box captcha within the form. It helps conserve space and limit the amount of interruption.', image:'assets/images/heuristicIssues/issue7.png', heuristic:'Heuristic evaluated: Aesthetic and minimalist design'},

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
    var url = $(this).attr('href') || '#';
    var isLocal = url.match(/^#/)
    if(isLocal) { e.preventDefault(); App.router.navigate($(this).attr('href'), { trigger: true }); }
  });
});