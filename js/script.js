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
}