var field = true;
const panorama = new PANOLENS.ImagePanorama('img/av-deck.jpg');
const otherpic = new PANOLENS.ImagePanorama('img/deck.jpg');
const viewer = new PANOLENS.Viewer({ output: 'console' });

const theta2 = Math.PI / 1000; // hauteur -pi/2 à pi/2
const phi2 = Math.PI - 1.6; // placement sur le cercle à plat - pi à pi, 0 = derrière, pi et -pi devant
var rayon = panorama.radius;
console.log("Rayon : " + rayon);
var position = new THREE.Vector3(
    rayon * Math.cos(theta2) * Math.sin(phi2), // Attention Y sphère
    rayon * Math.sin(theta2), // Attention Z de la sphère
    rayon * Math.cos(theta2) * Math.cos(phi2) // Attention X de la sphère
);

var taille = 300;

var infospot = new PANOLENS.Infospot(taille * position.length() / rayon, PANOLENS.DataImage.Info);
infospot.position.copy(position);
//infospot.addHoverText( 'Infospot1');
infospot.addEventListener('click', onFocus);
panorama.add(infospot);
var otherinfo = new PANOLENS.Infospot(taille * position.length() / rayon, PANOLENS.DataImage.Info);
otherinfo.position.copy(position);  
//autre image
var otherinfo = new PANOLENS.Infospot(taille * position.length() / rayon, PANOLENS.DataImage.Info);
otherinfo.position.copy(position);
//otherinfo.addHoverText( 'Infospot1');
otherinfo.addEventListener('click', onFocus);
otherpic.add(otherinfo);
/////////////////////////////////
viewer.add(panorama);
viewer.render.sortObjects = true;

function onFocus() {

    console.log("Clic sur Infospot");
    if (field) {
        viewer.remove(panorama);
        viewer.add(otherpic);
        viewer.setPanorama(otherpic);

    } else {
        viewer.remove(otherpic);
        viewer.add(panorama);
        viewer.setPanorama(panorama);
    }

    field = !field;


}
