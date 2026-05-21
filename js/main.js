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
  "メキシコ": "S・ヒメネス", "南アフリカ": "P・タウ", "韓国": "ソン・フンミン", "チェコ": "P・シック",
  "カナダ": "A・デイヴィス", "ボスニア・ヘルツェゴビナ": "E・ジェコ", "カタール": "A・アフィフ", "スイス": "G・ジャカ",
  "ブラジル": "ヴィニシウス Jr.", "モロッコ": "A・ハキミ", "ハイチ": "K・ラヴェレ", "スコットランド": "A・ロバートソン",
  "アメリカ": "C・プリシッチ", "パラグアイ": "M・アルミロン", "オーストラリア": "M・ライアン", "トルコ": "A・ギュレル",
  "ドイツ": "J・ムシアラ", "キュラソー": "L・バクナ", "コートジボワール": "F・ケシエ", "エクアドル": "E・バレンシア",
  "オランダ": "V・ファン・ダイク", "日本": "久保建英", "スウェーデン": "A・イサク", "チュニジア": "E・スキリ",
  "ベルギー": "K・デ・ブライネ", "エジプト": "M・サラー", "イラン": "M・タレミ", "ニュージーランド": "C・ウッド",
  "スペイン": "L・ヤマル", "カーボベルデ": "G・ロドリゲス", "サウジアラビア": "S・アル・シェフリ", "ウルグアイ": "F・バルベルデ",
  "フランス": "K・ムバッペ", "セネガル": "I・サル", "イラク": "A・フセイン", "ノルウェー": "E・ハーランド",
  "アルゼンチン": "L・メッシ", "アルジェリア": "Y・アタル", "オーストリア": "M・ザビツァー", "ヨルダン": "Y・アル・ナイマット",
  "ポルトガル": "B・フェルナンデス", "コンゴ民主共和国": "C・ンベンバ", "ウズベキスタン": "E・ショムロドフ", "コロンビア": "L・ディアス",
  "イングランド": "J・ベリンガム", "クロアチア": "L・モドリッチ", "ガーナ": "M・クドゥス", "パナマ": "A・カラスキージャ"
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

    const groupLabel = match.group
      ? `<span class="match-group-label">Group ${match.group} MD${match.matchday}</span>`
      : "";

    card.innerHTML = `
      <div class="match-header">
        <div class="match-time">
          ${match.time}
          <span>JST</span>
        </div>
        ${groupLabel}
        <span class="match-stage-badge badge-${match.stage}">${match.stage}</span>
      </div>
      <div class="match-teams">
        <div class="team">
          <span class="team-flag">${homeFlag}</span>
          <span class="team-name">${match.home}</span>
          ${homeNotable ? `<span class="team-notable">⭐ ${homeNotable}</span>` : ""}
        </div>
        <span class="vs-separator">VS</span>
        <div class="team">
          <span class="team-flag">${awayFlag}</span>
          <span class="team-name">${match.away}</span>
          ${awayNotable ? `<span class="team-notable">⭐ ${awayNotable}</span>` : ""}
        </div>
      </div>
      <div class="match-footer">
        <span class="match-venue">${match.venue}（${match.city}）</span>
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
