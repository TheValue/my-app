import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
    const [loading, setLoading] = useState(true);
    const [detailMovie, setDetailMovie] = useState({});
    const {id} = useParams();
    

    
    const getMovieDetail = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetailMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovieDetail();
    }, []);
    
    return (
        <div>
            {loading ? (
                <h1>Loading.....</h1>   
            ) : (
                <div>
                    <h1>detail</h1>  
                    <p>{detailMovie.title}</p>
                    <p>{detailMovie.description_intro}</p>   
                </div>
            )}
        </div>
    );
}

export default Detail;