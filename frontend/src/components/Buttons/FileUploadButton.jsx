// React Hooks
import { useRef, useState } from "react";

// Bootstrap Components
import Button from "react-bootstrap/esm/Button";

export default function FileUploadButton() {
  const [selectedFile, setSelectedFile] = useState("No file chosen");
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];

    if (!fileObj) {
      return;
    }

    event.target.value = null;
    setSelectedFile(String(fileObj.name));
  };

  return (
    <div>
      <input
        style={{ display: "none" }}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />

      <Button
        onClick={handleClick}
        variant="outline-dark"
        style={{ fontSize: "14px" }}
      >
        Choose file
      </Button>
      <span className="ms-2" style={{ fontSize: "13px" }}>
        {selectedFile}
      </span>
    </div>
  );
}
