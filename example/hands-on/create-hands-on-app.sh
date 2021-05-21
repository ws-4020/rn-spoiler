#!/bin/bash

set -euo pipefail

EXECUTABLE_SCRIPT_DIR=$(cd $(dirname $0); pwd)
PATCHES_DIR=$EXECUTABLE_SCRIPT_DIR/patches

cd $EXECUTABLE_SCRIPT_DIR
cd ../../../

WORK_DIR=$(pwd)
APP_NAME=TestApp
APP_ROOT_DIR=$WORK_DIR/$APP_NAME

cd $WORK_DIR

npx react-native init --template https://github.com/ws-4020/rn-spoiler.git $APP_NAME

cd $APP_ROOT_DIR

npm install --legacy-peer-deps
npx pod-install

git apply $PATCHES_DIR/01.welcome.patch
