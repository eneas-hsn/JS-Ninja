function ajax() {
    let xmlHttp;
if (window.XMLHttpRequest) {
    xmlHttp=new XMLHttpRequest
}else{
    xmlHttp=new ActiveXObject('Microsoft.XMLHTTP')
}
xmlHttp.onreadystatechange=function () {
    if (xmlHttp.readyState==4&& xmlHttp.status==200) {
        alert(xmlHttp.responseText)
    }    
}
xmlHttp.open('GET','arquivo.txt',true);
xmlHttp.send();
}

