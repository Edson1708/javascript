var intervald = window.setInterval(() => { cargar() }, 1000);
function cargar() {

    var msg = document.querySelector('section.ejercicio_hora > div#msg');
    var img = document.querySelector('div > img#imagen');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo}`;
    if (hora >= 0 && hora < 12) {
        img.src = 'imagenes/mañana.jpg';
        document.body.style.background = '#FEBF5E';
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagenes/tarde.jpg';
        document.body.style.background = '#AE793C';
    } else {
        img.src = 'imagenes/noche.jpg';
        document.body.style.background = '#18323F';
    }
}
function verificar() {
    var dat = new Date();
    var año = dat.getFullYear();
    var faño = document.querySelector('input#extedad');
    var res = document.querySelector('div#res');
    if (faño.value.length == 0 || faño.value > año) {
        alert('[Error] Campo vacío o año fuera de rango');
    } else {
        var fsex = document.getElementsByName('radsex');
        var edad = año - Number(faño.value);
        var genero = '';
        var img = document.createElement('img');
        if (fsex[0].checked) {
            genero = 'Hombre';
            if (edad >= 0 && edad < 10) {
                img.setAttribute('src', 'imagenes/foto-bebe-m.png');
            } else if (edad < 21) {
                img.setAttribute('src', 'imagenes/foto-jovem-m.png');
            } else if (edad < 50) {
                img.setAttribute('src', 'imagenes/foto-adulto-m.png');
            } else {
                img.setAttribute('src', 'imagenes/foto-idoso-m.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mujer';
            if (edad >= 0 && edad < 10) {
                img.setAttribute('src', 'imagenes/foto-bebe-f.png');
            } else if (edad < 21) {
                img.setAttribute('src', 'imagenes/foto-jovem-f.png');
            } else if (edad < 50) {
                img.setAttribute('src', 'imagenes/foto-adulto-f.png');
            } else {
                img.setAttribute('src', 'imagenes/foto-idoso-f.png');
            }
        }
        res.innerHTML = `Detectamos ${genero} con ${edad} años`;
        res.style.textAlign = 'center';
        res.appendChild(img);
    }
}
function contar(){
    let inicio = document.getElementById('txti');
    let fin = document.getElementById('txtf');
    let salto = document.getElementById('txts');
    let res = document.getElementById('resul');
    if (inicio.value.length ==0 || fin.value.length ==0 || salto.value.length ==0) {
        alert('falta datos');
        res.innerHTML = 'Imposible contar';
    }else{
        res.innerHTML = 'Contando: ';
        let i = Number(inicio.value);
        let f = Number(fin.value);
        let s = Number(salto.value);
        if (s<=0) {
            alert('salto invalido, considerando paso 1');
            s=1;
        }
        if (i<f) {
            for(var c=i;c<=f;c+=s){
                res.innerHTML += `${c} \u{1F449}`;
            }
        }else{
            for(var c=i;c>=f;c-=s){
                res.innerHTML += `${c} \u{1F449}`;
            }
            
        }
        res.innerHTML+=`\u{1F3C1}`;
    }
}
function tabla(){
    let num = document.getElementById('numero');
    let tab = document.getElementById('seltab');
    if (num.value.length == 0) {
        alert('Campos vacíos');
    }else{
        n = Number(num.value);
        let c=1;
        tab.innerText = '';
        while (c<=10) {
            let item = document.createElement('option');
            item.text = `${n} X ${c} = ${c*n}`; 
            tab.appendChild(item);
            c++;
        }
    }

}
