import small from '../assets/small.jpeg';
import '../style/image_viewer.css';

export default  () => {
    const image = document.createElement('img');
    image.src = small;
    document.body.appendChild(image);

}