import socket
target_host = "localhost"
target_port = 80
client = socket.socket (socket.AF_INET, socket.SOCK_STREAM)
client.connect((target_host,target_port))
client.send("GET / HTTP/1.1\r\nHost: localhost\r\n\r\n")
response = client.recv(4096)
print response

# type this code!
QUESTIONS?
Describe each line of code. Especially client.send("GET / HTTP/1.1\r\nHost: localhost\r\n\r\n")
