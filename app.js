const balloon = document.querySelector('#air-balloon');
const cloudOne = document.querySelector('#cloud-one');
const cloudTwo = document.querySelector('#cloud-two');
const cloudThree = document.querySelector('#cloud-three');
const cloudFour= document.querySelector('#cloud-four');
const cloudFive = document.querySelector('#cloud-five');

const js = document.querySelector('#js-img');
const ts = document.querySelector('#typescript');
const react = document.querySelector('#react');


let move = () => {
    const incrementer = window.scrollY;

    balloon.style.bottom = 10 + incrementer * 0.1 + '%';

    cloudOne.style.bottom = 40 + incrementer * 0.12 + '%';
    cloudOne.style.marginLeft = 70 + incrementer * 0.1 + '%';

    cloudTwo.style.bottom = 80 + incrementer * 0.12 + '%';
    cloudTwo.style.marginLeft = 60 + incrementer * 0.14 + '%';

    cloudThree.style.bottom = 60 + incrementer * 0.1 + '%';
    cloudThree.style.marginRight = 80 + incrementer * 0.12 + '%';

    cloudFour.style.bottom = 70 + incrementer * 0.16 + '%';
    cloudFour.style.marginRight = 40 + incrementer * 0.15 + '%';

    cloudFive.style.bottom = 60 + incrementer * 0.2 + '%';
    cloudFive.style.marginLeft = 40 + incrementer * 0.16 + '%';

    js.style.marginRight = 55 + incrementer * 2.2 + '%';
    ts.style.marginRight = 43 + incrementer * 1.5 + '%';
    react.style.marginRight = 31 + incrementer * 1 + '%';
}

window.addEventListener('scroll', move);