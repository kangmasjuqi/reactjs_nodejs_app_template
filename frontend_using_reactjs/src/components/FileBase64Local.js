import React from 'react';

// credits and thanks to BosNaufal
// https://github.com/BosNaufal/react-file-base64

export default class FileBase64Local extends React.Component {
    handleChange(e) {
        const { files } = e.target;

        // Process each file
        const allFiles = [];
        let i = 0;
        for (i = 0; i < files.length; i += 1) {
            const file = files[i];

            // Make new FileReader
            const reader = new window.FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                const fileInfo = {
                    name: file.name,
                    type: file.type,
                    size: `${Math.round(file.size / 1000)}  kB`,
                    base64: reader.result,
                    file
                };

                // Push it to the state
                allFiles.push(fileInfo);

                // If all files have been proceed
                if (allFiles.length === files.length) {
                    // Apply Callback function
                    if (this.props.multiple) {
                        this.props.onDone(allFiles);
                    } else {
                        this.props.onDone(allFiles[0]);
                    }
                }
            }; // reader.onload
        } // for
    }

    render() {
        return (
            <input
                id={this.props.id}
                style={this.props.style}
                type="file"
                onChange={this.handleChange.bind(this)}
                multiple={this.props.multiple}
            />
        );
    }
}

FileBase64Local.defaultProps = {
    multiple: false
};
