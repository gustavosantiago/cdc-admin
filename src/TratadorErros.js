import PubSub from 'pubsub-js'

export default class TratadorErros {
  publicaErros(mensagens) {
    console.log(mensagens);
    for(var i=0; i < mensagens.errors.length; i++){
      var erro = mensagens.errors[i];
      PubSub.publish('erro-validacao', erro);
    }
  }
}