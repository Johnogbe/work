document.addEventListener('DOMContentLoaded', () => {
  // testimonials
  const testimonials = [
    {
      name: "Sandy Williams",
      role: "CEO, Business Co.",
      text: "Adipiscing elit vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.",
      img: "profile1.jpg"
    },
    {
      name: "John Doe",
      role: "Marketing Lead, Startup Inc.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae justo vitae sapien.",
      img: "expert.jpg"
    },
    {
      name: "Lena Adams",
      role: "Product Manager, TechSoft",
      text: "Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
      img: "image-13-300x300.jpg"
    }
  ];

  let currentIndex = 0;

  const profileImg = document.querySelector('.profile-img');
  const testimonialText = document.querySelector('.testimonial-text');
  const authorName = document.querySelector('.author h3');
  const authorRole = document.querySelector('.author p');
  const dots = document.querySelectorAll('.dot');

  function updateTestimonial(index) {
    const testimonial = testimonials[index];
    profileImg.src = testimonial.img;
    testimonialText.textContent = testimonial.text;
    authorName.textContent = testimonial.name;
    authorRole.textContent = testimonial.role;

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  document.querySelector('.btn_left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
  });

  document.querySelector('.btn_right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'));
      currentIndex = index;
      updateTestimonial(currentIndex);
    });
  });

  // Initialize
  updateTestimonial(currentIndex);

  // blogs
  const blogCards = document.getElementById('blogCards');

  // Duplicate the content for infinite scroll effect
  blogCards.innerHTML += blogCards.innerHTML;

  const totalScrollWidth = blogCards.scrollWidth / 2;

  blogCards.addEventListener('scroll', () => {
    if (blogCards.scrollLeft >= totalScrollWidth) {
      blogCards.scrollLeft = 0;
    }
  });

  // Initial small scroll to kick off snapping and avoid stuck edge
  blogCards.scrollLeft = 1;

  // scroll top
  const scrollBtn = document.querySelector('.scroll-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 230) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // numbers
  const numbers = document.querySelectorAll('.no');
  const counts = [98, 70, 10, 15]; // Final values
  const duration = 2000; // Duration in ms (2 seconds)

  const observerOptions = {
    root: null,
    threshold: 0.5
  };

  const numberUpdate = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        numbers.forEach((num, index) => {
          if (!num.classList.contains('updated')) {
            const target = counts[index];
            const startTime = performance.now();

            const animate = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const value = Math.floor(progress * target);

              num.textContent = value.toString().padStart(2, '0');

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                num.textContent = target.toString().padStart(2, '0');
                num.classList.add('updated');
              }
            };

            requestAnimationFrame(animate);
          }
        });

        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(numberUpdate, observerOptions);
  const numbersSection = document.querySelector('.numbers');
  observer.observe(numbersSection);
});

    authorRole.textContent = testimonial.role;

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  document.querySelector('.btn_left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
  });

  document.querySelector('.btn_right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'));
      currentIndex = index;
      updateTestimonial(currentIndex);
    });
  });

  // Initialize
  updateTestimonial(currentIndex);


// blogs
  const blogCards = document.getElementById('blogCards');

  // Duplicate the content for infinite scroll effect
  blogCards.innerHTML += blogCards.innerHTML;

  const totalScrollWidth = blogCards.scrollWidth / 2;

  blogCards.addEventListener('scroll', () => {
    if (blogCards.scrollLeft >= totalScrollWidth) {
      blogCards.scrollLeft = 0;
    }
  });

  // Initial small scroll to kick off snapping and avoid stuck edge
  blogCards.scrollLeft = 1;
// scroll top
const scrollBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 230) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
//
    

//numbers

    const numbers = document.querySelectorAll('.no');
    const counts = [98, 70, 10, 15]; // Final values
    const duration = 2000; // Duration in ms (2 seconds)

    const observerOptions = {
        root: null,
        threshold: 0.5
    };

    const numberUpdate = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                numbers.forEach((num, index) => {
                    if (!num.classList.contains('updated')) {
                        const target = counts[index];
                        const startTime = performance.now();

                        const animate = (currentTime) => {
                            const elapsed = currentTime - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            const value = Math.floor(progress * target);

                            num.textContent = value.toString().padStart(2, '0');

                            if (progress < 1) {
                                requestAnimationFrame(animate);
                            } else {
                                num.textContent = target.toString().padStart(2, '0');
                                num.classList.add('updated');
                            }
                        };

                        requestAnimationFrame(animate);
                    }
                });

                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(numberUpdate, observerOptions);
    const numbersSection = document.querySelector('.numbers');
    observer.observe(numbersSection);

