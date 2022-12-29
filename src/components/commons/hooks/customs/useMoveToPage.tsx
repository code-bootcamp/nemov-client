import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { isOpenState } from "../../../../commons/stores";

export const useMoveToPage = () => {
  const router = useRouter();
  const [, setOpen] = useRecoilState(isOpenState);

  const onClickMoveToPage = (path: string) => () => {
    void router.push(path);
    setOpen(false);
  };

  return {
    onClickMoveToPage,
  };
};
