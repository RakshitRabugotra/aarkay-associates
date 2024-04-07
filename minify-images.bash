#!/bin/bash

# Directory containing the images
image_dir="public"

# Install imagemin and pngquant plugin
npm install -g imagemin-cli imagemin-pngquant

# Loop over all image files in the directory
find "$image_dir" -type f \( -iname \*.jpg -o -iname \*.jpeg -o -iname \*.png -o -iname \*.gif -o -iname \*.svg \) | while read file; do
  # Minify the image and overwrite the original image
  imagemin "$file" --plugin=pngquant -o "$(dirname "$file")"
done