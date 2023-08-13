import fs from 'fs/promises'

import { unified } from 'unified'
import rmParse from 'remark-parse'
import rmSmartypants from 'remark-smartypants'
import rmFrontmatter from 'remark-frontmatter'
import rmRehype from 'remark-rehype'
import rhShiki from 'rehype-shiki'
import rhStringify from 'rehype-stringify'

import { parse as parseYaml } from 'yaml'
import { parseISO } from 'date-fns'


const rmParser = unified()
  .use(rmParse)
  .use(rmSmartypants)
  .use(rmFrontmatter, 'yaml')

const rhStringifier = unified()
  .use(rmRehype)
  .use(rhShiki)
  .use(rhStringify)


export async function loadPost (filename) {
  const file = await fs.readFile(filename)
  const rmTree = rmParser.parse(file)
  
  const metadata = parseYaml(rmTree.children.shift().value)
  metadata.date = parseISO(metadata.date)
  
  const rhTree = await rhStringifier.run(rmTree)
  const html = rhStringifier.stringify(rhTree)

  return { metadata, html }
}


const rs = await loadPost('./TESTPOST.md')

export default {
  loadPost,
  rs
}