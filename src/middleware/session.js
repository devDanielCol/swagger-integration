function SessionMiddleware(req, resp, next) {
  let TOKEN = "";
  const accesToken = req.headers.authorization;

  if (accesToken) {
    const bearer_token = accesToken.startsWith("bearer");

    if (!bearer_token) {
      TOKEN = accesToken;
    }
    TOKEN = accesToken.slice("bearer ".length, accesToken.length);

    try {
      const userInSession = decodeToken(TOKEN);
      req.session = userInSession;
      return next();
    } catch (error) {
      console.error(error);
      return resp
        .status(401)
        .json({ error: "Unauthorized", errDescription: "Invalid token" });
    }
  }

  return resp.status(401).json({ error: "Unauthorized" });
}

function decodeToken(token = "") {
  try {
    // ... JWT DECODE TOKEN
    return {};
  } catch (error) {
    throw Error("Invalid Token");
  }
}

export default SessionMiddleware;
