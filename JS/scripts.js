// Global Event Listener

document.addEventListener('click', (e) => {
    if (e.target.id === 'hamburger-icon') {
        handleMobileMenuClick(e.target.id)
    }
    if (e.target.id === 'view-more') {
        showAllPosts(e.target.id)
    }
})

// Handle hamburger menu click on mobile devices

function handleMobileMenuClick(elementId) {
    const mobileMenuButton = document.getElementById(elementId)
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenuButton.classList.toggle('rotated')
    mobileMenu.classList.toggle('hidden')
}

// Show all blog posts on click

function showAllPosts(elementId) {
    const extraPosts = document.querySelectorAll('.extra-post')
    extraPosts.forEach(element => element.classList.remove('hidden'))
    document.getElementById(elementId).classList.add('hidden')

}
