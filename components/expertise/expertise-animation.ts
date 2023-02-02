import gsap from 'gsap';

export const expertiseAnimations = () => {
  const enterScreen = 'restart';
  const forwardPastTheEndPoint = 'resume';
  const backToTheEndPoint = 'none';
  const whenScrollBackToStart = 'reset';

  gsap.to('#expertise-title', {
    scrollTrigger: {
      trigger: '#expertise-title',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-200px 40%',
      markers: true,
      toggleClass: { className: 'start-basic-animation', targets: '#expertise-title' },
    },
  });

  gsap.to('#expertise-paragraph', {
    scrollTrigger: {
      trigger: '#expertise-title',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-200px 40%',
      markers: true,
      toggleClass: { className: 'start-basic-animation', targets: '#expertise-paragraph' },
    },
  });
};
