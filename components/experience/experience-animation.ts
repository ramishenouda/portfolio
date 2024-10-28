import gsap from 'gsap';

export const experienceAnimations = () => {
  const enterScreen = 'restart';
  const forwardPastTheEndPoint = 'resume';
  const backToTheEndPoint = 'none';
  const whenScrollBackToStart = 'reverse';

  gsap.to('#experience-title', {
    scrollTrigger: {
      trigger: '#experience-title',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-300px 50%',
      toggleClass: { className: 'start-fade-animation', targets: '#experience-title' },
      onLeave: () => {
        document.getElementById('experience-title')?.classList.toggle('start-fade-animation');
      },
    },
  });

  gsap.to('.company-experience', {
    scrollTrigger: {
      trigger: '#experience-title',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '-300px 50%',
      toggleClass: { className: 'start-fade-animation', targets: '.company-experience' },
      onLeave: () => {
        const companyExperiences = document.getElementsByClassName('company-experience');
        if (!companyExperiences) {
          return;
        }

        for (let i = 0; i < companyExperiences.length; i++) {
          const experience = companyExperiences[i];
          experience.classList.toggle('start-fade-animation');
        }
      },
    },
  });
};
