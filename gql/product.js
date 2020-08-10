import gql from 'graphql-tag';

export const Register_Account = gql`
query products(sortBy: ProductOrder!){
  products(sortBy: $sortBy) {
    edges {
      node {
        id
        seoTitle
        seoDescription
        name
        pricing {
          priceRange {
            start {
              gross {
                amount
                currency
              }
            }
          }
          discount {
            gross {
              amount
              currency
            }
          }
          priceRangeUndiscounted {
            start {
              gross {
                amount
                currency
              }
            }
          }
        }
        thumbnail {
          url
        }
        minimalVariantPrice {
          amount
          currency
        }
      }
      cursor
    },
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
`;
