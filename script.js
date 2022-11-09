
/*
function initMap() {
    new google.maps.Map(document.getElementById("map"), {
      mapId: "9fc72f753f4fe0ff",
      center: { lat: 34.66548242537467, lng: 135.4302775674555 },
      zoom: 18,
      mapTypeControl: false,
      fullscreenControl:false,
      streetViewControl:false
    });
/*
    new google.maps.Marker({
        position: { lat: 34.66461549461318, lng: 135.4353585347102 },
        map: map,
        title: "Yoshi\'s house",
        icon: {
            url: "yoshi_house.svg",
            scaledSize: new google.maps.Size(38, 31)
        }
      });
      */
/*
      const markers = [
        [
            "Yoshi'\s House",
            34.66793507394518,
            135.43014347466126,
            "./images/yoshi_house.svg",
            38,
            31
        ],
        [
			'You Are Here',
			34.66767112713121,
			135.4297887322531,
			'./images/pointer.svg',
			30,
			47.8,
		],
		[
			'Ghost House',
			34.66832715150856,
			135.43292762674864,
			'./images/ghosthouse.svg',
			40,
			48,
		],
		['Castle', 34.66775608022106, 135.43139547897843, './images/castle.svg', 40, 53],
		['Warp Pipe', 34.66739738878135, 135.43225049775214, './images/pipe.svg', 38, 42.5],
		['Star World', 34.667959023359266, 135.42866400953733, './images/star.svg', 38, 38],
		[
			'Donut Plains',
			34.66830355359945,
			135.4320565322381,
			'./images/hill_with_eyes.svg',
			50,
			60.7,
		],
		[
			'Donut Plains',
			34.66829411443392,
			135.43231361996433,
			'./images/hill_with_eyes.svg',
			50,
			60.7,
		],
		[
			'Donut Plains',
			34.6683781779677,
			135.43217016043528,
			'./images/hill_with_eyes.svg',
			50,
			60.7,
		],
    ]

    for(let i = 0; i < markers.length; i++) {
        const currentMarker = markers[i]

        const marker = new google.maps.Marker({
            position: { lat: currentMarker[1], lng: currentMarker[2]},
            map,
            title: currentMarker[0],
            icon: {
                url : currentMarker[3],
                scaledSize : new google.maps.Size(currentMarker[4], currentMarker[5])
            },
            animation: google.maps.Animation.DROP
        });
        const infowindow = new google.maps.InfoWindow({
            content: currentMarker[0],
        });
        marker.addListener('click', () => {
            infowindow.open(map, marker)
        })
    }


      // 34.665974697834145, 135.4333051139354
      // 34.66461549461318, 135.4353585347102
  }

  

  
  window.initMap = initMap;
*/
  // 34.66548242537467, 135.4302775674555

  function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.66777691421453, lng: 135.43060100165303},
        zoom: 18,
        mapId: '9fc72f753f4fe0ff',
        mapTypeControl: false,
        fullscreenControl:false,
        streetViewControl:false
    });

    const markers = [
        [
            "Yoshi'\s House",
            34.66793507394518,
            135.43014347466126,
            "./yoshi_house.svg",
            38,
            31
        ],
        [
			'You Are Here',
			34.66767112713121,
			135.4297887322531,
			'./pointer.svg',
			30,
			47.8,
		],
		[
			'Ghost House',
			34.66832715150856,
			135.43292762674864,
			'./ghosthouse.svg',
			40,
			48,
		],
		['Castle', 34.66775608022106, 135.43139547897843, './castle.svg', 40, 53],
		['Warp Pipe', 34.66739738878135, 135.43225049775214, './pipe.svg', 38, 42.5],
		['Star World', 34.667959023359266, 135.42866400953733, './star.svg', 38, 38],
		[
			'Donut Plains',
			34.66830355359945,
			135.4320565322381,
			'./hill_with_eyes.svg',
			50,
			60.7,
		],
		[
			'Donut Plains',
			34.66829411443392,
			135.43231361996433,
			'./hill_with_eyes.svg',
			50,
			60.7,
		],
		[
			'Donut Plains',
			34.6683781779677,
			135.43217016043528,
			'./hill_with_eyes.svg',
			50,
			60.7,
		],
    ]

    for(let i = 0; i < markers.length; i++) {
        const currentMarker = markers[i]

        const marker = new google.maps.Marker({
            position: { lat: currentMarker[1], lng: currentMarker[2]},
            map,
            title: currentMarker[0],
            icon: {
                url : currentMarker[3],
                scaledSize : new google.maps.Size(currentMarker[4], currentMarker[5])
            },
            animation: google.maps.Animation.DROP
        });
        const infowindow = new google.maps.InfoWindow({
            content: currentMarker[0],
        });
        marker.addListener('click', () => {
            infowindow.open(map, marker)
        })
    }

   
    //34.66793507394518, 135.43014347466126
}

//34.66777691421453, 135.43060100165303
