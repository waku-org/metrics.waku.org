import axios from "axios";

export async function login() {
  return (window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&scope=repo read:org read:project`);
}

export async function isLoggedIn() {
  if (
    !localStorage.getItem("access_token") ||
    !localStorage.getItem("token_expiration") ||
    localStorage.getItem("access_token") === "undefined"
  ) {
    return false;
  }

  if (
    localStorage.getItem("token_expiration") < Math.floor(Date.now() / 1000)
  ) {
    if (
      !localStorage.getItem("refresh_token") ||
      localStorage.getItem("refresh_token_expiration") <
        Math.floor(Date.now() / 1000)
    ) {
      return false;
    } else {
      await refreshToken();
    }
  }

  return true;
}

export async function logout() {
  localStorage.clear();

  window.location.href = "/";
}

export async function getToken(code) {
  const data = (await axios.get(`/api/verify?code=${code}`)).data;

  if (!data.access_token) {
    await logout();
    return false;
  }

  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);
  localStorage.setItem(
    "token_expiration",
    Math.floor(Date.now() / 1000) + data.expires_in - 5
  );
  localStorage.setItem(
    "refresh_token_expiration",
    Math.floor(Date.now() / 1000) + data.refresh_token_expires_in - 5
  );
}

export async function refreshToken() {
  const token = localStorage.getItem("refresh_token");

  if (!token) {
    await logout();
    return false;
  }

  const data = (await axios.get(`/api/refresh?token=${token}`)).data;

  if (!data.access_token) {
    await logout();
    return false;
  }

  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);
  localStorage.setItem(
    "token_expiration",
    Math.floor(Date.now() / 1000) + data.expires_in - 5
  );
  localStorage.setItem(
    "refresh_token_expiration",
    Math.floor(Date.now() / 1000) + data.refresh_token_expires_in - 5
  );
}
