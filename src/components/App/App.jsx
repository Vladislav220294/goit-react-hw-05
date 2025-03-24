import { lazy, Suspense } from "react";
import { useState } from 'react'
import { Route, Routes } from "react-router";
import Navigation from '../Navigation/Navigation.jsx'
// import HomePage from '../../pages/HomePage/HomePage.jsx'
// import MoviesPage from '../../pages/MoviesPage/MoviesPage.jsx'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx'
// import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage.jsx'
// import MovieCast from '../MovieCast/MovieCast.jsx';
// import MovieReviews from '../MovieReviews/MovieReviews.jsx';


import './App.css'
const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'))
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage.jsx'))
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage.jsx'))
const MovieCast = lazy(() => import('../MovieCast/MovieCast.jsx'))
const MovieReviews = lazy(()=>import('../MovieReviews/MovieReviews.jsx'))
function App() {
 

  return (
    <>
      <Navigation />
      <Suspense fallback={<p>loading</p>}>
      <Routes>
        <Route path='/' element={<HomePage/> } />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
          </Route >
          
        <Route path='*' element={<NotFoundPage/> } />
      </Routes></Suspense>
    </>
  )
}

export default App
