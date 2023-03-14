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
      start: '-300px 50%',
      toggleClass: { className: 'start-fade-animation', targets: '#expertise-title' },
      onLeave: () => {
        document.getElementById('expertise-title')?.classList.toggle('start-fade-animation');
      },
    },
  });

  gsap.to('#expertise-paragraph', {
    scrollTrigger: {
      trigger: '#expertise-title',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-300px 50%',
      toggleClass: { className: 'start-fade-animation', targets: '#expertise-paragraph' },
      onLeave: () => {
        document.getElementById('expertise-paragraph')?.classList.toggle('start-fade-animation');
      },
    },
  });

  gsap.to('#expert-cards', {
    scrollTrigger: {
      trigger: '#expertise-paragraph',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-300px 50%',
      toggleClass: { className: 'start-fade-animation', targets: '#expert-cards' },
      onLeave: () => {
        document.getElementById('expert-cards')?.classList.toggle('start-fade-animation');
      },
    },
  });

  gsap.to('#experienced-in-section', {
    scrollTrigger: {
      trigger: '#experienced-in-section',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-300px 50%',
      toggleClass: { className: 'start-fade-animation', targets: '#experienced-in-section' },
      onLeave: () => {
        document.getElementById('experienced-in-section')?.classList.toggle('start-fade-animation');
      },
    },
  });

  gsap.to('#experienced-in-techs', {
    scrollTrigger: {
      trigger: '#experienced-in-section',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-300px 50%',
      toggleClass: { className: 'start-fade-animation', targets: '#experienced-in-techs' },
      onLeave: () => {
        document.getElementById('experienced-in-techs')?.classList.toggle('start-fade-animation');
      },
    },
  });
};
