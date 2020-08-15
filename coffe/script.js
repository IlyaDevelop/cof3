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