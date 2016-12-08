
var n = 0
function buyButtonJava () {
  $('.buy-button').css('background-color', 'yellow');
  $('.buy-button').text("ADDED TO CART!");
  n = n + 1
  $('.count').text(n);
  function changeBack () {
    $('.buy-button').css('background-color', 'white');
    $('.buy-button').text("BUY NOW!");
  }
  setTimeout(changeBack, 600);
}
$('.buy-button').click(buyButtonJava);


// ATTEMPT AT HIDING TEXT
// function productDetails () {
//   $('.changingText').text(<h4>Exciting Topic</h4>
//       <h5>Content here</h5>);
// }
// $('.prodDetails').click(productDetails);
