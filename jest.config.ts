import type { Config } from "jest";
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Next.js 앱의 루트 디렉토리를 지정
  dir: "./",
});

const customJestConfig: Config = {
  // jsdom을 테스트 환경으로 설정
  testEnvironment: "jest-environment-jsdom",
  // 테스트 실행 전에 설정 파일 로드
  setupFilesAfterEnv: ["./jest.setup.ts"],
  // 테스트 경로 무시 (빌드 아웃풋 및 node_modules 제외)
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  // alias 경로를 Jest가 이해하도록 설정
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|scss|sass)$": "identity-obj-proxy", // 스타일 파일 무시
  },
  // 커버리지 수집 경로
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/index.ts",
    "!src/pages/**",
    "!src/components/layout/Header.tsx",
    "!src/components/common/Spinner.tsx",
    "!src/components/todos/EmptyState.tsx",
    "!src/app/layout.tsx",
  ],
  // 테스트 결과를 더 자세히 표시
  verbose: true,
  // Jest가 처리할 파일 확장자 설정
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

module.exports = createJestConfig(customJestConfig);
