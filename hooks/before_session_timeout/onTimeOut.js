  const callApi = async () => {
    const axios = require('axios')
    const RoomIdAndVisitorToken = event.target.split(':')

    let json = {
      rid: RoomIdAndVisitorToken[0],
      token: RoomIdAndVisitorToken[1],
      department: '7ugjZrkemkBiiRfJM'
    }

    await axios.post(`http://127.0.0.1:5000/api/v1/livechat/room.transfer`, json).then(async ok => {
      json = {
        token: RoomIdAndVisitorToken[1],
        rid: RoomIdAndVisitorToken[0],
        msg: '*CLIENTE OSCIOSO NA FILA* 😪'
      }

      await axios.post(`http://127.0.0.1:5000/api/v1/livechat/message`, json)
    })
  }

  return callApi()