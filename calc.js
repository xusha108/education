

function insert(num){
    document.getElementById('textview').value=document.getElementById('textview').value+num   
}

function equal(){   
    document.getElementById('textview').value=eval(document.getElementById('textview').value)      
}

function clean(){   
    document.getElementById('textview').value='';     
}
