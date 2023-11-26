const element1 = document.getElementById("photo1");

var imgs1 = ["./media/p1.jpg", "./media/p2.jpg", "./media/p3.jpg", "./media/p4.jpg", "./media/p5.jpg", "./media/p6.jpg", "./media/p7.jpg"];

let index1 = 0;

setInterval(function () {
    element1.src = imgs1[index1];
    index1 = index1 + 1;
    if (index1 == imgs1.length) {
    index1 = 0;
    }
}, 5000);

const element2 = document.getElementById("photo2");

var imgs2 = ["./media/emin.jpg", "./media/omar.jpg", "./media/Eynar.jpg", "./media/sahib.jpg"];

let index2 = 0;

setInterval(function () {
    element2.src = imgs2[index2];
    index2 = index2 + 1;
    if (index2 === imgs2.length) {
    index2 = 0;
    }
}, 4000);


    document.getElementById("up").addEventListener("click", function () {
        document.documentElement.scrollTop = 0; 
    });
