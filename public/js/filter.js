document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll('.project-box');
    const filterClassic = document.getElementById('filterClassic');
    const filterCX = document.getElementById('filterCX');
    const searchBar = document.getElementById('searchBar');

    function filterProjects() {
        projects.forEach(project => {
            const title = project.querySelector('.project-title').textContent.toLowerCase();
            const isClassic = project.querySelector('.available') && project.querySelector('.available').textContent.includes('Classic');
            const isCX = project.querySelector('.available') && project.querySelector('.available').textContent.includes('CX / CX II');
            const searchTerm = searchBar.value.toLowerCase();

            let display = true;

            if (filterClassic.checked && !isClassic) display = false;
            if (filterCX.checked && !isCX) display = false;
            if (searchTerm && !title.includes(searchTerm)) display = false;

            project.style.display = display ? 'block' : 'none';
        });
    }

    filterClassic.addEventListener('change', filterProjects);
    filterCX.addEventListener('change', filterProjects);
    searchBar.addEventListener('input', filterProjects);
});
