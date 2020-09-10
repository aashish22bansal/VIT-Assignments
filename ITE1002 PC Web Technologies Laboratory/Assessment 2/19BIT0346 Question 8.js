$(document).ready( function()
{$("#b1").click(function(){
var x= "<li>"+ $("#txt").val() + "</li>";
$("#lists").append(x);
$("#txt").val("");
$("li:even").css("background-color","white");
$("li:odd").css("background-color","yellow");
});
$("#b2").click(function(){
var y=$("#txt").val();
$("li").each(function(){
var z=$(this).text();
if (y.toLowerCase()==z.toLowerCase())
{
$(this).remove();$("#txt").val("");
$("li:even").css("background-color","white");
$("li:odd").css("background-color","yellow");
return false;
}
});
});
});