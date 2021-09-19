window.onload = function(){
    const drums = document.querySelectorAll('.drum');

    document.addEventListener('keyup', function(e){
        let key = e.key;
        if(key === "w"){
            new Audio('./sounds/tom-1.mp3').play();
        }
        if(key === "a"){
            new Audio('./sounds/tom-2.mp3').play()
        }
        if(key === "s"){
            new Audio('./sounds/tom-3.mp3').play()
        }
        if(key === "d"){
            new Audio('./sounds/tom-4.mp3').play()
        }
        if(key === "j"){
            new Audio('./sounds/kick-bass.mp3').play()
        }
        if(key === "k"){
            new Audio('./sounds/snare.mp3').play()
        }
        if(key === "l"){
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