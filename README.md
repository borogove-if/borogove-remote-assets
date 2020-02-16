These are the separate services (interpreters, compilers) that run in the Borogove client as opposed to on the server.

While developing Borogove, serve these files separately on localhost using the method of your choice and edit Borogove's .env file to point to the server. For example, using Python 2:

```
python -m SimpleHTTPServer
```

or Python 3:

```
python3 -m http.server --bind 127.0.0.1 8000
```

Both start the server on localhost:8000.


## LICENSE

Each software in this repository have their individual licenses.

### Compilers

* [Hugo](https://bitbucket.org/0branch/hugo-unix/src/default/): (C) Kent Tessman
* [Inform 6](https://github.com/DavidKinder/Inform6): [Artistic License 2.0](https://raw.githubusercontent.com/DavidKinder/Inform6/master/licence.txt)

### Interpreters

* [HugoJS](https://github.com/juhana/hugojs): [MIT](https://github.com/juhana/hugojs/blob/master/LICENSE) (based on the Hugo Engine (C) Kent Tessman)
* [Parchment](https://github.com/curiousdannii/parchment): [GNU GPL 2.0](https://github.com/curiousdannii/parchment/blob/master/LICENCE)
* [Quixe](https://eblong.com/zarf/glulx/quixe/): [MIT](https://raw.githubusercontent.com/erkyrath/quixe/master/LICENSE)
* [Vorple](https://github.com/vorple/vorple): [MIT](https://raw.githubusercontent.com/vorple/vorple/master/LICENSE)

### Templates

* Hugolib (C) Kent Tessman
* Inform 6 library version 6.11 (C) Graham Nelson
* Inform 6 library version 6.12.3 (C) Graham Nelson and David Griffith
* Roodylib (C) Jon Blask