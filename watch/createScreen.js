function createScreen1() {
    const screen1 = document.createElement('div');
    screen1.classList.add('screen');
    screen1.id = "screen1";
    screen1.innerHTML = '<h1 id= "startWorkout" >Run</h1><h1 id= "selectWorkout" >Select</h1><div class = "line"></div>';  
    let content = screen1.outerHTML;
    sessionStorage.setItem(screen1.id, content);
};

function createScreen2() {
    const screen2 = document.createElement('div');
    screen2.classList.add('screen');
    screen2.id = "screen2";
    screen2.innerHTML = `<h1>works</h1>`;
  
    const myButton = document.createElement('input');
    myButton.type = 'button';
    myButton.value = 'Click me';
    myButton.id = "back";
    screen2.appendChild(myButton);
  
    let content = screen2.outerHTML;
    sessionStorage.setItem(screen2.id, content);
};