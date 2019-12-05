function verificar() {
    var date = new Date();
    var year = date.getFullYear();
    var formYear = document.getElementById('txtyear');
    var res = document.querySelector('div#res');
    if (formYear.value.length == 0 || formYear.value > year) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(formYear.value);
        var gen = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'picture');
        if (fsex[0].checked) {
            gen = 'Homem';
            if ( age >= 0 && age < 18){
                //CRIANÇA
                img.setAttribute('src', './img/kids_men.png');
            } else if (age >= 18 && age < 21){
                //JOVEM
                img.setAttribute('src', './img/young_men.png');
            } else if (age >= 21 && age < 60) {
                //ADULTO
                img.setAttribute('src', './img/adult_men.png');
            } else {
                //IDOSO
                img.setAttribute('src', './img/old_men.png');
            }
        } else {
            gen = 'Mulher';
            if ( age >= 0 && age < 18){
                //CRIANÇA
                img.setAttribute('src', './img/kids_woman.png');
            } else if (age >= 18 && age < 21){
                //JOVEM
                img.setAttribute('src', './img/young_woman.png');
            } else if (age >= 21 && age < 60) {
                //ADULTO
                img.setAttribute('src', './img/adult_woman.png');
            } else {
                //IDOSO
                img.setAttribute('src', './img/old_woman.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${gen} com ${age} anos.`;
        res.appendChild(img);
    }
}