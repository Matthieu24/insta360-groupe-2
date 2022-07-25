var field = true;
const otherpic2 = new PANOLENS.ImagePanorama('img/escalier.jpg');

const theta = Math.PI / 1000; // hauteur -pi/2 à pi/2
const phi = Math.PI - 0.1; // placement sur le cercle à plat - pi à pi, 0 = derrière, pi et -pi devant
var rayon = panorama.radius;
console.log("Rayon : " + rayon);
var position = new THREE.Vector3(
    rayon * Math.cos(theta) * Math.sin(phi), // Attention Y sphère
    rayon * Math.sin(theta), // Attention Z de la sphère
    rayon * Math.cos(theta) * Math.cos(phi) // Attention X de la sphère
);

var taille = 300;
var infospot = new PANOLENS.Infospot(taille * position.length() / rayon, PANOLENS.DataImage.Info);
infospot.position.copy(position);

//infospot.addHoverText( 'Infospot1');
infospot.addEventListener('click', onFocus);
panorama.add(infospot);

var otherinfo = new PANOLENS.Infospot(taille * position.length() / rayon, PANOLENS.DataImage.Info);
otherinfo.position.copy(position);

//otherinfo.addHoverText( 'Infospot1');
otherinfo.addEventListener('click', onFocus);
otherpic2.add(otherinfo);

//autre image
var otherinfo = new PANOLENS.Infospot(taille * position.length() / rayon, PANOLENS.DataImage.Info);
otherinfo.position.copy(position);

/////////////////////////////////
viewer.add(panorama);
viewer.render.sortObjects = true;

function onFocus() {

    console.log("Clic sur Infospot");
    if (field) {
        viewer.remove(panorama);
        viewer.add(otherpic2);
        viewer.setPanorama(otherpic2);
    } else {
        viewer.remove(otherpic2);
        viewer.add(panorama);
        viewer.setPanorama(panorama);
    }

    field = !field;


}
