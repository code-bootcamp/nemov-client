// import styled from "@emotion/styled";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { IQuery } from "../../../commons/types/generated/types";

interface IInfiniteScroll02Props {
  data?: Pick<IQuery, "fetchProducts">;
  fetchMore?: any;
  children: JSX.Element;
}

export default function InfiniteScroll02(props: IInfiniteScroll02Props) {
  const [length, setLength] = useState(0);

  const onLoadMore = () => {
    if (props.data?.fetchProducts === undefined) return;
    setLength(props.data.fetchProducts.length);
    void props.fetchMore({
      variables: {
        page: Math.ceil(props.data.fetchProducts.length / 9) + 1,
      },
      updateQuery: (prev: Pick<IQuery, "fetchProducts">, { fetchMoreResult }: any) => {
        // console.log("이전 페이지", prev, "새로운 페이지", fetchMoreResult.fetchProducts);
        if (!fetchMoreResult?.fetchProducts) {
          return {
            fetchProducts: [...prev.fetchProducts],
          };
        }
        return {
          fetchProducts: [...prev.fetchProducts, ...fetchMoreResult?.fetchProducts],
        };
      },
    });
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        overflow: "auto",
        paddingTop: "10px",
        justifyContent: "center",
      }}
    >
      <InfiniteScroll
        dataLength={length}
        next={onLoadMore}
        hasMore={true}
        loader={<h1>Loading...</h1>}
      >
        {props.children}
      </InfiniteScroll>
    </div>
  );
}
