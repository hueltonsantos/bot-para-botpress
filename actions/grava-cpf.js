  /**
   * Gravar CPF do cliente (apenas numeros)
   * @title Grava CPF
   * @category Automação
   * @author HueltonSantos
   * @param {string} cpf
   */

  const myAction = async cpf => {
    event.state.temp.cpf = cpf.replace(/\D/g, '')
    bp.logger.debug(temp.cpf)
    bp.logger.debug(cpf)
    if (temp.cpf.length == 11) {
      temp.cpfValido = true
    } else {
      temp.cpfValido = false
    }
  }

  return myAction(args.cpf)