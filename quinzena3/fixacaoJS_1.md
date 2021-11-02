```js
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const salarioFixo = 2000
  comissao = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05)
  salarioFinal = salarioFixo + comissao
  return salarioFinal
}
```