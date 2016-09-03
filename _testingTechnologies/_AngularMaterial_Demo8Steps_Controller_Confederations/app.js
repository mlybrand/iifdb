// Create and prepare the 'confederations' module (with its controllers and dataservices) 

angular.module('confederations', [ 'ngMaterial' ])
     .controller('ConfederationController', [
        'confederationService', '$mdSidenav', '$mdBottomSheet', '$log',
        ConfederationController
     ])
     .service('confederationService', ['$q', ConfederationService]);


// *******************************************************
// *******************************************************


// Main Controller for the Angular Material Starter App

function ConfederationController( confederationService ) {
  var self = this;

  self.selected     = null;
  self.confederations        = [ ];
  self.selectConfederation   = selectConfederation;

  // Load all registered confederations

  confederationService
      .loadAllConfederations()
      .then( function( confederations ) {
        self.confederations    = [].concat(confederations);
        self.selected = confederations[0];
      });

  /**
    * Select the current logos
    * @param menuId
    */
   function selectConfederation ( confederation ) {
     self.selected =  confederation;
   }

}


// Confederations DataService

function ConfederationService($q){
   var confederations = [
    {
      name: 'AFC',
      logo: 'media/logos/fifa/afc.svg',
      content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
    },
    {
      name: 'CAF',
      logo: 'media/logos/fifa/caf.svg',
      content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
    },
    {
      name: 'CONCACAF',
      logo: 'media/logos/fifa/concacaf.svg',
      content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
    },
    {
      name: 'CONMEBOL',
      logo: 'media/logos/fifa/conmebol.svg',
      content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.'
    },
    {
      name: 'OFC',
      logo: 'media/logos/fifa/ofc.svg',
      content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.'
    },
    {
      name: 'UEFA',
      logo: 'media/logos/fifa/uefa.svg',
      content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada."
    }
  ];

  // Promise-based API
  return {
    loadAllConfederations : function() {
      // Simulate async nature of real remote calls
      return $q.when(confederations);
    }
  };
}



