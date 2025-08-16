document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('maternity-category');
  const content = document.querySelector('.maternity-content');
  const messages = {
    clothing: 'Explore comfortable maternity wear tailored for every stage of pregnancy.',
    nutrition: 'Find essential nutrition products to keep you and your baby healthy.',
    care: 'Discover personal care items designed for expecting and new moms.'
  };

  select.addEventListener('change', () => {
    const value = select.value;
    content.textContent = messages[value];
  });
});
