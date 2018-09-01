$("#options i").click(function(){
    
    $(".color-options").toggle();
})


var lis = $("#options ul li");
lis.eq(0).css("backgroundColor","teal")
lis.eq(1).css("backgroundColor","tan")
lis.eq(2).css("backgroundColor","orange")
lis.eq(3).css("backgroundColor","#09c")
lis.eq(4).css("backgroundColor","red")
lis.click(function(){
    var color = $(this).css("backgroundColor")
    $("body").css("backgroundColor",color)
    $("h1").css("color",color)
})