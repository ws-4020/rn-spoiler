#!/bin/bash

########################
# rn-spoilerをテンプレートとして、学習コンテンツの内容を適用したアプリの作成
# 第一引数：アプリ名(Optional. デフォルト値:HandsOnApp)
########################

set -euo pipefail
APP_NAME=${1:-HandsOnApp}

echo "Start creating $APP_NAME."

# 実行ファイルのディレクトリを取得
EXECUTABLE_SCRIPT_DIR=$(cd $(dirname $0); pwd)
# プロジェクトルートを取得
ROOT_DIR=$(cd $EXECUTABLE_SCRIPT_DIR; git rev-parse --show-toplevel)
# パッチファイルが格納されているディレクトリを取得
PATCHES_DIR=$EXECUTABLE_SCRIPT_DIR/patches
# `generated`ディレクトリの中に新規アプリを作成する 
WORK_DIR=$ROOT_DIR/generated
mkdir -p $WORK_DIR
# 新規アプリのルートディレクトリ
APP_ROOT_DIR=$WORK_DIR/$APP_NAME

cd $WORK_DIR
# すでにアプリが存在していた場合は削除
rm -rf $APP_NAME

# rn-spoilerをテンプレートとして、新規アプリを作成
npx react-native init --npm --template https://github.com/ws-4020/rn-spoiler.git $APP_NAME

cd $APP_ROOT_DIR

NPM_VERSION=$(npm -v)
# npm7以上の場合は、エラーが発生するので対処
# https://github.com/ws-4020/rn-spoiler#%E6%96%B0%E8%A6%8F%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90
if [ ${NPM_VERSION:0:1} -ge 7 ]; then
  echo "Reinstall using legacy-peer-deps for npm version 7 or later."
  npm install --legacy-peer-deps
  npx pod-install
fi

git init
git add .
git commit -m "initial commit"

# パッチファイルを適用
for file in $PATCHES_DIR/*;
do
  git apply $file
  git add .
  git commit -m "apply $file."
done

npm i
npx pod-install

git add package-lock.json 
git commit -m "update package-lock.json"

echo "Successfully created $APP_NAME."
