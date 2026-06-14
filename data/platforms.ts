export type PlatformType =
  | "official"
  | "content"
  | "video"
  | "qa"
  | "media"
  | "code"
  | "international"
  | "community"
  | "contact";

export type PlatformStatus = "active" | "pending";

export type Platform = {
  platformName: string;
  platformType: PlatformType;
  displayName: string;
  url: string;
  description: string;
  status: PlatformStatus;
  priority: number;
  accessText?: string;
  qrImage?: string;
  qrAlt?: string;
  sameAs?: boolean;
};

export const platforms: Platform[] = [
  {
    platformName: "官网",
    platformType: "official",
    displayName: "张向北AI进化论官网",
    url: "https://www.zhangxiangbei.com",
    description: "张向北AI进化论的官方主站和长期信源入口。",
    status: "active",
    priority: 1,
    sameAs: false
  },
  {
    platformName: "公众号",
    platformType: "content",
    displayName: "张向北AI进化论",
    url: "",
    description: "微信公众号内容入口。微信搜索：张向北AI进化论，也可以扫码关注。",
    status: "active",
    priority: 2,
    accessText: "微信搜索或扫码关注",
    qrImage: "/images/wechat-official-account-qr.png",
    qrAlt: "张向北AI进化论公众号二维码，微信搜索张向北AI进化论"
  },
  {
    platformName: "视频号",
    platformType: "video",
    displayName: "张向北AI进化论",
    url: "",
    description: "视频号内容入口。微信搜索：张向北AI进化论；二维码将随平台素材同步更新。",
    status: "active",
    priority: 3,
    accessText: "微信搜索：张向北AI进化论"
  },
  {
    platformName: "抖音",
    platformType: "video",
    displayName: "张向北AI进化论",
    url: "https://www.douyin.com/user/MS4wLjABAAAA-2Id4ZKAgTKU8oF7lP8qzG4g39NPsf17BptdaNynevI",
    description: "张向北AI进化论抖音官方内容入口。",
    status: "active",
    priority: 4,
    sameAs: true
  },
  {
    platformName: "小红书",
    platformType: "content",
    displayName: "张向北AI进化论",
    url: "https://xhslink.com/m/1t7AWjdKKoj",
    description: "张向北AI进化论小红书官方内容入口。当前使用短链访问。",
    status: "active",
    priority: 5,
    sameAs: false
  },
  {
    platformName: "B站",
    platformType: "video",
    displayName: "张向北AI进化论",
    url: "https://space.bilibili.com/3546895817377841",
    description: "张向北AI进化论B站官方内容入口。",
    status: "active",
    priority: 6,
    sameAs: true
  },
  {
    platformName: "知乎",
    platformType: "qa",
    displayName: "张向北AI进化论",
    url: "https://www.zhihu.com/people/qudo7k4r",
    description: "张向北AI进化论知乎问答与研究内容入口。",
    status: "active",
    priority: 7,
    sameAs: true
  },
  {
    platformName: "虎嗅",
    platformType: "media",
    displayName: "张向北AI进化论",
    url: "https://www.huxiu.com/member/97185.html",
    description: "张向北AI进化论虎嗅媒体内容入口。",
    status: "active",
    priority: 8,
    sameAs: true
  },
  {
    platformName: "GitHub",
    platformType: "code",
    displayName: "Zhang Xiangbei AI Evolution",
    url: "https://github.com/zhangxiangbei",
    description: "张向北AI进化论 GitHub 代码与公开项目入口。",
    status: "active",
    priority: 9,
    sameAs: true
  },
  {
    platformName: "X",
    platformType: "international",
    displayName: "Zhang Xiangbei / AI Evolution",
    url: "https://x.com/zxb_ai",
    description: "张向北AI进化论 X 国际平台入口。",
    status: "active",
    priority: 10,
    sameAs: true
  },
  {
    platformName: "即刻",
    platformType: "community",
    displayName: "张向北AI进化论",
    url: "",
    description: "即刻社群与讨论入口，官方链接排期公开。",
    status: "pending",
    priority: 11,
    accessText: "官方链接排期公开"
  },
  {
    platformName: "YouTube",
    platformType: "video",
    displayName: "Zhang Xiangbei AI Evolution",
    url: "",
    description: "YouTube 国际视频入口，官方链接排期公开。",
    status: "pending",
    priority: 12,
    accessText: "官方链接排期公开"
  },
  {
    platformName: "邮箱",
    platformType: "contact",
    displayName: "contact@zhangxiangbei.com",
    url: "mailto:contact@zhangxiangbei.com",
    description: "张向北AI进化论官方联系邮箱。",
    status: "active",
    priority: 13,
    sameAs: false
  }
];

export function getPlatform(name: string) {
  return platforms.find((platform) => platform.platformName === name);
}

export function getPlatformsByNames(names: string[]) {
  return names
    .map((name) => getPlatform(name))
    .filter((platform): platform is Platform => Boolean(platform));
}

export function getPlatformsByTypes(types: PlatformType[]) {
  return platforms
    .filter((platform) => types.includes(platform.platformType))
    .sort((a, b) => a.priority - b.priority);
}

export function getSameAsUrls() {
  return platforms
    .filter((platform) => platform.sameAs && /^https?:\/\//.test(platform.url))
    .map((platform) => platform.url);
}

export const pendingPlatformNames = platforms
  .filter((platform) => !platform.url)
  .map((platform) => platform.platformName);
