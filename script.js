
// js 019 ,css 030
// click menu btn and show menu
// html with '.target' in [menu, navbar, section] ....put '.change' class in there

document.querySelector('.menu').addEventListener('click',()=>{

    document.querySelectorAll('.target').forEach((item)=>{
        item.classList.toggle('change')

    });
});

// js 024 
// back to nomal from menu mode, when I click any point on browser
// remove '.change' , when I click any point on browser

document.querySelectorAll('.wrapper').forEach((item)=>{
    item.addEventListener('click',()=>{
        document.querySelectorAll('.target').forEach((item)=>{
            item.classList.remove('change')            
    });
    })
});


//js 053
// mouseover on video, and play video
// mouseover, play() , mouseout , pause()

const videos = document.querySelectorAll('.video');

videos.forEach((video)=>{
    video.addEventListener('mouseover',()=>{
        video.play();
    });

    video.addEventListener('mouseout',()=>{
        video.pause();
    });
});