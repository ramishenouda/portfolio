import gsap from 'gsap';

export const projectAnimations = () => {
  const enterScreen = 'restart';
  const forwardPastTheEndPoint = 'resume';
  const backToTheEndPoint = 'none';
  const whenScrollBackToStart = 'reverse';

  gsap.to('#projects-section-title', {
    scrollTrigger: {
      trigger: '#projects-section-title',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-500px 50%',
      toggleClass: { className: 'start-fade-animation', targets: '#projects-section-title' },
      onLeave: () => {
        document.getElementById('projects-section-title')?.classList.toggle('start-fade-animation');
      },
    },
  });

  gsap.to('#foodeli-project', {
    scrollTrigger: {
      trigger: '#foodeli-project',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-500px 50%',
      toggleClass: { className: 'start-fade-animation', targets: '#foodeli-project' },
      onLeave: () => {
        document.getElementById('foodeli-project')?.classList.toggle('start-fade-animation');
      },
    },
  });

  gsap.to('#pops-project', {
    scrollTrigger: {
      trigger: '#pops-project',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-500px 50%',
      toggleClass: { className: 'start-fade-animation', targets: '#pops-project' },
      onLeave: () => {
        document.getElementById('pops-project')?.classList.toggle('start-fade-animation');
      },
    },
  });

  gsap.to('#aow-project', {
    scrollTrigger: {
      trigger: '#aow-project',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-500px 50%',
      toggleClass: { className: 'start-fade-animation', targets: '#aow-project' },
      onLeave: () => {
        document.getElementById('aow-project')?.classList.toggle('start-fade-animation');
      },
    },
  });
};
