import React from 'react'
import { apiKey, popular, popularShows, top_rated_shows } from "../modules/ApiLinks";
import CoverPage from "../components/CoverPage";

import DisplayItems from "../components/DisplayItems";

// const itemsProps = {
//   // apiEndpoint: `${trendingShows}?api_key=${apiKey}`,
//   numberOfMovies: 6, 
//   // moviesOn: false, 
//   // tvShowOn: true, 
//   // showButtons: true,
// };
const Home = () => {
  
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
      <CoverPage title={"Welcome to Home Page"} description= {"Best destination for your favorite movies and series"} catchyPhrase={"Movies are awesome"} headerImage={HeaderImage} showSearch={true} showHeaderImage={true}/>
    
      <DisplayItems 
    apiEndpoint={`${popular}?api_key=${apiKey}`}
    itemHeading={"Trending Movies"} showButtons={true} tvShowOn={false} moviesOn={true} numberOfMovies={5}/>
    <DisplayItems 
      apiEndpoint={`${popularShows}?api_key=${apiKey}`}
      itemHeading={"Popular Shows"} showButtons={true} tvShowOn={true} moviesOn={false} numberOfMovies={5}/>
    <DisplayItems 
      apiEndpoint={`${top_rated_shows}?api_key=${apiKey}`}
      itemHeading={"Top Rated Shows"} showButtons={false} tvShowOn={true} moviesOn={false} numberOfMovies={5}/>
    </div>
  )
}

export default Home
