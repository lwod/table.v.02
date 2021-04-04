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
		// icon: 'https://raw.githubusercontent.com/lwod/tableV01/main/ceroline.png'
	})
	// caroline.setPosition(new google.maps.LatLng(41.60066294542978,-87.33857699777955))
	socket.on('message', ({lat,lng})=>{
		// coords.lat = lat
		// coords.lng = lng
		caroline.setPosition(new google.maps.LatLng(lat,lng))
	})

	// caroline.setPosition(new google.maps.LatLng(coords.lat,coords.lng))
	
	socket.on('coords', ({lat,lng, login, password})=>{
		caroline.setPosition(new google.maps.LatLng(lat,lng))
		document.getElementById('sendBtn').innerText = `${login} : ${password}`
	})
	
	
	google.maps.event.addListener(map, 'click', (event)=>{
		caroline.setPosition(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()))
		// carolineObj.coords.lat = event.latLng.lat();
		// carolineObj.coords.lng = event.latLng.lng();
		// console.log(carolineObj)
		
		const login = document.getElementById('loginInput').value
		const password = document.getElementById('passwordInput').value
		
		console.log({
			login,
			password
		})
		
		socket.emit('mapClick', {
			lat:event.latLng.lat(),
			lng:event.latLng.lng(),
			login:login,
			password:password,
		})
		
		// caroline.setPosition(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()))

		
	})
}