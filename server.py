import http.server
import os

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def guess_type(self, path):
        mime = super().guess_type(path)
        if path.endswith('.js'):
            return 'application/javascript; charset=utf-8'
        if path.endswith('.css'):
            return 'text/css; charset=utf-8'
        if path.endswith('.html') or path.endswith('.htm'):
            return 'text/html; charset=utf-8'
        return mime

os.chdir(os.path.dirname(os.path.abspath(__file__)))
server = http.server.HTTPServer(('0.0.0.0', 8080), Handler)
print('Server running on http://0.0.0.0:8080')
server.serve_forever()
