import React, { useEffect, useState } from 'react';
import axios from 'axios';

// IMPORT BOOTSTRAP
import Image from 'react-bootstrap/Image';

function ImageDisplay({ customKey, imageName }) {
    console.log("image display: ", customKey)
    const [imageSrc, setImageSrc] = useState('');
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        axios.get(`http://localhost:5000/get_image/${imageName}`, {
            responseType: 'arraybuffer'
        })
            .then(response => {
                // Mengubah array buffer menjadi base64
                const base64ImageData = btoa(
                    new Uint8Array(response.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ''
                    )
                );

                // Mengatur src gambar dengan data URI yang benar
                setImageSrc(`data:image/jpeg;base64,${base64ImageData}`);
            })
            .catch(error => {
                console.log("failed load image : ", error)
            });
    }, [customKey]);

    const handleImageLoad = (e) => {
        // Mengambil ukuran asli gambar setelah gambar dimuat
        const { naturalWidth, naturalHeight } = e.target;
        setImageSize({ width: naturalWidth, height: naturalHeight });
    };

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: '490px', overflow: 'hidden', position:'relative' }}>
            <Image src={imageSrc} alt={imageName} style={{ maxWidth: '100%'}} onLoad={handleImageLoad}/>
            <p className='px-1' style={{position:'absolute', margin:0, bottom:0, right:0, background:'lightgrey', borderRadius: '5px 0 0 0', fontSize:'8pt'}}>
                {imageSize.width} x {imageSize.height}
            </p>
        </div>
    );
}

function PuzzleDisplay({ nPuzzle }) {
    const [puzzleData, setPuzzleData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/get_puzzles/${nPuzzle}`);
                const data = response.data.puzzle; // Mengambil data puzzle dari respons

                setPuzzleData(data);
            } catch (error) {
                console.error("Gagal mengambil data puzzle:", error);
            }
        };

        fetchData();
    }, [nPuzzle]);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {puzzleData.map((puzzle, index) => (
                <div key={index} style={{ flex: `0 0 calc(100% / ${nPuzzle})` }}>
                    <img
                        src={`data:image/jpeg;base64,${puzzle.data}`}
                        alt={puzzle.filename}
                        style={{ width: '100%', height: 'auto' }}
                        className='border'
                    />
                </div>
            ))}
        </div>
    );
}

function PuzzleDisplayRandom({ nPuzzle }) {
    console.log('random')
    const [puzzleData, setPuzzleData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/get_puzzles/${nPuzzle}`);
                const data = response.data.puzzle; // Mengambil data puzzle dari respons

                const shuffledArray = [...data];
                for (let i = shuffledArray.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
                }
                setPuzzleData(shuffledArray);
            } catch (error) {
                console.error("Gagal mengambil data puzzle:", error);
            }
        };

        fetchData();
    }, [nPuzzle]);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {puzzleData.map((puzzle, index) => (
                <div key={index} style={{ flex: `0 0 calc(100% / ${nPuzzle})` }}>
                    <img
                        src={`data:image/jpeg;base64,${puzzle.data}`}
                        alt={puzzle.filename}
                        style={{ width: '100%', height: 'auto' }}
                        className='border'
                    />
                </div>
            ))}
        </div>
    );
}

export { ImageDisplay, PuzzleDisplay, PuzzleDisplayRandom };