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
      start: '-200px 40%',
      markers: true,
      toggleClass: { className: 'start-basic-animation', targets: '#expertise-title' },
      onLeave: (self) => {
        self.trigger?.classList.toggle('start-basic-animation');
      },
    },
  });

  gsap.to('#expertise-paragraph', {
    scrollTrigger: {
      trigger: '#expertise-paragraph',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-200px 40%',
      markers: true,
      toggleClass: { className: 'start-basic-animation', targets: '#expertise-paragraph' },
      onLeave: (self) => {
        self.trigger?.classList.add('start-basic-animation');
      },
    },
  });

  gsap.to('#expertise-paragraph', {
    scrollTrigger: {
      trigger: '#expert-cards',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-280px 40%',
      markers: true,
      toggleClass: { className: 'start-basic-animation', targets: '#expert-cards' },
      onLeave: (self) => {
        self.trigger?.classList.add('start-basic-animation');
      },
    },
  });
};
