const slider = document.querySelector('.slider'),
      active = document.querySelector('#active'),
      link1 = document.querySelector('#line1'),
      link2 = document.querySelector('#line2'),
      link3 = document.querySelector('#line3'),
      link4 = document.querySelector('#line4'),
      container = document.querySelector('.container');
      
      link1.addEventListener('click', () => {
          slider.style.transform = 'translateX(0)'
          active.style.top = 0
          container.style.background = 'yellow'
      })
      link2.addEventListener('click', () => {
          slider.style.transform = 'translateX(-25%)'
          active.style.top = '95px'
          container.style.background = 'blue'
      })
      link3.addEventListener('click', () => {
          slider.style.transform = 'translateX(-50%)'
          active.style.top = '190px'
          container.style.background = 'green'
      })
      link4.addEventListener('click', () => {
          slider.style.transform = 'translateX(-75%)'
          active.style.top = '285px'
          container.style.background = 'red'
      })