import React from 'react'
import { apiKey, popular} from "../modules/ApiLinks";
import CoverPage from "../components/CoverPage";
import DisplayItems from "../components/DisplayItems";

const Popular = () => {
    const [HeaderImage, setHeaderImage]= React.useState("");

  // fetching the haeder image
  React.useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then((response)=> response.json())
    .then((data)=>{
      const movies = data.results;
      const randomIndex = Math.floor(Math.random()* movies.length);
      const randomMovie = movies[randomIndex];

      if(randomMovie && randomMovie.backdrop_path){
        const imageUrl = `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`;
        setHeaderImage(imageUrl);
      }

    })
    .catch((error) =>{
      console.error(error);
    });
  }, []);
  return (
    <div>
      <CoverPage title={"Popular Page"} description= {"Best destination for your favorite movies and series"} catchyPhrase={"Movies are awesome"} headerImage={HeaderImage} showSearch={true} showHeaderImage={true}/>
    <DisplayItems 
    apiEndpoint={`${popular}?api_key=${apiKey}`}
    itemHeading={"Popular Movies"} showButtons={true} tvShowOn={false} moviesOn={true} numberOfMovies={15}/>
    </div>
  )
}

export default Popular
