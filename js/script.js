
window.onclick = function(event) {
if (!event.target.matches('.dropdown-toggle')) {
    let dropdowns = document.getElementsByClassName("dropdown");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let dropdowns = document.querySelectorAll('.dropdown-toggle');

for(let dropdown of dropdowns) {
    dropdown.onclick = () => dropdown.parentElement.classList.toggle("show");
}