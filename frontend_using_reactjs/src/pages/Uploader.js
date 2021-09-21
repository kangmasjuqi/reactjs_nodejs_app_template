import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';
import FileBase64Local from '../components/FileBase64Local';

import '../App.css';

import { uploadArtefact } from '../redux/artefacts/artefacts.action';

const Uploader = () => {
    const dispatch = useDispatch();
    const [uploadedFileViaFormData, setUploadedFileViaFormData] = useState(null);
    const [caption, setCaption] = useState('');

    const handleChangeCaption = (e) => {
        setCaption(e.target.value);
    };

    const handleFileChangeViaFormData = (e) => {
        const { files } = e.target;
        setUploadedFileViaFormData(files[0]);
    };

    const handleUploadViaFormData = () => {

        const payload = new FormData();
        payload.append('caption', caption);
        payload.append('uploaded_file', uploadedFileViaFormData);

        dispatch(uploadArtefact("form", payload)).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                alert('Artefact has been uploaded!');
            }
        });

    };

    const handleUploadUsingFileBase64 = (uploadedFileUsingFileBase64) => {

        const payload = {
            file_name: uploadedFileUsingFileBase64.name,
            data_url: uploadedFileUsingFileBase64.base64            
        };

        dispatch(uploadArtefact("base64", payload)).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                alert('Artefact has been uploaded!');
            }
        });
        
    };

    return (
        <>
            <div>
                <h4 style={{margin: '20px 0px'}}>Upload Files - via traditional Form Data</h4>
                <form style={{ marginLeft: '20px' }} method="post" encType="multipart/form-data">
                    <div className="row">
                        <div className="col form-group">
                            <label>Profile Picture</label>
                            <input
                                type="file"
                                onChange={(e) => handleFileChangeViaFormData(e)}
                                name="profile_picture"
                                className="form-control"
                                style={{width:'480px'}}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-group">
                            <label>Caption</label>
                            <input
                                type="text"
                                onChange={(e) => handleChangeCaption(e)}
                                name="caption"
                                className="form-control"
                                style={{width:'480px'}}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-left">
                            <Button type="button" variant="primary" onClick={() => handleUploadViaFormData()}>
                                Upload File
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
            <hr />
            <div>
                <h4 style={{margin: '20px 0px'}}>Upload Files - using FileBase64</h4>
                <label htmlFor="file-item">
                    <p style={{ textDecoration: 'underline' }}>
                        Choose &amp; Upload File here..
                    </p>
                </label>
                <FileBase64Local
                    id="file-item"
                    style={{
                        visibility: 'hidden',
                        position: 'absolute'
                    }}
                    multiple={false}
                    onDone={handleUploadUsingFileBase64}
                />
            </div>
        </>
    );

}

export default Uploader;