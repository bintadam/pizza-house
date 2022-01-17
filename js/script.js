var price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
$(document).ready(function(){
  $(button.proceed).click(function(event){
    let pizzaName = $(".name option:selected").val();
    let pizzaSize = $("#size option:selected").val();
    let pizzaCrust = $("#crust option:selected").val();
    let pizzaToppings =[]
    $.each($("input[name='toppings']:checked"), function(){            
      pizzaTopping.push($(this).val());
  });
  console.log(pizzaTopping.join(", "));
  switch(pizzaSize){
    case "0":
      price =0;
    break;
    case "large":
       price = 1400;
       console.log(price);
     break;
     case "medium":
       price = 1000;
       console.log("The price is "+price);
     break;
     case "small":
       price = 700;
       console.log(price);
     default:
       console.log("error"); 
   }
   switch(pizzaCrust){
    case "0":
      crust_price = 0;
    break;
    case "Crispy":
      crust_price = 300;
    break;
    case "Double-Cheese":
      crust_price = 400;
    break;
    case "Gluten-free":
      crust_price = 200;
    break;
    default:
      console.log("No price"); 
  }
  let topping_value = ptopping.length*50;
    console.log("toppins value" + topping_value);

    if((pizzaSize == "0") && (pizzaCrust == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      $("div.choise").hide();
      alert("Please select pizza size and crust"); 
    }
    else{
      $("button.proceed").hide();
      $("#information").hide();
      $("div.choise").slideDown(1000);
    }
    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaName").html($(".name option:selected").val());
    $("#pizzaSize").html( $("#size option:selected").val());
    $("#pizzaCrust").html($("#crust option:selected").val());
    $("#pizzaTopping").html(ptopping.join(", "));
    $("#totals").html(total);

    $("button.addPizza").click(function(){
      let pizzaName = $(".name option:selected").val();
      let pizzaSize = $("#size option:selected").val();
      let pizzaCrust = $("#crust option:selected").val();
      let pizzaTopping = [];
      $.each($("input[name='toppings']:checked"), function(){            
          pizzaTopping.push($(this).val());
      });
      console.log(pizzaTopping.join(", "));
      switch(pizzaSize){
        case "0":
          price =0;
        break;
        case "large":
           price = 1400;
           console.log(price);
         break;
         case "medium":
           price = 1000;
           console.log("The price is "+price);
         break;
         case "small":
           price = 700;
           console.log(price);
         default:
           console.log("error"); 
       }
       switch(pizzaCrust){
        case "0":
          crust_price = 0;
        break;
        case "Crispy":
          crust_price = 300;
        break;
        case "Double-Cheese":
          crust_price = 400;
        break;
        case "Gluten-free":
          crust_price = 200;
        break;
        default:
          console.log("No price"); 
      }
    }
    let topping_value = pizzaTopping.length*50;
    console.log("toppins value" + topping_value);
    total = price + crust_price + topping_value;
    console.log(total);

    checkoutTotal = checkoutTotal + total;
    console.log(checkoutTotal);
  
    var newOrder = new Getpizza(pizzaName, pizzaSize, pizzaCrust,pizzaTopping,total);

    $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
    console.log(newOrder);
  
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is sh. "+checkoutTotal);
      $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
    });
}