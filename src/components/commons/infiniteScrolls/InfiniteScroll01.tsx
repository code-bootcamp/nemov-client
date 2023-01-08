// import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
import { IQuery } from "../../../commons/types/generated/types";

interface IInfiniteScroll01Props {
  data?: Pick<IQuery, "fetchProducts">;
  fetchMore?: any;
  children: JSX.Element;
}

export default function InfiniteScroll01(props: IInfiniteScroll01Props) {
  const onLoadMore = async () => {
    if (props.data === undefined) return;
    await props.fetchMore({
      variables: {
        page: Math.ceil(props.data.fetchProducts.length / 10) + 1,
      },
      updateQuery: (prev: Pick<IQuery, "fetchProducts">, { fetchMoreResult }: any) => {
        if (fetchMoreResult.fetchProducts === undefined) {
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
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <InfiniteScroll pageStart={1} loadMore={onLoadMore} hasMore={true || false} useWindow={false}>
        {props.children}
      </InfiniteScroll>
    </div>
  );
}
