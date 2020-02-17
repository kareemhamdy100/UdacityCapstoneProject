 
#!/usr/bin/env bash
# This file tags and uploads an image to Docker Hub

# Assumes that an image is built via `run_docker.sh`

dockerpath=blueudacitycapstone

docker tag blueudacitycapstone kareem5020/blueudacitycapstone

docker push kareem5020/blueudacitycapstone