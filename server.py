import http.server
import os
import socket
import sys

def get_local_ip():
    """Get the local network IP address."""
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return '127.0.0.1'

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        # Cache static assets, but not HTML
        path = self.path
        if path.endswith('.js') or path.endswith('.css'):
            self.send_header('Cache-Control', 'public, max-age=86400')
        elif path.endswith('.mp3') or path.endswith('.woff2'):
            self.send_header('Cache-Control', 'public, max-age=604800')
        else:
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

PORT = 8080
local_ip = get_local_ip()

server = http.server.HTTPServer(('0.0.0.0', PORT), Handler)
print('=' * 50)
print('  Romanian Learning Server')
print('=' * 50)
print()
print(f'  Local:    http://localhost:{PORT}')
print(f'  Network:  http://{local_ip}:{PORT}')
print()
print('  Use the Network URL on your phone/tablet.')
print('  Make sure both devices are on the same WiFi.')
print('  Press Ctrl+C to stop.')
print('=' * 50)

try:
    server.serve_forever()
except KeyboardInterrupt:
    print('\nServer stopped.')
    server.server_close()
    sys.exit(0)
