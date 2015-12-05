window.onload = function() {
  document.getElementById("currentYear").innerHTML = "-" +
    new Date().getFullYear();
}

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');

s.src = '//limeoats.disqus.com/embed.js';

s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
