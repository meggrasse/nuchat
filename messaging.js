function send(){
    var userinput = document.getElementById("rawinput").value;
    document.getElementById("message2").innerHTML = userinput;
    document.getElementById("rawinput").value = '';
}