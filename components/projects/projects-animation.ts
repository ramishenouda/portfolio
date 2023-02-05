import gsap from 'gsap';

export const projectAnimations = () => {
  const enterScreen = 'restart';
  const forwardPastTheEndPoint = 'resume';
  const backToTheEndPoint = 'none';
  const whenScrollBackToStart = 'reverse';

  gsap.to('projects-section-title', {
    scrollTrigger: {
      trigger: '#projects-section-title',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-200px 50%',
      toggleClass: { className: 'start-basic-animation', targets: '#projects-section-title' },
      onLeave: () => {
        document.getElementById('projects-section-title')?.classList.toggle('start-basic-animation');
      },
    },
  });

  gsap.to('projects-section', {
    scrollTrigger: {
      trigger: '#projects-section-title',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-200px 50%',
      toggleClass: { className: 'start-basic-animation', targets: '#projects-section' },
      onLeave: () => {
        document.getElementById('projects-section')?.classList.toggle('start-basic-animation');
      },
    },
  });
};
