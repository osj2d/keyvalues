const tela = document.body;

function corDeFundo(n) {
  let valor = n.length;
  if (valor === 1) {
    return `#${n}${n}${n}`;
  } else if (valor === 2) {
    return `#${n}${n}${n}`;
  } else if (valor === 3) {
    return `#${n}${n}`;
  } else {
    return "#fff";
  }
}

tela.addEventListener("keydown", (e) => {
  const textArea = document.querySelector(".caixa");
  let valores = e;
  textArea.value += `Value: ${valores.key} - Code: ${valores.code} - Alt key: ${valores.altKey} - Control key: ${valores.ctrlKey} - Meta key: ${valores.metaKey} - Shift key: ${valores.shiftKey} \n`;
  const cor = corDeFundo(valores.keyCode.toString());
  tela.style.background = `${cor}`;
});
