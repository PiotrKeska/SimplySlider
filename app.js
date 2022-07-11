
const imagesSource = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
const slider = document.querySelector('.slider');
let index = 0;
slider.style.backgroundImage = `url(${imagesSource[index]})`;



function changePhoto(direction){
    if(direction === 'right'){
        index = index + 1;
        if(index > imagesSource.length -1){
            index = 0;
        }

    } else if(direction === 'left'){
        index = index - 1;
        if(index < 0){
            index = imagesSource.length - 1;
        }
    }

    slider.style.backgroundImage = `url(${imagesSource[index]})`;
    console.log(index);
}



$('button').on('click', function(){
    const currentButton = this.id;
    changePhoto(currentButton);
})