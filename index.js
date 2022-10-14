const divAlbum = document.getElementById('album') 
const div = document.createElement('div');
const figuras = geraFigura(10);

const album = () =>{
    //requisição asincrona quando tiver banco de dados
    if(divAlbum.hasChildNodes()){
        divAlbum.innerHTML = ''
    }else{    
            figuras.forEach(figura => {     
                const div1 = document.createElement('div');
                const p = document.createElement('p');
                const img = document.createElement('img');
                p.innerHTML= `
                Nome: ${figura.nome}, 
                Idade: ${figura.idade}
                `;
            // img.setAttribute('src', `${figura.img}.png`);
                div1.setAttribute('class','figura');
                div1.setAttribute('value',true)
                div1.append(img);       
                div1.append(p);
                divAlbum.append(div1);
            });
        }  
        hideShoWBarra();
}

const buy = ()=>{
    const buyDiv = document.getElementById('buy');
    const pacote = document.createElement('div');
    pacote.setAttribute('class','pacote')
    pacote.innerHTML = "numero checagem:"+ Math.floor(Math.random() * 10);
    pacote.addEventListener('click',()=>{    
        abrirPacote(); 
        window.alert('abriu pacote:');
        buyDiv.removeChild(pacote);
    })
    buyDiv.append(pacote)   
}













function geraStringAleatoria(tamanho) {
    var stringAleatoria = '';
    var caracteres = '0123456789';
    for (var i = 0; i < tamanho; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
}

function geraFigura(tam){
    const r = [];
    for(var i =0; i < tam; i++){
        r.push({
            nome: geraStringAleatoria(10),
            idade:geraStringAleatoria(2),
            img: geraStringAleatoria(4)
        }) 
    }
    return r;
}

function abrirPacote(){
    const sorteadas = document.getElementById('abertos')
    const figurasSorteadas = geraFigura(5);
    figurasSorteadas.forEach(sorteada=>{
        const div1 = document.createElement('div');
        div1.setAttribute('draggable','true')
        const p = document.createElement('p');
        const img = document.createElement('img');
        p.innerHTML= `
                Nome: ${sorteada.nome}, 
                Idade: ${sorteada.idade}
                `;
        div1.setAttribute('class','figura-aberta')
        div1.append(img);       
        div1.append(p);
        sorteadas.append(div1);
    })
}

function divBollean(){
    const filhos = document.querySelectorAll('.figura')
    var contador = 0;
    var total = filhos.length

    filhos.forEach(filho=>{
        if(filho.getAttribute('value') == 'true'){
            contador ++
        }
    })
    return [contador, total];   
}
    
function msg(){
    //elaborar mais
    const user = 'henrique';
    return `Parabéns ${user} você comletou o álbum!`;
}

    
let varControle = true;

function hideShoWBarra(){
    const preenche = document.getElementById('preenchimento')
    varControle = !varControle;
    const [contador,total] = divBollean();
    var calculoPorcentagem = contador/total*100

    if(varControle === true){
        preenche.style.width = `${calculoPorcentagem}%`
    if(calculoPorcentagem == 100){
        window.alert(msg()); 
    }
    }else{
        preenche.style.width = `0%`
    }
}

//console.log(hideShoWBarra())
console.log(divBollean())