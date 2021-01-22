//      https://github.com/abhiakib24/assignment-js.git




 // kilometerToMeter ---01
   function kilometerToMeter (kilometer){
   var meter = kilometer / 1000;
   return meter
   }
  var result = kilometerToMeter();
//    console.log(result);

  

// budgetCalculator ---02
function budgetCalculator(watch, mobile, laptop){
    var watchPrice = watch * 50;
        mobilePrice = mobile * 100;
        laptopPrice = laptop * 500;
    
    var result = watchPrice + mobilePrice + laptopPrice;
    return result

}
var totalBudget = budgetCalculator(5, 5, 2);
// console.log(totalBudget);




//hotelCost ---03
function hotelCost(days){
    var cost = 0;
    if (days <= 10){
        cost = days * 1000;
    }else if (days <= 20){
        var firstSection = 10 * 1000;
        var remaining = days - 10;
        var secondSection = remaining * 800;
        cost = firstSection + secondSection;
    }else{
        var firstSection = 10 * 1000;
        var secondSection = 10 * 800;
        var remaining = days - 20;
        var thirdSection = remaining * 700;
        cost = firstSection + secondSection + thirdSection;
    }
    return cost

}
var totalCost = hotelCost();
// console.log(totalCost);



// megaFriend ---04

function megaFriend(){
    var friends = ['rakib', 'masud', 'abhiakib'];
     var max = 0;
     var longest;
    for (var i = 0; i < friends.length; i++){
        if (friends [i].length > max){
            var max = friends[i].length;
            longest = friends[i]
        }
    }
       return longest
   

}
var result = megaFriend();
// console.log(result);


