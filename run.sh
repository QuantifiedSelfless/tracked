#!/bin/bash
port=5000

pid=$(lsof -t -i:$port)
if [ -z $pid ]
   then
      echo "The game was not running."
   else
      kill -9 $pid
fi
npm run-script serve
