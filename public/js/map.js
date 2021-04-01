function initMap(){
	
	const options = {
		zoom:14,
		center: {
			lat: 41.5942397,
			lng: -87.343124,
		}
	}
	
	let map = new google.maps.Map(document.getElementById('map'), options)
}