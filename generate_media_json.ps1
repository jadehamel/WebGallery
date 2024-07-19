$mediaPath = Get-Location
$mediaFiles = Get-ChildItem -Path $mediaPath -File | Where-Object { $_.Name -match "\.(jpg|jpeg|png|gif|bmp|tiff|webp|mp4|webm|ogg|avi|mov|wmv|flv|mkv)$" }
$mediaList = $mediaFiles.Name
$mediaJson = $mediaList | ConvertTo-Json

Set-Content -Path "$mediaPath\medias.json" -Value $mediaJson
