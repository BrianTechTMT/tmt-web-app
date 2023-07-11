import React from 'react';
import ReactDOM from 'react-dom';

class ImageComponent extends React.Component {
  state = { imageFiles: [] };

  importAll(r){
    return r.keys().map(r);
  }

  componentDidMount(){
    const imageFiles = this.importAll(require.context('../images/TNImages/', false, /\.(png|jpe?g|svg|JPG)$/));
    this.setState({ imageFiles });
  }

  render() {
    const { imageFiles } = this.state;
    return (
      <div>
        {imageFiles.map((file, index) => (
          <img key={index} src={file} alt="info" />
        ))}
      </div>
    );
  }
}

export default ImageComponent;
