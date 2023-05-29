import * as React from "react";
import { useQuery, gql } from '@apollo/client';
const GET_HELLO = gql`
  query GetHello {
    hello
  }
`;

export function Dashboard() {
  const { loading, error, data } = useQuery(GET_HELLO);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
    return (
      <div>
        <h2>It Works!!! {data.hello}</h2>
      </div>
    );
  }