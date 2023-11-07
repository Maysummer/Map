//How every argument must be, to be an argument for addMarker
interface MapInstance {
  location: {
    lat: number;
    lng: number;
  }
}

//This is created as a replica of google maps but also to ensure the availability of ONLY specific properties we specify
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mapInstance: MapInstance): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapInstance.location.lat,
        lng: mapInstance.location.lng
      }
    })
  }
}