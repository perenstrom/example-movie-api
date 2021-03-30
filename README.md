Dummy REST API for returning some movie data with built in, and adjustable, delay.

# `GET /api/movies`
## Parameters
* `delay` – Delay in ms or `nodelay`, default: 5000

## Returns
An array of movies

# `GET /api/movies/:imdbid`
## Parameters
* `imdbid` – IMDb ID for a movie, eg. tt8580274
* `delay` – Delay in ms or `nodelay`, default: 5000

## Returns
A single Movie

# Movie model
```
{
  imdbId: string;
  name: string;
  poster: string;
}
```
* `imdbId`: the IMDb ID for the movie
* `name`: movie name
* `poster`: URL for the movie poster image
