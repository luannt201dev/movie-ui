import "./addMovie.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createMovieAPI } from "../../../API/movies.api";
import storage from "../../../utils/firebase.util";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const AddMovie = () => {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const navigate = useNavigate();

  const { categories } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;

    setMovie({ ...movie, [e.target.name]: value });
  };

	const handleAutoCompleteChange = (e, value) => {
		setMovie({...movie, categories: value.map(el=>el.id)})
	}

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, `/videos/${fileName}`);

      const uploadTask = uploadBytesResumable(storageRef, item);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          // eslint-disable-next-line default-case
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: downloadURL };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();

    upload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgSm, label: "imgSm" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
		console.log(movie);

    createMovieAPI(movie, dispatch);
    // navigate("/admin/movies");
  };

  return (
    <div className="add-product">
      <h1 className="add-product-title">New Movie</h1>
      <form className="add-product-form">
        <div className="add-product-item">
          <label>Image</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className="add-product-item">
          <label>Title Image</label>
          <input
            type="file"
            id="imgTitle"
            name="imgTitle"
            onChange={(e) => setImgTitle(e.target.files[0])}
          />
        </div>
        <div className="add-product-item">
          <label>Thumbnail Image</label>
          <input
            type="file"
            id="imgSm"
            name="imgSm"
            onChange={(e) => setImgSm(e.target.files[0])}
          />
        </div>
        <div className="add-product-item">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter movie title..."
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="add-product-item">
          <label>Description</label>
          <input
            type="text"
            placeholder="Movie description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="add-product-item">
          <label>Year</label>
          <input
            type="text"
            placeholder="Year of manufacture"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="add-product-item">
          <label>Categories</label>
          <Autocomplete
            multiple
            id="tags-standard"
            options={categories}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                placeholder="Chọn danh mục"
              />
            )}
						onChange={handleAutoCompleteChange}
          />
        </div>
        {/* <div className="add-product-item">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Movie genre"
            name="genre"
            onChange={handleChange}
          />
        </div> */}
        <div className="add-product-item">
          <label>Is series?</label>
          <select name="series" id="isSeries" onChange={handleChange}>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
        <div className="add-product-item">
          <label>Limit</label>
          <input
            type="text"
            placeholder="Age limit"
            name="limitAge"
            onChange={handleChange}
          />
        </div>
        <div className="add-product-item">
          <label>Trailer</label>
          <input
            type="file"
            name="trailer"
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className="add-product-item">
          <label>Video</label>
          <input
            type="file"
            name="video"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        {uploaded === 5 ? (
          <button className="add-product-button" onClick={handleSubmit}>
            Create
          </button>
        ) : (
          <button className="add-product-button" onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
};

export default AddMovie;
