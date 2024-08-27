
	mapboxgl.accessToken = mapToken;



    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: listing.geometry.coordinates,
        zoom: 9 // starting zoom
    });

        const marker1 = new mapboxgl.Marker({color: "red"})
        .setLngLat(listing.geometry.coordinates)  //Listing.geometry.coordinates
        .setPopup(
            new mapboxgl.Popup({ offset: 25 })
                .setHTML(
            `<h4>${listing.title}</h4> <p>Exact Location Provided</p>`
            )
        )
        .addTo(map);