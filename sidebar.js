document.querySelector('.sidebar-toggle').onclick = () => {
    document.querySelector('.sidebar').classList.toggle('collapsed');
    document.querySelector('main').classList.toggle('expanded');
};
