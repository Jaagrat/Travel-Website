import React from 'react'
import './Gmap.css';
import mapboxgl from 'mapbox-gl';
// import MapboxDirections from '@mapbox/mapbox-gl-directions'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

function Gmap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamFhZ3JhdCIsImEiOiJja2l1MzN6NW4wNjB1MnptZWwzMHl0cjF3In0.JSvxjiS2dpy7qoKqRHwDlA';

    navigator.geolocation.getCurrentPosition(successLocation,
        errorLocation, {
            enableHighAccuracy: true
        })

    function successLocation(position){
        console.log(position)
        setupMap([position.coords.longitude,position.coords.latitude])
    }

    function errorLocation(){
        setupMap([-2.24,53.48])
    }

    function setupMap(center){
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: center,
            zoom: 17
        });

        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav)

        var directions =  new MapboxDirections({
            accessToken: mapboxgl.accessToken
        });


        map.addControl(directions, 'top-left')
    }


    return (
        <div>
            <div id='map'>In google map page</div>
        </div>
    )
}

export default Gmap
