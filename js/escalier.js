var field = true;

const theta = Math.PI / 1000; // hauteur -pi/2 à pi/2
const phi = Math.PI - 0.3; // placement sur le cercle à plat - pi à pi, 0 = derrière, pi et -pi devant
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
otherpic2.add(infospot);

var otherinfo = new PANOLENS.Infospot(taille * position.length() / rayon, PANOLENS.DataImage.Info);
otherinfo.position.copy(position);

//otherinfo.addHoverText( 'Infospot1');
otherinfo.addEventListener('click', onFocus);
panorama.add(otherinfo);

//autre image
var otherinfo = new PANOLENS.Infospot(taille * position.length() / rayon, PANOLENS.DataImage.Info);
otherinfo.position.copy(position);

/////////////////////////////////
viewer.add(otherpic2);
viewer.render.sortObjects = true;

function onFocus() {

    console.log("Clic sur Infospot");
    if (field) {
        viewer.remove(otherpic2);
        viewer.add(panorama);
        viewer.setPanorama(panorama);
    } else {
        viewer.remove(panorama);
        viewer.add(otherpic2);
        viewer.setPanorama(otherpic2);
    }

    field = !field;


}
