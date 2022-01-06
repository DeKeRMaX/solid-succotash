all_images = new Array (
    "scripts/images/img_1.jfif",
    "scripts/images/img_2.jfif",
    "scripts/images/img_3.jfif",
    "scripts/images/img_4.jfif",
    "scripts/images/img_5.jpg",
    "scripts/images/img_6.jpg",
    "scripts/images/img_7.jpg");
    var ImgNum = 0;
    var ImgLength = all_images.length - 1;
    var delay = 5000;
    var lock = false;
    var run;
    
    function chgImg(direction) {
     if (document.images) {
      ImgNum = ImgNum + direction;
      if (ImgNum > ImgLength) { ImgNum = 0; }
      if (ImgNum < 0) { ImgNum = ImgLength; }
      document.slide_show.src = all_images[ImgNum];
     }
    }
    
    function auto() {
     if (lock == true) {
      lock = false;
      window.clearInterval(run);
     }
     else if (lock == false) {
      lock = true;
      run = setInterval("chgImg(1)", delay);}}
      auto();