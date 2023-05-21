document.addEventListener("DOMContentLoaded", function () {
    var recentPostsData = [
        { title: "first post", description: "first post description.", link: "posts/firstPost.html" },

    ];

    var maxNum = 4;

    var recentPostsContainer = document.getElementById("recentPostsContainer");

    // Display the most recent posts up to maxNum
    for (var i = 0; i < maxNum && i < recentPostsData.length; i++) {
        var post = recentPostsData[i];
        var postElement = document.createElement("article");

        var titleElement = document.createElement("h3");
        titleElement.textContent = post.title;

        var descriptionElement = document.createElement("p");
        descriptionElement.textContent = post.description;

        var readMoreLink = document.createElement("a");
        readMoreLink.href = post.link;
        readMoreLink.textContent = "Read More";

        postElement.appendChild(titleElement);
        postElement.appendChild(descriptionElement);
        postElement.appendChild(readMoreLink);
        recentPostsContainer.appendChild(postElement);
    }

    // Get the current year 
    document.getElementById("year").textContent = new Date().getFullYear();

});