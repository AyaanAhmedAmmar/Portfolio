document.getElementById('navbarToggle').addEventListener('click', function () {
  const icon = this.querySelector('i'); // Find the icon inside the button
  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars'); // Remove the hamburger icon
    icon.classList.add('fa-times'); // Add the cross icon
  } else {
    icon.classList.remove('fa-times'); // Remove the cross icon
    icon.classList.add('fa-bars'); // Add the hamburger icon
  }
});