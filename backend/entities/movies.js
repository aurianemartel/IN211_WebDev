import typeorm from 'typeorm';

// const Movie = new typeorm.EntitySchema({
//   name: 'movie',
//   columns: {
//     id: {
//       primary: true,
//       generated: 'uuid',
//       type: String,
//     },
//     title: { 
//       type: String,
//       unique: true,
//     },
//     date: { type: String },
//   },
// });

const Movie = new typeorm.EntitySchema({
  name: "movie",
  tableName: "movie",
  columns: {
    id: {
      primary: true,
      generated: 'uuid',
      type: String,
    },
    title: {
      type: String,
      unique: true,
    },
    release_date: {
      type: String,
    },
    poster_path: {
      type: "varchar",
      nullable: true,
    },
    adult: {
      type: "boolean",
      default: false
    },
    backdrop_path: {
      type: "varchar",
      nullable: true,
    },
    genre_ids: {
      type: "simple-array", // stored as comma-separated string
      nullable: true,
    },
    original_language: {
      type: "varchar",
    },
    original_title: {
      type: "varchar",
    },
    overview: {
      type: "text",
      nullable: true,
    },
    popularity: {
      type: "float",
    },
    video: {
      type: "boolean",
      default: false,
    },
    vote_average: {
      type: "float",
    },
    vote_count: {
      type: "int",
    },
  },
});


export default Movie;
