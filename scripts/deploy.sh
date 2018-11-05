#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# commit
git init
git add -A
git commit -m '🚀 Deploy'

# push
git push -f https://github.com/assurance-maladie-digital/vue-dot.git master:gh-pages

cd -
