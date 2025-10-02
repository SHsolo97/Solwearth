// WordPress GraphQL API utilities

const API_URL = 'https://wpapi.hstechnopreneur.in/graphql'

async function fetchAPI(query: string, variables = {}) {
  const headers = { 'Content-Type': 'application/json' }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

// Get all posts
export async function getAllPosts(first = 10, after?: string) {
  const data = await fetchAPI(
    `
    query AllPosts($first: Int!, $after: String) {
      posts(first: $first, after: $after, where: { orderby: { field: DATE, order: DESC } }) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `,
    {
      first,
      after,
    }
  )

  return data?.posts
}

// Get a single post by slug
export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        content
        date
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
      }
    }
  `,
    {
      slug,
    }
  )

  return data?.post
}

// Get posts by category
export async function getPostsByCategory(categorySlug: string, first = 10) {
  const data = await fetchAPI(
    `
    query PostsByCategory($categorySlug: String!, $first: Int!) {
      posts(first: $first, where: { categoryName: $categorySlug, orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          author {
            node {
              name
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `,
    {
      categorySlug,
      first,
    }
  )

  return data?.posts?.nodes
}

// Get all categories
export async function getAllCategories() {
  const data = await fetchAPI(
    `
    query AllCategories {
      categories(first: 100) {
        nodes {
          id
          name
          slug
          count
        }
      }
    }
  `
  )

  return data?.categories?.nodes
}

// Get recent posts
export async function getRecentPosts(first = 6) {
  const data = await fetchAPI(
    `
    query RecentPosts($first: Int!) {
      posts(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `,
    {
      first,
    }
  )

  return data?.posts?.nodes
}
