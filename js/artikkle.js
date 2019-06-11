$(function() {
var upen  = $("div#artikle article div:first-of-type");
upen.on('click',function(){
  var knap  = $(this);
  var text  = knap.next();
  text.slideToggle("slow");
})
$(function(){
    
  var burger = $('.fa-bars');
  
  burger.on('click',function(){
      $('nav').toggleClass('show');      
  })
})
// console.log(upen);
//   $('#click').click(function(){
//    $('#content').slideToggle("slow");
//     });
// });
// $(function() {
//   $('#click1').click(function(){
//    $('#content1').slideToggle("slow");
//     });
// });
// $(function() {
//   $('#click2').click(function(){
//    $('#content2').slideToggle("slow");
//     });
// });
// $(function() {
//   $('#click3').click(function(){
//    $('#content3').slideToggle("slow");
//     });
// });
// $(function() {
//   $('#click4').click(function(){
//    $('#content4').slideToggle("slow");
//     });
// });
// $(function() {
//   $('#click5').click(function(){
//    $('#content5').slideToggle("slow");
//     });
// });
// $(function() {
//   $('#click6').click(function(){
//    $('#content6').slideToggle("slow");
//     });
// });
// $(function() {
//   $('#click7').click(function(){
//    $('#content7').slideToggle("slow");
//     });
// });
// $(function() {
//   $('#click8').click(function(){
//    $('#content8').slideToggle("slow");
//     });
});