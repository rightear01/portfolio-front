import { useState, useEffect } from 'react';
import { call } from '../service/apiService';

const useFetch = (url) => {
  const [data, setData] = useState([]); // 데이터를 저장할 상태
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // 로딩 시작
      try {
        const response = await call('GET', url); // API 호출
        setData(response); // 데이터를 상태에 저장
      } catch (err) {
        console.error('API 호출 실패:', err); // 에러 출력
        setError(err.message || '데이터를 가져오는 중 문제가 발생했습니다.'); // 에러 메시지 설정
      } finally {
        setLoading(false); // 로딩 종료
      }
    };

    fetchData(); // 데이터 호출 실행
  }, [url]); // URL이 변경될 때만 실행

  return { data, loading, error };
};

export default useFetch;
