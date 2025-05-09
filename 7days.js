for (let i = 1; i <= 5; i++) {
  const location = document.querySelector('.location${i})');
  const description = document.querySelector('.locdescription${i}');
  let hideTimeout;

  location.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    description.style.visibility = 'visible';
    description.style.transform = 'translateY(25px)';
  });

  location.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      description.style.visibility = 'hidden';
      description.style.transform = 'translateY(0)';
    }, 4000); // 4 seconds
  });
}