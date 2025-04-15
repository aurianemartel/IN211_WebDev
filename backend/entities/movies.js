import typeorm from 'typeorm';

const Movie = new typeorm.EntitySchema({
  name: 'Movie',
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
    date: { type: String },
  },
});

export default Movie;
