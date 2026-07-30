document.getElementById("goLiveForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("streamTitle").value;
    const category = document.getElementById("category").value;

    alert(
        "🔴 You are now LIVE!\n\n" +
        "Title: " + title +
        "\nCategory: " + category
    );

    this.reset();
});
