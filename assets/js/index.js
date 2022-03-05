
// Show Search
const searchShow = () => {
    if(document.getElementById("search").style.display==="flex") {
        document.getElementById("search").style.display="none";
        document.getElementById("searchShow").style.display="block";
    } else {
        document.getElementById("search").style.display="flex";
        document.getElementById("searchShow").style.display="none";
    }
}



const btnToggle = document.querySelector('.btn_toggle');
const navCenter = document.querySelector('.nav-center');

btnToggle.addEventListener('click', () => {
    navCenter.classList.toggle('toggle');
});




