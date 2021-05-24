var images=[
    "MrinankPandey.jpg", 
    "MitulBhaiya.jpg",
    "Mumma.jpeg",
    "AjayPapa.jpg",
    "Dadi.jpg",
    "BinodBaba.jpg",
    "Nani.jpeg",
    "NanaJi.jpeg",
]

var names=[
    "Mrinank Pandey (Me)",
    "Mitul Pandey (My Elder Brother)",
    "Meenakshi Pandey (My Mother)",
    "Ajay Kumar Pandey (My Father)",
    "Panna Devi (My Paternal Grandmother)",
    "Binod Pandey (My Paternal Grandfather)",
    "Hemlata Pathak (My Maternal Grandmother)",
    "Jagdish Kishore Pathak (My Maternal Grandfather)",
]

var i = 0;
function Update(){
    i++
    var number_of_family_members = 8;
    if (i > number_of_family_members) {
        
        i = 0;
    }

    var UpdatedImage = images[i];
    var UpdatedName = names[i];
    document.getElementById("FamilyImages").src = UpdatedImage;
    document.getElementById("FamilyNames").innerHTML = UpdatedName;
}