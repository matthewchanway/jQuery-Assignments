



$("#submit").on("click",function(event){
  event.preventDefault();
let newList = $(document.createElement('ul'));  
$("#results").append(newList);
let title = $("#title").val();
let rating = $("#rating").val();
$(newList).append($("<li>", {text: title}));
$(newList).append($("<li>" + rating + "</li>"));
//let removeButton = $("button").text("Remove");
//$("li:last").append(removeButton);
$(newList).append($(document.createElement('button')).prop({
    type: 'button',
    innerHTML: 'Remove Movie'
})).on("click", function(){
$(newList).remove();

})

})