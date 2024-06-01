import { useState } from 'react';

// IMPORT BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// IMPORT COMPONENT
import ImageUpload from './components/imageUpload';
import { ImageDisplay, PuzzleDisplay, PuzzleDisplayRandom } from './components/imageDisplay';
import { BtnNormal, BtnGrayscale, BtnEdgeDetection, BtnZoomIn, BtnZoomOut, BtnBlur, BtnSharpening, BtnMoveUp, BtnMoveLeft, BtnMoveRight, BtnMoveDown, BtnBrightnessAdd, BtnBrightnessMultiply, BtnBrightnessSub, BtnBrightnessDiv, BtnHistogramEqualizer, BtnRotateClockwise, BtnRotateCounterClockwise, BtnPuzzle, BtnPuzzleRandom, BtnZeroPadding, BtnLowpass, BtnHighpass, BtnBandpass, BtnGaussianBlur, BtnMedianBlur, BtnThresholding, BtnIdentity, BtnBilateral } from './components/btnImageProcessing';
import Histogram from './components/histogramProcessing'
import RGBValuesDisplay from './components/RGBValues';

function App() {
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [imageKey, setImageKey] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [histogramKey, setHistogramKey] = useState(0);
  const [puzzleKey, setPuzzleKey] = useState(0);
  const [nPuzzle, setnPuzzle] = useState(1); // Inisialisasi nPuzzle dengan nilai awal 1
  const [isRandom, setRandom] = useState(false)

  const handlePuzzle = (newPuzzle) => {
    setnPuzzle(newPuzzle);
  };

  const handleRandom = (newrandom) => {
    setRandom(newrandom)
  }

  const handleUploadSuccess = () => {
    setIsImageUploaded(true);
    setImageKey(imageKey + 1);
    setHistogramKey(histogramKey + 1);
  };

  const handleProcessSuccess = () => {
    setImageKey(imageKey + 1);
    setLoading(false);
  };

  const handleLoading = () => {
    setLoading(true);
  }

  const handleImageHistogram = () => {
    setImageKey(imageKey + 1);
    setHistogramKey(histogramKey + 1);
    setLoading(false);
  }

  const handlePuzzleDisplay = () => {
    setPuzzleKey(puzzleKey + 1)
  }

  return (
    <Container>
      <h3>PeCeDe</h3>
      <ImageUpload onUploadSuccess={handleUploadSuccess} />
      {isImageUploaded && (
        <>
          <Row className='image-container mb-3'>
            <Col md={2}>
              <ImageDisplay customKey={imageKey} imageName="img_normal.jpg" />
            </Col>
            <Col className='border p-0'>
              <ImageDisplay customKey={imageKey} imageName="img_now.jpg" />
            </Col>
            <Col md={2} className="d-flex justify-content-center">
              <Histogram customKey={histogramKey} />
            </Col>
          </Row>
          <Tabs
            defaultActiveKey="color"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="color" title={<span className="text-success">Color Mode</span>}>
              <Stack direction="horizontal" gap={3}>
                <BtnNormal onProcessSuccess={handleImageHistogram} onProcess={handleLoading} disabled={isLoading} />
                <BtnGrayscale onProcessSuccess={handleImageHistogram} onProcess={handleLoading} disabled={isLoading} />
              </Stack>
            </Tab>
            <Tab eventKey="transformation" title={<span className="text-success">Transformation</span>}>
              <Stack direction="horizontal" gap={3}>
                <BtnZoomIn onProcessSuccess={handleProcessSuccess} onProcess={handleLoading} disabled={isLoading} />
                <BtnZoomOut onProcessSuccess={handleProcessSuccess} onProcess={handleLoading} disabled={isLoading} />
                <BtnMoveLeft onProcessSuccess={handleProcessSuccess} onProcess={handleLoading} disabled={isLoading} />
                <BtnMoveUp onProcessSuccess={handleProcessSuccess} onProcess={handleLoading} disabled={isLoading} />
                <BtnMoveDown onProcessSuccess={handleProcessSuccess} onProcess={handleLoading} disabled={isLoading} />
                <BtnMoveRight onProcessSuccess={handleProcessSuccess} onProcess={handleLoading} disabled={isLoading} />
                <BtnRotateCounterClockwise onProcessSuccess={handleProcessSuccess} onProcess={handleLoading} disabled={isLoading} />
                <BtnRotateClockwise onProcessSuccess={handleProcessSuccess} onProcess={handleLoading} disabled={isLoading} />
              </Stack>
            </Tab>
            <Tab eventKey="brightness" title={<span className="text-success">Brightness</span>}>
              <Stack direction="horizontal" gap={3}>
                <BtnBrightnessAdd onProcessSuccess={handleImageHistogram} onProcess={handleLoading} disabled={isLoading} />
                <BtnBrightnessSub onProcessSuccess={handleImageHistogram} onProcess={handleLoading} disabled={isLoading} />
                <BtnBrightnessMultiply onProcessSuccess={handleImageHistogram} onProcess={handleLoading} disabled={isLoading} />
                <BtnBrightnessDiv onProcessSuccess={handleImageHistogram} onProcess={handleLoading} disabled={isLoading} />
              </Stack>
            </Tab>
            <Tab eventKey="filter" title={<span className="text-success">Filter</span>}>
              <Stack direction="horizontal" gap={3}>
                <BtnBlur onProcessSuccess={handleProcessSuccess} onProcess={handleLoading} disabled={isLoading} />
                <BtnSharpening onProcessSuccess={handleProcessSuccess} onProcess={handleLoading} disabled={isLoading} />
                <BtnGaussianBlur onProcessSuccess={handleProcessSuccess} onProcess={handleLoading} disabled={isLoading} />
                <BtnMedianBlur onProcessSuccess={handleProcessSuccess} onProcess={handleLoading} disabled={isLoading} />
                <BtnIdentity onProcessSuccess={handleProcessSuccess} onProcess={handleLoading} disabled={isLoading} />
                <BtnBilateral onProcessSuccess={handleProcessSuccess} onProcess={handleLoading} disabled={isLoading} />
              </Stack>
            </Tab>
            <Tab eventKey="processing" title={<span className="text-success">Processing</span>}>
              <Stack direction="horizontal" gap={3}>
                <BtnEdgeDetection onProcessSuccess={handleImageHistogram} onProcess={handleLoading} disabled={isLoading} />
                <BtnHistogramEqualizer onProcessSuccess={handleImageHistogram} onProcess={handleLoading} disabled={isLoading} />
              </Stack>
            </Tab>
            <Tab eventKey="segmentation" title={<span className="text-success">Segmentation</span>}>
              <BtnThresholding onProcessSuccess={handleImageHistogram} onProcess={handleLoading} disabled={isLoading} />
            </Tab>
            <Tab eventKey="spasial" title={<span className="text-success">Filter Spasial</span>}>
              <Stack direction="horizontal" gap={3}>
                <BtnZeroPadding onProcessSuccess={handleProcessSuccess} onProcess={handleLoading} disabled={isLoading} />
                <BtnLowpass onProcessSuccess={handleProcessSuccess} onProcess={handleLoading} disabled={isLoading} />
                <BtnHighpass onProcessSuccess={handleProcessSuccess} onProcess={handleLoading} disabled={isLoading} />
                <BtnBandpass onProcessSuccess={handleProcessSuccess} onProcess={handleLoading} disabled={isLoading} />
              </Stack>
            </Tab>
            <Tab eventKey="puzzle" title={<span className="text-success">Puzzle</span>}>
              <Stack direction="horizontal" gap={3} className='mb-3'>
                <BtnPuzzle onProcessSuccess={handleProcessSuccess} onProcess={handleLoading} disabled={isLoading} handlePuzzle={handlePuzzleDisplay} setPuzzle={handlePuzzle} random={handleRandom} />
                <BtnPuzzleRandom onProcessSuccess={handleProcessSuccess} onProcess={handleLoading} disabled={isLoading} handlePuzzle={handlePuzzleDisplay} setPuzzle={handlePuzzle} random={handleRandom} />
              </Stack>
              {puzzleKey > 0 && !isRandom && <PuzzleDisplay nPuzzle={nPuzzle} />}
              {puzzleKey > 0 && isRandom && <PuzzleDisplayRandom nPuzzle={nPuzzle} />}
            </Tab>
            <Tab eventKey="rgb" title={<span className="text-success">RGB Value</span>}>
              <RGBValuesDisplay />
            </Tab>
          </Tabs>
        </>
      )}
    </Container>
  );
}

export default App;
