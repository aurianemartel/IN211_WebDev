#!/bin/bash

API_KEY="57359ff087905e870d40ba4880a1dce0"
BACKEND_URL="http://localhost:8080/api/movies/new"
# BACKEND_URL=https://in211-auriane-hxs21isig-auriane-martels-projects.vercel.app/api/movies/new
TMDB_BASE_URL="https://api.themoviedb.org/3/movie/popular"

# Loop through pages 1 to 10
for page in {1..10}; do
  echo "📥 Fetching page $page..."

  response=$(curl -s "$TMDB_BASE_URL?api_key=$API_KEY&page=$page")

  # echo response $response

  echo "$response" | jq -c '.results[]' | while read -r movie; do
    # Extract title for logging
    title=$(echo "$movie" | jq -r '.title')

    # Send to backend
    curl -s -X POST "$BACKEND_URL" \
      -H "Content-Type: application/json" \
      -d "$(echo "$movie" | jq '{
        title: .title,
        release_date: .release_date,
        adult: .adult,
        backdrop_path: .backdrop_path,
        genre_ids: .genre_ids,
        original_language: .original_language,
        original_title: .original_title,
        overview: .overview,
        popularity: .popularity,
        poster_path: .poster_path,
        video: .video,
        vote_average: .vote_average,
        vote_count: .vote_count
      }')"

    echo "✅ Inserted: $title"
  done
done

echo "✅ Done importing 200 movies."
