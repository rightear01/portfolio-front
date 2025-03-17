import axios from 'axios';

// const API_BASE_URL = 'http://10.10.83.128:8080';
// const API_BASE_URL = 'http://10.10.10.48:8080';
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://10.10.10.48:8080';
export const OAUTH_API_BASE_URL = process.env.REACT_APP_OAUTH_API_BASE_URL || 'http://localhost:3000';
// 기존 boot-todo 에서 사용했던 방식대로 일단 넣어 놓음
export async function call(method, api, request, customHeaders = {}) {
  // (엔드 포인트, 요청 메서드, DTO 등 body에 해당)
  const headers = {
    ...(request instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
    ...customHeaders,
  };

  const userData = sessionStorage.getItem('USER_DATA');
  if (userData) {
    headers['Authorization'] = `Bearer ${JSON.parse(userData).token}`;
  }

  const options = {
    method: method,
    url: `${API_BASE_URL}${api}`,
    headers: headers,
    // axios는 body 대신 data를 사용 - JSON으로 자동으로 변환
    ...(request && { data: request }), // request가 있을 때만 data 추가
  };

  // 에러 처리에 이점이 있음
  try {
    const response = await axios(options);
    // axios는 응답 데이터를 자동으로 JSON 파싱
    return response.data;
  } catch (error) {
    // if (error.response.status === 401) {
    //   alert('로그인이 필요한 서비스입니다.');
    //   window.location.href = '/';
    //   return;
    // }
    // if (error.response.status === 403) {
    //   alert('접근 권한이 없습니다.');
    //   window.location.href = '/';
    //   return;
    // }
    console.error('HTTP error: ', error);
    throw error.response ? error.response : error;
  }
}
