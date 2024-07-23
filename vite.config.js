import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { RIOT_API } from './src/apis';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  server: {
    // Proxy 설정
    proxy: {
      // 경로가 "/riot" 로 시작하는 요청을 대상으로 proxy 설정
      '/riot': {
        // 요청 전달 대상 서버 주소 설정
        target: RIOT_API,
        // 요청 헤더 host 필드 값을 대상 서버의 호스트 이름으로  변경
        changeOrigin: true,

        // SSL 인증서 검증 무시
        secure: false,
        // WebSocket 프로토콜 사용
        ws: true,
      },
    },
  },
});
