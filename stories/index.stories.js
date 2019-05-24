/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '@storybook/react/demo';

storiesOf('BackToSearchButton', module);

storiesOf('MoviePage', module)
  .add('BackToSeachButton', () => (
    <Button onClick={action('BackToSearch button clicked. It leads to search page')}>
      SEARCH
    </Button>
  ))
  .add('MoviePage', () => (
    <div>
      This component requests and shows a movie in details:
      <div>
        This block renders a single movie.
        <div>
          <Button onClick={linkTo('MoviePage', 'BackToSeachButton')}>
            SEARCH
          </Button>
          <img
            src={
              'https://image.tmdb.org/t/p/w500/fDaOX4BCGwc1im7XYjrzyEbUfX2.jpg'
            }
            alt="movie cover"
            height="300"
            width="200"
          />
          <div>Movie X</div>
          <div> Comedy, Drama </div>
          <div> Here we can see movie description</div>
          <div>01-10-2018</div>
        </div>
      </div>
      <div onClick>
        This block renders <b onClick={linkTo('MoviePage', 'MovieList')}>list</b> of recommended movies based on the genre of a rendered
        movie.
      </div>
    </div>
  ))
  .add('MovieList', () => (
    <div>
      This component renders a list of movies <b onClick={linkTo('MoviePage', 'Movie')}>movies</b>
      <div>
        <img
          src={'https://image.tmdb.org/t/p/w500/f1Mhgu0sxvXEcUYDH4yVWdNh10j.jpg'}
          alt="movie cover"
          height="300"
          width="200"
          onClick={action('It leads to a detailed movie page')}
        />
        <div>Movie X</div>
        <div> Drama, Action </div>
        <div>10-01-2016</div>
      </div>
      <div>
        <img
          src={'https://image.tmdb.org/t/p/w500/xq1Ugd62d23K2knRUx6xxuALTZB.jpg'}
          alt="movie cover"
          height="300"
          width="200"
          onClick={action('It requests a new detailed movie page')}
        />
        <div>Movie X</div>
        <div> Comedy, Action </div>
        <div>02-05-2017</div>
      </div>
      <div>
        <img
          src={'https://image.tmdb.org/t/p/w500/wX7RbjclqHoSWd4NGouDisBHq1o.jpg'}
          alt="movie cover"
          height="300"
          width="200"
          onClick={action('It requests a new detailed movie page')}
        />
        <div>Movie X</div>
        <div> Action, Fantasy </div>
        <div>07-09-2018</div>
      </div>
    </div>
  ))
  .add('Movie', () => (
    <div>
      This component renders an item of movielist:
      <div>
        <img
          src={'https://image.tmdb.org/t/p/w500/wX7RbjclqHoSWd4NGouDisBHq1o.jpg'}
          alt="movie cover"
          height="300"
          width="200"
          onClick={action('It requests a new detailed movie page')}
        />
        <div>Movie X</div>
        <div> Action, Fantasy </div>
        <div>07-09-2018</div>
      </div>
    </div>
  ));
