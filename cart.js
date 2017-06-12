var totalPrice = 0; 
var currItem = null;
$(function () {
   retrieveCart();
    loadCart();
     $(document).on("click", ".plusBtn" , function() {
          console.log("I am Plus");
          var itemId = $(this).attr('data-id');
          increaseQty(itemId);
    });
    
    $(document).on("click", ".minusBtn" , function() {
        console.log("I am minus");
        var itemId = $(this).attr('data-id');
        decreaseQty(itemId);
    });
        
});

// this increases the quantity on + click
function increaseQty(itemId){
            findProduct(itemId);
            currItem.qty++;
            loadCart();
            saveCart();
}

// this increases the quantity on - click
function decreaseQty(itemId){
            findProduct(itemId);
            if(currItem.qty>0)
            currItem.qty--;
            loadCart();
            saveCart();
}


//this loads the cart
function loadCart(){
    
    totalPrice = 0;
    $('#myCartData').html('');
    var i =0;
    var len = myCart.length;
    for(i=0;i<len;i++){ 
    var item="<tr><td class='col-sm-4  col-md-4'><div class='media'><div class='media-body'><h4 class='media-heading'><a href='#'>"+myCart[i].name+"</a></h4></div></div></td><td class='col-sm-4 col-md-4' style='text-align: center'><a data-id="+myCart[i].id+" class='minusBtn' id='minus'><span   class='btn btn-primary'>-</span></a><input type='text' style='width:50px; display:inline;' class='form-control' id='qty' value='"+myCart[i].qty+"'><a class='plusBtn' data-id="+myCart[i].id+" href='#'><span class='btn btn-primary' id='plus'>+</span></a></td><td class='col-sm-1 col-md-1 text-center'><strong id='price'>"+myCart[i].price+"</strong></td><td class='col-sm-1 col-md-1 text-center'><strong id='sumPrice'>"+(myCart[i].qty * myCart[i].price)+"</strong></td></tr>";
    $('#myCartData').append(item);
    
        totalPrice+=(myCart[i].qty * myCart[i].price); 
    }
    
    $('#totalSum').text("Rs."+totalPrice);
    
}

function goToShop(){
    
    window.location.href="shop.html";
}

function findProduct(id){
    
    currItem = null;
    var flag = 0;
    var i =0;
    var len = myCart.length;
    for(i=0;i<len;i++){ 
     if(myCart[i].id == id){
         currItem = myCart[i];
         break;
     }   
    }
}