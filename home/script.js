var str, i, isHtmlTag, currentText;
str = '<code class="user">(kali@kali)-[~]-$: </code>';
str += '<code>sudo systemctl start httpd</code><br>'
str += '<code>[sudo] password for kali:<code><br><br>'
str += '<code>httpd.service - the apache HTTP Server<br></code>';
str += '<code>Loaded: loaded (/usr/lib/systemd/system/httpd.service: disabled)</code><br>';
str += '<code class="success">Active: active (running)</code>...<br><br>';
str += '<code class="user">(kali@kali)-[~]-$: </code>';
str += '<code>cat hello-friend.txt</code> <br><br>';
str += '<h1>Hello, friend!...</h1>';
str += '<p class="text">Lorem Ipsum is simply dummy text of the printing and writesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of write and scrambled it to make a write specimen book. It has survived not only five centuries, but also the leap into electronic writesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <br><br>';


i = 0;
currentText = '';

(function write() {
    currentText = str.slice(0, i++);
    document.getElementById('console').innerHTML = currentText;
    document.getElementById('console').scroll(0, 999999)
    if (currentText === str){
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


var element = document.getElementById('terminal');

element.addEventListener('dragend', drag)

function drag(event) {
    element.style.top = event.pageY + "px"
}

