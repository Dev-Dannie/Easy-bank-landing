const navBtn = document.getElementById('nav-icon')
const navItems = document.getElementById('navigate')
const closeBtn = document.getElementById('close-btn')


navBtn.addEventListener('click', () => {
    navItems.classList.toggle('display-nav')
    navBtn.style.display = 'none'
    closeBtn.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
        navItems.classList.remove('display-nav')
        navBtn.style.display = 'block'
        closeBtn.style.display = 'none'
})