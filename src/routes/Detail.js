import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      const { year, title, summary, poster, genres } = location.state;
      return (
        <div className="movies">
          <div className="movie_poster">
            <img src={poster} alt={title} title={title}></img>
          </div>
          <div className="movie_detail">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="movie_genres">
              {genres.map((genre, index) => (
                <li key={index} className="genres_genre">
                  {genre}
                </li>
              ))}
            </ul>
            <div>{summary}</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
// year,
// title,
// summary,
// poster,
// genres

export default Detail;
