#!/bin/bash
workspace="./packages"

init () {
  [ -d "$1/node_modules" ] && rm -rf "$1/node_modules"
  [ -f "$1/package-lock.json" ] && rm "$1/package-lock.json"
  cd $1 && npm i
  
  if [ $? -eq 0 ]
  then
    echo "$(tput setaf 2)-------------------- successed init $1 --------------------$(tput sgr 0)"
  else
    echo "$(tput setaf 1)-------------------- failed init $1 --------------------$(tput sgr 0)"
  fi

  cd -
}

init "$workspace/design-system/core"
init "$workspace/design-system/infrastructure"
init "$workspace/design-system/themes"
init "$workspace/modules/product-list"
init "$workspace/modules/product-detail"
init "$workspace/applications/my-site"

exit
