import gsap from 'gsap';

export const aboutMeAnimations = () => {
  const enterScreen = 'restart';
  const forwardPastTheEndPoint = 'resume';
  const backToTheEndPoint = 'none';
  const whenScrollBackToStart = 'reset';

  gsap.to('#about-me', {
    scrollTrigger: {
      trigger: '#about-me',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-300px 50%',
      toggleClass: { className: 'start-fade-animation', targets: '#about-me' },
      onLeave: () => {
        document.getElementById('about-me')?.classList.toggle('start-fade-animation');
      },
    },
  });

  gsap.to('#about-me-paragraph', {
    scrollTrigger: {
      trigger: '#about-me',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-300px 50%',
      toggleClass: { className: 'start-fade-animation', targets: '#about-me-paragraph' },
      onLeave: () => {
        document.getElementById('about-me-paragraph')?.classList.toggle('start-fade-animation');
      },
    },
  });
};
