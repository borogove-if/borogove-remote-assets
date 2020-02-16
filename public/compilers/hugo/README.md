
```
docker run --rm -v $(pwd):/tmp --workdir="/tmp" trzeci/emscripten emmake make

docker run --rm -v $(pwd):/tmp --workdir="/tmp" trzeci/emscripten emcc -pipe -Os -I. -DGCC_UNIX -DUSE_TEMPFILES -I/usr/local/include -s FORCE_FILESYSTEM=1 -s MODULARIZE=1 -s INVOKE_RUN=1 -s EXIT_RUNTIME=1   hc.o hcbuild.o hccode.o hcdef.o hcfile.o hclink.o hcmisc.o hccomp.o hcpass.o hcres.o stringfn.o hcgcc.o   -o compiler.js
```