import gsap from 'gsap';

export const testimonialsAnimations = () => {
  const enterScreen = 'restart';
  const forwardPastTheEndPoint = 'resume';
  const backToTheEndPoint = 'none';
  const whenScrollBackToStart = 'reverse';

  gsap.to('#testimonials-section-title', {
    scrollTrigger: {
      trigger: '#testimonials-section-title',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-450px 50%',
      toggleClass: { className: 'start-fade-animation', targets: '#testimonials-section-title' },
      onLeave: () => {
        document.getElementById('testimonials-section-title')?.classList.toggle('start-fade-animation');
      },
    },
  });

  gsap.to('#feedback-text', {
    scrollTrigger: {
      trigger: '#testimonials-section-title',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-450px 50%',
      toggleClass: { className: 'start-fade-animation', targets: '#feedback-text' },
      onLeave: () => {
        document.getElementById('feedback-text')?.classList.toggle('start-fade-animation');
      },
    },
  });

  gsap.to('#testimonials-gallery', {
    scrollTrigger: {
      trigger: '#testimonials-section-title',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-400px 50%',
      toggleClass: { className: 'start-fade-animation', targets: '#testimonials-gallery' },
      onLeave: () => {
        document.getElementById('testimonials-gallery')?.classList.toggle('start-fade-animation');
      },
    },
  });
};
