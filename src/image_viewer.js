import big from '../assets/big.jpeg';
import small from '../assets/small.jpeg';
import '../style/image_viewer.css';



const image = document.createElement('img');
image.src = small;
document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big;
document.body.appendChild(bigImage);