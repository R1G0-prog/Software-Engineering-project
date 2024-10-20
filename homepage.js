document.getElementById("login-btn").addEventListener("click", function(){
    //Open a new window with the login form
    window.open('login.html', '_blank', 'width=400,height=400');
});

document.getElementById("profile-icon").addEventListener("click", function(){
    var dropdown = document.getElementById("dropdown-content");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

document.getElementById("Create-listing").addEventListener("click", function(){
    //Open a new window with the login form
    window.open('createlisting.html', '_blank', 'width=400,height=400');
});

function initializeListingForm() {
    document.getElementById('create-listing').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('create-listing-modal').style.display = 'block';
    });

    document.getElementById('close-modal').addEventListener('click', function() {
        document.getElementById('create-listing-modal').style.display = 'none';
    });

}