import React from 'react'
import { ContentLastMovieInDb } from './ContentLastMovieInDb';
import { ContentRowMovies } from './ContentRowMovies';
import { GenresInDb } from './GenresInDb';

export const ContentRowTop = () => {
  return (
    <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
    </div>

    <div>
        <ContentRowMovies/>
    </div>

    <div className="row">

        <ContentLastMovieInDb/>
        <GenresInDb/>
  
    </div>
</div>

  )
}
