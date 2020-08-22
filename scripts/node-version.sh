#!/bin/bash
echo $PATH
export PATH="/12.18.3/node/bin:$PATH"
echo '上一条命令执行状态：'$?
node -v
