#!/bin/bash

# 检查是否提供了标题
if [ $# -eq 0 ]; then
    echo "请提供文章标题"
    echo "用法: ./new_post.sh \"文章标题\""
    exit 1
fi

# 获取当前日期
DATE=$(date +"%Y-%m-%d")
TIME=$(date +"%H:%M:%S +0800")

# 将标题转换为文件名格式
TITLE=$1
FILENAME=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/[^a-z0-9-]//g')
FULL_FILENAME="_posts/${DATE}-${FILENAME}.md"

# 创建文件并写入模板内容
cat > "$FULL_FILENAME" << EOF
---
layout: post
title: "$TITLE"
date: $DATE $TIME
categories: blog
---

# $TITLE

在这里开始写作...

EOF

echo "已创建新文章: $FULL_FILENAME"
echo "请开始编辑文件..." 