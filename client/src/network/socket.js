import socket from 'socket.io-client';

export default class Socket {
  constructor(baseURL, getAccessToken) {
    // create socket with authentication token
    this.io = socket(baseURL, {
      auth: (cb) => cb({ token: getAccessToken() }),
    });

    // handle error
    this.io.on('connect_error', (error) => {
      console.log('socket error', error.message);
    });
  }
  
  onSync(event, callback) {
    if (!this.io.connected) {
      this.io.connect();
      console.log('socket connected');
    }
    this.io.on(event, (message) => callback(message));
    return () => this.io.off(event);
  }
}
