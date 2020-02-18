const gridContainerHome = document.getElementById('grid-container');
const gridContainerAbout = document.getElementById('grid-container-2');
const navHome = document.getElementById('Home');
const navAbout = document.getElementById('About');
const locatedHereSection = document.getElementById('extraSection');
const locatedHereText = document.getElementById('extraTextSection');
const googleMapsScreen = document.getElementById('googleMaps');

locatedHereSection.addEventListener('click', () => {
	locatedHereText.style.display = 'none';
	googleMapsScreen.style.display = 'block';
	locatedHereSection.style.cursor = 'default';
});

navAbout.addEventListener('click', () => {
	gridContainerHome.style.display = 'none';
	gridContainerAbout.style.display = 'grid';
	gridContainerHome.style.opacity = '0';
	gridContainerAbout.style.opacity = '1';
});

navHome.addEventListener('click', () => {
	locatedHereText.style.display = 'flex';
	googleMapsScreen.style.display = 'none';
	locatedHereSection.style.cursor = 'pointer';
	gridContainerAbout.style.display = 'none';
	gridContainerHome.style.display = 'grid';
	gridContainerAbout.style.opacity = '0';
	gridContainerHome.style.opacity = '1';
});
