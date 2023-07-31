import React from 'react'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import MovieList from '../../components/Movies/MovieList'
import TheatersTab from '../../components/TheatersTab/TheatersTab'

const Homepage = () => {
    return (
        <>
            <HomeBanner />
            <MovieList />
            <TheatersTab />
        </>
    )
}

export default Homepage