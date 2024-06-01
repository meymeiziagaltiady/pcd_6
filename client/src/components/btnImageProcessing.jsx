import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Axios from "axios";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Stack from 'react-bootstrap/Stack';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function BtnNormal({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/normal')
            .then((response) => {
                console.log('back to normal succeed');
            })
            .catch((error) => {
                console.error('back to normal failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : 'Normal'}
        </Button>
    );
}

function BtnGrayscale({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/grayscale')
            .then((response) => {
                console.log('grayscaling succeed');
            })
            .catch((error) => {
                console.error('grayscaling failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : 'Grayscale'}
        </Button>
    );
}

function BtnEdgeDetection({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/edge_detection')
            .then((response) => {
                console.log('edge detection succeed');
            })
            .catch((error) => {
                console.error('edge detection failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : 'Edge Detection'}
        </Button>
    );
}

function BtnBlur({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/blur')
            .then((response) => {
                console.log('bluring succeed');
            })
            .catch((error) => {
                console.error('bluring failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : 'Blur'}
        </Button>
    );
}

function BtnSharpening({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/sharpening')
            .then((response) => {
                console.log('sharpening succeed');
            })
            .catch((error) => {
                console.error('sharpening failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : 'Sharpening'}
        </Button>
    );
}

function BtnZoomIn({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/zoomin')
            .then((response) => {
                console.log('zoom in succeed');
            })
            .catch((error) => {
                console.error('zoom in failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : 'Zoom In'}
        </Button>
    );
}

function BtnZoomOut({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/zoomout')
            .then((response) => {
                console.log('zoom out succeed');
            })
            .catch((error) => {
                console.error('zoom out failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : 'Zoom Out'}
        </Button>
    );
}

function BtnHistogramEqualizer({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/histogram_equalizer')
            .then((response) => {
                console.log('create histogram_equalizer succeed');
            })
            .catch((error) => {
                console.error('create histogram_equalizer failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : 'Histogram Equalizer'}
        </Button>
    );
}

function BtnMoveLeft({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/move_left')
            .then((response) => {
                console.log('move_left succeed');
            })
            .catch((error) => {
                console.error('move_left failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : '\u2190'}
        </Button>
    );
}

function BtnMoveUp({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/move_up')
            .then((response) => {
                console.log('move_up succeed');
            })
            .catch((error) => {
                console.error('move_up failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : '\u2191'}
        </Button>
    );
}

function BtnMoveRight({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/move_right')
            .then((response) => {
                console.log('move_right succeed');
            })
            .catch((error) => {
                console.error('move_right failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : '\u2192'}
        </Button>
    );
}

function BtnMoveDown({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/move_down')
            .then((response) => {
                console.log('move_down succeed');
            })
            .catch((error) => {
                console.error('move_down failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : '\u2193'}
        </Button>
    );
}

function BtnBrightnessAdd({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/brightness_addition')
            .then((response) => {
                console.log('brightness_addition succeed');
            })
            .catch((error) => {
                console.error('brightness_addition failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : 'Add Bright'}
        </Button>
    );
}

function BtnBrightnessSub({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/brightness_substraction')
            .then((response) => {
                console.log('brightness_substraction succeed');
            })
            .catch((error) => {
                console.error('brightness_substraction failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : 'Sub Bright'}
        </Button>
    );
}

function BtnBrightnessMultiply({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/brightness_multiplication')
            .then((response) => {
                console.log('brightness_multiplication succeed');
            })
            .catch((error) => {
                console.error('brightness_multiplication failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : 'Multiply Bright'}
        </Button>
    );
}

function BtnBrightnessDiv({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/brightness_division')
            .then((response) => {
                console.log('brightness_division succeed');
            })
            .catch((error) => {
                console.error('brightness_division failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : 'Div Bright'}
        </Button>
    );
}

function BtnRotateClockwise({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/rotate_clockwise')
            .then((response) => {
                console.log('rotate_clockwise succeed');
            })
            .catch((error) => {
                console.error('rotate_clockwise failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : (<>&#x21BB;</>)}
        </Button>
    );
}

function BtnRotateCounterClockwise({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/rotate_counterclockwise')
            .then((response) => {
                console.log('rotate_counterclockwise succeed');
            })
            .catch((error) => {
                console.error('rotate_counterclockwise failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : (<>&#x21BA;</>)}
        </Button>
    );
}

function BtnPuzzle({ onProcess, onProcessSuccess, disabled, handlePuzzle, setPuzzle, random }) {
    const [isLoading, setLoading] = useState(false);
    const [nPuzzle, setnPuzzle] = useState(1);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post(`http://localhost:5000/puzzle/${nPuzzle}`)
            .then((response) => {
                console.log('puzzle succeed');
            })
            .catch((error) => {
                console.error('puzzle failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
                setPuzzle(nPuzzle);
                random(false);
                handlePuzzle();
            });
    };

    const handleInputChange = (event) => {
        // Mengupdate nilai nPuzzle saat input berubah
        setnPuzzle(event.target.value);
    };

    return (
        <>
            <InputGroup className="" style={{ width: '200px' }}>
                <Form.Control
                    placeholder='n puzzle'
                    aria-describedby="basic-addon2"
                    value={nPuzzle}
                    onChange={handleInputChange}
                />
                <Button
                    variant="success"
                    disabled={disabled}
                    onClick={!isLoading ? handleProcess : null}
                >
                    {isLoading ? (
                        <>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Loading...
                        </>
                    ) : "puzzle"}
                </Button>
            </InputGroup>
        </>
    );
}

function BtnPuzzleRandom({ onProcess, onProcessSuccess, disabled, handlePuzzle, setPuzzle, random }) {
    const [isLoading, setLoading] = useState(false);
    const [nPuzzle, setnPuzzle] = useState(1);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post(`http://localhost:5000/puzzle/${nPuzzle}`)
            .then((response) => {
                console.log('puzzle succeed');
            })
            .catch((error) => {
                console.error('puzzle failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
                setPuzzle(nPuzzle);
                random(true);
                handlePuzzle();
            });
    };

    const handleInputChange = (event) => {
        // Mengupdate nilai nPuzzle saat input berubah
        setnPuzzle(event.target.value);
    };

    return (
        <>
            <InputGroup className="" style={{ width: '200px' }}>
                <Form.Control
                    placeholder='n puzzle'
                    aria-describedby="basic-addon2"
                    value={nPuzzle}
                    onChange={handleInputChange}
                />
                <Button
                    variant="success"
                    disabled={disabled}
                    onClick={!isLoading ? handleProcess : null}
                >
                    {isLoading ? (
                        <>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Loading...
                        </>
                    ) : "puzzle random"}
                </Button>
            </InputGroup>
        </>
    );
}

function BtnZeroPadding({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/zero_padding')
            .then((response) => {
                console.log('zero_padding succeed');
            })
            .catch((error) => {
                console.error('zero_padding failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : "Zero Padding"}
        </Button>
    );
}

function BtnLowpass({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);
    const [inputArray, setInputArray] = useState([]);

    const handleInputChange = (event) => {
        setInputArray(event.target.value.split(','));
    };

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/lowpass_filter', { inputArray })
            .then((response) => {
                console.log('lowpass_filter succeed: ', response.data);
            })
            .catch((error) => {
                console.error('lowpass_filter failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Pisah dengan koma
        </Tooltip>
    );

    return (
        <InputGroup className="" style={{ width: '300px' }}>
            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <Form.Control
                    aria-describedby="basic-addon2"
                    placeholder='custom kernel'
                    onChange={handleInputChange}
                />
            </OverlayTrigger>
            <Button
                variant="success"
                disabled={disabled}
                onClick={!isLoading ? handleProcess : null}
            >
                {isLoading ? (
                    <>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </>
                ) : "Lowpass"}
            </Button>
        </InputGroup>
    );
}

function BtnHighpass({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);
    const [inputArray, setInputArray] = useState([]);
    // const [inputArray, setInputArray] = useState([-1,-1,-1,-1,8,-1,-1,-1,-1]);

    const handleInputChange = (event) => {
        setInputArray(event.target.value.split(','));
    };

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/highpass_filter', { inputArray })
            .then((response) => {
                console.log('highpass_filter succeed: ', response.data);
            })
            .catch((error) => {
                console.error('highpass_filter failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Pisah dengan koma
        </Tooltip>
    );

    return (
        <InputGroup className="" style={{ width: '300px' }}>
            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <Form.Control
                    aria-describedby="basic-addon2"
                    placeholder='custom kernel'
                    onChange={handleInputChange}
                />
            </OverlayTrigger>
            <Button
                variant="success"
                disabled={disabled}
                onClick={!isLoading ? handleProcess : null}
            >
                {isLoading ? (
                    <>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </>
                ) : "Highpass"}
            </Button>
        </InputGroup>
    );
}

function BtnBandpass({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);
    const [inputArray, setInputArray] = useState([]);
    // const [inputArray, setInputArray] = useState([0,-1,0,-1,5,-1,0,-1,0]);

    const handleInputChange = (event) => {
        setInputArray(event.target.value.split(','));
    };

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/bandpass_filter', { inputArray })
            .then((response) => {
                console.log('lowpass_filter succeed: ', response.data);
            })
            .catch((error) => {
                console.error('lowpass_filter failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Pisah dengan koma
        </Tooltip>
    );

    return (
        <InputGroup className="" style={{ width: '300px' }}>
            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <Form.Control
                    aria-describedby="basic-addon2"
                    placeholder='custom kernel'
                    onChange={handleInputChange}
                />
            </OverlayTrigger>
            <Button
                variant="success"
                disabled={disabled}
                onClick={!isLoading ? handleProcess : null}
            >
                {isLoading ? (
                    <>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </>
                ) : "Bandpass"}
            </Button>
        </InputGroup>
    );
}

function BtnGaussianBlur({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);
    const [kSize, setkSize] = useState(3);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post(`http://localhost:5000/gaussian_blur/${kSize}`)
            .then((response) => {
                console.log('gaussian_blur succeed');
            })
            .catch((error) => {
                console.error('gaussian_blur failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    const handleInputChange = (event) => {
        // Mengupdate nilai nPuzzle saat input berubah
        setkSize(event.target.value);
    };

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Custom Kernel Size
        </Tooltip>
    );

    return (
        <InputGroup className="" style={{ width: '200px' }}>
            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <Form.Control
                    aria-describedby="basic-addon2"
                    onChange={handleInputChange}
                    type='number'
                    min={0}
                />
            </OverlayTrigger>
            <Button
                variant="success"
                disabled={disabled}
                onClick={!isLoading ? handleProcess : null}
            >
                {isLoading ? (
                    <>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </>
                ) : "Gaussian Blur"}
            </Button>
        </InputGroup>
    );
}

function BtnMedianBlur({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);
    const [kSize, setkSize] = useState(3);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post(`http://localhost:5000/median_blur/${kSize}`)
            .then((response) => {
                console.log('median_blur succeed');
            })
            .catch((error) => {
                console.error('median_blur failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    const handleInputChange = (event) => {
        // Mengupdate nilai nPuzzle saat input berubah
        setkSize(event.target.value);
    };

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Custom Kernel Size
        </Tooltip>
    );

    return (
        <InputGroup className="" style={{ width: '200px' }}>
            <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <Form.Control
                    aria-describedby="basic-addon2"
                    onChange={handleInputChange}
                    type='number'
                    min={0}
                />
            </OverlayTrigger>
            <Button
                variant="success"
                disabled={disabled}
                onClick={!isLoading ? handleProcess : null}
            >
                {isLoading ? (
                    <>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </>
                ) : "Median Blur"}
            </Button>
        </InputGroup>
    );
}

function BtnThresholding({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);
    const [range, setRange] = useState([0, 255]);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/thresholding', { range })
            .then((response) => {
                console.log('thresholding succeed');
            })
            .catch((error) => {
                console.error('thresholding failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    const handleSliderChange = (values) => {
        setRange(values);
    };

    const customStyles = {
        handle: {
            borderColor: 'lightgreen'
        },
        track: {
            backgroundColor: 'green'
        },
    };

    return (
        <Stack direction="horizontal" gap={3}>
            <div style={{ width: '50%' }}>
                <Slider
                    range
                    min={0}
                    max={255}
                    value={range}
                    onChange={handleSliderChange}
                    trackStyle={customStyles.track}
                    handleStyle={customStyles.handle}
                />
                <p className='text-center'>{range[0]} - {range[1]}</p>
            </div>

            <Button
                variant="success"
                disabled={disabled}
                onClick={!isLoading ? handleProcess : null}
            >
                {isLoading ? (
                    <>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </>
                ) : "Threshold"}
            </Button>
        </Stack>
    );
}

function BtnIdentity({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/identity')
            .then((response) => {
                console.log('identity succeed');
            })
            .catch((error) => {
                console.error('identity failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : "Identity"}
        </Button>
    );
}

function BtnBilateral({ onProcess, onProcessSuccess, disabled }) {
    const [isLoading, setLoading] = useState(false);

    const handleProcess = () => {
        setLoading(true);
        onProcess();
        Axios.post('http://localhost:5000/bilateral')
            .then((response) => {
                console.log('bilateral succeed');
            })
            .catch((error) => {
                console.error('bilateral failed: ', error);
            })
            .finally(() => {
                setLoading(false);
                onProcessSuccess();
            });
    };

    return (
        <Button
            variant="success"
            disabled={disabled}
            onClick={!isLoading ? handleProcess : null}
        >
            {isLoading ? (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </>
            ) : "Bilateral"}
        </Button>
    );
}

export { BtnNormal, BtnGrayscale, BtnEdgeDetection, BtnZoomIn, BtnZoomOut, BtnSharpening, BtnBlur, BtnMoveDown, BtnMoveLeft, BtnMoveRight, BtnMoveUp, BtnHistogramEqualizer, BtnBrightnessAdd, BtnBrightnessDiv, BtnBrightnessMultiply, BtnBrightnessSub, BtnRotateClockwise, BtnRotateCounterClockwise, BtnPuzzle, BtnPuzzleRandom, BtnZeroPadding, BtnLowpass, BtnHighpass, BtnBandpass, BtnGaussianBlur, BtnMedianBlur, BtnThresholding, BtnBilateral, BtnIdentity };