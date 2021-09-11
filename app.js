let base = document.querySelector('.base');
const premiereCase = document.getElementById('premiere-case');
const boxs = document.querySelectorAll('.case');
const destroy = document.querySelector('.destroy');
const allCases = [];
let photoChoisies = 0;

for (let i = 0; i < boxs.length; i++) {
    allCases.push(boxs[i]);
    
}
allCases.push(destroy);

let indexPhoto = Math.floor(Math.random()*300);

base.style.backgroundImage = `url(https://picsum.photos/id/${indexPhoto}/200/300)`;

function nvBase(){
    const newBase = document.createElement('div');
    newBase.setAttribute('class','base');
    newBase.setAttribute('draggable','true');
    indexPhoto++;
    newBase.style.backgroundImage = `url(https://picsum.photos/id/${indexPhoto}/200/300)`;
    premiereCase.appendChild(newBase);
    base = newBase;
}

for(const vide of allCases){
    vide.addEventListener('dragover', dragOver);
    vide.addEventListener('dragenter', dragEnter);
    vide.addEventListener('drop', dragDrop);
  
}

function dragDrop(){
    if(this.id === "premiere-case"){
        return;
    }

    // Destroy
    if(this.id === "destroy"){
        base.remove();
        nvBase();
        return;
    }

    // Verouillage
    this.removeEventListener('drop', dragDrop);
    this.removeEventListener('dragenter', dragEnter);
    this.removeEventListener('dragover', dragOver);

    this.appendChild(base); 
    photoChoisies++;
    this.childNodes[0].setAttribute('draggable', false);
    if(photoChoisies === 3){
        setTimeout(() => {
            alert("Sélection terminée !");
        }, 200);
    } else{
        nvBase();  
    }
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

