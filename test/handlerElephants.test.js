const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna a quantidade de elefantes quando for passado como parâmetro`count` na função handlerElepahnts', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Verifica os nomes', () => { expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']); });
  it('Verifica a media das idades', () => { expect(handlerElephants('averageAge')).toEqual(10.5); });
  it('Verifica a localização deles no zoo', () => { expect(handlerElephants('location')).toStrictEqual('NW'); });
  it('Verifica a populadirade deles', () => { expect(handlerElephants('popularity')).toEqual(5); });
  it('Caso não receba Argumentos', () => { expect(handlerElephants()).toBeUndefined(); });
  it('Retorna array com dias de visita aos elefantes', () => { expect(handlerElephants(['Friday', 'Saturday', 'Sunday', 'Tuesday'])); });
  it('Quando não é uma string', () => { expect(handlerElephants(10)).toBe('Parâmetro inválido, é necessário uma string'); });
  it('ao passar um argumento que não é uma string retorna "Parâmetro inválido, é necessário uma string"', () => { expect(handlerElephants(typeof ('sting'))).toBe(null); });
});
