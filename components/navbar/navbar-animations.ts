import gsap from 'gsap';

export const navbarAnimations = () => {
  const enterScreen = 'restart';
  const forwardPastTheEndPoint = 'resume';
  const backToTheEndPoint = 'none';
  const whenScrollBackToStart = 'reset';

  gsap.to('#navbar', {
    scrollTrigger: {
      trigger: '#about-me',
      toggleActions: `${enterScreen} ${forwardPastTheEndPoint} ${backToTheEndPoint} ${whenScrollBackToStart}`,
      start: '100px 40%',
    },
    top: 0,
    duration: 0.5,
  });
};
