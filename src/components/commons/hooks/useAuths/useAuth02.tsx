import { Modal } from "antd";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState, restoreAccessTokenLoadable } from "../../../../commons/stores";

// 라우터 푸시 없는 권한분기
export const useAuth02 = () => {
  const [accessToken] = useRecoilState(accessTokenState);
  const restoreToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // 로그인 체크
  useEffect(() => {
    void restoreToken.toPromise().then((newAccessToken) => {
      console.log(newAccessToken);
      if (!accessToken) {
        Modal.error({ content: "로그인 후 이용 가능한 서비스입니다." });
      }
    });
  }, []);
};
