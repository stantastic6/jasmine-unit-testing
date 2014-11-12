describe("Reviews functions", function() {
  var reviews;
  var reviewA;
  
  beforeEach(function() {
    reviews = {};
    reviews.restaurantA = [
        { 
            title: '', 
            stars: 1, 
            cost: 2,
            description: '' 
        },
        { 
            title: '', 
            stars: 2, 
            cost: 2,
            description: '' 
        },
        { 
            title: '', 
            stars: 3, 
            cost: 2,
            description: '' 
        },
        { 
            title: '', 
            stars: 4, 
            cost: 1,
            description: '' 
        },
        { 
            title: '', 
            stars: 5, 
            cost: 1,
            description: '' 
        }
    ];
    
    reviewA = new Review("Restaurant A 2014", reviews.restaurantA);

  });// end constructor
  
  it("should correctly calculate a restaurant's average rating", function() {
    expect(reviewA.getAverageRating()).toEqual(3);
  });
  
  it("should correctly calculate a restaurant's average cost", function() {
    expect(reviewA.getAverageCost()).toEqual(1.6);
  });  
  
  it("should convert cost to the correct amount of dollar signs", function() {
    expect(reviewA.convertCostToDollarSign(reviewA.getAverageCost())).
    toEqual('$$');
  });  
  
  it("should display all values in the summary", function() {
    var summary = reviewA.summarize();
    
    expect(summary).toMatch(reviewA.restaurantName);
    expect(summary).toMatch(reviewA.getAverageRating());
    expect(summary).toMatch(reviewA.getAverageCost());
    expect(summary).toMatch(reviewA.reviews.length);
    expect(summary).
    toMatch(reviewA.convertCostToDollarSign(reviewA.getAverageCost()));
  });  

  it("should return the correct number of reviews when searching by lowest rating", function() {
     var results = reviewA.findWithLowestRating(4);
     
     expect(results.length).toEqual(2);
  });
});