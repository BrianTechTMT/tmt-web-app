import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

class ImageComponent extends React.Component {
  state = { imagesByFolder: {} };

  async importAllImages() {
    const context = require.context('../images/TNImages/', true, /\.(png|jpe?g|svg|JPG|webp)$/);
    const subdirectories = context.keys().reduce((acc, path) => {
      const subdir = path.split('/')[1];
      if (!acc.includes(subdir) && subdir !== '.') {
        acc.push(subdir);
      }
      return acc;
    }, []);

    const imagesByFolder = {};
    for (const subdir of subdirectories) {
      const images = context.keys().filter(path => path.startsWith(`./${subdir}/`));
      imagesByFolder[subdir] = [];
      for (const image of images) {
        const imagePath = await import(`../images/TNImages/${subdir}/${image.split('/').pop()}`);
        imagesByFolder[subdir].push(imagePath.default);
      }
    }

    this.setState({ imagesByFolder });
  }

  componentDidMount() {
    this.importAllImages();
  }

  render() {
    const { imagesByFolder } = this.state;
    return (
      <>
        <div className='pt-5'>
          <Container className='pt-5'>
            {Object.keys(imagesByFolder).map((folder, folderIndex) => (
              <div key={folderIndex}>
                <h2>{folder}</h2>
                <Row className='justify-content-md-center' align="center">
                  {imagesByFolder[folder].map((file, index) => (
                    <Col className='justify-content-sm-center pt-3' align="center" key={index}>
                      <Card style={{ width: '11.7rem', height: '12.5rem' }} className="border rounded-5 shadow-lg p-3 mb-5 bg-body rounded" align="center">
                        <h3 style={{ fontSize: '10px' }}>Images {index + 1}</h3>
                        <Card.Img style={{ height: '9.7rem', width: '9.7rem' }} className="border rounded-5 shadow-lg p-3 mb-5 bg-body rounded" align="center" variant="top" src={file} />
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </Container>
        </div>
      </>
    );
  }
}

export default ImageComponent;