## About the Parchment index.html file

Parchment doesn't have a way to postpone startup, so we'll set the options object and load the Parchment JS file dynamically after Borogove has passed the story data to the iframe.

```
borogove.loader( function( data ) {
    window.parchment_options = {
        default_story: `data:text/javascript,processBase64Zcode('${data}'); // .js`,
        // ...
    };

    $.getScript( "parchment.min.js" );
});
```

Parchment can handle the data URL correctly, but we have to trick it into not using a proxy by adding a fake .js ending to the URL.