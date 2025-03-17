export const parseDateTime = (dateString) => {
  const year = parseInt(dateString.slice(0, 4), 10); // 2023
  const month = parseInt(dateString.slice(4, 6), 10) - 1; // 월은 0부터 시작하므로 -1 필요
  const day = parseInt(dateString.slice(6, 8), 10); // 05
  const hour = parseInt(dateString.slice(8, 10), 10); // 10
  const minute = parseInt(dateString.slice(10, 12), 10); // 30
  const second = parseInt(dateString.slice(12, 14), 10); // 00

  // Date 객체 생성
  const date = new Date(year, month, day, hour, minute, second);

  // 한국 로케일 형식으로 출력
  const options = { month: 'long', day: 'numeric', weekday: 'long' };
  const formatter = new Intl.DateTimeFormat('ko-KR', options);

  // 포맷팅된 결과
  const formattedDate = formatter.format(date);

  return formattedDate;
};

export const parseDateTimeWithYear = (dateString) => {
  const year = parseInt(dateString.slice(0, 4), 10); // 2023
  const month = parseInt(dateString.slice(4, 6), 10) - 1; // 월은 0부터 시작하므로 -1 필요
  const day = parseInt(dateString.slice(6, 8), 10); // 05
  const hour = parseInt(dateString.slice(8, 10), 10); // 10
  const minute = parseInt(dateString.slice(10, 12), 10); // 30
  const second = parseInt(dateString.slice(12, 14), 10); // 00

  // Date 객체 생성
  const date = new Date(year, month, day, hour, minute, second);

  // 한국 로케일 형식으로 출력
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formatter = new Intl.DateTimeFormat('ko-KR', options);

  // 포맷팅된 결과
  const formattedDate = formatter.format(date);

  return formattedDate;
};

export const formatTo14Digits = (dateString) => {
  // Date 객체 생성
  const date = new Date(dateString);

  // 연도, 월, 일, 시, 분, 초 추출
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
  const day = String(date.getDate()).padStart(2, '0'); // 2자리로 맞춰줌(PadStart)
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // YYYYMMDDHHMMSS 형식으로 반환
  return `${year}${month}${day}${hours}${minutes}${seconds}`;
};

export const parse14DigitsToDate = (dateString) => {
  console.log(dateString);
  if (!dateString || dateString.length !== 14 || isNaN(Number(dateString))) {
    throw new Error('유효하지 않은 날짜 형식입니다. 14자리 YYYYMMDDHHMMSS 형식이어야 합니다.');
  }

  const year = parseInt(dateString.slice(0, 4), 10); // 연도
  const month = parseInt(dateString.slice(4, 6), 10) - 1; // 월 (0부터 시작)
  const day = parseInt(dateString.slice(6, 8), 10); // 일
  const hours = parseInt(dateString.slice(8, 10), 10); // 시
  const minutes = parseInt(dateString.slice(10, 12), 10); // 분
  const seconds = parseInt(dateString.slice(12, 14), 10); // 초

  return new Date(year, month, day, hours, minutes, seconds); // Date 객체 반환
};
