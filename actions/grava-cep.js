  /**
   * Consulta CEP do cliente (apenas numeros)
   * @title Grava CEP
   * @category Automação
   * @author HueltonSantos
   * @param {string} cep
   */

  const axios = require('axios')

  const myAction = async cep => {
    event.state.temp.cep = cep.replace(/\D/g, '')
    if (temp.cep.length == 8) {
      temp.cepValido = true
      await axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(ok => {
          bp.logger.debug('=================')
          bp.logger.debug(ok)
          if (!ok.data.erro) {
            temp.logradouro = ok.data.logradouro
            temp.bairro = ok.data.bairro
            temp.cidade = ok.data.localidade
            temp.ibge = ok.data.ibge
          }else{
            temp.cepValido = false
          }
        })
        .catch(erro => {
          bp.logger.debug(erro)
        })
    } else {
      temp.cepValido = false
    }
  }

  return myAction(args.cep)