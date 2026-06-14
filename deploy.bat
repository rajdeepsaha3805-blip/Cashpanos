@echo off
echo Deploying Cashpanos Landing Page Update...
git checkout -b cashpanos
git add .
git commit -m "feat: Overhaul landing page with immersive animations and testimonials"
git push -u origin cashpanos
echo.
echo Deployment attempt finished. If you saw a 403 error, please authenticate your Git credentials.
pause
