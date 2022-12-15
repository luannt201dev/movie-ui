import './movie.css';
import { Publish } from '@mui/icons-material';
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import movieSlice from '../../../store/slice/movieSlice';

const Product = () => {
    const location = useLocation();
    const {lists} = useSelector((state) => state.list);
    const {movies, success, error} = useSelector((state) => state.movie);
  const categories = useSelector((state) => state.category.categories);
  const id = location.pathname.split("/")[3];
  const movie = movies.find((movie) => movie.id === Number(id))
  const [updateMovie, setUpdateMovie] = useState(movie)

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success(success)
    }
    dispatch(movieSlice.actions.refreshErrorAndSuccess())
  }, [error, success]);

  const dispatch = useDispatch()
    return (
        <div className="product">
             <div className="product__title-container">
                <h1 className="product--title">Edit Movie</h1>
            </div>
            <div className="product-top">
                <div className="product__right">
                    <div className="product__info-top"> 
                        <img 
                            src={movie?.img} 
                            alt="" className="product-img" 
                        />
                        <span className="product-name">{movie.title}</span>
                    </div>
                    <div className="product__info-bottom">
                        <div className="product__info-item">
                            <div className="product__info-key">Id:</div>
                            <div className="product__info-value">{movie._id}</div>
                        </div>
                        <div className="product__info-item">
                            <div className="product__info-key">Genre:</div>
                            <div className="product__info-value">{movie.genre}</div>
                        </div>
                        <div className="product__info-item">
                            <div className="product__info-key">Year:</div>
                            <div className="product__info-value">{movie.year}</div>
                        </div>
                        <div className="product__info-item">
                            <div className="product__info-key">Limit:</div>
                            <div className="product__info-value">{movie.limit}+ </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-bottom">
                <form className="product-form">
                    <div className="product__form-left">
                        <label>Movie Title</label>
                        <input type="text" placeholder={movie.title} />
                        <label>Year</label>
                        <input type="text" placeholder={movie.year} />
                        <label>Genre</label>
                        <input type="text" placeholder={movie.genre} />
                        <label>Limit</label>
                        <input type="text" placeholder={movie.limit} />
                        <label>Trailer</label>
                        <input type="file" placeholder={movie.trailer} />
                        <label>Video</label>
                        <input type="file" placeholder={movie.video} />
                    </div>
                    <div className="product__upload-right">
                        <div className="product__upload">
                            <img 
                                src={movie.img}
                                alt="" className="product-upload-img" 
                            />
                            <label htmlFor="file">
                                <Publish className="product-upload--icon"/>
                            </label>
                            <input type="file" id="file" name="file" style={{display: "none"}}/>
                        </div>
                        <button className="product__update-button">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product