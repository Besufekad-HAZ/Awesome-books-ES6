const linksPage = document.querySelectorAll('nav > a');

const currentActivelink = (selectedLink) => {
  linksPage.forEach((openLink) => {
    openLink.style.background = 'none';
    openLink.style.color = 'none';
  });
  linksPage[selectedLink].style.background = 'white';
  linksPage[selectedLink].style.color = 'black';
};

const adjustLinks = () => {
  linksPage.forEach((openLink, value) => {
    openLink.addEventListener('click', () => {
      currentActivelink(value);
    });
  });
};

export { currentActivelink, adjustLinks };
