import {GraphQLClient} from 'graphql-request'

const baseUrl: any = process.env.REACT_APP_BASE_URL;
const graphQLClient  = new GraphQLClient(baseUrl);

export default graphQLClient ;