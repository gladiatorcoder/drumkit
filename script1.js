window.onload = function(){
    const tom1 = document.querySelector('.tom1');
    const tom2 = document.querySelector('.tom2');
    const tom3 = document.querySelector('.tom3');
    const tom4 = document.querySelector('.tom4');
    const kick = document.querySelector('.kick');
    const snare = document.querySelector('.snare');
    const crash= document.querySelector('.crash');
    const drums = document.querySelectorAll('.drum');

    document.addEventListener('keyup', function(e){
        let key = e.key;
        if(key === "w"){
            addHighlight(tom1.classList);
            new Audio('./sounds/tom-1.mp3').play();
        }
        if(key === "a"){
            addHighlight(tom2.classList);
            new Audio('./sounds/tom-2.mp3').play()
        }
        if(key === "s"){
            addHighlight(tom3.classList);
            new Audio('./sounds/tom-3.mp3').play()
        }
        if(key === "d"){
            addHighlight(tom4.classList);
            new Audio('./sounds/tom-4.mp3').play()
        }
        if(key === "j"){
            addHighlight(kick.classList);
            new Audio('./sounds/kick-bass.mp3').play()
        }
        if(key === "k"){
            addHighlight(snare.classList);
            new Audio('./sounds/snare.mp3').play()
        }
        if(key === "l"){
            addHighlight(crash.classList);
            new Audio('./sounds/crash.mp3').play()
        }
    })

    drums.forEach(function(drum, i, drums){
        drum.addEventListener('click', function(e){
            // console.log(e.target.classList.contains('drum'));
            addHighlight(e.target.classList);
            playSound(drum);
        });
    });
}   

function addHighlight(classList){
    classList.add('highlight');
    setTimeout(() => {
        classList.remove('highlight');
    }, 100);
}

function playSound(drum){
    let sound = drum.classList[1];
    document.getElementById(sound).play();
}