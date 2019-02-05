import * as React from 'react';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
//
// const MapCompBase: React.SFC = () => {
//   return (
//     <GoogleMap
//       defaultZoom={8}
//       defaultCenter={{ lat: -34, lng: 150 }}
//     >
//       <Marker position={{ lat: -34, lng: 150 }} />
//     </GoogleMap>
//   );
// };
//
// const MapComp = withScriptjs(withGoogleMap(MapCompBase));

interface IProps {
}

const MapComponent: React.SFC<IProps> = (props: IProps) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2465.926113587023!2d4.6566626161113005!3d51.825780179688685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c42eb7a3876e15%3A0x964d11c4e63c53f3!2sBerlijnseplein+53%2C+3332+SB+Zwijndrecht!5e0!3m2!1sen!2snl!4v1547417851821"
      frameBorder="0"
      style={{border: 0, width: '100%', height: '100%'}}
      allowFullScreen
    />
  );
};

export default MapComponent;
