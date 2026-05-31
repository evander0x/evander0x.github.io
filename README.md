# Evander Blog

一个基于 VitePress 的中英双语个人博客骨架仓库。

## 开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 当前结构

- `docs/index.md`：语言入口页
- `docs/zh/`：中文内容
- `docs/en/`：英文内容
- `docs/zh/posts/`、`docs/en/posts/`：文章目录
- `docs/zh/vibe-coding/`、`docs/en/vibe-coding/`：二级栏目示例
- `docs/.vitepress/config.mjs`：中英导航、语言切换、折叠侧边栏配置

## 后续新增二级目录

如果你要新增一个像 `vibe-coding` 这样的折叠栏目，按这个模式继续加：

```text
docs/
  zh/
    vibe-coding/
      index.md
      article-1.md
  en/
    vibe-coding/
      index.md
      article-1.md
```

然后在 `docs/.vitepress/config.mjs` 里，把对应页面链接加入该语言的 sidebar 分组即可。
