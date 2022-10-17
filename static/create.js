console.log("file");
let btn = document.querySelector('#btn');
btn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("clicked");
    var id = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    console.log(id + " " + email);
});