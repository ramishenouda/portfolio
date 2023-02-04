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
      start: '-200px 50%',
      toggleClass: { className: 'start-basic-animation', targets: '#about-me' },
      onLeave: () => {
        document.getElementById('about-me')?.classList.toggle('start-basic-animation');
      },
    },
  });

  gsap.to('#about-me-paragraph', {
    scrollTrigger: {
      trigger: '#about-me',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-200px 50%',
      toggleClass: { className: 'start-basic-animation', targets: '#about-me-paragraph' },
      onLeave: () => {
        document.getElementById('about-me-paragraph')?.classList.toggle('start-basic-animation');
      },
    },
  });
};
