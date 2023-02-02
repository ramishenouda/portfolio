import gsap from 'gsap';

export const expertiseAnimations = () => {
  const enterScreen = 'restart';
  const forwardPastTheEndPoint = 'resume';
  const backToTheEndPoint = 'none';
  const whenScrollBackToStart = 'reverse';

  gsap.to('#expertise-title', {
    scrollTrigger: {
      trigger: '#expertise-title',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-200px 50%',
      markers: true,
      toggleClass: { className: 'start-basic-animation', targets: '#expertise-title' },
      onLeave: () => {
        document.getElementById('expertise-title')?.classList.toggle('start-basic-animation');
      },
    },
  });

  gsap.to('#expertise-paragraph', {
    scrollTrigger: {
      trigger: '#expertise-title',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-200px 50%',
      markers: true,
      toggleClass: { className: 'start-basic-animation', targets: '#expertise-paragraph' },
      onLeave: () => {
        document.getElementById('expertise-paragraph')?.classList.toggle('start-basic-animation');
      },
    },
  });

  gsap.to('#expertise-cards', {
    scrollTrigger: {
      trigger: '#expertise-paragraph',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-200px 50%',
      markers: true,
      toggleClass: { className: 'start-basic-animation', targets: '#expert-cards' },
      onLeave: () => {
        document.getElementById('expert-cards')?.classList.toggle('start-basic-animation');
      },
    },
  });
};
