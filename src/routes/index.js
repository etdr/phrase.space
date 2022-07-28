// thx to https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog#returning-posts-from-an-endpoint

export async function GET () {
  const postFiles = import.meta.glob('./posts/*.md')
  const postFileTuples = Object.entries(postFiles)
  
  const posts = await Promise.all(
    postFileTuples.map(async ([path, importer]) => {
      const { metadata } = await importer()

      return {
        metadata,
        path: path.slice(2, -3)
      }
    })
  )

  return {
    body: {
      posts: posts.sort((p0, p1) => new Date(p1.metadata.date) - new Date(p0.metadata.date))
    }
  }
}