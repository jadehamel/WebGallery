# WebGallery

Welcome to WebGallery, a simple media gallery project to showcase photos and videos. This project aims to create an easy-to-use interface for viewing and downloading media files.

## Features

- Display photos and videos in a thumbnail gallery.
- Click on thumbnails to view media in full size.
- Support for various media formats including images and videos.
- Download media files directly from the gallery.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Media Formats Supported](#media-formats-supported)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

To get started with WebGallery, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/jadehamel/WebGallery.git
   ```
2. Navigate to the project directory:
   ```sh
   cd WebGallery
   ```
3. Ensure you have a web server installed. If not, you can use a simple HTTP server like `http-server`:
   ```sh
   npm install -g http-server
   ```

## Usage

1. Start the web server:
   ```sh
   http-server
   ```
2. Open your browser and navigate to `http://localhost:8080` (or the port number specified by your server).
3. The gallery will display thumbnails of all supported media files listed in `medias.json`.
4. Click on any thumbnail to view the media in full size.
5. Use the download link below each thumbnail to download the media file.

## Media Formats Supported

### Images
- JPG
- JPEG
- PNG
- GIF
- BMP
- TIFF
- WEBP

### Videos
- MP4
- WEBM
- OGG
- AVI
- MOV
- WMV
- FLV
- MKV

## Project Structure

The project directory contains the following files:

- `index.html`: The main HTML file for the gallery.
- `medias.json`: A JSON file listing all media files to be displayed in the gallery.
- `generate_media_json.ps1`: A PowerShell script to generate `medias.json` automatically by scanning the media directory.
- `styles.css`: The CSS file for styling the gallery.
- `scripts.js`: The JavaScript file containing the functionality for displaying and interacting with the media gallery.

### `index.html`
This file sets up the basic structure of the media gallery and includes the styles and scripts required.

### `medias.json`
An example of the `medias.json` file:
```json
[
  "path/to/photo1.jpg",
  "path/to/photo2.png",
  "path/to/video1.mp4"
]
```

### `generate_media_json.ps1`
This script can be run to generate or update the `medias.json` file based on the media files available in the specified directory. 

### `styles.css`
Contains CSS rules for styling the media gallery, including thumbnail layout and full-size display.

### `scripts.js`
Includes JavaScript functions to:
- Fetch and parse the `medias.json` file.
- Generate and display thumbnails.
- Handle thumbnail click events to display media in full size.
- Provide download links for media files.
