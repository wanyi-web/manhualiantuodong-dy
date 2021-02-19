window.playableSDK.addEventListener('visibilityChange', init);

function init(state) {
    if (state.viewable) {
        //页面可见
        $(function() {


            var state = document.getElementById("videoid");
            state.play();
            state.addEventListener("play", function() {
                document.getElementById("flower").pause();
                document.removeEventListener("touchmove", function(e) {
                    e.preventDefault();
                })
            });
            state.addEventListener("playing", function() {
                document.getElementById("flower").pause();
                document.removeEventListener("touchmove", function(e) {
                    e.preventDefault();
                })
            });
            state.addEventListener("ended", function() {
                $(".page2").show();
                // document.getElementById("bgm").play();
            })

            window.setTimeout(function() {
                document.querySelector(".img2").style.backgroundPositionX = 0;
                document.querySelector(".img2").style.width = 0;


                var startX, oriX, oriW;
                document.addEventListener("touchstart", function(e) {

                    startX = e.touches[0].clientX;


                    oriX = parseInt(document.querySelector(".img2").style.backgroundPositionX);

                })

                document.addEventListener("touchmove", function(e) {
                    var offset = e.touches[0].clientX - startX;
                    $(".topzi").hide();
                    $(".right").hide();
                    $(".left").hide();
                    document.getElementById("flower").play();

                    document.querySelector(".img2").style.backgroundPositionX = oriX - offset + "px";
                    // console.log(document.querySelector(".img2").style.backgroundPositionX)
                    if (parseInt(document.querySelector(".img2").style.backgroundPositionX) < 0) {
                        document.querySelector(".img2").style.backgroundPositionX = 0 + "px";
                        $(".right").show();
                        $(".left").hide();
                    } else if (parseInt(document.querySelector(".img2").style.backgroundPositionX) > document.body.clientWidth) {
                        document.querySelector(".img2").style.backgroundPositionX = document.body.clientWidth + "px";
                        $(".left").show();
                        // document.getElementById("bgm").play();
                    }

                    document.querySelector(".img2").style.width = parseInt(document.querySelector(".img2").style.backgroundPositionX) + "px";

                })
            }, 4000)
        });
    } else {

    }

    window.playableSDK.removeEventListener('visibilityChange', init);
}