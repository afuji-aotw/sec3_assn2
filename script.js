document.getElementById("switch").addEventListener("click", redirect);

function redirect() {
    if (document.getElementById("switch").checked) {
        window.open("https://ifttt.com/applets/MStKHGx7-if-any-new-photo-then-upload-file-from-url-to-your-google-drive");
    }
}