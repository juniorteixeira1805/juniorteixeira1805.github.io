
const introductionRender = localStorage.getItem("INTRODUCTION@KEY")

console.log(introductionRender)


if(!introductionRender){
    var str, i, isHtmlTag, currentText;
    str = '<code class="user">(kali@kali)-[~]-$: </code>';
    str += '<code class="text">sudo systemctl start httpd</code><br>'
    str += '<code class="text">[sudo] password for kali:</code><br><br>'
    str += '<code class="text">httpd.service - the apache HTTP Server<br></code>';
    str += '<code class="text">Loaded: loaded (/usr/lib/systemd/system/httpd.service: disabled)</code><br>';
    str += '<code class="success">Active: active (running)</code>...<br><br>';
    str += '<code class="user">(kali@kali)-[~]-$: </code>';
    str += '<code class="text">cat hello-friend.txt</code> <br><br>';
    str += '<p class="text">Hello, friend!...</p>';
    
    i = 0;
    currentText = '';
    
    (function write() {
        currentText = str.slice(0, i++);
        document.getElementById('console').innerHTML = currentText;
        document.getElementById('console').scroll(0, 999999)
        if (currentText === str){
            setTimeout(()=>{document.getElementById("terminal").style.display = "none"; document.body.style.visibility = "visible"}, 1500)
            return;
        }
    
        var char = currentText.slice(-1);
        if( char === '<' ) isHtmlTag = true;
        if( char === '>' ) isHtmlTag = false;
        if (isHtmlTag){
            return write()
        };
        setTimeout(write, Math.floor(Math.random()*50));
    }());
} else {
    document.getElementById("terminal").style.display = "none"; document.body.style.visibility = "visible"
}

localStorage.setItem("INTRODUCTION@KEY", "true")


