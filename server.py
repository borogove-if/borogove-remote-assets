#!/usr/bin/env python3
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler, test
from os import path, chdir

web_dir = path.join(path.dirname(__file__), 'public')
chdir(web_dir)

class CORSRequestHandler (SimpleHTTPRequestHandler):
    def end_headers (self):
        if self.path.endswith('.wasm'):
            self.send_header('Content-Type', 'application/wasm')
        self.send_header('Access-Control-Allow-Origin', '*')
        SimpleHTTPRequestHandler.end_headers(self)

if __name__ == '__main__':
    test(CORSRequestHandler, HTTPServer, port=int(sys.argv[1]) if len(sys.argv) > 1 else 8000)