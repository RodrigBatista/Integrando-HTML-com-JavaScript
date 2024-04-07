const form = document.querySelector('#form-numeros')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const NumberA = document.querySelector('#numero-a');
    const NumberB = document.querySelector('#numero-b');

    const NumeroA = parseFloat(NumberA.value)
    const NumeroB = parseFloat(NumberB.value)

    const mensagemFalha = `O número <b>${NumberB.value}</b> não é maior que o número <b>${NumberA.value}</b>, tente novamente.`;
    const mensagemSucesso = `Parabéns, o número <b>${NumberB.value}</b> é maior que o número <b>${NumberA.value}</b>!`;

    if (NumeroA >= NumeroB) {
        const containerFalso = document.querySelector('.error-message');
        containerFalso.innerHTML = mensagemFalha;
        containerFalso.style.display = 'inline-block';
        document.querySelector('.sucess-message').style.display = 'none';
    } else {
        const containerVerdade = document.querySelector('.sucess-message');
        containerVerdade.innerHTML = mensagemSucesso;
        containerVerdade.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
    }
});