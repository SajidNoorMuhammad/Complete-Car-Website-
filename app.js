document.addEventListener('contextmenu',
    event => event.preventDefault()
)
    document.onkeydown = function(e) {
        if ((e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 123)){
            alert('Not Allowed Due to Privacy');
        }
        return false;
};

function scrollToBottom(){
    window.scrollTo(0,document.body.scrollHeight);
}
