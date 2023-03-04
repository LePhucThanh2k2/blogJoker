import { api } from "../../api";
export const ACT_FETCH_INFO_USER = "ACT_FETCH_INFO_USER";

export function actFetchInfoUser(data) {
  return {
    type: ACT_FETCH_INFO_USER,
    payload: { data },
  };
}

export function actRegisterAsync(inputs) {
  return async (dispatch) => {
    try {
      const res = await api.post("/wp/v2/users/register", inputs);

      return { ok: true };
    } catch (error) {
      return { ok: false, message: error.response.data.message };
    }
  };
}

export function actLoginAsync(inputs) {
  return async (dispatch) => {
    try {
      const res = await api.post("/jwt-auth/v1/token", inputs);
      dispatch(actFetchInfoUserAsync(res.data.token));
      localStorage.setItem("token", res.data.token);
      return { ok: true };
    } catch (error) {
      return { ok: false, message: error.response.data.message };
    }
  };
}
export function actFetchInfoUserAsync(token) {
  const tokenAtLocal = localStorage.getItem("token");
  const configToken = token || tokenAtLocal;
  return async (dispatch) => {
    try {
      const res = await api.get("/wp/v2/users/me", {
        headers: {
          Authorization: `Bearer ${configToken} `,
        },
      });
      dispatch(actFetchInfoUser(res.data));
      return { ok: true };
    } catch (error) {
      return { ok: false, message: error.response.data.message };
    }
  };
}
