import VkProvider from "next-auth/providers/vk";
import YandexProvider from "next-auth/providers/yandex";
import { AuthOptions } from "next-auth";
import { privateConfig } from "@/shared/config/private";
import { compact } from "lodash-es";

export const nextAuthConfig: AuthOptions = {
  providers: compact([
    privateConfig.VK_CLIENT_ID &&
      privateConfig.VK_CLIENT_SECRET &&
      VkProvider({
        clientId: privateConfig.VK_CLIENT_ID,
        clientSecret: privateConfig.VK_CLIENT_SECRET,
      }),
    privateConfig.YANDEX_CLIENT_ID &&
      privateConfig.YANDEX_CLIENT_SECRET &&
      YandexProvider({
        clientId: privateConfig.YANDEX_CLIENT_ID,
        clientSecret: privateConfig.YANDEX_CLIENT_SECRET,
      }),
  ]),
};
