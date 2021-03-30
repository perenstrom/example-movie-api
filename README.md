Dummy REST API for returning some movie data.

# `GET /api/movies`
## Parameters
None

## Returns
An array of movies

# `GET /api/movies/:imdbid`
## Parameters
* `imdbid` – IMDb ID for a movie, eg. tt8580274

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
