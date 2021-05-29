// let input = document.getElementById('seacher');
// let wrapperKey = document.querySelector('wrapper_key');
// input.addEventListener('click', () => {
//     wrapperKey.style.display = 'flex';
//     wrapperKey.classList.toggle('active');
// })

// let key = document.querySelectorAll('.key');
// let display = document.querySelector('.display');
// let keyBoard = document.querySelector('.keyBoard');
// let volume = document.querySelector('.volume');
// let flagVolume = false;
// let keyBoardActive = false;
// let caps = false;
// let shift = false;
// // 
// key.forEach(elenemt => elenemt.addEventListener('click', function(){
//     let letter = elenemt.textContent;
//     let audio = document.querySelector('audio[data-audio]');
//     if(flagVolume == false){
//         audio.currentTime = "0";
//         audio.play();
//     }
    
//     // display.focus();
//         switch (letter){
//         case "Spase":
//             display.innerHTML += " ";
//         break;
//         case "Enter":
//             display.innerHTML += "<br>";
//         break;
//         case "Back space":
//             display.innerHTML = display.innerHTML.substr(0,display.innerHTML.length -1);
//         break;
//         case "Caps Lock":
//             if(caps == false){
//                 caps = true;
//                 elenemt.classList.add('active');
//                 keyBoard.style.textTransform = "uppercase";
//             }else{
//                 caps = false;
//                 elenemt.classList.remove('active');
//                 keyBoard.style.textTransform = "lowercase";
//             }
//         break;
//         case "Shift":
//             if(shift == false){
//                 shift = true;
//                 elenemt.classList.add('active');
//                 shiftFunc();
//             }else{
//                 shift = false;
//                 elenemt.classList.remove('active');
//                 shiftFunc();
//             }                
//         break;
//         case "volume":
//             if(flagVolume == false){
//                 flagVolume = true;
//                 volume.style.backgroundColor = "red";
//             }else{
//                 flagVolume = false;
//                 volume.style.backgroundColor = "rgba(29, 107, 52, 0.466)";
//             }                
//         break;
//         case "Off":
//             display.innerHTML = '"Click"';
//             keyBoard.style.bottom = "-500px";
//             keyBoard.style.opacity = "0";
//             keyBoardActive = false;
//         break;

//         default:
//             if(caps == true && shift == false){
//                 let upperCase = letter.toUpperCase();
//                 keyBoard.style.textTransform = "uppercase";
//                 display.innerHTML += upperCase;
//             }else if(shift == true && caps == true){
//                 let upShift = letter.toLocaleLowerCase();
//                 keyBoard.style.textTransform = "uppercase";
//                 display.innerHTML += upShift;
//                 shift = false;
//                 key.forEach(elem => {
//                     if(elem.textContent == "Shift"){elem.classList.remove("active")}});
//                 shiftFunc();
//             }else if(shift == true && caps == false){
//                 let upShift = letter.toLocaleUpperCase();
//                 display.innerHTML += upShift;
//                 shift = false;
//                 key.forEach(elem => {
//                     if(elem.textContent == "Shift"){elem.classList.remove("active")}});
//                 shiftFunc();
//             }else{
//                 display.innerHTML += letter;
//             }
//         break;
//         }
// }));
// // 
// function shiftFunc(){
//     if(shift == true){
//     keyBoard.style.textTransform = "uppercase";
//     key.forEach(elemShift =>{
//         switch(elemShift.textContent){
//             case "1":
//                 elemShift.textContent = '!'
//             break;
//             case "2":
//                 elemShift.textContent = '@'
//             break;
//             case "3":
//                 elemShift.textContent = '#'
//             break;
//             case "4":
//                 elemShift.textContent = '$'
//             break;
//             case "5":
//                 elemShift.textContent = '%'
//             break;
//             case "6":
//                 elemShift.textContent = '^'
//             break;
//             case "7":
//                 elemShift.textContent = '&'
//             break;
//             case "8":
//                 elemShift.textContent = '*'
//             break;
//             case "9":
//                 elemShift.textContent = '('
//             break;
//             case "0":
//                 elemShift.textContent = ")"
//             break;
//         }
//     })
//     }else{
//         keyBoard.style.textTransform = "lowercase";
//         key.forEach(elemShift =>{
//             switch(elemShift.textContent){
//                 case '!':
//                     elemShift.textContent = '1';
//                 break;
//                 case '@':
//                     elemShift.textContent = '2';
//                 break;
//                 case '#':
//                     elemShift.textContent = '3';
//                 break;
//                 case '$':
//                     elemShift.textContent = '4';
//                 break;
//                 case '%':
//                     elemShift.textContent = '5';
//                 break;
//                 case '^':
//                     elemShift.textContent = '6';
//                 break;
//                 case '&':
//                     elemShift.textContent = '7';
//                 break;
//                 case '*':
//                     elemShift.textContent = '8';
//                 break;
//                 case '(':
//                     elemShift.textContent = '9';
//                 break;
//                 case ")":
//                     elemShift.textContent = '0';
//                 break;
//             }
//         })
//     }
// };
// // Update) connection keyboard / maybe sometimes i will be updated this code / sorry im study

// window.addEventListener("keypress", (event)=>{
//     if(keyBoardActive == true){
//         let audio = document.querySelector('audio[data-audio]');
//         let keyDate = document.querySelector(`div[data-key = "${event.which}"]`);
//         if(keyDate !== null && event.which !== 32){
//             keyDate.classList.add("activeJs");
//             display.innerHTML += keyDate.textContent;
//             setTimeout(()=>{
//                 keyDate.classList.remove("activeJs");
//             },100);
//         }else if(event.which == 32 ){
//             display.innerHTML += " ";
//         }else{
//             display.innerHTML += event.key;
//         }
//         if(flagVolume == false){
//             audio.currentTime = "0";
//             audio.play();
//         }
//     }else{
//         return false
//     }

// });

// display.addEventListener('click',()=>{
//     if(keyBoardActive == false){
//     display.innerHTML = "";
//     display.style.overflow = "hidden";
//     keyBoard.style.bottom = "5px";
//     keyBoard.style.opacity = "1";
//     keyBoardActive = true;
//     }else{
//         return false;
//     }
// })

// // window.addEventListener('keypress',(e)=>console.log(e));