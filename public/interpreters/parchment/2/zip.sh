#! /bin/sh

# Creates release packages

mv index.html index.html.bak

cp index.standalone.z8.html index.html
zip release.z8.zip ie.js index.html jquery.min.js main.js waiting.gif web.css zvm.js

cp index.standalone.ulx.html index.html
zip release.ulx.zip ie.js index.html jquery.min.js main.js quixe.js waiting.gif web.css

mv index.html.bak index.html