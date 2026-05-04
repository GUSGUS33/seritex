import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { print } from 'graphql';

/**
 * Utilidad para realizar consultas GraphQL al Headless CMS.
 * Utiliza fetch nativo de Next.js para aprovechar la caché y revalidación.
 */

export async function fetchGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables> | string,
  variables?: TVariables,
  // Utilizamos el revalidate que viene por parámetro (por defecto 60 segundos)
  revalidate: number = 60 
): Promise<TResult> {
  const endpoint = process.env.GRAPHQL_ENDPOINT || 'https://cms.serigrafia-textil.es/graphql';

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${process.env.CMS_TOKEN}`, // Descomentar si el CMS requiere token
      },
      body: JSON.stringify({
        query: typeof document === 'string' ? document : print(document),
        variables,
      }),
      // Activamos la caché de Next.js usando ISR
      next: { revalidate },
    });

    const json = await response.json();

    if (json.errors) {
      console.error('GraphQL Errors:', json.errors);
      throw new Error('Error en la consulta GraphQL');
    }

    return json.data;
  } catch (error) {
    console.error('Error fetching GraphQL:', error);
    throw error;
  }
}
