#!/usr/bin/env bash
if [[ $EUID -ne 0 ]]; then
  echo "This script must be run as root" 
  exit 1
fi
yarn
yarn build
docker build -t swish_link_generator .
docker stop swish_link_generator || true
docker rm swish_link_generator || true
docker run -d -p 3009:3009 --name swish_link_generator swish_link_generator