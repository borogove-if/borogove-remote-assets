These are the separate services (interpreters, compilers and templates) that run in the [Borogove client](https://github.com/vorple/borogove-ide) as opposed to on the server.

While developing Borogove, serve these files separately on localhost using the method of your choice and edit Borogove's .env file to point to the server. The server must disable CORS or allow access from where Borogove is running. A Python 3 script has been included that does just this:

```
python3 server.py
```

The server will run on localhost:8000.


## LICENSE

Each software in this repository have their individual licenses.

### Compilers

* [Dialog](https://linusakesson.net/dialog/): BSD (C) Linus Åkesson
* [Hugo](https://bitbucket.org/0branch/hugo-unix/src/default/): (C) Kent Tessman
* [Inform 6](https://github.com/DavidKinder/Inform6): [Artistic License 2.0](https://raw.githubusercontent.com/DavidKinder/Inform6/master/licence.txt)

### Interpreters

* [HugoJS](https://github.com/juhana/hugojs): [MIT](https://github.com/juhana/hugojs/blob/master/LICENSE) (based on the Hugo Engine (C) Kent Tessman)
* [Parchment](https://github.com/curiousdannii/parchment): [GNU GPL 2.0](https://github.com/curiousdannii/parchment/blob/master/LICENCE)
* [Quixe](https://eblong.com/zarf/glulx/quixe/): [MIT](https://raw.githubusercontent.com/erkyrath/quixe/master/LICENSE)
* [Vorple](https://github.com/vorple/vorple): [MIT](https://raw.githubusercontent.com/vorple/vorple/master/LICENSE)
* [Å-machine](https://linusakesson.net/dialog/aamachine/index.php): BSD (C) Linus Åkesson

### Templates

* Dialog library: BSD (C) Linus Åkesson
* Hugolib: (C) Kent Tessman
* Inform 6 library version 6.11: (C) Graham Nelson
* Inform 6 library version 6.12.3: (C) Graham Nelson and David Griffith
* Roodylib: (C) Jon Blask