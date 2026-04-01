export async function authenticateWithPhone(request, { userId, phone }) {
  // Step 1: login (mock or real API)
  const response = await request.post('/auth/login', {
    data: { userId, phone }
  });

  const body = await response.json();

  const token = body.token;

  // Step 2: return authenticated request context
  const authRequest = await request.newContext({
    extraHTTPHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return authRequest;
}