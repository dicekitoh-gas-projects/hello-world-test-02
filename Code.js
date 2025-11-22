/**
 * Hello World Test 02 - 完全自動作成テスト
 * 作成日: 2024年11月22日
 * プロジェクト: GitHub Actions × GAS 自動化実証
 */

function main() {
  console.log("🚀 Hello World Test 02 実行開始");
  
  const message = hello();
  const timestamp = getCurrentTime();
  
  console.log(`✅ 実行完了: ${timestamp}`);
  console.log(`📨 結果: ${message}`);
  
  return {
    status: "success",
    message: message,
    timestamp: timestamp,
    project: "Hello World Test 02",
    automation: "GitHub Actions + Claude Code"
  };
}

function hello() {
  const greeting = "🎉 Hello World from 完全自動化システム！";
  
  console.log(greeting);
  Logger.log(greeting);
  
  return greeting;
}

function getCurrentTime() {
  const now = new Date();
  const timeString = Utilities.formatDate(now, 'Asia/Tokyo', 'yyyy-MM-dd HH:mm:ss');
  console.log('実行時刻（日本時間）: ' + timeString);
  return timeString;
}

function test() {
  console.log("🧪 自動デプロイテスト実行");
  
  try {
    const result = main();
    console.log("✅ テスト成功:", JSON.stringify(result, null, 2));
    return result;
  } catch (error) {
    console.error("❌ テストエラー:", error);
    throw error;
  }
}