    var text=document.getElementById('search_input');
    var butt=document.getElementById('search_link');
function start_search(){
    butt.href=text.value + ".html";
}