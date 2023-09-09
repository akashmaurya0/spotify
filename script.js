console.log("welcome to sp2");
//..................variable deceration....................................
let masterplay = document.getElementById('masterplay');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let audioElement = new Audio('songs/1.mp3');
let seekbar = document.getElementById('seekbar');
let songIndex=0;
let songitem=Array.from(document.getElementsByClassName('songitem'));
let songs = [
    { Songname: "song1", filepath: "songs/1.mp3", coverpath: "cover/1.jpg" },
    { Songname: "song2", filepath: "songs/2.mp3", coverpath: "cover/2.jpg" },
    { Songname: "song3", filepath: "songs/3.mp3", coverpath: "cover/3.jpg" },
    { Songname: "song4", filepath: "songs/4.mp3", coverpath: "cover/4.jpg" },
    { Songname: "song5", filepath: "songs/5.mp3", coverpath: "cover/5.jpg" },
    { Songname: "song6", filepath: "songs/6.mp3", coverpath: "cover/6.jpg" },
    { Songname: "song7", filepath: "songs/7.mp3", coverpath: "cover/7.jpg" },
]
// ....song list play .....options
songitem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByClassName('songname')[0].innerText=songs[i].Songname;
}
)

//.................master play button event...........................................
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        document.getElementById('soundgif').style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        document.getElementById('soundgif').style.opacity = 0;
       
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-circle-play');
    }
    document.getElementById('songtitle').innerHTML=songs[songIndex].Songname;

})
//...........................................................................................




//...................update seek bar,........................................................
audioElement.addEventListener('timeupdate',()=>
{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    seekbar.value=progress;
})

seekbar.addEventListener('change',()=>
{
audioElement.currentTime=seekbar.value*audioElement.duration/100;
})

//................................................................................

const makeallplay=()=>
{  
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
    {
        element.classList.remove('fa-pause-circle');
    element.classList.add('fa-circle-play');

    })
    

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
{
    element.addEventListener('click',(e)=>
    {   makeallplay();
        console.log(e.target);
        songIndex=parseInt(e.target.id);
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
       
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
       document.getElementById('songtitle').innerHTML=songs[songIndex].Songname;
    })
}
)
// ...............next button.............................
next.addEventListener('click',()=>
{
    if(songIndex>=6)
    {
        songIndex=0;

    }
    else{
        songIndex+=1;
    }
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        document.getElementById('soundgif').style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
        document.getElementById('songtitle').innerHTML=songs[songIndex].Songname;

    
   
})
//.................previous button .......................................
prev.addEventListener('click',()=>
{
     if(songIndex<=0)
    {
        songIndex=7;

    }
    else{
        songIndex-=1;
    
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        document.getElementById('soundgif').style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
        document.getElementById('songtitle').innerHTML=songs[songIndex].Songname;
    }
    
})