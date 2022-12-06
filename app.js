// i am trying to collobrate with the team members


const container = document.getElementById('trigger_container')
const navTwo = document.getElementsByClassName('nav2')
const navTwoToShow = document.getElementsByClassName('hide')
console.log(navTwoToShow)
console.log(navTwo)
console.log(container)
window.addEventListener('scroll',function(e) {
      // const innerHeight = this.innerHeight;
      // console.log(innerHeight ,'window height')
      const containerBottom = container.getBoundingClientRect()
      // console.log(containerBottom.bottom ,'container bottom')
      if(containerBottom.bottom < 0){
        // this.alert('Hello ')
        //  if(navTwo.classList.contains('change_opacity'))return 'hello';
            //  navTwo[0].classList.add('hide_con')
            //  navTwoToShow[0].classList.add('show')
            navTwo[0].classList.add('change_opacity')
            return;

      }
      if(containerBottom.bottom > 0){
        // this.alert('Hello ')
        // if(!navTwo.classList.contains('change_opacity'))return 'hello';
            //  navTwo[0].classList.remove('hide_con')
            //  navTwoToShow[0].classList.remove('show')
            navTwo[0].classList.remove('change_opacity')
            return;
      }
})


var swiper = new Swiper(".swiper", {
    slidesPerView: 10,
    spaceBetween: 100,
    centeredSlides: true,
    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
    loop: true,
    // navigation: {
    //   nextEl: ".next_arr",
    //   prevEl: ".prev_arr",
    // },
  });


// some content from ronalde
