import gsap from 'gsap';

export const testimonialsAnimations = () => {
  const enterScreen = 'restart';
  const forwardPastTheEndPoint = 'resume';
  const backToTheEndPoint = 'none';
  const whenScrollBackToStart = 'reverse';

  gsap.to('testimonials-section-title', {
    scrollTrigger: {
      trigger: '#testimonials-section-title',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-300px 50%',
      toggleClass: { className: 'start-basic-animation', targets: '#testimonials-section-title' },
      onLeave: () => {
        document.getElementById('testimonials-section-title')?.classList.toggle('start-basic-animation');
      },
    },
  });

  gsap.to('#feedback-text', {
    scrollTrigger: {
      trigger: '#testimonials-section-title',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-300px 50%',
      toggleClass: { className: 'start-basic-animation', targets: '#feedback-text' },
      onLeave: () => {
        document.getElementById('feedback-text')?.classList.toggle('start-basic-animation');
      },
    },
  });

  gsap.to('#testimonials-gallery', {
    scrollTrigger: {
      trigger: '#testimonials-section-title',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-300px 50%',
      toggleClass: { className: 'start-basic-animation', targets: '#testimonials-gallery' },
      onLeave: () => {
        document.getElementById('testimonials-gallery')?.classList.toggle('start-basic-animation');
      },
    },
  });
};
