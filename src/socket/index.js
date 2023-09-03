import socketClient  from 'socket.io-client';
import config from '../config';
const io = socketClient(config.socketUrl)
io.connect(()=>{
    console.log("connect")
})
export default io