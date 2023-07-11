import React from 'react';
import { ReactDOM } from 'react-dom';
var imageFiles = [];

class ImageComponent extends React.Component {
  importAll(r){
    return r.keys().map(r);
  }
    componentWillMount(){
        imageFiles = this.importAll(requre.context('../images/TNImages/', false, /\.(png|jpe?g|svg)$/));
    return (
        <div>
        {imageFiles.map((file, index) => (
            <img key={index} src={file} alt="info" />
        ))}
        </div>
    );
    }
}
