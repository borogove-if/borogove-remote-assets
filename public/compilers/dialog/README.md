```
docker run --rm -v $(pwd):/tmp \
           --workdir="/tmp" trzeci/emscripten \
           emmake make dialogc
```