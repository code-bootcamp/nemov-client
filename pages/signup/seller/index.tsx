import { useRouter } from "next/router";
import Signup from "../../../src/components/units/signup/Signup.index";

export default function SignupSellerPage() {
  const router = useRouter();
  const bln = router.query.bln;

  return <Signup isSeller={true} bln={bln} />;
}
