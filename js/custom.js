$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/_3tS1nIp8Dc',
        containment: '.movie',
        showControls: false,
        playOnlyIfVisible: true,
    });

    let sw = true;
});


