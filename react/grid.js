// ищем элементы с айдишниками кнопок
var showPrvBtn = document.getElementById('slider-prev');
var showNextBtn = document.getElementById('slider-next');
// ищем элемент с айдишником картинок
var slideImage = document.getElementById('slide-imag');


// Добавляем обработчика событий для каждой кнопки событием клика
showPrvBtn.addEventListener('click', onPrevClick);
showNextBtn.addEventListener('click', onNextClick);


// создаём масив из картинок, порядок начинается с нуля, 0,1, итд
var imgesUrl = [];
imgesUrl.push (src="./slide1/2.jpg");
imgesUrl.push (src="./slide1/1.jpg");  
imgesUrl.push (src="./slide1/3.jpg");
imgesUrl.push (src="./slide1/4.jpg");
imgesUrl.push (src="./slide1/5.jpg");
imgesUrl.push (src="./slide1/6.jpg");



var currentImages = 0;
// Присваиваем для slideImage, src в котором будет масив с картинками равный переменной currentImages, присваиваем для currentImages = 0;
slideImage.src = imgesUrl [currentImages];
showPrvBtn.disabled = true;

//  когад мы кликаем на предидущую кнопку мы уменьшаем наше текущее значение(currentImages) на единицу;
function onPrevClick(){
    currentImages --;
    slideImage.src = imgesUrl [currentImages];
    showNextBtn.disabled = false;

    if(currentImages === 0){
        showPrvBtn.disabled = true;
    }
}
// здесь тоже самое только на следующую кнопку, просто меняем текущее значение(currentImages) на единицу больше;
function onNextClick(){
    currentImages ++;
    slideImage.src = imgesUrl [currentImages];
    showPrvBtn.disabled = false;

    // Тут если текущее значение равно длинне масива-1, -1 потому что длина считается с нуля то некст батнн запретить= true;
    if(currentImages === (imgesUrl.length-1)){
        showNextBtn.disabled = true;
    }

}



var showPrvBtn1 = document.getElementById('slider-prev1');
var showNextBtn1 = document.getElementById('slider-next1');

var slideImage1 = document.getElementById('slide-imag1');

showPrvBtn1.addEventListener('click', onPrevClick1);
showNextBtn1.addEventListener('click', onNextClick1);


var imgesUrl1 = [];
imgesUrl1.push (src="./slider2/1b.jpeg");
imgesUrl1.push (src="./slider2/2b.jpg");  
imgesUrl1.push (src="./slider2/3b.jpeg");
imgesUrl1.push (src="./slider2/4b.jpg");
imgesUrl1.push (src="./slider2/5b.jpeg");
imgesUrl1.push (src="./slider2/6b.jpg");
imgesUrl1.push (src="./slider2/7b.jpg");
imgesUrl1.push (src="./slider2/8b.jpg");
imgesUrl1.push (src="./slider2/9b.jpg");
imgesUrl1.push (src="./slider2/10b.jpeg");


var currentImages1 = 0;

slideImage1.src = imgesUrl1 [currentImages1];
showPrvBtn1.disabled = true;


function onPrevClick1(){
    currentImages1 --;
    slideImage1.src = imgesUrl1 [currentImages1];
    showNextBtn1.disabled = false;

    if(currentImages1 === 0){
        showPrvBtn1.disabled = true;
    }
}

function onNextClick1(){
    currentImages1 ++;
    slideImage1.src = imgesUrl1 [currentImages1];
    showPrvBtn1.disabled = false;

    
    if(currentImages1 === (imgesUrl1.length-1)){
        showNextBtn1.disabled = true;
    }

}




var showPrvBtn2 = document.getElementById('slider-prev2');
var showNextBtn2 = document.getElementById('slider-next2');

var slideImage2 = document.getElementById('slide-imag2');

showPrvBtn2.addEventListener('click', onPrevClick2);
showNextBtn2.addEventListener('click', onNextClick2);


var imgesUrl2 = [];
imgesUrl2.push (src="./slide3/1.jpg");
imgesUrl2.push (src="./slide3/2.jpg");  
imgesUrl2.push (src="./slide3/3.jpg");
imgesUrl2.push (src="./slide3/4.jpg");
imgesUrl2.push (src="./slide3/5.jpg");
imgesUrl2.push (src="./slide3/6.jpg");
imgesUrl2.push (src="./slide3/7.jpg");
imgesUrl2.push (src="./slide3/8.jpg");
imgesUrl2.push (src="./slide3/9.jpg");
imgesUrl2.push (src="./slide3/10.jpg");


var currentImages2 = 0;

slideImage2.src = imgesUrl2 [currentImages2];
showPrvBtn2.disabled = true;


function onPrevClick2(){
    currentImages2 --;
    slideImage2.src = imgesUrl2 [currentImages2];
    showNextBtn2.disabled = false;

    if(currentImages2 === 0){
        showPrvBtn2.disabled = true;
    }
}

function onNextClick2(){
    currentImages2 ++;
    slideImage2.src = imgesUrl2 [currentImages2];
    showPrvBtn2.disabled = false;

    
    if(currentImages2 === (imgesUrl2.length-1)){
        showNextBtn2.disabled = true;
    }

}
