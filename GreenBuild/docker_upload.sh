#!/usr/bin/env bash
# This file tags and uploads an image to Docker Hub

# Assumes that an image is built via `run_docker.sh`


dockerpath=greenudacitycapstone


docker tag greenudacitycapstone kareem5020/greenudacitycapstone

docker push kareem5020/greenudacitycapstone