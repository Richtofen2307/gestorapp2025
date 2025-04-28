import React, { useState } from 'react';
import "./ImageSearch.css";

const ImageSearch = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        headers: {
          Authorization: '5lzRh4YXt3HGv2cZPAUQb0ITvYjNuO28GcfqIrtxHs9sWoseJd6XEqdo'
        }
      });
      const data = await response.json();
      setImages(data.photos); // 'photos' es el campo que contiene las imágenes en la API de Pexels
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div className='image-search'>
      <div className='image-search__controls'>
        <input
          type='text'
          placeholder='Search for images...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='image-search__input'
        />
        <button onClick={handleSearch} className='image-search__button'>Search</button>
      </div>
      <div className='image-search__results'>
        {images.map((image, index) => (
          <img key={index} src={image.src.medium} alt={image.alt || 'Image'} className='image-search__image' />
        ))}
      </div>
    </div>
  );
};

export default ImageSearch;