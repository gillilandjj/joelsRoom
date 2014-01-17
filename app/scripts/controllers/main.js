'use strict';

var app = angular.module('joelsRoomApp');

app.factory("menuService", function($filter){
  var month = parseInt($filter('date')(new Date(), 'M'), 10); // 1-12
  var day = parseInt($filter('date')(new Date(), 'd'), 10); // 1-31
  var dayOfWeek = $filter('date')(new Date(), 'EEEE'); // Sunday-Saturday

  var purple =  { Monday : {
                    breakfast: "Bakery Shop Day",
                    lunch1: "Pizza",
                    lunch2: "Grilled Chicken Sandwich"
                  },
                  Tuesday : {
                    breakfast: "Turkey Ham & Cheese on 1/2 Bagel",
                    lunch1: "Beef Fingers w/Biscuits",
                    lunch2: "Homemade Macaroni & Cheese"
                  },
                  Wednesday : {
                    breakfast: "Whole Grain Mini Waffles w/Banana",
                    lunch1: "Make your own salad w/whole grain Cheeze-Its",
                    lunch2: "Cheese Enchiladas"
                  },
                  Thursday : {
                    breakfast: "Egg & Cheese Burrito",
                    lunch1: "Chicken Nuggets w/Roll",
                    lunch2: "Beef Teriyaki Bowl"
                  },
                  Friday : {
                    breakfast: "Fruit Smoothie Day",
                    lunch1: "Hamburger/Cheeseburger",
                    lunch2: "Yogurt Combo"
                  }
                };
  var red =     { Monday : {
                    breakfast: "Bakery Shop Day",
                    lunch1: "Pizza",
                    lunch2: "Chicken Alfredo w/Breadstick"
                  },
                  Tuesday : {
                    breakfast: "Breakfast Casserole",
                    lunch1: "Roasted Chicken & Rice",
                    lunch2: "Lasagna w/Breadstick"
                  },
                  Wednesday : {
                    breakfast: "Whole Grain Mini Pancakes w/Fruit",
                    lunch1: "Southwest Quesadilla",
                    lunch2: "Vegetarian/Chef Salad"
                  },
                  Thursday : {
                    breakfast: "Sausage Biscuit",
                    lunch1: "Chicken Nuggets w/Roll",
                    lunch2: "Fish Sandwich"
                  },
                  Friday : {
                    breakfast: "Yogurt Parfait",
                    lunch1: "Make your own sandwich w/Scooby Graham Sticks",
                    lunch2: "Soup Selections"
                  }
                };
  var yellow =  { Monday : {
                    breakfast: "Bakery Shop Day",
                    lunch1: "Pizza",
                    lunch2: "Turkey Pita Pocket Sandwich"
                  },
                  Tuesday : {
                    breakfast: "Sausage Gravy Over Biscuit",
                    lunch1: "Beef Fingers w/Breadstick",
                    lunch2: "Chicken Teriyaki w/rice"
                  },
                  Wednesday : {
                    breakfast: "Whole Grain Mini French Toast w/Banana",
                    lunch1: "Make your own salad w/whole grain Cheeze-Its",
                    lunch2: "Soft Tacos"
                  },
                  Thursday : {
                    breakfast: "Egg & Cheese on Whole Grain English Muffin",
                    lunch1: "Chicken Nuggets w/Roll",
                    lunch2: "Spaghetti w/roll"
                  },
                  Friday : {
                    breakfast: "Fruit Smoothie Day",
                    lunch1: "Hamburger/Cheeseburger",
                    lunch2: "Fish Sandwich"
                  }
                };
  var blue =    { Monday : {
                    breakfast: "Bakery Shop Day",
                    lunch1: "Pizza",
                    lunch2: "Deli Sandwich"
                  },
                  Tuesday : {
                    breakfast: "Sausage Pancake on a Stick",
                    lunch1: "Beef Fingers w/Roll",
                    lunch2: "Chicken Fajita Salad"
                  },
                  Wednesday : {
                    breakfast: "Oatmeal w/Toppings",
                    lunch1: "Handmade Burritos",
                    lunch2: "Southwest Chicken Salad"
                  },
                  Thursday : {
                    breakfast: "Breakfast Pita",
                    lunch1: "Zesty Orange Chicken Bowl",
                    lunch2: "Stromboli"
                  },
                  Friday : {
                    breakfast: "Yogurt Parfait",
                    lunch1: "Make your own sandwich w/Scooby Graham Sticks",
                    lunch2: "Soup Selections"
                  }
                };
  var today = {
    breakfast: "No School",
    lunch1: "No School"
    };

  switch (month) {
    case 1:
      if (day >= 6 && day <= 10) {
        today = purple[dayOfWeek];
      } else if (day >= 13 && day <= 17) {
        today = red[dayOfWeek];
      } else if (day >= 21 && day <= 24) {
        today = yellow[dayOfWeek];
      } else if (day >= 27 && day <= 31) {
        today = blue[dayOfWeek];
      }
    break;
    case 2:
      if (day >= 3 && day <= 7) {
        today = purple[dayOfWeek];
      } else if (day >= 10 && day <= 14) {
        today = red[dayOfWeek];
      } else if (day >= 18 && day <= 21) {
        today = yellow[dayOfWeek];
      } else if (day >= 24 && day <= 28) {
        today = blue[dayOfWeek];
      }
    break;
    case 3:
      if (day >= 3 && day <= 7) {
        today = purple[dayOfWeek];
      } else if (day >= 17 && day <= 21) {
        today = red[dayOfWeek];
      } else if (day >= 24 && day <= 28) {
        today = yellow[dayOfWeek];
      } else if (day == 31) {
        today = blue[dayOfWeek];
      }
    break;
    case 4:
      if (day >= 1 && day <= 4) {
        today = blue[dayOfWeek];
      } else if (day >= 7 && day <= 11) {
        today = purple[dayOfWeek];
      } else if (day >= 14 && day <= 17) {
        today = red[dayOfWeek];
      } else if (day >= 21 && day <= 25) {
        today = yellow[dayOfWeek];
      } else if (day >= 28 && day <= 30) {
        today = blue[dayOfWeek];
      }
    break;
    case 5:
      if (day >= 1 && day <= 2) {
        today = blue[dayOfWeek];
      } else if (day >= 5 && day <= 9) {
        today = purple[dayOfWeek];
      } else if (day >= 12 && day <= 16) {
        today = red[dayOfWeek];
      } else if (day >= 19 && day <= 22) {
        today = yellow[dayOfWeek];
      } else if (day >= 28 && day <= 30) {
        today = blue[dayOfWeek];
      }
    break;
    case 6:
      if (day >= 2 && day <= 5) {
        today = purple[dayOfWeek];
      }
    break;
    default:
    break;
  }
  
  return today;
});

app.controller('MainCtrl', function ($scope, $http, $filter, menuService) {
    var weatherApiKey = 'MY_API_KEY';
    var weatherApiURL = 'http://api.wunderground.com/api/' + weatherApiKey + '/conditions/q/TX/Rockwall.json?callback=JSON_CALLBACK';
    $scope.menu = menuService;
    $http.jsonp(weatherApiURL).
      success(function(result) {
        $scope.weather = result;
      }).
      error(function() {
        console.log('error');
      });

    $scope.date = { fulldate: $filter('date')(new Date(), 'fullDate') };
  });
