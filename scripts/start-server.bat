@echo off
REM EMSTYLAR — Lance un serveur HTTP local pour developper/tester le site.
cd /d "%~dp0\.."
echo Demarrage du serveur local EMSTYLAR...
echo Site disponible sur : http://localhost:8000
python -m http.server 8000
