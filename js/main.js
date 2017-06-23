window.onload = function () {
    document.getElementById("currentYear").innerHTML = "-" + new Date().getFullYear();

    //Create links at the top of each page
    this.createLinks();

    $("#homepageSelector").find("div").click(function() {
        $(".selected").removeClass("selected");
        $(this).addClass("selected");

        if ($("#homepageSelector").find("#projects").hasClass("selected")) {
            $("#mainBlog").hide();
            $("#mainPublications").hide();
            $("#mainVideos").hide();
            $("#mainProjects").fadeIn(100);
        }
        else if ($("#homepageSelector").find("#blog").hasClass("selected")) {
            $("#mainProjects").hide();
            $("#mainPublications").hide();
            $("#mainVideos").hide();
            $("#mainBlog").fadeIn(100);
        }
        else if ($("#homepageSelector").find("#publications").hasClass("selected")) {
            $("#mainProjects").hide();
            $("#mainBlog").hide();
            $("#mainVideos").hide();
            $("#mainPublications").fadeIn(100);
        }
        else if ($("#homepageSelector").find("#videos").hasClass("selected")) {
            $("#mainProjects").hide();
            $("#mainBlog").hide();
            $("#mainPublications").hide();
            $("#mainVideos").fadeIn(100);
        }
    });
}

var createLinks = function () {
    document.getElementsByClassName("project-icons")[0].innerHTML =
        " <a href=\"https://www.twitter.com/limeoats\" target=\"_blank\"><img src=\"images/twitter-icon.png\" title=\"Twitter\" /></a>" +
        "<a href=\"https://www.youtube.com/channel/UC1azHQrx_NgGnEv5KUZB2jA\" target=\"_blank\"><img src=\"images/youtube-icon.png\" title=\"YouTube\" /></a>" +
        "<a href=\"https://www.twitch.tv/limeoats\" target=\"_blank\"><img src=\"images/twitch-icon.png\" title=\"Twitch\" /></a>" +
        "<a href=\"https://www.github.com/limeoats\" target=\"_blank\"><img src=\"images/github-icon.png\" title=\"Github\" /></a>" +
        "<a href=\"https://www.linkedin.com/pub/mark-guerra/66/a6a/107\" target=\"_blank\"><img src=\"images/linkedin-icon.png\" title=\"LinkedIn\" /></a>" +
        "<a href=\"https://discord.gg/TwbAEb4\" target=\"_blank\"><img src=\"images/discord-icon.png\" title=\"Discord\" id=\"discordButton\" /></a>";
}

function loadJSON(file, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", file, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}