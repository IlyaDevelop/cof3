// const modal = (triggerSelector, modalSelector, wrapperSelector) => {
//     const btn = document.querySelectorAll(triggerSelector),
//           modal = document.querySelector(modalSelector),
//           wrapper = document.querySelector(wrapperSelector);

//     btn.forEach(item => {
//         item.addEventListener('click', (e) => {
//             if(e.target) {
//                 e.preventDefault();
//             }
//             modal.style.display = 'block';
//         });
//     });
// };

const modal = (triggerSelector, wrapperSelector, modalSelector) => {
    const btn = document.querySelectorAll(triggerSelector),
          wrapper = document.querySelector(wrapperSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector('.close');
    btn.forEach(item => {
        item.addEventListener('click', (e) => {
   
        if(e.target) {
            e.preventDefault();
        } 
        modal.style.display = 'block';
        wrapper.classList.add('modal-overlays');
        document.body.style.overflow = 'hidden';
        });
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        wrapper.classList.remove('modal-overlays');
        document.body.style.overflow = '';
        
    });
    wrapper.addEventListener('click', (e) => {
        if(e.target === wrapper){
            modal.style.display = 'none';
            wrapper.classList.remove('modal-overlays');
            document.body.style.overflow = '';
        }
    });
};
modal('.callback', '.modal-overlay', '.modal',);



// const btn = document.querySelectorAll('.callback'),
//       wrapper = document.querySelector('.modal-overlay'),
//       modal = document.querySelector('.modal');

// btn.addEventListener('click', () => {
//     modal.classList.add('modals')
// });


const burger = () => {
    const burgerMenu = document.querySelector('.burger'),
          menu1 = document.querySelector('.burger-menu'),
          menu2 = document.querySelector('.burger-menu1'),
          menu13 = document.querySelector('.burger-menu2'),
          menuList = document.querySelector('.list-active-burger');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('burger-close');
        menu1.classList.toggle('burger-menu-active'); 
        menu2.classList.toggle('burger-menu2-active'); 
        menu13.classList.toggle('burger-menu-active3');

        menu1.classList.toggle('burger-menu');
        menu2.classList.toggle('burger-menu1');
        menu13.classList.toggle('burger-menu2');
        menuList.classList.toggle('list-active-burger');

        menu13.style.display = 'none ';

        
    });
};

burger();
