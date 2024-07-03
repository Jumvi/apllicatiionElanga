import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React, { useState } from 'react'
import { render } from 'react-dom';
import { Marker } from 'react-leaflet';

const initialCenter = { lat: -4.325, lng: 15.322 };


const GoogleMaps = () => {

    const [selectedCity, setSelectedCity] = useState('');
    const [map,setMap] = useState(null); 
    const [autoComplete,setAutoComplete]=useState(initialCenter)   ;
    const cities = [
        { name: 'Kinshasa', lat: -4.325, lng: 15.322 },
        { name: 'Lubumbashi', lat: -11.660, lng: 27.479 },
        { name: 'Mbuji-Mayi', lat: -6.150, lng: 23.600 },
        { name: 'Kisangani', lat: 0.516, lng: 25.200 },
        { name: 'Bukavu', lat: -2.515, lng: 28.850 },
        { name: 'Goma', lat: -1.680, lng: 29.220 },
        { name: 'Kananga', lat: -5.896, lng: 22.418 },
        { name: 'Tshikapa', lat: -6.416, lng: 20.800 },
        { name: 'Kolwezi', lat: -10.716, lng: 25.472 },
        { name: 'Likasi', lat: -10.967, lng: 26.733 },
      ];

      const onLoad = (autoCompleteInstance)=>{
        setAutoComplete(autoCompleteInstance);
      }

      const onPlaceChanged = () => {
        if(autoComplete !== null){
            const place = autoComplete.getPlace();
            if(place.geometry){
                const location = place.geometry.location;
                setSelectedCity({ lat: location.lat(), lng: location.lng() });
            }
        }
      }
    
        return (
            <div>
                <LoadScript
                    googleMapsApiKey='AIzaSyAZcRIVFKmkIgrOf_dwKZfDHqhUAB-n2QM'>
                    <GoogleMap
                            mapContainerStyle={{ width: '100%', height: '400px' }}
                            center={{ lat: -4.325, lng: 15.322 }}
                            zoom={5}
                    >
                        {cities.map((city, index) => (
                            <Marker
                                key={index}
                                position={{ lat: city.lat, lng: city.lng }}
                                onClick={() => setSelectedCity(city.name)}
                            />
                        ))}
                    </GoogleMap>
                    {selectedCity && <p>Vous avez sélectionné : {selectedCity}</p>}

                </LoadScript>
            </div>
          )
    }
 


export default GoogleMaps;