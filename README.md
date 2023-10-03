# Vite-js + tailwindcss

this is a prototype vite compiler for MPA with Vanilla JS and tailwindcss

A bug: inconsistency of the result of running dev mode and build Problem:
background: url()
images paths are not transpile correctly when running build mode.

Attempt1: Define the paths directly through JS
Result:
It worked on browser but still getting "No loader is configured Error" and deploy failed.

Attempt2: Define the image paths by internal style css in the HTML file
Result:
It worked out without getting any errors



