import React from 'react'
import { Cover, SearchBar } from '../styles/Styles.modules';
// import { imageListClasses } from '@mui/material';

interface CoverProps{
    title: string;
    description: string;
    catchyPhrase: string;
    headerImage: string;
    showSearch: boolean;
    showHeaderImage: boolean;
}
const CoverPage:React.FC<CoverProps> = ({
    title, description, catchyPhrase, headerImage, showHeaderImage, showSearch,}
) => {
  return (
    <Cover>
      <div className="coverText">
        <h1>{title}</h1>
        <p>{description}</p>
        <em>{catchyPhrase}</em>
      </div>
       {showHeaderImage && <img src={headerImage} alt="img" />}
      <SearchBar>
        <input type='search' placeholder='Search 1000 of Movies...'/>
        <button>Search</button>
      </SearchBar>
    </Cover>
  )
}

export default CoverPage
