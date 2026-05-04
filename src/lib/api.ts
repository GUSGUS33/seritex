import { fetchGraphQL } from './graphql';
import * as queries from './queries';

// ============================================================================
// Funciones Helper para llamar a la API de GraphQL de forma sencilla
// ============================================================================

export async function getProductCategories() {
  return fetchGraphQL(queries.GET_PRODUCT_CATEGORIES);
}

export async function getDynamicProductsByCategory(categoriaSlug: string[], cantidad: number = 10) {
  return fetchGraphQL(queries.GET_DYNAMIC_PRODUCTS_BY_CATEGORY, {
    categoriaSlug,
    cantidad
  });
}

export async function getFullVariableProduct(slug: string) {
  return fetchGraphQL(queries.GET_FULL_VARIABLE_PRODUCT, { slug });
}

export async function getProductsByCategory(categorySlug: string, first: number = 12) {
  return fetchGraphQL(queries.GET_PRODUCTS_BY_CATEGORY, { categorySlug, first });
}

export async function getVariableProductsByCategory(category: string, first: number = 50) {
  return fetchGraphQL(queries.GET_VARIABLE_PRODUCTS_BY_CATEGORY, { category, first });
}

export async function searchProducts(search: string, first: number = 20) {
  return fetchGraphQL(queries.SEARCH_PRODUCTS, { search, first });
}

export async function getProductsByCategoryWithFragments(slug: string, first: number = 100) {
  return fetchGraphQL(queries.GET_PRODUCTS_BY_CATEGORY_WITH_FRAGMENTS, { slug, first });
}

export async function getSeoPageContent(slug: string) {
  return fetchGraphQL(queries.GET_SEO_PAGE_CONTENT, { slug });
}

export async function getPosts() {
  try {
    const data = await fetchGraphQL(queries.GET_POSTS);
    return data?.posts;
  } catch (e) {
    console.error("Failed to fetch posts:", e);
    return { nodes: [] };
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const data = await fetchGraphQL(queries.GET_POST_BY_SLUG, { slug });
    return data?.post;
  } catch (e) {
    console.error("Failed to fetch post by slug:", e);
    return null;
  }
}

export async function getAllPostsSlugs() {
  try {
    const data = await fetchGraphQL(queries.GET_ALL_POSTS_SLUGS);
    return data?.posts;
  } catch (e) {
    console.error("Failed to fetch post slugs:", e);
    return { nodes: [] };
  }
}
