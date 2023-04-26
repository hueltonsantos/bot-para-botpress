  /**
   * @title Encerrar chat
   * @category RocketChat
   * @author teste
   */
  const callApi = async () => {
    const axios = require('axios')
    const RoomIdAndVisitorToken = event.target.split(':')

    let json = {
            rid: RoomIdAndVisitorToken[0],
            token: RoomIdAndVisitorToken[1]
        }

    await axios.post(`http://127.0.0.1:5000/api/v1/livechat/room.close`, json)

  }

  return callApi()