function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(36.8189700,10.1657900),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
let places = [
    {name:"ariana",     lat:36.866111, long:10.168639},
    {name:"béja",       lat:36.729500, long:9.190950},
    {name:"ben-arous",  lat:36.749851, long:10.235764},
    {name:"bizerte",    lat:37.283385, long:9.860990},
    {name:"gabès",      lat:33.889633, long:10.101371},
    {name:"gafsa",      lat:34.430137, long:8.779670},
    {name:"jendouba",   lat:36.503216, long:8.777432},
    {name:"kairouan",   lat:35.677433, long:10.099470},
    {name:"kasserine",  lat:35.170811, long:8.835412},
    {name:"kébili",     lat:33.704952, long:8.971195},
    {name:"le-kef",     lat:36.171562, long:8.704727},
    {name:"mahdia",     lat:35.505289, long:11.047079},
    {name:"la-manouba", lat:36.808438, long:10.083754},
    {name:"médenine",   lat:33.345114, long:10.493660},
    {name:"monastir",   lat:35.762897, long:10.817483},
    {name:"nabeul",     lat:36.451692, long:10.722895},
    {name:"sfax",       lat:34.740753, long:10.749559},
    {name:"sidi-bouzid",lat:35.037369, long:9.485793},
    {name:"siliana",    lat:36.079524, long:9.297831},
    {name:"sousse",     lat:35.828737, long:10.632647},
    {name:"tataouine",  lat:32.926300, long:10.448858},
    {name:"tozeur",     lat:33.925508, long:8.119843},
    {name:"tunis",      lat:36.797840, long:10.178993},
    {name:"zaghouan",   lat:36.407560, long:10.141831}
]
