window.onload = function () {
    document.getElementById("currentYear").innerHTML = "-" + new Date().getFullYear();

    //Create links at the top of each page
    this.createLinks();
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