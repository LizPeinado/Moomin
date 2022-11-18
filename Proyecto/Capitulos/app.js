const tarjeta= document.getElementById('tarjeta');
const tarjeta2= document.getElementById('tarjeta2');
const tarjeta3= document.getElementById('tarjeta3');
const tarjeta4= document.getElementById('tarjeta4');
const tarjeta5= document.getElementById('tarjeta5');
const tarjeta6= document.getElementById('tarjeta6');
const tarjeta7= document.getElementById('tarjeta7');
const tarjeta8= document.getElementById('tarjeta8');
const tarjeta9= document.getElementById('tarjeta9');
const tarjeta10= document.getElementById('tarjeta10');
const tarjeta11= document.getElementById('tarjeta11');
const tarjeta12= document.getElementById('tarjeta12');
const tarjeta13= document.getElementById('tarjeta13');
const tarjeta14= document.getElementById('tarjeta14');
const tarjeta15= document.getElementById('tarjeta15');
const tarjeta16= document.getElementById('tarjeta16');
const tarjeta17= document.getElementById('tarjeta17');
const tarjeta18= document.getElementById('tarjeta18');
const tarjeta19= document.getElementById('tarjeta19');
const tarjeta20= document.getElementById('tarjeta20');
const tarjeta21= document.getElementById('tarjeta21');
const tarjeta22= document.getElementById('tarjeta22');
const tarjeta23= document.getElementById('tarjeta23');
const tarjeta24= document.getElementById('tarjeta24');
const tarjeta25= document.getElementById('tarjeta25');
const tarjeta26= document.getElementById('tarjeta26');



const cargarTar = (entradas, obs) => {
    //console.log(entradas)
    //console.log(obs)

    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }else {
            entrada.target.classList.remove('visible');
        }
    });
}

const obs = new IntersectionObserver(cargarTar, {
    root: null,
    rootMargin: '0px 0px',
    threshold: 0.8
});

obs.observe(tarjeta);
obs.observe(tarjeta2);
obs.observe(tarjeta3);
obs.observe(tarjeta4);
obs.observe(tarjeta5);
obs.observe(tarjeta6);
obs.observe(tarjeta7);
obs.observe(tarjeta8);
obs.observe(tarjeta9);
obs.observe(tarjeta10);
obs.observe(tarjeta11);
obs.observe(tarjeta12);
obs.observe(tarjeta13);
obs.observe(tarjeta14);
obs.observe(tarjeta15);
obs.observe(tarjeta16);
obs.observe(tarjeta17);
obs.observe(tarjeta18);
obs.observe(tarjeta19);
obs.observe(tarjeta20);
obs.observe(tarjeta21);
obs.observe(tarjeta22);
obs.observe(tarjeta23);
obs.observe(tarjeta24);
obs.observe(tarjeta25);
obs.observe(tarjeta26);
