let places = [
  {name:"ariana",     position:{lat:36.866111, long:10.168639}},
  {name:"béja",       position:{lat:36.729500, long:9.190950}},
  {name:"ben-arous",  position:{lat:36.749851, long:10.235764}},
  {name:"bizerte",    position:{lat:37.283385, long:9.860990}},
  {name:"gabès",      position:{lat:33.889633, long:10.101371}},
  {name:"gafsa",      position:{lat:34.430137, long:8.779670}},
  {name:"jendouba",   position:{lat:36.503216, long:8.777432}},
  {name:"kairouan",   position:{lat:35.677433, long:10.099470}},
  {name:"kasserine",  position:{lat:35.170811, long:8.835412}},
  {name:"kébili",     position:{lat:33.704952, long:8.971195}},
  {name:"le-kef",     position:{lat:36.171562, long:8.704727}},
  {name:"mahdia",     position:{lat:35.505289, long:11.047079}},
  {name:"la-manouba", position:{lat:36.808438, long:10.083754}},
  {name:"médenine",   position:{lat:33.345114, long:10.493660}},
  {name:"monastir",   position:{lat:35.762897, long:10.817483}},
  {name:"nabeul",     position:{lat:36.451692, long:10.722895}},
  {name:"sfax",       position:{lat:34.740753, long:10.749559}},
  {name:"sidi-bouzid",position:{lat:35.037369, long:9.485793}},
  {name:"siliana",    position:{lat:36.079524, long:9.297831}},
  {name:"sousse",     position:{lat:35.828737, long:10.632647}},
  {name:"tataouine",  position:{lat:32.926300, long:10.448858}},
  {name:"tozeur",     position:{lat:33.925508, long:8.119843}},
  {name:"tunis",      position:{lat:36.797840, long:10.178993}},
  {name:"zaghouan",   position:{lat:36.407560, long:10.141831}}
]

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(36.8189700,10.1657900),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var myLatLng = {lat: 36.866111, lng: 10.168639};

    var infowindow = new google.maps.InfoWindow();
    var marker, i;

    for (i = 0; i < places.length; i++) {  
        marker = new google.maps.Marker({
        position: new google.maps.LatLng(places[i]['position']['lat'], places[i]['position']['long']),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(`<section class="directory-map-marker degree-">
          <div class="content-left">
              <div class="avatar-container">
                  <img class="avatar" alt="Alix Klingenberg" src="https://www.womentechmakers.com/static/images/directory/avatars/teodora-oficial.png">
              </div>
              <div class="ng-isolate-scope" track-category="Directory - infowindow" social="item.data">
                  <ul class="shares horizontal-list">
                      <li class="ng-scope" data-ng-if="social.linkedin">
                          <a class="dir-share dir-share-linkedin image-for-text ng-binding" href="https://www.linkedin.com/in/alixjklingenberg" target="_blank" rel="noopener" data-track-label="Alix Klingenberg" data-track-action="Click: share linkedIn" data-track-category="Directory - infowindow" data-ng-href="https://www.linkedin.com/in/alixjklingenberg">${places[i]['name']}</a>
                      </li>
                      <li class="ng-scope" data-ng-if="social.twitter">
                          <a class="dir-share dir-share-twitter image-for-text ng-binding" href="https://twitter.com/evolutionised" target="_blank" rel="noopener" data-track-label="Alix Klingenberg" data-track-action="Click: share Twitter" data-track-category="Directory - infowindow" data-track="" data-ng-href="https://twitter.com/evolutionised">Share Alix Klingenberg's profile on Twitter</a>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="content-right-top">
              <h3 class="ng-binding" data-ng-bind="::item.data.title || item.data.name">Alix Klingenberg</h3>
              <h4 class="ng-binding">GDG Auckland</h4>
              <button aria-label="Open profile lightbox for Alix Klingenberg" type="button" data-track-label="Alix Klingenberg" data-track-action="Click: open lightbox" data-track-category="Directory - infowindow" data-track="" data-ng-click="::profiles.showLightbox(item.data.slug)" value="View profile">View profile</button>
          </div>
          <div class="content-right-bottom degree-">
              <ul class="skills-tech-list horizontal-list">
                  <li class="ng-binding ng-scope" data-ng-repeat="tech in ::item.data.technologies">C#
                      <span data-ng-hide="$last &amp;&amp; item.data.skills.length === 0">,&nbsp;</span>
                  </li>
                  <li class="ng-binding ng-scope" data-ng-repeat="tech in ::item.data.technologies">Android
                      <span data-ng-hide="$last &amp;&amp; item.data.skills.length === 0">,&nbsp;</span>
                  </li>
                  <li class="ng-binding ng-scope" data-ng-repeat="skill in ::item.data.skills">Developer
                      <span class="ng-hide" data-ng-hide="$last">,&nbsp;</span>
                  </li>
              </ul>
          </div>
      </section>`);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}

function filter(){
  let technologies = document.getElementsByName("technologies");
  console.log('technologies', technologies[0].checked);

  let places = document.getElementsByName("places");
  console.log('places', places[0].checked);

  let gender = document.getElementsByName("gender");
  console.log('gender', gender[0].checked);


}

function load(){
/** login/signup */
const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

const connect = document.getElementById("connect")
    connect.addEventListener('click',(e)=>{let login=document.getElementById("form-structor") 
    login.style.display=="block" ? login.style.display="none":login.style.display="block"
    })
}