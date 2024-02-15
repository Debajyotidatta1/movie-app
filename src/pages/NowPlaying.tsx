import React from 'react'
import { apiKey, now_playing } from "../modules/ApiLinks";
import CoverPage from "../components/CoverPage";
// import coverPicture from "../assets/img.jpg"
import DisplayItems from "../components/DisplayItems";


const NowPlaying = () => {
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
    <>
      <CoverPage title={"Now Playing Page"} description= {"Best destination for your favorite movies and series"} catchyPhrase={"Movies are awesome"} headerImage={HeaderImage} showSearch={true} showHeaderImage={true}/>
    
    
    
    <DisplayItems 
    apiEndpoint={`${now_playing}?api_key=${apiKey}`}
    itemHeading={"Now Playing Movies"} showButtons={true} tvShowOn={false} moviesOn={true} numberOfMovies={15}/>
    </>
  )
}

export default NowPlaying
