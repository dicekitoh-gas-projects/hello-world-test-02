/**
 * GitHub Actions自動デプロイテスト用 Hello World
 * 作成日: 2024年11月22日
 */

function helloWorld() {
  console.log('Hello World from GitHub Actions!');
  return 'Hello World from GitHub Actions!';
}

function getCurrentTime() {
  const now = new Date();
  const timeString = Utilities.formatDate(now, 'Asia/Tokyo', 'yyyy-MM-dd HH:mm:ss');
  console.log('Current time in Japan: ' + timeString);
  return timeString;
}

function testGitHubActions() {
  const message = '🎉 Organization Secrets経由の自動デプロイが成功しました！';
  const time = getCurrentTime();
  
  console.log(message);
  console.log('デプロイ時刻: ' + time);
  console.log('Organization: dicekitoh-gas-projects');
  
  return {
    message: message,
    deployTime: time,
    organization: 'dicekitoh-gas-projects',
    status: 'success'
  };
}