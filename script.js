alert("Welcome to Spotify");
let Name = prompt("Enter your Name\n");
console.log(Name);

// intialize the variables
let songIndex = 0;
let audioElement = new Audio('./song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
// let addEventListener = Array.from(document.getElementById('addEventListner'));

let songs = [
    {songName: "Vishnu Stotram",filePath: "./song/1.mp3", coverPath: "https://1.bp.blogspot.com/-HOZ13EPowGQ/YZEuGRLCHbI/AAAAAAAAG2s/Ns-r_P92RPAKOmtTeM5SZUDr583_bKrswCLcBGAsYHQ/s640/Shree%2BHari%2BStotram.jpg"},
    {songName: "Duniyaa - Luka Chuppi(2019)",filePath: "./song/2.mp3", coverPath: "https://i.ytimg.com/vi/TbkJ5HhFXdg/maxresdefault.jpg"},
    {songName: "Maan Meri jaan(2022)",filePath: "./song/3.mp3", coverPath: "https://i0.wp.com/pushpalyrics.com/wp-content/uploads/2022/12/maan-meri-jaan-lyrics.jpg?fit=480%2C360&ssl=1"},
    {songName: "Tu ake dekh le(2022)",filePath: "./song/4.mp3", coverPath: "https://i0.wp.com/lyricsted.com/wp-content/uploads/2022/05/Tu-Aake-Dekh-Le-Lyrics.jpg"},
    {songName: "Ranjha - SHERSHAAH(2021)",filePath: "./song/5.mp3", coverPath: "https://c.saavncdn.com/264/Ranjha-From-Shershaah--Hindi-2021-20210804173407-500x500.jpg"},
    {songName: "Humnava Mere Baarish - MixTape",filePath: "./song/6.mp3", coverPath: "https://i.ytimg.com/vi/I5ZEEaixfrQ/maxresdefault.jpg"},
    {songName: "ON My Way",filePath: "./song/7.mp3", coverPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0P4TmTzXxY9HNqjhbTTcZ4pZ0EggALj1cYnSrDG_3nD1_CV47ifVkqaAThtkhG73jwk&usqp=CAU"},
    {songName: "Tumse Milna Is Kadar - MixTape",filePath: "./song/8.mp3", coverPath: "https://i.ytimg.com/vi/5qJVUCX5Qrk/maxresdefault.jpg"},
    {songName: "Humdard - Ek Villan (2017)",filePath: "./song/9.mp3", coverPath: "https://c.saavncdn.com/151/Ek-Villain-Hindi-2014-500x500.jpg"},
    {songName: "3 peg - Punjabi Song",filePath: "./song/10.mp3", coverPath: "https://www.ilyricshub.com/wp-content/uploads/2017/01/3-Peg-Lyrics.png"},
    {songName: "Character Dheela Hai - Shezada",filePath: "./song/11.mp3", coverPath: "https://c.saavncdn.com/005/Character-Dheela-2-0-From-Shehzada-Hindi-2023-20230208144923-500x500.jpg"},
    {songName: "Mere Sawal ka - Shezada",filePath: "./song/12.mp3", coverPath: "https://ghantalele.com/uploads/thumbs/thumb-79/39094_2.jpg"},
    {songName: "Raam Siya Raam",filePath: "./song/13.mp3", coverPath: "https://i.scdn.co/image/ab67616d0000b273b5db9fac30bd158408f1b477"},
    {songName: "Leja Re Dhvani Bhanusali",filePath: "./song/14.mp3", coverPath: "https://1.bp.blogspot.com/-uihHv-xkAMw/XmXbfkCKOKI/AAAAAAAAAKY/iv1XjS2CJIwS2YGgCMNSoDZ_nG5OxYmygCLcBGAsYHQ/s1600/Leja%2Bre.jpg"},
    {songName: "Tera ban Jaunga",filePath: "./song/15.mp3", coverPath: "https://www.whatobuy.in/wp-content/uploads/2019/07/TERA-BAN-JAUNGA-LYRICS.jpg"},
    {songName: "Dil - Ek Villan Returns(2022)",filePath: "./song/16.mp3", coverPath: "https://i.ytimg.com/vi/swPhyd0g6K8/maxresdefault.jpg"},
]

songItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click',()=>
{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('bi-play-circle');
        masterPlay.classList.add('bi-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('bi-pause-circle');
        masterPlay.classList.add('bi-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Event
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    // console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        // makeAllPlays();
        element.classList.remove('bi-pause-circle');
        element.classList.add('bi-play-circle'); 
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeAllPlays();       
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('bi-play-circle');
        e.target.classList.add('bi-pause-circle');      
        audioElement.src = `./song/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('bi-play-circle');
        masterPlay.classList.add('bi-pause-circle');
    })    
})

document.getElementsById('next').addEventListener('click', ()=>{
    if(songIndex>=15){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `./song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;     
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('bi-play-circle');
    masterPlay.classList.add('bi-pause-circle');
})

document.getElementsById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `./song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('bi-play-circle');
    masterPlay.classList.add('bi-pause-circle');
})

