const imagePerceptionKeys = {
  "01-2": 1,
  "01-4": 1,
  "01-5": 1,
  "01-7": 1,
  "01-1": -1,
  "01-3": -1,
  "01-6": -1,
  "01-8": -1,

  "02-1": 1,
  "02-3": 1,
  "02-5": 1,
  "02-6": 1,
  "02-2": -1,
  "02-4": -1,
  "02-7": -1,
  "02-8": -1,

  "03-1": 1,
  "03-3": 1,
  "03-5": 1,
  "03-6": 1,
  "03-2": -1,
  "03-4": -1,
  "03-7": -1,
  "03-8": -1,

  "04-2": 1,
  "04-5": 1,
  "04-6": 1,
  "04-8": 1,
  "04-1": -1,
  "04-3": -1,
  "04-4": -1,
  "04-7": -1,

  "05-1": 1,
  "05-4": 1,
  "05-5": 1,
  "05-8": 1,
  "05-2": -1,
  "05-3": -1,
  "05-6": -1,
  "05-7": -1,

  "06-1": 1,
  "06-3": 1,
  "06-4": 1,
  "06-6": 1,
  "06-2": -1,
  "06-5": -1,
  "06-7": -1,
  "06-8": -1,

  "07-2": 1,
  "07-4": 1,
  "07-6": 1,
  "07-7": 1,
  "07-1": -1,
  "07-3": -1,
  "07-5": -1,
  "07-8": -1,

  "08-3": 1,
  "08-5": 1,
  "08-6": 1,
  "08-8": 1,
  "08-1": -1,
  "08-2": -1,
  "08-4": -1,
  "08-7": -1,

  "09-1": 1,
  "09-3": 1,
  "09-5": 1,
  "09-8": 1,
  "09-2": -1,
  "09-4": -1,
  "09-6": -1,
  "09-7": -1,

  "10-2": 1,
  "10-3": 1,
  "10-5": 1,
  "10-7": 1,
  "10-1": -1,
  "10-4": -1,
  "10-6": -1,
  "10-8": -1,
};

/**
 * -40 <= x <= 40;
 * @returns {number} x;
 */
export function getImagePerceptionResult(answer) {
  return answer.reduce((sum, el) => {
    const res = Object.entries(el).reduce((acc, [key, val]) => {
      const temp = val * (imagePerceptionKeys[key] || 0);
      return acc + temp;
    }, 0);
    return sum + res;
  }, 0);
}

/**
 * 31 - 35 Extremely satisfied;
 * 26 - 30 Satisfied;
 * 21 - 25 Slightly satisfied;
 * 20 Neutral;
 * 15 - 19 Slightly dissatisfied;
 * 10 - 14 Dissatisfied;
 * 5 - 9 Extremely dissatisfied;
 * @returns {number};
 */
export function getSatisfactionWithLifeResult(answer) {
  return answer.reduce((sum, el) => sum + el, 0);
}

/**
 * 0 <= x <= 100;
 * @returns {number} x;
 */
export function getWellBeingIndexResult(answer) {
  return answer.reduce((sum, el) => sum + el, 0) * 4;
}

function getImagePerceptionHeart(value) {
  if (value < -10) return "❤️";
  if (value > 10) return "💚";
  return "💛";
}

function getSatisfactionWithLifeHeart(value) {
  if (value < 15) return "❤️";
  if (value > 25) return "💚";
  return "💛";
}

function getWellBeingIndexHeart(value) {
  if (value < 30) return "❤️";
  if (value > 70) return "💚";
  return "💛";
}

/**
 * Returns triple hearts
 * @returns {string}
 */
export function getHearts(answers) {
  let result = "";
  const imagePerceptionAnswer = answers["image-perception"];
  if (imagePerceptionAnswer) {
    const value = getImagePerceptionResult(imagePerceptionAnswer);
    result += getImagePerceptionHeart(value);
  }
  const satisfactionWithLifeAnswer = answers["satisfaction-with-life"];
  if (satisfactionWithLifeAnswer) {
    const value = getSatisfactionWithLifeResult(satisfactionWithLifeAnswer);
    result += getSatisfactionWithLifeHeart(value);
  }
  const wellBeingIndexAnswer = answers["well-being-index"];
  if (wellBeingIndexAnswer) {
    const value = getWellBeingIndexResult(wellBeingIndexAnswer);
    const heart = getWellBeingIndexHeart(value);
    result += heart === "❤️" ? "❤️ " : heart; // With fix
  }
  return result;
}

function getImagePerception(answers) {
  const answer = answers["image-perception"];
  return answer ? `${getImagePerceptionResult(answer)}` : "";
}

function getSatisfactionWithLife(answers) {
  const answer = answers["satisfaction-with-life"];
  return answer ? `${getSatisfactionWithLifeResult(answer)}` : "";
}

function getWellBeingIndex(answers) {
  const answer = answers["well-being-index"];
  return answer ? `${getSatisfactionWithLifeResult(answer)}` : "";
}

function getAge(answers) {
  const diversity3q = answers["diversity-3q"] || {};
  return diversity3q.age || "";
}

function getGender(answers) {
  const diversity3q = answers["diversity-3q"] || {};
  return diversity3q.gender || "";
}

function getOrigins(answers) {
  const diversity3q = answers["diversity-3q"] || {};
  return typeof diversity3q.origins === "object"
    ? Object.entries(diversity3q.origins)
        .filter(([_, value]) => value === true)
        .map(([key]) => key)
        .join(" ")
    : "";
}

function getRace(answers) {
  const diversity3q = answers["diversity-3q"] || {};
  return typeof diversity3q.race === "object"
    ? Object.entries(diversity3q.race)
        .filter(([_, value]) => value === true)
        .map(([key]) => key)
        .join(" ")
    : "";
}

function stringify([userId, userData]) {
  const {
    username = "",
    name,
    answers,
    logs,
    lang,
    phone = "",
    timestamp,
  } = userData;
  const string = [
    formatTimestamp(timestamp),
    formatTimestamp(answers.timestamp),
    getHearts(answers),
    getImagePerception(answers),
    getSatisfactionWithLife(answers),
    getWellBeingIndex(answers),
    username && "@" + username,
    name,
    userId,
    phone,
    lang,
    getAge(answers),
    getGender(answers),
    getOrigins(answers),
    getRace(answers),
    ...(logs || []).map(([t]) => formatTimestamp(t)),
  ].join(", ");
  return string;
}

export function makeCSV(data) {
  const entries = Object.entries(data);
  const withAnswers = entries.filter(([_, { answers }]) => answers);
  const sorted = withAnswers.sort(compare);
  const strings = sorted.map(stringify);
  const header =
    "CREATED, ANSWERED, HEARTS, IMG, SWL, WBI, USERNAME, NAME, USERID, PHONE, LANG, AGE, GENDER, ORIGINS, RACE, D3Q|START, INS|START, IMG1|START, IMG2|START, IMG3|START, IMG4|START, IMG5|START, IMG6|START, IMG7|START, IMG8|START, IMG9|START, IMG10|START, SWL|START, WBI|START";
  return [header, ...strings].join("\n");
}

function compare(...args) {
  const [a, b] = Array.from(args).map(
    ([
      _,
      {
        answers: { timestamp },
      },
    ]) => timestamp || 0
  );
  return b - a;
}

function formatTimestamp(timestamp) {
  return timestamp
    ? new Date(timestamp).toISOString().slice(0, 19).replace("T", " ")
    : "";
}
