// art101 lab 8
// author: ally herro
// 8 may 2025
// instructor: wes modes

function yayCool(x){
    var results = x*2
    return results;
  }
  
  array = [2, 18, 0, 97, 55]
  
  array.map(function(x){
    var results = x/2
    return results;
  })
  
  var mapResults = array.map(yayCool);
  console.log("Results: ", mapResults)

  var mapResults = "map results here";
  $("#output").html(mapResults);