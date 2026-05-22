const FLAGS = {
  "メキシコ": "🇲🇽", "南アフリカ": "🇿🇦", "韓国": "🇰🇷", "チェコ": "🇨🇿",
  "カナダ": "🇨🇦", "ボスニア・ヘルツェゴビナ": "🇧🇦", "カタール": "🇶🇦", "スイス": "🇨🇭",
  "ブラジル": "🇧🇷", "モロッコ": "🇲🇦", "ハイチ": "🇭🇹", "スコットランド": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  "アメリカ": "🇺🇸", "パラグアイ": "🇵🇾", "オーストラリア": "🇦🇺", "トルコ": "🇹🇷",
  "ドイツ": "🇩🇪", "キュラソー": "🇨🇼", "コートジボワール": "🇨🇮", "エクアドル": "🇪🇨",
  "オランダ": "🇳🇱", "日本": "🇯🇵", "スウェーデン": "🇸🇪", "チュニジア": "🇹🇳",
  "ベルギー": "🇧🇪", "エジプト": "🇪🇬", "イラン": "🇮🇷", "ニュージーランド": "🇳🇿",
  "スペイン": "🇪🇸", "カーボベルデ": "🇨🇻", "サウジアラビア": "🇸🇦", "ウルグアイ": "🇺🇾",
  "フランス": "🇫🇷", "セネガル": "🇸🇳", "イラク": "🇮🇶", "ノルウェー": "🇳🇴",
  "アルゼンチン": "🇦🇷", "アルジェリア": "🇩🇿", "オーストリア": "🇦🇹", "ヨルダン": "🇯🇴",
  "ポルトガル": "🇵🇹", "コンゴ民主共和国": "🇨🇩", "ウズベキスタン": "🇺🇿", "コロンビア": "🇨🇴",
  "イングランド": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "クロアチア": "🇭🇷", "ガーナ": "🇬🇭", "パナマ": "🇵🇦"
};

const NOTABLE_PLAYERS = {
  "メキシコ": "サンティアゴ・ヒメネス", "南アフリカ": "パーシー・タウ", "韓国": "ソン・フンミン", "チェコ": "パトリック・シック",
  "カナダ": "アルフォンソ・デイヴィス", "ボスニア・ヘルツェゴビナ": "エディン・ジェコ", "カタール": "アクラム・アフィフ", "スイス": "グラニト・ジャカ",
  "ブラジル": "ヴィニシウス・ジュニオール", "モロッコ": "アシュラフ・ハキミ", "ハイチ": "ケルビン・ラヴェレ", "スコットランド": "アンドリュー・ロバートソン",
  "アメリカ": "クリスチャン・プリシッチ", "パラグアイ": "ミゲル・アルミロン", "オーストラリア": "マシュー・ライアン", "トルコ": "アルダ・ギュレル",
  "ドイツ": "ジャマル・ムシアラ", "キュラソー": "レアンドロ・バクナ", "コートジボワール": "フランク・ケシエ", "エクアドル": "エンネル・バレンシア",
  "オランダ": "フィルヒル・ファン・ダイク", "日本": "久保建英", "スウェーデン": "アレクサンダー・イサク", "チュニジア": "エリエス・スキリ",
  "ベルギー": "ケビン・デ・ブライネ", "エジプト": "モハメド・サラー", "イラン": "メフディ・タレミ", "ニュージーランド": "クリス・ウッド",
  "スペイン": "ラミン・ヤマル", "カーボベルデ": "ガリー・ロドリゲス", "サウジアラビア": "サーレフ・アル＝シェフリ", "ウルグアイ": "フェデリコ・バルベルデ",
  "フランス": "キリアン・ムバッペ", "セネガル": "イスマイラ・サル", "イラク": "アイメン・フセイン", "ノルウェー": "エーリング・ハーランド",
  "アルゼンチン": "リオネル・メッシ", "アルジェリア": "ユセフ・アタル", "オーストリア": "マルセル・ザビツァー", "ヨルダン": "ヤザン・アル＝ナイマット",
  "ポルトガル": "ブルーノ・フェルナンデス", "コンゴ民主共和国": "シャンセル・ンベンバ", "ウズベキスタン": "エルドル・ショムロドフ", "コロンビア": "ルイス・ディアス",
  "イングランド": "ジュード・ベリンガム", "クロアチア": "ルカ・モドリッチ", "ガーナ": "モハメッド・クドゥス", "パナマ": "アダルベルト・カラスキージャ"
};

const CLUBS = {
  "メキシコ": "フェイエノールト", "南アフリカ": "アル・アハリ", "韓国": "トッテナム・ホットスパー", "チェコ": "バイヤー・レバークーゼン",
  "カナダ": "バイエルン・ミュンヘン", "ボスニア・ヘルツェゴビナ": "フェネルバフチェ", "カタール": "アル・サッド", "スイス": "バイヤー・レバークーゼン",
  "ブラジル": "レアル・マドリード", "モロッコ": "パリ・サンジェルマン", "ハイチ": "CAプログレ", "スコットランド": "リバプール",
  "アメリカ": "ACミラン", "パラグアイ": "ニューカッスル", "オーストラリア": "FCコペンハーゲン", "トルコ": "レアル・マドリード",
  "ドイツ": "バイエルン・ミュンヘン", "キュラソー": "ミドルズブラ", "コートジボワール": "アル・アハリ（サウジ）", "エクアドル": "LDUキト",
  "オランダ": "リバプール", "日本": "レアル・ソシエダ", "スウェーデン": "ニューカッスル", "チュニジア": "アイントラハト・フランクフルト",
  "ベルギー": "マンチェスター・シティ", "エジプト": "リバプール", "イラン": "インテル・ミラノ", "ニュージーランド": "ノッティンガム・フォレスト",
  "スペイン": "バルセロナ", "カーボベルデ": "ヘタフェ", "サウジアラビア": "アル・ヒラール", "ウルグアイ": "レアル・マドリード",
  "フランス": "レアル・マドリード", "セネガル": "マルセイユ", "イラク": "アル・ショルタ", "ノルウェー": "マンチェスター・シティ",
  "アルゼンチン": "インテル・マイアミ", "アルジェリア": "OGCニース", "オーストリア": "VfBシュトゥットガルト", "ヨルダン": "アル・ウェフダート",
  "ポルトガル": "マンチェスター・ユナイテッド", "コンゴ民主共和国": "マルセイユ", "ウズベキスタン": "ジェノア", "コロンビア": "リバプール",
  "イングランド": "レアル・マドリード", "クロアチア": "レアル・マドリード", "ガーナ": "ウェストハム", "パナマ": "DCユナイテッド"
};

const FIFA_RANKINGS = {
  "メキシコ": 15, "南アフリカ": 60, "韓国": 25, "チェコ": 41,
  "カナダ": 30, "ボスニア・ヘルツェゴビナ": 65, "カタール": 55, "スイス": 19,
  "ブラジル": 6, "モロッコ": 8, "ハイチ": 83, "スコットランド": 43,
  "アメリカ": 16, "パラグアイ": 40, "オーストラリア": 27, "トルコ": 22,
  "ドイツ": 10, "キュラソー": 82, "コートジボワール": 34, "エクアドル": 23,
  "オランダ": 7, "日本": 18, "スウェーデン": 38, "チュニジア": 44,
  "ベルギー": 9, "エジプト": 29, "イラン": 21, "ニュージーランド": 85,
  "スペイン": 2, "カーボベルデ": 69, "サウジアラビア": 61, "ウルグアイ": 17,
  "フランス": 1, "セネガル": 14, "イラク": 57, "ノルウェー": 31,
  "アルゼンチン": 3, "アルジェリア": 28, "オーストリア": 24, "ヨルダン": 63,
  "ポルトガル": 5, "コンゴ民主共和国": 46, "ウズベキスタン": 50, "コロンビア": 13,
  "イングランド": 4, "クロアチア": 11, "ガーナ": 74, "パナマ": 33
};

const CITY_COUNTRY = {
  "メキシコシティ": "メキシコ", "グアダラハラ": "メキシコ", "モンテレイ": "メキシコ",
  "トロント": "カナダ", "バンクーバー": "カナダ",
  "イーストラザフォード": "アメリカ", "アトランタ": "アメリカ", "ロサンゼルス": "アメリカ",
  "サンタクララ": "アメリカ", "フォックスボロ": "アメリカ", "フィラデルフィア": "アメリカ",
  "シアトル": "アメリカ", "ヒューストン": "アメリカ", "マイアミ": "アメリカ",
  "アーリントン": "アメリカ", "カンザスシティ": "アメリカ"
};

const TOURNAMENT_START = "2026-06-12";
const TOURNAMENT_END   = "2026-07-20";
const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];

let allMatches = [];
let currentDate = "";

function toDateStr(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatDateLabel(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  const wd = WEEKDAYS[date.getDay()];
  return `${y}年${m}月${d}日（${wd}）`;
}

function getInitialDate() {
  const today = toDateStr(new Date());
  if (today >= TOURNAMENT_START && today <= TOURNAMENT_END) return today;
  if (today < TOURNAMENT_START) return TOURNAMENT_START;
  return TOURNAMENT_END;
}

function daysUntil(targetDateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [y, m, d] = targetDateStr.split("-").map(Number);
  const target = new Date(y, m - 1, d);
  return Math.round((target - today) / 86400000);
}

function renderMatches(dateStr) {
  currentDate = dateStr;
  const picker   = document.getElementById("datePicker");
  const label    = document.getElementById("dateLabel");
  const grid     = document.getElementById("matchesGrid");
  const noMatch  = document.getElementById("noMatches");
  const noSub    = document.getElementById("noMatchesSub");
  const stageSummary = document.getElementById("stageSummary");

  picker.value = dateStr;
  label.textContent = formatDateLabel(dateStr);

  document.getElementById("prevBtn").disabled = (dateStr <= TOURNAMENT_START);
  document.getElementById("nextBtn").disabled = (dateStr >= TOURNAMENT_END);

  const matches = allMatches
    .filter(m => m.date === dateStr)
    .sort((a, b) => a.time.localeCompare(b.time));

  grid.innerHTML = "";
  stageSummary.innerHTML = "";

  if (matches.length === 0) {
    grid.classList.add("hidden");
    noMatch.classList.remove("hidden");

    const diff = daysUntil(TOURNAMENT_START);
    if (dateStr < TOURNAMENT_START && diff > 0) {
      noSub.textContent = `開幕まであと ${diff} 日！（現地時間 2026年6月11日開幕）`;
    } else if (dateStr > TOURNAMENT_END) {
      noSub.textContent = "大会はすでに終了しています";
    } else {
      const next = findNearestMatchDate(dateStr, 1);
      noSub.textContent = next ? `次の試合: ${formatDateLabel(next)}` : "";
    }
    return;
  }

  grid.classList.remove("hidden");
  noMatch.classList.add("hidden");

  const stages = [...new Set(matches.map(m => m.stage))];
  stages.forEach(stage => {
    const badge = document.createElement("span");
    badge.className = `stage-badge badge-${stage}`;
    badge.textContent = `${stage}${stage === "グループステージ" ? ` — ${matches.filter(m => m.stage === stage).length}試合` : ""}`;
    stageSummary.appendChild(badge);
  });

  matches.forEach(match => {
    const card = document.createElement("div");
    card.className = "match-card";
    card.dataset.stage = match.stage;

    const homeFlag    = FLAGS[match.home] || "🏳";
    const awayFlag    = FLAGS[match.away] || "🏳";
    const homeNotable = NOTABLE_PLAYERS[match.home] || "";
    const awayNotable = NOTABLE_PLAYERS[match.away] || "";
    const homeClub    = CLUBS[match.home] || "";
    const awayClub    = CLUBS[match.away] || "";
    const homeRank    = FIFA_RANKINGS[match.home];
    const awayRank    = FIFA_RANKINGS[match.away];

    const groupLabel = match.group
      ? `<span class="match-group-label">Group ${match.group} MD${match.matchday}</span>`
      : "";

    card.innerHTML = `
      <div class="match-header">
        <div class="match-time">
          ${match.time} <span class="kickoff-label">Kick Off</span>
          <span>JST</span>
        </div>
        ${groupLabel}
        <span class="match-stage-badge badge-${match.stage}">${match.stage}</span>
      </div>
      <div class="match-teams">
        <div class="team">
          <span class="team-flag">${homeFlag}</span>
          <span class="team-name">${match.home}</span>
          ${homeRank ? `<span class="team-rank">FIFAランク ${homeRank}位</span>` : ""}
          ${homeNotable ? `<span class="team-notable">注目選手：${homeNotable}${homeClub ? `（${homeClub}）` : ""}</span>` : ""}
        </div>
        <span class="vs-separator">VS</span>
        <div class="team">
          <span class="team-flag">${awayFlag}</span>
          <span class="team-name">${match.away}</span>
          ${awayRank ? `<span class="team-rank">FIFAランク ${awayRank}位</span>` : ""}
          ${awayNotable ? `<span class="team-notable">注目選手：${awayNotable}${awayClub ? `（${awayClub}）` : ""}</span>` : ""}
        </div>
      </div>
      <div class="match-footer">
        <span class="match-venue">${match.venue}（${CITY_COUNTRY[match.city] ?? ""} ${match.city}）</span>
      </div>
    `;

    grid.appendChild(card);
  });
}

function findNearestMatchDate(fromDate, direction) {
  const dates = [...new Set(allMatches.map(m => m.date))].sort();
  if (direction > 0) return dates.find(d => d > fromDate) || null;
  return [...dates].reverse().find(d => d < fromDate) || null;
}

function navigateDate(delta) {
  const [y, m, d] = currentDate.split("-").map(Number);
  const next = new Date(y, m - 1, d + delta);
  const nextStr = toDateStr(next);
  if (nextStr < TOURNAMENT_START || nextStr > TOURNAMENT_END) return;
  renderMatches(nextStr);
}

async function init() {
  try {
    const res = await fetch("data/schedule.json");
    allMatches = await res.json();
  } catch {
    document.getElementById("matchesGrid").innerHTML =
      '<p style="color:#ff6b6b;text-align:center;padding:40px">データの読み込みに失敗しました。ローカルサーバーで起動してください。</p>';
    return;
  }

  renderMatches(getInitialDate());

  document.getElementById("prevBtn").addEventListener("click", () => navigateDate(-1));
  document.getElementById("nextBtn").addEventListener("click", () => navigateDate(1));
  document.getElementById("datePicker").addEventListener("change", e => {
    const val = e.target.value;
    if (val >= TOURNAMENT_START && val <= TOURNAMENT_END) renderMatches(val);
  });
}

init();
