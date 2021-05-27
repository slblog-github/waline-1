import type { SidebarConfig } from '@vuepress/theme-default';

export const getSidebar = (lang, titles): SidebarConfig =>
  [
    [
      lang + '/get-started.md',
      lang + '/intro.md',
      lang + '/syntax.md',
      lang + '/ecosystem.md',
    ],
    [lang + '/client/basic.md', lang + '/server/basic.md'],
    [
      lang + '/server/notification.md',
      lang + '/server/socials.md',
      lang + '/client/count.md',
      lang + '/client/visitor.md',
      lang + '/client/emoji.md',
      lang + '/client/i18n.md',
      lang + '/client/avatar.md',
      lang + '/client/style.md',
      lang + '/client/recentcomment.md',
    ],
    [
      lang + '/migration.md',
      lang + '/server/databases.md',
      !lang ? '/server/cloudbase.md' : undefined,
      lang + '/server/vps-deploy.md',
      lang + '/contribution.md',
      lang + '/api.md',
      lang + '/faq.md',
    ].filter((v) => v),
  ].map((item, index) => ({
    isGroup: true,
    text: titles[index],
    children: item,
  }));
