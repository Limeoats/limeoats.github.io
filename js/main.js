window.onload = function() {
  document.getElementById("currentYear").innerHTML = "-" + new Date().getFullYear();

  //Create links at the top of each page
  this.createLinks();
  //Create the includes for the favicon
  this.createFavicon();
  
}

var createLinks = function() {
  document.getElementsByClassName("project-icons")[0].innerHTML = 
    " <a href=\"https://www.twitter.com/limeoats\" target=\"_blank\"><img src=\"images/twitter-icon.png\" title=\"Twitter\" /></a>" + 
      "<a href=\"https://www.youtube.com/channel/UC1azHQrx_NgGnEv5KUZB2jA\" target=\"_blank\"><img src=\"images/youtube-icon.png\" title=\"Youtube\" /></a>" +
      "<a href=\"https://www.patreon.com/limeoats\" target=\"_blank\"><img src=\"images/patreon-icon.png\" title=\"Patreon\" id=\"patreonButton\" /></a>" +
      "<a href=\"https://www.github.com/limeoats\" target=\"_blank\"><img src=\"images/github-icon.png\" title=\"Github\" /></a>" +
      "<a href=\"https://www.linkedin.com/pub/mark-guerra/66/a6a/107\" target=\"_blank\"><img src=\"images/linkedin-icon.png\" title=\"LinkedIn\" /></a>" +
      "<a href=\"https://discord.gg/TwbAEb4\" target=\"_blank\"><img src=\"images/discord-icon.png\" title=\"Discord\" id=\"discordButton\" /></a>";
}

var createFavicon = function() {
  document.getElementsByTagName("head")[0].innerHTML += "<link rel=\"apple-touch-icon-precomposed\" sizes=\"57x57\" href=\"images/favicon/apple-touch-icon-57x57.png\" />" + 
    "<link rel=\"apple-touch-icon-precomposed\" sizes=\"114x114\" href=\"images/favicon/apple-touch-icon-114x114.png\" />" + 
    "<link rel=\"apple-touch-icon-precomposed\" sizes=\"72x72\" href=\"images/favicon/apple-touch-icon-72x72.png\" />" + 
    "<link rel=\"apple-touch-icon-precomposed\" sizes=\"144x144\" href=\"images/favicon/apple-touch-icon-144x144.png\" />" + 
    "<link rel=\"apple-touch-icon-precomposed\" sizes=\"60x60\" href=\"images/favicon/apple-touch-icon-60x60.png\" />" + 
    "<link rel=\"apple-touch-icon-precomposed\" sizes=\"120x120\" href=\"images/favicon/apple-touch-icon-120x120.png\" />" + 
    "<link rel=\"apple-touch-icon-precomposed\" sizes=\"76x76\" href=\"images/favicon/apple-touch-icon-76x76.png\" />" + 
    "<link rel=\"apple-touch-icon-precomposed\" sizes=\"152x152\" href=\"images/favicon/pple-touch-icon-152x152.png\" />" + 
    "<link rel=\"icon\" type=\"image/png\" href=\"images/favicon/favicon-196x196.png\" sizes=\"196x196\" />" + 
    "<link rel=\"icon\" type=\"image/png\" href=\"images/favicon/favicon-96x96.png\" sizes=\"96x96\" />" + 
    "<link rel=\"icon\" type=\"image/png\" href=\"images/favicon/favicon-32x32.png\" sizes=\"32x32\" />" + 
    "<link rel=\"icon\" type=\"image/png\" href=\"images/favicon/favicon-16x16.png\" sizes=\"16x16\" />" + 
    "<link rel=\"icon\" type=\"image/png\" href=\"images/favicon/favicon-128.png\" sizes=\"128x128\" />" + 
    "<meta name=\"application-name\" content=\"&nbsp;\"/>" + 
    "<meta name=\"msapplication-TileColor\" content=\"#FFFFFF\" />" + 
    "<meta name=\"msapplication-TileImage\" content=\"images/favicon/mstile-144x144.png\" />" + 
    "<meta name=\"msapplication-square70x70logo\" content=\"images/favicon/mstile-70x70.png\" />" + 
    "<meta name=\"msapplication-square150x150logo\" content=\"images/favicon/mstile-150x150.png\" />" + 
    "<meta name=\"msapplication-wide310x150logo\" content=\"images/favicon/mstile-310x150.png\" />" + 
    "<meta name=\"msapplication-square310x310logo\" content=\"images/favicon/mstile-310x310.png\" />";
}
