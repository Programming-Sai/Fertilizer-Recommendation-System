#!/bin/bash

gitAll() {
    git add . && git commit -m "$1" && git push
}


if [ -n "$1" ] && [ -n "$2" ]; then 
    gitAll "$1" && npm run build && npm run deploy --message="$2"
else
    gitAll "Made some modification" && npm run build && npm run deploy
fi

