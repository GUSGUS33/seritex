import { graphql } from '../gql';

// =============================================================================
// ===== CONSULTAS PARA CATEGORÍAS DE PRODUCTOS =====
// =============================================================================

/**
 * Obtiene todas las categorías de productos WooCommerce
 * Utilizada para navegación y filtros de productos
 */
export const GET_PRODUCT_CATEGORIES = graphql(`
  query GetProductCategories {
    productCategories(first: 10) {
      nodes {
        id
        name
        slug
        description
        image {
          sourceUrl
          altText
        }
        count
      }
    }
  }
`);

// =============================================================================
// ===== CONSULTAS PARA PRODUCTOS INDIVIDUALES =====
// =============================================================================

/**
 * PRODUCTOS POR CATEGORÍA - Productos WooCommerce dinámicos
 * Obtiene productos por categoría con detalles de Simple y Variable Product
 */
export const GET_DYNAMIC_PRODUCTS_BY_CATEGORY = graphql(`
  query GetDynamicProductsByCategory($categoriaSlug: [String], $cantidad: Int) {
    productosPorCategoria: products(where: { categoryIn: $categoriaSlug }, first: $cantidad) {
      nodes {
        id
        name
        slug
        ... on Product {
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
        ... on SimpleProduct {
          price
          regularPrice
          salePrice
          shortDescription
          onSale
          stockStatus
          stockQuantity
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
        ... on VariableProduct {
          price
          regularPrice
          salePrice
          shortDescription
          onSale
          stockStatus
          stockQuantity
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`);

/**
 * Obtiene un producto variable completo con todas sus variaciones
 * Incluye atributos, galería de imágenes y stock
 */
export const GET_FULL_VARIABLE_PRODUCT = graphql(`
  query GetFullVariableProduct($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      ... on VariableProduct {
        id
        name
        slug
        price
        regularPrice
        salePrice
        onSale
        stockStatus
        stockQuantity
        shortDescription
        description
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        galleryImages {
          nodes {
            sourceUrl
            altText
          }
        }
        productCategories {
          nodes {
            id
            name
            slug
          }
        }
        attributes {
          nodes {
            id
            name
            options
          }
        }
        variations(first: 50) {
          nodes {
            id
            name
            sku
            price
            stockStatus
            stockQuantity
            attributes {
              nodes {
                name
                value
              }
            }
            image {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`);

/**
 * Obtiene productos por categoría específica
 * Utilizada para páginas de categoría de productos
 */
export const GET_PRODUCTS_BY_CATEGORY = graphql(`
  query GetProductsByCategory($categorySlug: ID!, $first: Int = 12) {
    productCategory(id: $categorySlug, idType: SLUG) {
      id
      name
      slug
      description
      image {
        sourceUrl
        altText
      }
      products(first: $first) {
        nodes {
          id
          name
          slug
          ... on ProductWithPricing {
            price
            regularPrice
            salePrice
          }
          ... on SimpleProduct {
            stockStatus
            onSale
          }
          ... on VariableProduct {
            stockStatus
            onSale
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          productCategories {
            nodes {
              id
              name
              slug
            }
          }
        }
      }
    }
  }
`);

// =============================================================================
// ===== CONSULTAS PARA BÚSQUEDA Y FILTROS =====
// =============================================================================

/**
 * Búsqueda de productos variables por categoría
 * Utilizada en filtros y navegación de productos
 */
export const GET_VARIABLE_PRODUCTS_BY_CATEGORY = graphql(`
  query GetVariableProductsByCategory($category: String!, $first: Int = 50) {
    products(where: { category: $category }, first: $first) {
      nodes {
        ... on VariableProduct {
          id
          name
          slug
          price
          productCategories {
            nodes {
              name
              slug
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`);

/**
 * Búsqueda de productos por texto
 * Utilizada en el buscador de productos
 */
export const SEARCH_PRODUCTS = graphql(`
  query SearchProducts($search: String!, $first: Int = 20) {
    products(where: { search: $search }, first: $first) {
      nodes {
        id
        name
        slug
        ... on VariableProduct {
          price
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`);

/**
 * Productos por categoría con fragments para máxima compatibilidad
 * Versión optimizada con fragments para diferentes tipos de productos
 */
export const GET_PRODUCTS_BY_CATEGORY_WITH_FRAGMENTS = graphql(`
  query GetProductsByCategoryWithFragments($slug: String!, $first: Int = 100) {
    products(where: { category: $slug }, first: $first) {
      nodes {
        id
        slug
        name
        __typename
        shortDescription
        description
        ... on ProductWithPricing {
          price
        }
        ... on Product {
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          productCategories {
            nodes {
              id
              name
              slug
            }
          }
        }
        ... on VariableProduct {
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
        ... on SimpleProduct {
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`);

// =============================================================================
// ===== CONSULTAS PARA BLOG POSTS =====
// =============================================================================

export const GET_POSTS = graphql(`
  query GetPosts {
    posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        excerpt
        slug
        date
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
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
          }
        }
      }
    }
  }
`);

export const GET_POST_BY_SLUG = graphql(`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      excerpt
      content
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
`);

export const GET_ALL_POSTS_SLUGS = graphql(`
  query GetAllPostsSlugs {
    posts(first: 100) {
      nodes {
        slug
      }
    }
  }
`);

// =============================================================================
// ===== CONSULTAS PARA CONTENIDO SEO SIMPLIFICADO =====
// =============================================================================

/**
 * Consulta simplificada para obtener contenido básico de páginas SEO
 * Esta consulta evita campos problemáticos y se enfoca en datos esenciales
 */
export const GET_SEO_PAGE_CONTENT = graphql(`
  query GetSEOPageContent($slug: String!) {
    pages(where: { name: $slug }) {
      nodes {
        databaseId
        title
        content
        slug
        date
        modified
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`);
