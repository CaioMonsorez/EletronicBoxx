let seuVotopara =document.querySelector('.divisaocima-left1 span');
let cargo =document.querySelector('.divisaocima-left2 span');
let descricao =document.querySelector('.divisaocima-left4');
let aviso =document.querySelector('.divisaobaixo');
let lateral =document.querySelector('.divisaocima-right');
let numeros =document.querySelector('.divisaocima-left3');

let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHTML= '';
    numero = '';
    branco = false;
    
    for(let i=0;i<etapa.numeros;i++) {
        if(i === 0) {
            numeroHTML += '<div class="numero pisca"></div>';

        } else {

            numeroHTML += '<div class="numero"></div>';
        }
        

    }

    seuVotopara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML ='';
    aviso.style.display = 'none';
    lateral.innerHTML ='';
    numeros.innerHTML = numeroHTML;
}
function atualizaInterface() {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true;
        } else {
            return false;
        }
    });
    if(candidato.length > 0){
        candidato = candidato[0];
        seuVotopara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = 'Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}';
        let fotosHtml = '';
        for(let i in candidato.fotos) {
            fotosHtml += `<div class="divisaocima-image"><img src="images/$candidato.fotos[i].url" alt=""/>candidato.fotos[i].legenda</div>`;

        }

        lateral.innerHTML = fotosHtml;
    } else {
        seuVotopara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';

    }
    

}
function clicou (n) {
    let elnumero = document.querySelector('.numero.pisca');
    if(numero !== null) {
        elnumero.innerHTML =n;
        numero ='${numero}${n}';

        elnumero.classList.remove('pisca');
        if(elnumero.nextElementSibling !==null){
            elnumero.nextElementSibling.classList.add('pisca');

        }else{
            atualizaInterface();
            
        }
        

    }

}
function branco () {
    if(numero === ''){
        branco = true;
        seuVotopara.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
    }
}
function corrige () {
    comecarEtapa();

}
function confirma () {
    alert("VOCE Clicou em CONFIRMA");

}

comecarEtapa();