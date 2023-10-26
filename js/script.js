const tela = document.body;

tela.addEventListener('keydown', (e) => {
    const textArea = document.querySelector('.caixa')
    let valores = e;
    console.log(valores)
    textArea.value += `Value: ${valores.key} - Code: ${valores.code} - Alt key: ${valores.altKey} - Control key: ${valores.ctrlKey} - Meta key: ${valores.metaKey} - Shift key: ${valores.shiftKey} \n` ;
})