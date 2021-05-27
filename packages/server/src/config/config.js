const {
  JWT_TOKEN,
  LEAN_KEY,
  MYSQL_DB,
  MYSQL_PASSWORD,
  SQLITE_PATH,
  PG_DB,
  PG_PASSWORD,
  MONGO_DB,
  MONGO_PASSWORD,
  FORBIDDEN_WORDS,
  TCB_ENV,
  TENCENTCLOUD_SECRETKEY,
  TCB_KEY,
  SECURE_DOMAINS,
  DISABLE_USERAGENT,
  AVATAR_PROXY,
  GITHUB_TOKEN,

  MARKDOWN_HIGHLIGHT,
  MARKDOWN_EMOJI,
  MARKDOWN_SUB,
  MARKDOWN_SUP,
  MARKDOWN_TEX,

  MAIL_SUBJECT,
  MAIL_TEMPLATE,
  MAIL_SUBJECT_ADMIN,
  MAIL_TEMPLATE_ADMIN,
  QQ_TEMPLATE,
  TG_TEMPLATE,
} = process.env;

let storage = 'leancloud';
let jwtKey = JWT_TOKEN || LEAN_KEY;

if (LEAN_KEY) {
  storage = 'leancloud';
} else if (MONGO_DB) {
  storage = 'mongodb';
  jwtKey = jwtKey || MONGO_PASSWORD;
} else if (PG_DB) {
  storage = 'postgresql';
  jwtKey = jwtKey || PG_PASSWORD;
} else if (SQLITE_PATH) {
  storage = 'mysql';
} else if (MYSQL_DB) {
  storage = 'mysql';
  jwtKey = jwtKey || MYSQL_PASSWORD;
} else if (GITHUB_TOKEN) {
  storage = 'github';
  jwtKey = jwtKey || GITHUB_TOKEN;
} else if (think.env === 'cloudbase' || TCB_ENV) {
  storage = 'cloudbase';
  jwtKey = jwtKey || TENCENTCLOUD_SECRETKEY || TCB_KEY || TCB_ENV;
}

if (think.env === 'cloudbase' && storage === 'sqlite') {
  throw new Error("You can't use SQLite in CloudBase platform.");
}

const forbiddenWords = FORBIDDEN_WORDS ? FORBIDDEN_WORDS.split(/\s*,\s*/) : [];

const isFalse = (content) => content && content.toLowerCase() === 'false';

const markdown = {
  config: {},
  plugin: {
    emoji: !isFalse(MARKDOWN_EMOJI),
    sub: !isFalse(MARKDOWN_SUB),
    sup: !isFalse(MARKDOWN_SUP),
    tex: !isFalse(MARKDOWN_TEX),
  },
};

if (isFalse(MARKDOWN_HIGHLIGHT)) markdown.config.highlight = false;

module.exports = {
  workers: 1,
  storage,
  jwtKey,
  forbiddenWords,
  disallowIPList: [],
  secureDomains: SECURE_DOMAINS ? SECURE_DOMAINS.split(/\s*,\s*/) : undefined,
  disableUserAgent:
    DISABLE_USERAGENT &&
    !['0', 'false'].includes(DISABLE_USERAGENT.toLowerCase()),
  avatarProxy: AVATAR_PROXY || 'https://avatar.75cdn.workers.dev/',

  markdown,

  mailSubject: MAIL_SUBJECT,
  mailTemplate: MAIL_TEMPLATE,
  mailSubjectAdmin: MAIL_SUBJECT_ADMIN,
  mailTemplateAdmin: MAIL_TEMPLATE_ADMIN,
  QQTemplate: QQ_TEMPLATE,
  TGTemplate: TG_TEMPLATE,
};
