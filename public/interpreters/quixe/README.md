# Loading story files in Quixe

Quixe has the [same issue as Parchment](../parchment/README.md) that it tries to use a proxy to load story files from other domains, without any mechanism to disable the proxy. Thankfully there's a separate loader method, so we can get around the proxy by loading the story file manually and passing it to Quixe. 

In play.html we grab the story file URL from the `?story=` query parameter (if any) and use the `borogove.fetchStoryfile()` method to load the file manually. `GiLoad.load_run( null, Array.from( new Uint8Array( data ) ), "array" )` converts the data into an array that Quixe can read and starts the game.