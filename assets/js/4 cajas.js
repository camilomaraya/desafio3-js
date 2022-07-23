let color = '';

document.addEventListener('keydown', function(tecla){

    switch(tecla.key.toLowerCase()){
        case 'a':
            color = 'aqua'
            break;
        case 's':
            color = 'papayawhip'
            break;
        case 'd':
            color = 'gold'
            break;
        case 'f':
            color = 'indigo'
            break;
        default:
            color = ''
    }
})

const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const box4 = document.getElementById('box4')


box1.addEventListener("click", () => box1.style.backgroundColor = color)
box2.addEventListener("click", () => box2.style.backgroundColor = color)
box3.addEventListener("click", () => box3.style.backgroundColor = color)
box4.addEventListener("click", () => box4.style.backgroundColor = color)


