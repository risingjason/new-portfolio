// opens the link given on a new tab
const openLink = (link) => { window.open(link, '_blank'); };

// combines an array of strings with <br> to serperate them
const createBreak = text => text.join('<br />');

const methods = {
  openLink,
  createBreak,
};

export default methods;
