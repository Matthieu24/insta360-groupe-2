var field = true;
// const panorama = new PANOLENS.ImagePanorama('img/av-deck.jpg');
const otherpic3 = new PANOLENS.ImagePanorama('img/av-toilette.jpg');
const viewer = new PANOLENS.Viewer({ output: 'console' });
viewer.add(panorama);
viewer.render.sortObjects = true;

const theta = Math.PI / 1; // hauteur -pi/2 à pi/2
const phi = Math.PI - 1.6; // placement sur le cercle à plat - pi à pi
var rayon = panorama.radius;
console.log("Rayon : " + rayon);
var position = new THREE.Vector3(
    rayon * Math.cos(theta) * Math.sin(phi), // Attention Y sphère
    rayon * Math.sin(theta), // Attention Z de la sphère
    rayon * Math.cos(theta) * Math.cos(phi) // Attention X de la sphère
);


var taille = 300;
//image 2
var infospot = new PANOLENS.Infospot(taille * position.length() / rayon, PANOLENS.DataImage.Info);
infospot.position.copy(position);
//        infospot.addHoverText( 'Infospot1');
infospot.addEventListener('click', onFocus);
panorama.add(infospot);

var otherinfo = new PANOLENS.Infospot(taille * position.length() / rayon, PANOLENS.DataImage.Info);
otherinfo.position.copy(position);
//        otherinfo.addHoverText( 'Infospot1');
otherinfo.addEventListener('click', onFocus);
otherpic3.add(otherinfo);


/////////////////////////////////

///////////////////////////////
function onFocus() {
    console.log("Clic sur Infospot");
    if (field) {
        viewer.remove(panorama);
        viewer.add(otherpic3);
        viewer.setPanorama(otherpic3);
    } else {
        viewer.remove(otherpic3);
        viewer.add(panorama);
        viewer.setPanorama(panorama);
    }
    field = !field;
}
