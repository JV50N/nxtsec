// auto edit date every year change for title and footer
let nxtsecDate = new Date();

document.title = `NxtSec // Jason Goncalves ${nxtsecDate.getFullYear()}`;
document.getElementById('footer-date').innerHTML = nxtsecDate.getFullYear();

//toggle darkmode / lightmode 
const nxtsecToggle = () => {
    let nxtsecBody = document.body;
    let nxtsecNav = document.getElementsByTagName('nav');
    // nxtsecBody.classList.toggle('lightmode');
    nxtsecNav.classList.toggle('lightmode'); 
}