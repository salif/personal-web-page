#!/usr/bin/env node
const fs = require("fs")
const path = require("path")
const tname = process.argv[2]
const tbranch = process.argv[3]
if (tname == undefined || tbranch == undefined) {
	throw new Error(`Arguments: name = ${tname}, branch = ${tbranch}`)
}
const template = `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en-us">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="go-import" content="salif.eu/go/${tname} git https://github.com/salif/${tname}">
    <meta name="go-source" content="salif.eu/go/${tname} https://github.com/salif/${tname} https://github.com/salif/${tname}/tree/${tbranch}{/dir} https://github.com/salif/${tname}/blob/${tbranch}{/dir}/{file}#L{line}">
    <meta http-equiv="refresh" content="0; url=https://github.com/salif/${tname}">
</head>
</html>`
const dir = path.resolve(__dirname, tname)
fs.mkdirSync(dir)
fs.writeFileSync(path.join(dir, "index.html"), template)
