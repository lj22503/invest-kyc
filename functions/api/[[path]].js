// Cloudflare Pages Function - API Proxy
// 代理 /api/* 请求到后端服务器

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  
  // 后端服务器地址（使用 Cloudflare Tunnel 临时 URL）
  const API_BASE = 'https://tray-transportation-threshold-workplace.trycloudflare.com';
  
  // 构建目标 URL
  const targetUrl = `${API_BASE}${url.pathname}${url.search}`;
  
  try {
    // 转发请求
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: {
        ...Object.fromEntries(request.headers),
        'Host': 'api.mangofolio.com'
      },
      body: request.method !== 'GET' && request.method !== 'HEAD' ? await request.arrayBuffer() : undefined
    });
    
    // 返回响应
    return new Response(response.body, {
      status: response.status,
      headers: {
        ...Object.fromEntries(response.headers),
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      status: 'error',
      message: 'API 代理错误',
      error: error.message
    }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
