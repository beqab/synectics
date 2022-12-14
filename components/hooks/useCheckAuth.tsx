import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ProfileService } from "../../services/profile/profile.http";
import { setAuthorizationToken } from "../../services/axios-with-token";
import { setCurrentUser } from "../../redux/action-creators";

export const useCheckAuth = (redirect = true) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loadUser, setLoadUser] = useState(false);
  useEffect(() => {
    debugger;
    if (localStorage.getItem("token")) {
      debugger;

      if (!(window as any).hasCheckedAuth) {
        setAuthorizationToken(localStorage.getItem("token")!);

        if (!loadUser) {
        }
      }
    } else {
      debugger;
      if (redirect) {
        // router.push("/login");
      }
    }
  }, []);
};
