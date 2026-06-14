@echo off
echo Deploying Cashpanos Culinary Update...
git add .
git commit -m "feat: Upgrade Cashpanos to premium culinary showcase with 3D menus"
git push -u origin main
echo.
echo Deployment attempt finished. If you saw a 403 error, please authenticate your Git credentials.
pause
