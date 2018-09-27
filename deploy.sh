#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m ':package: Deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/assurance-maladie-digital/vue-dot.git master:gh-pages

cd -
