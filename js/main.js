var videoNumber = Math.floor((Math.random() * 650) + 1);

function postVideo() {
   var video1 = '<iframe src="http://www.youtube.com/embed/videoseries?list=PL6Tsqrt0Ndqc4r3LB60paLQTJoN1BtJnM&index=';
   var video2 = '" name="frame1" id="frame1"></iframe>'
          $('#video').append(video1+videoNumber+video2);
}

$(document).ready(postVideo)
