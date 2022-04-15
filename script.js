let box = document.querySelector('.box');
let image = document.createElement('img');
image.src = 'mountains.png';
box.appendChild(image);

let image_2 = document.createElement('img');
image_2.id = 'flag';
image_2.src = 'win.gif';
//box.appendChild(image_2);

let mark_1 = document.createElement('img');
mark_1.id = 'mark1';
mark_1.className = 'marks';
box.appendChild(mark_1);

let mark_2 = document.createElement('img');
mark_2.id = 'mark2';
mark_2.className = 'marks';
box.appendChild(mark_2);

let mark_3 = document.createElement('img');
mark_3.id = 'mark3';
mark_3.className = 'marks';
box.appendChild(mark_3);

let mark_4 = document.createElement('img');
mark_4.id = 'mark4';
mark_4.className = 'marks';
box.appendChild(mark_4);

let mark_5 = document.createElement('img');
mark_5.id = 'mark5';
mark_5.className = 'marks';
box.appendChild(mark_5);

let mark_6 = document.createElement('img');
mark_6.id = 'mark6';
mark_6.className = 'marks';
box.appendChild(mark_6);

let mark_7 = document.createElement('img');
mark_7.id = 'mark7';
mark_7.className = 'marks';
box.appendChild(mark_7);

let climber = document.createElement('img');
climber.src = 'climber.png';
climber.id = 'climb';
box.appendChild(climber);

let step = 0;

document.addEventListener('keydown', function(event) {

  let x = [87, 82, 79, 74, 68, 62, 55];
  let y = [84, 68, 54, 36, 36, 27, 6];

  if (event.key === 'x' || event.key === 'X') {
    if (step < 6) {
      step +=1;
      climber.style.right = `${x[step]}%`;
      climber.style.top = `${y[step]}%`;

      console.log(climber.style.right);
      console.log(climber.style.top);
    } else if (step == 6) {
      box.appendChild(image_2);
      alert('Ура!!!');
    }

  }else if (event.key === 'z' || event.key == 'Z') {
    if (step >= 0) {
      step -=1;
      climber.style.right = `${x[step]}%`;
      climber.style.top = `${y[step]}%`;

      console.log(climber.style.right);
      console.log(climber.style.top);
    }
  }
});
