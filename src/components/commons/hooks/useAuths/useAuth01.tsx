import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";

// 로그인창으로 라우터 푸시 하는 권한분기
export const useAuth01 = () => {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);

  // 로그인 체크
  useEffect(() => {
    if (accessToken === undefined) {
      Modal.error({ content: "로그인 후 이용가능합니다." });
      void router.push("/login");
    }
  }, []);
};
