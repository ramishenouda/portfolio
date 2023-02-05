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
      start: '-300px 50%',
      toggleClass: { className: 'start-basic-animation', targets: '#projects-section-title' },
      onLeave: () => {
        document.getElementById('projects-section-title')?.classList.toggle('start-basic-animation');
      },
    },
  });

  gsap.to('foodeli-project', {
    scrollTrigger: {
      trigger: '#foodeli-project',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-300px 50%',
      toggleClass: { className: 'start-basic-animation', targets: '#foodeli-project' },
      onLeave: () => {
        document.getElementById('foodeli-project')?.classList.toggle('start-basic-animation');
      },
    },
  });

  gsap.to('pops-project', {
    scrollTrigger: {
      trigger: '#pops-project',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-300px 50%',
      toggleClass: { className: 'start-basic-animation', targets: '#pops-project' },
      onLeave: () => {
        document.getElementById('pops-project')?.classList.toggle('start-basic-animation');
      },
    },
  });

  gsap.to('aow-project', {
    scrollTrigger: {
      trigger: '#aow-project',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-400px 50%',
      toggleClass: { className: 'start-basic-animation', targets: '#aow-project' },
      onLeave: () => {
        document.getElementById('aow-project')?.classList.toggle('start-basic-animation');
      },
    },
  });
};
