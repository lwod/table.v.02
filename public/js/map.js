function initMap(){
	
	const options = {
		zoom:14,
		center: {
			lat: 41.5942397,
			lng: -87.343124,
		}
	}
	
	let map = new google.maps.Map(document.getElementById('map'), options)
	
	const caroline = new google.maps.Marker({
		map:map,
		icon: 'https://raw.githubusercontent.com/lwod/tableV01/main/ceroline.png'
	})
	caroline.setPosition(new google.maps.LatLng(41.60066294542978,-87.33857699777955))


	google.maps.event.addListener(map, 'click', (event)=>{
		caroline.setPosition(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()))
	})
}