const imagen1= document.getElementById('imagen1');
const imagen2= document.getElementById('imagen2');
const imagen3= document.getElementById('imagen3');
const imagen4= document.getElementById('imagen4');
const imagen5= document.getElementById('imagen5');
const imagen6= document.getElementById('imagen6');
const imagen7= document.getElementById('imagen7');
const imagen8= document.getElementById('imagen8');
const imagen9= document.getElementById('imagen9');
const imagen10= document.getElementById('imagen10');
const imagen11= document.getElementById('imagen11');

const cargarImagen = (entradas, obs) => {
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

const obs = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px 0px',
    threshold: 0.5
});

obs.observe(imagen1);
obs.observe(imagen2);
obs.observe(imagen3);
obs.observe(imagen4);
obs.observe(imagen5);
obs.observe(imagen6);
obs.observe(imagen7);
obs.observe(imagen8);
obs.observe(imagen9);
obs.observe(imagen10);
obs.observe(imagen11);


