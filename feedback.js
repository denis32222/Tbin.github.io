const text=document.getElementById('writing_t');

var send_butt = document.getElementById('send'); //задание имен кнопкам
var mark = document.getElementsByName('rating');

text.value=localStorage.getItem('Feedback'); // вспоминание
for(var i=0; i < mark.length; i++){
    if(mark[i].value == localStorage.getItem('mark')){
        mark[i].checked=true;
        break;
    }
}

send_butt.addEventListener('click',() =>{ 
    localStorage.setItem('Feedback',text.value);//сохранение текста
    for(var i=0; i < mark.length; i++){
        if(mark[i].checked){
            localStorage.setItem('mark',mark[i].value);//сохранение оценки
            localStorage.setItem('mark_num',i);
            break;
        }
    }
    alert("отправленно")
});