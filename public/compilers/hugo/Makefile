# Basic makefile for the Hugo Engine

# Name of executable:
HE = compiler.js
# Compiler:
CC = emcc $(DEFINES)
DEFINES = -c -pipe -Os -I. -DGCC_UNIX -DUSE_TEMPFILES -I/usr/local/include -s FORCE_FILESYSTEM=1 -s MODULARIZE=1 -s INVOKE_RUN=1 -s EXIT_RUNTIME=1
# emcc -c -pipe -O2 -Wall -Wextra -pedantic  -DDO_COLOR -DNCURSES -DGCC_UNIX -DUSE_TEMPFILES -I/usr/local/include -Isource -I. -o hc.o source/hc.c

OBJECTS = hc.o hcbuild.o hccode.o hcdef.o hcfile.o hclink.o hcmisc.o hccomp.o hcpass.o hcres.o stringfn.o hcgcc.o

all : hc

hc : $(OBJECTS)

$(OBJECTS) : hcheader.h htokens.h