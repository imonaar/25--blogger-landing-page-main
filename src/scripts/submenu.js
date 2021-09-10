const menuItems = Array.from(document.querySelectorAll('li.js-has-submenu'));

// console.log(menuItems)
// let timer;
// menuItems.forEach((item, index)=>{
//   item.addEventListener('mouseover',(event)=>{
//     console.log('in')
//     document.querySelector('.submenu').className = '.submenu .open'
//     clearTimeout(timer)
//   })

//   item.addEventListener('mouseout', (event)=>{
//     timer = setTimeout((event) => {
//       item.querySelector('.submenu.open').className = ('.submenu')
//     }, 1000);
//   })
// })