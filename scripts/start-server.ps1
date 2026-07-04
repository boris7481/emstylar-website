# EMSTYLAR - Lance un serveur HTTP local pour developper/tester le site.
Set-Location (Join-Path $PSScriptRoot "..")
Write-Host "Demarrage du serveur local EMSTYLAR..."
Write-Host "Site disponible sur : http://localhost:8000"
python -m http.server 8000
