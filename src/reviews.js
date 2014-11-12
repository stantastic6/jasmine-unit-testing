var reviews = {};

reviews.restaurantA = [
    { 
        title: '', 
        stars: 4, 
        cost: 2,
        description: '' 
    },
    { 
        title: '', 
        stars: 3, 
        cost: 1,
        description: '' 
    },
    { 
        title: '', 
        stars: 4, 
        cost: 3,
        description: '' 
    },
    { 
        title: '', 
        stars: 4, 
        cost: 3,
        description: '' 
    },
    { 
        title: '', 
        stars: 5, 
        cost: 2,
        description: '' 
    },
    { 
        title: '', 
        stars: 3, 
        cost: 2,
        description: '' 
    }
];

reviews.restaurantB = [
    { 
        title: '', 
        stars: 5, 
        cost: 3,
        description: '' 
    },
    { 
        title: '', 
        stars: 3, 
        cost: 4,
        description: '' 
    },
    { 
        title: '', 
        stars: 4, 
        cost: 4,
        description: '' 
    },
    { 
        title: '', 
        stars: 5, 
        cost: 4,
        description: '' 
    },
    { 
        title: '', 
        stars: 2, 
        cost: 3,
        description: '' 
    },
    { 
        title: '', 
        stars: 5, 
        cost: 4,
        description: '' 
    },
    { 
        title: '', 
        stars: 5, 
        cost: 5,
        description: '' 
    }
];

var Review = function(name, restaurantReviews){
  this.restaurantName = name;
  this.reviews = restaurantReviews;
};

  Review.prototype.getAverageRating = function(){
    var ratingSum = 0;
    var numberOfReviews = 0;

    this.reviews.forEach(function(review) {
      ratingSum += review.stars;
      numberOfReviews++;
    });
    
    return ratingSum/numberOfReviews;
  };

  Review.prototype.getAverageCost = function(){
    var costSum = 0;
    var numberOfReviews = 0;
        
    this.reviews.forEach(function(review) {
      costSum += review.cost;
      numberOfReviews++;
    });
    
    return costSum/numberOfReviews;
  }; 
  
  Review.prototype.findWithLowestRating = function(rating){
    var results = [];
    
    this.reviews.forEach(function(review) {
      if (review.stars >= rating) {
        results.push(review);
      }
    });
    
    if (results.length < 1) {
      return ("No Results found with rating " +rating);
    }else{
      return results;
    }
    
  };

  Review.prototype.convertCostToDollarSign = function(amount){  
    if (amount < 1.5){
      return '$';
    }else if(amount >= 1.5 && amount < 2.5){
      return '$$';
    }else if(amount >= 2.5 && amount < 3.5){
      return '$$$';
    }else{
      return '$$$$';
    }
  };

  Review.prototype.summarize = function(){
    var summary = ("Name: " + this.restaurantName
                +"\nAverage Star Rating: " + this.getAverageRating()
                +"\nTotal Reviews: " + this.reviews.length
                +"\nAverage Cost: " +this.getAverageCost()+"\n"
                +"Symbol: " +this.convertCostToDollarSign(this.getAverageCost())
              );

    return summary;
  };
  
  var reviewA = new Review("Restaurant A 2014", reviews.restaurantA);
  var reviewB = new Review("Restaurant B 2014", reviews.restaurantB);
  reviewA.summarize();
  reviewB.summarize();  