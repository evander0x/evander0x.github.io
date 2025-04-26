# My Jekyll Blog

Access address: https://evander0x.github.io/

This is my personal blog built with Jekyll and hosted on GitHub Pages.

## Project Structure

```
.
├── _config.yml          # Jekyll configuration file
├── _layouts/            # Layout templates
├── _posts/             # Blog posts (posts must be named YYYY-MM-DD-title.md)
├── _site/              # Generated site (do not edit)
├── assets/             # Static assets (images, CSS, JS)
├── index.md            # Homepage content
└── Gemfile             # Ruby dependencies
```

创建一份新的博客使用方法，文件存放在 \_posts 文件里面

```shell
./new_post.sh "您的文章标题"
```

工作流：

修改内容，执行命令，自动生成 \_site
后续渲染会渲染 \_site 里面的内容

## Local Development

To run this blog locally:

1. Install Ruby and Bundler
2. Run `bundle install`
3. Run `bundle exec jekyll serve`
4. Visit `http://localhost:4000`

## License

This project is open source and available under the [MIT License](LICENSE).
