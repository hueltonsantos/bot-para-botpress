  /**
   * Checar horário de atendimento
   * @title Checa Expediente
   * @category Regras
   * @author teste
   */
  const isbusinesstime = async (name, value) => {
    const moment = require('moment')
    moment.locale('pt-br')
    const dayjs = require('dayjs')
    const dayjsBusinessTime = require('dayjs-business-time')

    // Attach dayjs plugin
    dayjs.extend(dayjsBusinessTime)

    // Create your holidays array as string array
    const holidays = [
      '2022-01-01', //Confraternização Universal
      '2022-02-02', //Nossa Senhora dos Navegantes
      '2022-02-28', //Carnaval
      '2022-03-01', //Carnaval
      '2022-04-15', //Sexta-Feira Santa
      '2022-04-21', //Tiradentes
      '2022-05-01', //Dia do Trabalho
      '2022-06-16', //Corpus Christi
      '2022-09-07', //IndependEncia do Brasil
      '2022-09-20', //Revolucao Farroupilha
      '2022-10-12', //Nossa Senhora Aparecida
      '2022-11-02', //Finados
      '2022-11-15', //Proclamacao da Republica
      '2021-12-25', //Natal
      '2021-12-31' //Vespera de Ano Novo
    ]

    // Add holidays to dayjs
    dayjs.setHolidays(holidays)

    // Create your Business Week definition
    const businessTimes = (BusinessHoursMap = {
      sunday: null,
      monday: [
        { start: '08:00:00', end: '12:00:00' },
        { start: '12:00:00', end: '18:00:00' }
      ],
      tuesday: [
        { start: '08:00:00', end: '12:00:00' },
        { start: '12:00:00', end: '18:00:00' }
      ],
      wednesday: [
        { start: '08:00:00', end: '12:00:00' },
        { start: '12:00:00', end: '18:00:00' }
      ],
      thursday: [
        { start: '08:00:00', end: '12:00:00' },
        { start: '12:00:00', end: '18:00:00' }
      ],
      friday: [
        { start: '08:00:00', end: '12:00:00' },
        { start: '12:00:00', end: '18:00:00' }
      ],
      saturday: [{ start: '08:00:00', end: '12:00:00' }]
    })

    // Set Business Times in dayjs
    dayjs.setBusinessTime(businessTimes)

    // Set Business Times in dayjs
    dayjs.setBusinessTime(businessTimes)

    var now = new Date()
    now = now.toLocaleString('pt-BR', { timeZone: 'America/Recife' })
    var nowmm = moment(now)
    const date = nowmm.format('YYYY-MM-DD HH:mm:ss')
    bp.logger.debug(date)
    const isBusinessTime = dayjs(date).isBusinessTime()
    temp.BusinessTime = isBusinessTime
    return
  }

  return isbusinesstime(args.name, args.value)