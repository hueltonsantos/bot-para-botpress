  /* You must provid the Botpress App Webhook from Rocketchat */
  const rocketWebhook = 'http://127.0.0.1:5000/api/apps/public/6a8e6b6c-7a25-47c9-94e8-5af5075981ad/incoming'

  const axios = require('axios')

  /**
   * @title Transferência para departamento
   * @category RocketChat
   * @author LigeroSmart https://ligerosmart.com
   * @param {string} department Department Name
   * @param {string} [transferText=] Text to be shown when transfer visitor
   */
  const callApi = async () => {
    // Prepare the message
    const message = {
      type: 'text',
      text: `${args.transferText}`,
      // Markdown enables rich content, for example links or bold text. Otherwise, content will be displayed as-is
      markdown: true
    }

    // Send the message to the user (note the array, since you can send multiple payloads in the same reply)

    if (args.transferText !== '#') {
      await bp.events.replyToEvent(event, [message])
    }
    const RoomIdAndVisitorToken = event.target.split(':')

    // Transfer user
    async function trans() {
      const { data } = await axios.post(rocketWebhook, {
        sessionId: RoomIdAndVisitorToken[0],
        action: 'handover',
        actionData: {
          targetDepartment: args.department
        }
      })
    }

    setTimeout(trans, 5000)

    // The first element returned is the most recent release
    //const mostRecentRelease = data[0]

    //const latestVersion = mostRecentRelease.name

    // You could also save the complete response in the session, then use it later
    //session.response = data
  }

  // Actions are async, so make sure to return a promise
  return callApi()