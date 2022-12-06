import { axiosHeaderConfig } from "../api";
import { axiosWithToken } from "../axios-with-token";
import axios from "axios";
import { backEndRoutes } from "../backend-routes";

class _ProfileService {
  contact = (data: any) => {
    return axios.post(backEndRoutes.profile.contact(), data);
  };
}

export const ProfileService = new _ProfileService();
