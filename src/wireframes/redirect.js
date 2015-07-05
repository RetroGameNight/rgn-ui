// Redirects to the parent + parameter
function changeURL(pageURL) {
    var currentURL = window.location.href;
    var root = currentURL.substring( 0, currentURL.lastIndexOf( "/" ) + 1); 

    // A "logged-in" url
    var signIn = root + pageURL;

    document.location.href = signIn;    
}