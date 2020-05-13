var ajax=new XMLHttpRequest();

ajax.open("GET","lista.txt");

ajax.send();

ajax.addEventListener('readystatechange',function () {
    if(this.readyState===4&& this.status===200){
        console.log(ajax.responseText)
    }
})
// ajax.onreadystatechange=function () {}
