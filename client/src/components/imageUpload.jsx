import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import Axios from "axios";

function ImageUpload({ onUploadSuccess }) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        Axios.post('http://localhost:5000/upload', formData)
            .then((response) => {
                console.log('Gambar berhasil diunggah:', selectedFile);                
            })
            .catch((error) => {
                console.error('Gagal mengunggah gambar:', error);
            })
            .finally(()=>{
                onUploadSuccess();
            });
    };

    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
                <Button variant="outline-success" id="button-addon2" onClick={handleUpload} disabled={!selectedFile}>
                    Upload
                </Button>
            </InputGroup>
        </>
    );
}

export default ImageUpload;