# Web Book Boilerplate
### The easiest way of writing books for the web

With the Web Book Boilerplate you have the perfect place to start writing your book!
It uses plain old markdown and generates a well structured HTML version of your written
words. Since it's sitting on top of [Pandoc](http://johnmacfarlane.net/pandoc/) and
[Grunt](http://gruntjs.com), you can easily make your books available for every platform!

The Web Book Boilerplate is also compatible with [Leanpub](http://leanpub.com), so
even publishing your books works like a charm.

## Features

* Grunt to automate all the things!
* Pandoc-based doc generation
* Supports most used formats: mobi, epub, HTML
* Compatible with Leanpub
* Markdown-based
* SASS support

## Documentation

Checkout the full documentation right [here](http://github.com/PascalPrecht/wbb/wiki)!

## Quickstart

**Dependencies:**
* [Pandoc](http://johnmacfarlane.net/pandoc/)
* [Kindlegen](http://www.amazon.com/gp/feature.html?ie=UTF8&docId=1000765211)
* [SASS](http://sass-lang.com)


Clone the repository via git and install the npm dependencies

```
$ git clone https://github.com/PascalPrecht/wbb new-book
$ cd new-book
$ npm install
```
Ready to start! Write your book by creating chapter files in <code>src/chapters</code>.
Add as many chapters as you want. wbb internally uses [Pandoc](http://johnmacfarlane.net/pandoc/);
checkout their user guide for more information on writing markdown.

When finished writing build your book via

```
$ grunt wbb:html
```
to get a ready-to-publish html version.

Following formats are supported:

* <code>wbb:html</code> - HTML version
* <code>wbb:epub</code> - epub version
* <code>wbb:mobi</code> - mobi version
* <code>wbb:rtf</code> - rtf version

If you want to publish your book on [leanpub.com](http://leanpub.com), wbb is your friend.
It provides a task to prepare your leanpub publishing process. After running

```
$ grunt wbb:leanpub
```
simply copy the contents of <code>builds/leanpub</code> into your <code>manuscript</code>
folder which should be located in your dropbox.

**Note:**
Don't forget to update <code>src/Book.txt</code> and <code>src/Sample.txt</code>!

More information: [https://leanpub.com/help/manual#the-booktxt-file](https://leanpub.com/help/manual#the-booktxt-file)

You can also run

```
$ grunt wbb:publish
```
to execute all wbb tasks.

## Self-Promotion
Like wbb? Follow the repo on [Github](http://github.com/PascalPrecht/wbb). Any open questions?
Follow Pascal Precht on [Github](http://github.com/PascalPrecht) and [Twitter](http://twitter.com/PascalPrecht).
