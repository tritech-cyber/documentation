import socket
UDP_IP = "127.0.0.1"
UDP_PORT = 80
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
while True:
	data, addr = sock.recvfrom(4096) # buffer size is 1024 bytes
	print "received message:", data
